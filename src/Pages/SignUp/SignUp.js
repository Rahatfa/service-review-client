import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './SignUp.css';


const SignUp = () => {

    const {createUser}= useContext(AuthContext)

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email= form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(err => console.error(err))
    }

    return (
        <div className='signUp'>
            <p>SignUp</p>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Form.Text className="text-muted p-3">
                        <Link to="/login"> Do You Have account? Login </Link>
                </Form.Text>
                <br />
                
                <Button  variant="primary" type="submit">
                    SignUp
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;