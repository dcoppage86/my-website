import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa'; 
import { FaMediumM } from 'react-icons/fa';


const NavigationBar = () => {
    return (
        <Navbar className="nav-bar">
            <Navbar.Brand href="#home"><strong>|DC|</strong></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#resume">Resume</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Navbar.Brand className="github" href="https://github.com/dcoppage86"><FaGithub size={28}/></Navbar.Brand>
            <Navbar.Brand className="linked-in" href="https://www.linkedin.com/in/dkc86"><FaLinkedin size={28}/></Navbar.Brand>
            <Navbar.Brand className="twitter" href="www.linkedin.com/in/dkc86"><FaTwitter size={28}/></Navbar.Brand>
            <Navbar.Brand className="medium" href="https://dakotakcoppage.medium.com/"><FaMediumM size={28}/></Navbar.Brand>
        </Navbar>
    );
}

export default NavigationBar;
