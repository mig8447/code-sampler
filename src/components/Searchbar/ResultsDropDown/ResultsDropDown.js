import Style from '../../../styles/ResultsDropDown.module.css';
import Link from 'next/link';

const ResultsDropDown = ({ results, query, active, setActive }) => (
    <div
        className={["bg-white", Style.resultsDropDown, "scroll", query && results.length && active ? Style.resultsDropDownActive : ""].join(" ")}
    >
        <ul>
            {results.map(result =>
                <li key={result.item.id} className="mb-3 mr-3">
                    <strong onClick={() => setActive(false)} className={"text-capitalize"}>
                        <Link href={`/${result.item.id}`} >{result.item.title}</Link>
                    </strong>
                    <p className="mb-0">{result.item.description}</p>
                </li>


            )}
        </ul>
    </div>
)


export default ResultsDropDown;