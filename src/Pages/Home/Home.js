import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img from '../../assets/profile.jpg';
import './Home.css'
import Button from 'react-bootstrap/Button';
import Classes from './classes/Classes';
import photo from '../../assets/weight.jpg';
import photo1 from '../../assets/time.jpg';

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
                    <div>

                        <Classes></Classes>
                    </div>
                </Col>
            </Row>
            <br />
            <div>
                
            <Card>
                <Card.Body>
                  <Card.Text>
                    <h1>Why choose Us?</h1>
                  <div class="row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card">
                        <div>
                            <img src={photo1} alt="" className='img-fluid' style={{ height: '8rem' }} />
                        </div>
                      <div class="card-body">
                        <h5 class="card-title">24/7 Call service</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="card">
                    <div>
                            <img src={photo} alt="" className='img-fluid' style={{ height: '8rem' }} />
                        </div>
                      <div class="card-body">
                        <h5 class="card-title">Best Friendly trainer</h5>
                      </div>
                    </div>
                  </div>
                </div>
                  </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </Container>
    );
};

export default Home;