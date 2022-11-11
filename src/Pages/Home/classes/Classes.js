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
        fetch('http://localhost:5000/classes')
        .then (res=> res.json())
        .then(data => setClasses(data))

    },[])


    return (
        <div>
            <div>
                {/* <h3 className='text-white'>Classes</h3> */}
            </div>
            <div className='cards'>
                
                {
                    classes.slice(0,3).map(classe => <ClasseCards
                        key={classe.key}
                        classe={classe}
                    
                    ></ClasseCards>)

                }
                <div>
                    <Button  className='btn-details'> <Link to= '/classes'> More Classes </Link> </Button>
                </div>
            </div>
            
        </div>
    );
};

export default Classes;