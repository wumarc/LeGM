import { Navbar, Container } from "react-bootstrap";

// Estimated % of source code written by me in this component: 100%
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