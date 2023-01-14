import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/logo.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footerMain'>
            {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
            </Navbar> */}
            <div class="card text-center bg-black text-white">
                <div class="card-header">
                <img className='logo' src={logo} alt="" /><br />
                    @ Train with Rahat 
                </div>
                <div class="card-body">
                  <h5 class="card-title">Special Training Available</h5>
                  <p class="card-text">With MY help you will build your dream body.</p>
                  
                </div>
                <div class="card-footer text-muted">
                  {/* 2 days ago */}
                </div>
            </  div>
        </div>
    );
};

export default Footer;