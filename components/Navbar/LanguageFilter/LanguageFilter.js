import { Container, InputGroup, FormControl } from 'react-bootstrap';


const LanguageFilter = ({ query, setQuery, onSearch }) => (
    <Container className={"d-flex justify-content-center"} >
        <InputGroup className={"p-2 "}>
            <FormControl
                className={"border-0"}
                placeholder="Filter languages"
                aria-label="Search"
                value={query}
                onChange={setQuery}
            />
            <InputGroup.Append>
                <InputGroup.Text className={"bg-white border-0"}>
                    <span className="fa fa-search fa-sm" aria-hidden="true"></span>
                </InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>

    </Container>
)


export default LanguageFilter;