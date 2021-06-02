import PropTypes from 'prop-types';
import style from '../../styles/Tabs.module.css';
/**
 * Renders the Tabs component
 * @param  {!Object} props
 * @param  {!Object} props.children - Contained children objects.
 * @param  {!Array} props.labels - List of language labels to display through tabs.
 * @param  {string} props.selected - String of the actual language label selected.
 * @param  {!Function} props.setSelected - Function that sets the actual language label.
 */
const Tabs = ({ children, labels, selected, setSelected }) => {
    return (
        <div>
            <ul className={style.tabsMenu} role="list">
                {
                    labels.map(tab => {
                        const active = (tab === selected ? style.active : '');
                        return (
                            <li role="listitem"
                                key={tab}
                                onClick={() => setSelected(tab)} className={`${style.tabsLabel} ${active}`}>
                                <button onClick={() => setSelected(tab)} tabIndex="0" role="button" style={{ "backgroundColor": "transparent", "border": "0", "padding": "0" }}>
                                    <a style={{ fontSize: ".9rem" }}>
                                        {tab}
                                    </a>
                                </button>
                            </li>
                        );
                    })
                }
            </ul>
            { children }
        </div>
    )
}

Tabs.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    labels: PropTypes.array.isRequired,
    selected: PropTypes.string,
    setSelected: PropTypes.func.isRequired
};

export default Tabs;
