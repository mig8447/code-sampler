import PropTypes from 'prop-types';
import style from '../styles/Tabs.module.css';

const Tabs = ({ children, tabs, selected, setSelected}) => {
    
    return (
        <div>
            <ul className={style.tabsMenu}>
                {
                    tabs.map(tab => {
                        const active = (tab === selected ? style.active : '');

                        return (
                            <li key={ tab }>
                                <a className = {`${style.tabsLabel} ${active}`} onClick={() => setSelected(tab)} >
                                    { tab }
                                </a>
                            </li>
                        );

                    })
                }
            </ul>
            { children}
        </div>
    )

}


Tabs.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    tabs: PropTypes.array.isRequired,
    selected: PropTypes.string,
    setSelected: PropTypes.func.isRequired
};

export default Tabs;
