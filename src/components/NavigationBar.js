import React from 'react';
import { useState } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa'; 
import { FaMediumM } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {
    
        const [expanded, setExpanded] = useState(false);

        return (
            <Navbar className="nav-bar" expand="lg" expanded={expanded}>
                <NavLink className="navbar-brand" activeClassName="underline" exact to="/"><strong>|DC|</strong></NavLink>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}/>
                <NavbarCollapse>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} onClick={() => setExpanded(expanded ? false : "expanded")} activeClassName="underline" exact to="/portfolio">PORTFOLIO</Nav.Link>
                        <br></br>
                        <Nav.Link as={Link} onClick={() => setExpanded(expanded ? false : "expanded")} activeClassName="underline" exact to="/resume">RESUME</Nav.Link>
                        <br></br>
                        <Nav.Link as={Link} onClick={() => setExpanded(expanded ? false : "expanded")} activeClassName="underline" exact to="/about">ABOUT</Nav.Link>
                    </Nav>
                    <Navbar.Brand className="navbar-brand" href="https://github.com/dcoppage86"><FaGithub size={28}/></Navbar.Brand>
                    <Navbar.Brand className="navbar-brand" href="https://www.linkedin.com/in/dkc86"><FaLinkedin size={28}/></Navbar.Brand>
                    <Navbar.Brand className="navbar-brand" href="www.linkedin.com/in/dkc86"><FaTwitter size={28}/></Navbar.Brand>
                    <Navbar.Brand className="navbar-brand" href="https://dakotakcoppage.medium.com/"><FaMediumM size={28}/></Navbar.Brand>
                </NavbarCollapse>
            </Navbar>
        );
}


export default NavigationBar;

