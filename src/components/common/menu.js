import React from 'react'
import {Navbar, Container, Offcanvas, Nav, NavDropdown} from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa';

const Menu = () => {
    return (
        <div> 
        <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#"><FaUserCircle /></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">MCGA</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/gestionar">Gestionar</Nav.Link>
                <Nav.Link href="/alta">Contacto</Nav.Link>
                <Nav.Link href="#action2">Salir</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
    )
}

export default Menu