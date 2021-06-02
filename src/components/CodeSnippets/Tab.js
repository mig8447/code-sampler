import PropTypes from 'prop-types';

/**
 * Render the Tab component
 * @param {!Object} props
 * @param {!boolean} props.isSelected - State to display selected tab if true.
 * @param {!Object} props.children - Contained children inside component.
 */
const Tab = ({isSelected, children}) => {
    if(isSelected){
        return (
            <div>
                { children }
            </div>
        );
    }
    return null;
}

Tab.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    isSelected: PropTypes.bool.isRequired
};

export default Tab;