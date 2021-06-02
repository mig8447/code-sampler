import { Container, InputGroup, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

/**
 * Render the LanguageFilter compnent
 * @param {!Object} props
 * @param {!string} props.query
 * @param {!Function} props.setQuery
 */
const LanguageFilter = ({ query, setQuery }) => (
    <Container className={"d-flex justify-content-center"} >
        <InputGroup className={"my-2"}>
            <FormControl
                className={"border-right-0"}
                placeholder="Filter languages"
                aria-label="Search"
                value={query}
                onChange={setQuery}
                role="textbox"
            />
            <InputGroup.Append>
                <InputGroup.Text className={"bg-white border-left-0"}>
                    <span className="fa fa-search fa-sm" aria-hidden="true"></span>
                </InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>

    </Container>
)

LanguageFilter.propTypes = {
    string: PropTypes.string.isRequired,
    setQuery: PropTypes.func.isRequired
};


export default LanguageFilter;