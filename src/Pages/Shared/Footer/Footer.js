import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/logo.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footerMain'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className='footer-main'>
                    <Navbar.Brand href="#home">
                        <img className='logo' src={logo} alt="" />
                        <p>Train with Rahat</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="#pricing">Blogs</Nav.Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                    <div className="policy">
                        &copy; <em id="date"></em>2022 Train with Rahat
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;