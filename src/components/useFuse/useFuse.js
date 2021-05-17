// features/useFuse.js
import Fuse from 'fuse.js';
import { useMemo, useState } from 'react';


export const useFuse = (list, options, keyword="",filtersToApply={}) => {
    // defining our query state in there directly
    const [query, setQuery] = useState(keyword);
    const [filters, setFilters] = useState(filtersToApply);
    let filtersSelected = Object.keys(filters);
    // removing custom options from Fuse options object
    // NOTE: `limit` is actually a `fuse.search` option, but we merge all options for convenience
    const { limit, matchAllOnEmptyQuery, ...fuseOptions } = options;

    // let's memoize the fuse instance for performances
    const fuse = useMemo(
        () => new Fuse(list, fuseOptions),
        [list, fuseOptions]
    );

    // memoize results whenever the query or options change
    const results = useMemo(
        // if query is empty and `matchAllOnEmptyQuery` is `true` then return all list
        // NOTE: we remap the results to match the return structure of `fuse.search()`
        () => {
            if (!query && matchAllOnEmptyQuery) {
                return fuse.getIndex().docs.slice(0, limit).map((item, refIndex) => ({ item, refIndex }))
            } else if (query && filtersSelected.length === 0) {
                return fuse.search(query);
            } else if (!query && filtersSelected.length > 0) {
                return fuse.search({ $and: [{ tags: `'${filtersSelected.join(" '")}` }] });
            }
            else {
                return fuse.search({ $and: [{ tags: `'${filtersSelected.join(" '")}` }], query })
            }
        },
        [fuse, limit, matchAllOnEmptyQuery, query, filtersSelected]
    );


    const onSelectFilter = (selected, label) => {
        if (selected) {
            let { [label]: remove, ...newFilter } = filters;

            setFilters(newFilter);
            filtersSelected = Object.keys(newFilter);
        }
        else {
            let newFilter = {
                ...filters,
                [label]: true
            };
            setFilters(newFilter);
            filtersSelected = Object.keys(newFilter);
        }
    }

    // pass a handling helper to speed up implementation
    const onSearch =((e) => setQuery(e.target.value));



    // still returning `setQuery` for custom handler implementations
    return {
        results,
        onSearch,
        query,
        setQuery,
        setFilters,
        filters,
        onSelectFilter,
        filtersSelected
    };
};