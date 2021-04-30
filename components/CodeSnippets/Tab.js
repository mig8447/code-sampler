import PropTypes from 'prop-types';

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