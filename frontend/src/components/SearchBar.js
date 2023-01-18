import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Col } from 'react-bootstrap';
import { useState } from 'react';

function SearchBar() {
  
  const [players, setPlayers] = useState([]);

  const getPlayers = () => {
    fetch(process.env.REACT_APP_SERVER_URL + 'search')
    .then(response => response.json())
    .then(data => {
      console.log(data.data);
    })
  }
  
  return (
      <div>
        <button onClick={getPlayers}>Show all the players</button>
        <div>
          {players}
        </div>
      </div>
    );
  }
  
  
  // return (
  //     <Container>
  //       <Col s={6} className='mt-6'>
  //           <InputGroup className="mb-3">
  //               <Form.Control
  //               placeholder="Search for a player"
  //               aria-label="Search for a player"
  //               aria-describedby="basic-addon2"
  //               />
  //               <Button variant="outline-secondary" id="button-addon2">
  //               Search
  //               </Button>
  //         </InputGroup>
  //       </Col>
  //     </Container>
  //   );
  // }
  
  export default SearchBar;