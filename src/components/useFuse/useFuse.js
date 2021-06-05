import { useMemo, useState } from 'react';
import Fuse from 'fuse.js';

/**
 * An unified Fuse implementation for optimization and reuse purposes method.
 * @param {Array<Object>} list - The index to create fuse search engine. 
 * @param {{limit: number, matchAllOnEmptyQuery: boolean}} options - rest of keys are part of fuse documentation.
 * @param {string} keyword  - Optional parameter if you want to initialize useFuse with a query.
 * @param {{key: boolean}} filtersToApply Object with the key value as the filter's name.
 * @returns {{results:Array<Object>, onSearch: Function, query: string, setQuery: Function, setFilters: Function, onSelectFilter: Function, filtersSelected:Array<string>}}
 */
export const useFuse = ( list, options, keyword="", filtersToApply={} ) => {
    // defining our query state in there directly
    const [ query, setQuery ] = useState( keyword );
    const [ filters, setFilters ] = useState( filtersToApply );
    let filtersSelected = Object.keys( filters );
    // removing custom options from Fuse options object
    // "limit" is a fuse.search option
    const { limit, matchAllOnEmptyQuery, ...fuseOptions } = options;

    /**
     * @const fuse - fuse object to pass the query and perform the search.
     */
    const fuse = useMemo(
        () => new Fuse( list, fuseOptions ),
        [ list, fuseOptions ]
    );


    const results = useMemo(
        // If query is empty and `matchAllOnEmptyQuery` is `true` then return all list
        // Remap the results to match the return structure of `fuse.search()`
        () => {
            if (!query && matchAllOnEmptyQuery) {
                return fuse.getIndex().docs.slice( 0, limit ).map(( item, refIndex ) => ({ item, refIndex }))
            } else if ( query && filtersSelected.length === 0 ) {
                return fuse.search( query );
            } else if ( !query && filtersSelected.length > 0 ) {
                return fuse.search({ $and: [{ tags: `'${ filtersSelected.join(" '") }` }] });
            }
            else {
                return fuse.search({ $and: [{ tags: `'${ filtersSelected.join(" '") }` }], query })
            }
        },
        [ fuse, limit, matchAllOnEmptyQuery, query, filtersSelected ]
    );


    /**
     * @param {boolean} selected
     * @param {string} label
     * filters are an object to prevent a loop every time the user change a filter.
     */
    const onSelectFilter = ( selected, label ) => {
        if ( selected ) {
            let { [ label ]: remove, ...newFilter } = filters;

            setFilters( newFilter );
            filtersSelected = Object.keys( newFilter );
        }
        else {
            let newFilter = {
                ...filters,
                [label]: true
            };
            setFilters( newFilter );
            filtersSelected = Object.keys( newFilter );
        };
    };


    const onSearch =( (e) => setQuery( e.target.value ) );


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