import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './AllCards.css'

const AllCards = ({card}) => {
    
    const {image, title, description, price}= card;
    return (
        <div className='all-cards'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='card-img' variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {description.slice(0,42)}
                    </Card.Text>
                    <Card.Text>
                        Price:${price}
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
                
            </Card>
        </div>
    );
};

export default AllCards;