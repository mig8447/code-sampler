import { Container, InputGroup, FormControl } from 'react-bootstrap';


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


export default LanguageFilter;