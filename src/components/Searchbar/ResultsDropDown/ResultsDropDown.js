import PropTypes from 'prop-types';
import Link from 'next/link';

import Style from '../../../styles/ResultsDropDown.module.css';

/**
 * Render the ResultsDropDown component.
 * @param {Object} props 
 * @param {!Objet} props.results - The results for the search done.
 * @param {!string} props.query - Search done or keyword.
 * @param {!boolean} props.active - Indicate if the component is currently active shown.
 * @param {!Function} props.setActive - Function bring from the state active to change if shown.
 */
const ResultsDropDown = ({ results, query, active, setActive }) => (
    <div
        className={[ "bg-white", Style.resultsDropDown, "scroll", query && results.length && active ? Style.resultsDropDownActive : "" ].join(" ")}
    >
        <ul>
            { results.map( result =>
                <li key={ result.item.id } className="mb-3 mr-3">
                    <strong onClick={ () => setActive( false ) } className={ "text-capitalize" }>
                        <Link href={ `/${ result.item.id }` }>{ result.item.title }</Link>
                    </strong>
                    <p className="mb-0">{ result.item.description }</p>
                </li>
            ) }
        </ul>
    </div>
);

ResultsDropDown.propTypes = {
    results: PropTypes.any.isRequired,
    query: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
};

export default ResultsDropDown;