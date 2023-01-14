import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Spinner from '../Shared/Spinner/Spinner';
import './Login.css';

const Login = () => 
{
    const navigate = useNavigate();
    const navigation = useNavigation();

    const {login} = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        login(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/home')
        })
        .catch(error => console.log(error));
    }
    if(navigation.state === "loading"){
        return <Spinner></Spinner>
      }

    return (
        <div className='login'>
            <p>Login</p>
            <Form onSubmit={handleSubmit}>
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
                        <Link to="/signUp"> Didn't Register? Sign up</Link>
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