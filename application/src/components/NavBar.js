/**
 * Navbar component
 * 
 * 
 * @author Cristian Mitoi
 */

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/kf6012/assessment/application/">Play 2022</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/kf6012/assessment/application/">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="documentation">Documentation</Nav.Link>
              <NavDropdown title="Papers" id="basic-nav-dropdown">
              <NavDropdown.Item href="Interactivity">Interactivity</NavDropdown.Item>
              <NavDropdown.Item href="fullpapers">Fullpapers</NavDropdown.Item>
              <NavDropdown.Item href="wip">Wip</NavDropdown.Item>
              <NavDropdown.Item href="competition">Competition</NavDropdown.Item>
              <NavDropdown.Item href="doctoral">Doctoral</NavDropdown.Item>
              <NavDropdown.Item href="rapid">Rapid</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link href="admin">Admin</Nav.Link>
                </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  

export default NavBar;