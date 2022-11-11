import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './AllCards.css'
import { Link } from 'react-router-dom';

const AllCards = ({card}) => {
    
    const {_id, image, title, description, price}= card;
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
                    <Link to={`/ClassDetails/${_id}`}>
                        <Button variant="primary">Buy Now</Button>
                    </Link>
                </Card.Body>
                
            </Card>
        </div>
    );
};

export default AllCards;