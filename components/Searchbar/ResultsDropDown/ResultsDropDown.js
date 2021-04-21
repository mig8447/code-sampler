import Style from '../../../styles/ResultsDropDown.module.css';
import Link from 'next/link';

const ResultsDropDown = ({results, query, active}) => (
    <div
        className={["bg-white", Style.resultsDropDown, "scroll", query && results.length && active ? Style.resultsDropDownActive : ""].join(" ")}
    >
        <ul>
            {results.map(result =>
                <li key={result.id} className="mb-3 mr-3">
                    <strong className={"text-capitalize"}><Link href={`/${result.id}`} >{result.title}</Link></strong>
                    <p className="mb-0">{result.description}</p>
                </li>)}
        </ul>
    </div>
)


export default ResultsDropDown;