import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../assets/profile.jpg';
import './Home.css'
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className='profile'>
                        <div className='position-relative'>
                            <img src={img} alt="" className='img-fluid' />
                        </div>
                        <div>
                            <div className='profile-p'>
                                <p>It's Rahat. Personal trainer. 
                                    <br />
                                    Feel free to contact me. <br />
                                </p> 

                                <Button variant="dark">Contact Me</Button>

                            </div>
                                
                        </div>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h2>Home 2</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;