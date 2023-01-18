import { Navbar, Container } from "react-bootstrap";

function Navigationbar() {
  return (
    <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">LeGM</Navbar.Brand>
        </Container>
    </Navbar>
  );

}

export default Navigationbar;