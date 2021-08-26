import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa'; 
import { FaMediumM } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';



const NavigationBar = () => {
    return (
        <Navbar className="nav-bar">
            <NavLink className="navbar-brand" activeClassName="underline" exact to="/"><strong>|DC|</strong></NavLink>
            <Nav className="me-auto">
                <Nav.Link as={Link} activeClassName="underline" exact to="/portfolio">PORTFOLIO</Nav.Link>
                <br></br>
                <Nav.Link as={Link} activeClassName="underline" exact to="/resume">RESUME</Nav.Link>
            </Nav>
            <Navbar.Brand className="navbar-brand" href="https://github.com/dcoppage86"><FaGithub size={28}/></Navbar.Brand>
            <Navbar.Brand className="navbar-brand" href="https://www.linkedin.com/in/dkc86"><FaLinkedin size={28}/></Navbar.Brand>
            <Navbar.Brand className="navbar-brand" href="www.linkedin.com/in/dkc86"><FaTwitter size={28}/></Navbar.Brand>
            <Navbar.Brand className="navbar-brand" href="https://dakotakcoppage.medium.com/"><FaMediumM size={28}/></Navbar.Brand>
        </Navbar>
    );
}

export default NavigationBar;
