import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import ClasseCards from './ClasseCards';
import './Classes.css'

const Classes = () => {

    
    const [classes, setClasses] = useState([]);

    useEffect(()=>{
        fetch('https://fit-with-rahat-server.vercel.app/classes')
        .then (res=> res.json())
        .then(data => setClasses(data))

    },[])


    return (
        <div>
            <div>
                <div>
                    <h3 className='text-white'>Classes</h3>
                </div>
                <div className='classesCards'>
                    
                    <div className='more-c'>
                        {
                             classes.slice(0,3).map(classe => <ClasseCards
                                key={classe.key}
                                classe={classe}
                            
                        
                                ></ClasseCards>)

                        }
                        <div>
                        <Button  variant='light' className='btn-details'> <Link to= '/cards'> More Classes </Link> </Button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Classes;