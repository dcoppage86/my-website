import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const NavigationBar = () => {
    return (
        <Navbar className="nav-bar">
            <Navbar.Brand href="#home">Dakota Coppage</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#resume">Resume</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavigationBar;
