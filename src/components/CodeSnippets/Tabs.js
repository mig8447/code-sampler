import PropTypes from 'prop-types';
import style from '../../styles/Tabs.module.css';

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
                                <button onClick={() => setSelected(tab)} tabIndex="0" role="button" style={{ "background-color": "transparent", "border": "0", "padding": "0" }}>
                                    <a style={{ fontSize: "1rem" }}>
                                        {tab}
                                    </a>
                                </button>

                            </li>
                        );

                    })
                }
            </ul>
            { children }
        </div >
    )

}


Tabs.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    labels: PropTypes.array.isRequired,
    selected: PropTypes.string,
    setSelected: PropTypes.func.isRequired
};

export default Tabs;
