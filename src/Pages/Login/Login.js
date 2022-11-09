import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';

const Login = () => {

    const handleLogin = event =>{
        event.preventDefault()
    }

    return (
        <div className='login'>
            <p>Login</p>
            <Form onSubmit={handleLogin}>
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
                        <a href="/signUp"> Didn't Register? Sign up</a>
                </Form.Text>
                <br />
                
                <Button  variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;