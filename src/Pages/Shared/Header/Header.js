import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/logo.jpg';
import './Header.css';




const Header = () => {
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className='nab-main'>
                    <Navbar.Brand href="#home">
                        <img className='logo' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Services</Nav.Link>
                        <Nav.Link href="#pricing">Blogs</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Log In</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                        Sign Up
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
        </div>
    );
};

export default Header;