import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Comparator from './Comparator';

function Results() {
  
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState('');

  const getPlayers = async () => {
    await fetch(process.env.REACT_APP_SERVER_URL + 'search' + '?name=' + playerName)
    .then(response => response.json())
    .then(data => {setPlayers(data.data)}) // pass the data to Comparator after this
    .catch(error => console.log(error));
  }
  
  return (
      <Container>
        <Row className="justify-content-md-center">
          <Col s={6} className='mt-6'>
            <InputGroup className="mb-3">
              <Form.Control
                onChange={(e) => {
                  setPlayerName(e.target.value);
                }}
                placeholder="Search for a player" 
                aria-label="Search for a player" 
                aria-describedby="basic-addon2"
              />
              <Button
                onClick={getPlayers}
                variant="outline-secondary" 
                id="button-addon2"
              >
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Comparator playersList={players}/>
        </Row>
      </Container>
    );
  }
  
  export default Results;