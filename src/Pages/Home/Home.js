import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../assets/profile.jpg';
import './Home.css'
import Button from 'react-bootstrap/Button';
import Classes from './classes/Classes';

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
                                <p>It's <span>Rahat</span>. Personal trainer. 
                                    <br />
                                    Feel free to contact me. <br />
                                </p> 

                                <Button variant="light">Contact Me</Button>

                            </div>
                                
                        </div>
                    </div>
                </Col>
                <Col>
                    <Classes></Classes>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;