import React from 'react'
import {Navbar, Container, Offcanvas, Nav} from 'react-bootstrap'
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
            placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">MCGA</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/gestionar">Gestionar</Nav.Link>
                <Nav.Link href="/contacto">Contacto</Nav.Link>
                <Nav.Link href="#action2">Salir</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
    )
}

export default Menu