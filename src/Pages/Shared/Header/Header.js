import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
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
                        <Link to='/home' href="#features">Home</Link>
                        <Link to='/classe' href="#pricing">Classe</Link>
                        <Link to='/Blogs' href="#pricing">Blogs</Link>
                        
                    </Nav>
                    <Nav>
                        <Link to='/login'>Login</Link>
                        <Link to='/signUp' eventKey={2} href="#memes">
                        Sign Up
                        </Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
        </div>
    );
};

export default Header;