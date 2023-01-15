import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddService.css'
const AddService = () => {
    return (
        <div>
            <Form className='width'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="number" name='Contact Number' placeholder="Contact Number" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Class Name</Form.Label>
                    <Form.Control type="text" name='Class Name' placeholder="Class Name" required/>
                </Form.Group>
                <Form.Text className="text-muted p-3">
                        {/* <Link to="/signUp"> Didn't Register? Sign up</Link> */}
                </Form.Text>
                <br />
                
                <Button  variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddService;