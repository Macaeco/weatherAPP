import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';






function WeatherCard() {
  return (
    <Container>
      <Row>
        <Col xl={12}>
          <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">      
            <Nav className="me-auto my-2 my-lg-0 d-flex
 justify-content-between" navbarScroll> 
            {/* <Col mg={4}> */}
                   
                <Nav.Link href="#action1">Clima</Nav.Link>
                <Nav.Link href="#action2">Favoritos</Nav.Link>
                <Nav.Link href="#action2">Tipos</Nav.Link>
                <Nav.Link href="#action2">Temporada</Nav.Link>
                {/* </Col> */}
            </Nav>         
              <Form className="d-flex">
                <FormControl type="search" placeholder="Buscar"className="me-2" aria-label="Search"/>
              
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default WeatherCard;


