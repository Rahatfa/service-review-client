import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import AllCards from './AllCards';

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        fetch('https://fit-with-rahat-server.vercel.app/classes')
        .then (res=> res.json())
        .then(data => setCards(data))

    },[])
    
    // const {image, title, description, price}= classe;
   
    return (
        <div className='row'> 
            <h1>classe : {cards.length}</h1>
            {
                cards.map(card=> 
                <AllCards 
                key={cards.key}
                card={card}
                ></AllCards>
                
                )
            }
            {/* <Card >
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
                
            </Card> */}
            
        </div>
    );
};

export default Cards;