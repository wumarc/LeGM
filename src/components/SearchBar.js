import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function SearchBar() {
    return (
        <InputGroup className="mb-3">
            <Form.Control
            placeholder="Search for a player"
            aria-label="Search for a player"
            aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
            Search
            </Button>
      </InputGroup>
    );
  }
  
  export default SearchBar;