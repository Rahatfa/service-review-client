import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ClasseCards.css'

const ClasseCards = ({classe}) => {
    const {image, title, description}=classe;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='card-img' variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {description.slice(0,42)}
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
                
            </Card>
        </div>
    );
};

export default ClasseCards;
