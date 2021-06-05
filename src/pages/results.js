import { Row, Container, Card, Badge, ListGroup, Pagination } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import AlertNotification from '../components/UI/AlertNotification';
import { useFuse } from '../components/useFuse/useFuse';
import PostCard from '../components/PostCard/PostCard';
import { searchIndex } from '../search/search-index';
import Style from '../styles/results.module.css';
import Tags from '../components/UI/Tags';

/**
 * Render the results page - where the result for the posts cards will be displayed.
 */
const Results = () => {
    const router = useRouter();
/**
 * @constant {Object} favorites - Current favorite posts information saved on your local storage.
 */
    const [favorites, setFavorites] = useState( process.browser ? JSON.parse( localStorage.getItem( "favorites" ) ) : {} );

/**
 * @constant {!number} currentPage - Number of page you are currently on.
 */
    const [currentPage, setCurrentPage] = useState( 0 );
    
    const { results, query, setQuery, setFilters, filtersSelected } = useFuse( searchIndex, {
        includeScore: true,
        keys: [ 'title', 'description', 'tags', 'id' ],
        matchAllOnEmptyQuery: false,
    });
/**
 * @constant {!number} resultsPerPage - Constant of the number of results per page. 
 */
    const resultsPerPage = 3;
    const totalPages = Math.ceil( results.length / resultsPerPage );

    useEffect(() => {
        let [ keyword, filtersToApply ] = getURLParams();
        setQuery( keyword );
        setFilters( filtersToApply );

    }, [ router.query.keyword, router.query.filters ]);

/**
 * Function for increasing or decreasing page within the limits, from 0 to totalPages-1.
 * @typedef {Function} pageHandler
 * @param {!number} sumToPage - Variable to sum current page.
 */
    const pageHandler = sumToPage => {
        const page = currentPage + sumToPage;

        if ( page >= 0 && page < totalPages ) {
            setCurrentPage( page );
        };
    }
/**
 * Alert states to map, notification.
 * @constant {!Array<string>} alerts - State list of strings alerts.
 */
    const [ alerts, setAlerts ] = useState([]);

/**
 * Function for add an alert.
 * @typedef {Function} addAlert
 * @param {!string} description - String that will be displayed in he alert.
 */
    const addAlert = ( description ) => {
        let tempAlerts = alerts;
        const newAlerts = [ ...tempAlerts, description ];
        setAlerts( newAlerts );
    };

/**
 * Function that obtains the params of the URL and returns the values.
 * @typedef {Function} getURLParams
 * @returns {Array<!string | !Object>} Array with the keyword in the first index and the filters.
 * - keyword - String to be search.
 * - filters - Object with the filter as key and a boolean as value. 
 */
    function getURLParams() {
        let keyword = router.query.keyword;
        let filters = router.query.filters;
        if ( typeof ( filters ) === "string" ) {
            filters = { [ filters ]: true }
        }
        else if ( typeof ( filters ) === "object" ) {
            filters = filters.reduce(( obj, filter ) => ( obj[filter] = true, obj ), {});
        } else {
            filters = {};
        };
        return [ keyword, filters ];
    };

/**
 * Function for delete an element form favorites.
 * @typedef {Function} deleteKeyFromObject
 * @param {!number} key - Variable key to accessed and deleted.
 */
    const deleteKeyFromObject = key => {
        const { [ key ]: tmp, ...rest } = favorites;
        setFavorites( rest );
        localStorage.setItem( "favorites", JSON.stringify(rest) );
    }

/**
 * Function that controls the click of an element to delete it or add it to favorites.
 * @typedef {Function} onClickFavorite
 * @param  {!string} action - Action that will be executed.
 * @param  {!string} filename - Name of the element.
 * @param  {!Object} metaData - Metadata of the element.
 */
    const onClickFavorite = ( action, filename, metaData ) => {
        if ( action === "delete" ) {
            deleteKeyFromObject( filename );
            addAlert( "Bookmark removed successfully!" );
        } else if ( action === "add" ) {
            let newFavorites = { ...favorites };
            newFavorites[ filename ] = {
                ...metaData
            };
            setFavorites( newFavorites );
            localStorage.setItem( "favorites", JSON.stringify(newFavorites) );
            addAlert( "Bookmark added successfully!" );
        };
    };


    return (
        <>
            <Container>
                <h3 className={ Style.title }>Results for:</h3>
                <h4 className={ Style.title }>{query ? `Found ${ results.length } results for "${ query }"` : ""}</h4>
                { <Tags tags={filtersSelected} /> }

                <Row className={[ "d-flex", "flex-column", Style.results ].join(" ") }>
                    {
                        results.length > 0 ?
                            results.slice( currentPage * resultsPerPage, (currentPage * resultsPerPage) + resultsPerPage ).map( result => (
                                <PostCard
                                    key={ result.item.id }
                                    filename={ result.item.id }
                                    title={ result.item.title }
                                    description={ result.item.description }
                                    tags={ result.item.tags }
                                    onClickFavorite={ onClickFavorite }
                                    favorite={ favorites && favorites[ result.item.id ] ? true : false }
                                />
                            ))
                            :
                            <p>Your search did not match any document 🙁</p>
                    }
                </Row>
                { totalPages > 1 ? <Row className={ "d-flex justify-content-center mt-3" }>
                    <Pagination>
                        <Pagination.Prev onClick={ () => pageHandler(-1) } />
                        <Pagination.Item disabled>{ currentPage + 1 }</Pagination.Item>
                        <Pagination.Next onClick={ () => pageHandler(1) } />
                    </Pagination>
                </Row> : "" }
            </Container>

            <div style={{ "position": "fixed", "top": "4rem", "right": "2rem" }}>
                { alerts ? alerts.map((desc, key) => <AlertNotification key={ key } description={ desc } />) : "" }
            </div>
        </>
    );
};

export default Results;