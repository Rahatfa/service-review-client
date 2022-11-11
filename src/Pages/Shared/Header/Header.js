import React from 'react';
import { Button } from 'react-bootstrap';
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
                        <p>Train with Rahat</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/home' href="#features">Home</Link>
                        <Link to='/cards' href="#pricing">Classes</Link>
                        <Link to='/Blog' href="#pricing">Blog</Link>
                        
                    </Nav>
                    <Nav>
                        <Button className='me-2' variant="outline-success">Login with Google</Button>
                        <Button variant="outline-dark"><Link to='/login' className='m-2'>Login</Link></Button>
                        <Button variant="outline-dark"><Link to='/signUp'>
                        Sign Up
                        </Link></Button>
                        
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
        </div>
    );
};

export default Header;