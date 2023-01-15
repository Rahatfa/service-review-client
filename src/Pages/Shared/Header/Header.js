import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpg';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css';




const Header = () => {

    const {providerLogin, user, logOut} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleLogOut = () => {
        logOut()
        .then (() => {})
        .catch(error=> console.error(error))
      }

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch (error => console.error(error))

    }
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
                        <Link to='/home' href="#features" class="text-decoration-none">Home</Link>
                        <Link to='/cards' href="#pricing" class="text-decoration-none">Classes</Link>
                        <Link to='/Blog' href="#pricing" class="text-decoration-none">Blog</Link>
                        
                    </Nav>
                    <Nav>
                        {
                            user?.uid ?
                            <>
                                <span className='me-2'> {user?.displayName}</span>
                                <Button className='me-2' variant="outline-light">My Reviews</Button>
                                <Button variant="outline-light"><Link to='/addService' href="#" class="text-decoration-none">Add Service</Link></Button>
                                <Button className='ms-2' variant="outline-light" onClick={handleLogOut}>Log Out</Button>
                            </>
                        
                        :
                            <>
                                <Button onClick={handleGoogleSignIn} className='me-2' variant="outline-success">Login with Google</Button>
                                <Button variant="outline-dark"><Link to='/login' className='m-2'>Login</Link></Button>
                                <Button variant="outline-dark"><Link to='/signUp'> Sign Up </Link></Button>
                            </>
                        }   
                        
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
        </div>
    );
};

export default Header;