import { Navbar, Container } from "react-bootstrap";

function Navigationbar() {
  return (
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">LeGM</Navbar.Brand>
        </Container>
    </Navbar>
  );
}

export default Navigationbar;