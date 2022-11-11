import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ClassDetails = () => {
    
    const cardDetails = useLoaderData();
    return (
        <div>
            <h2>{cardDetails.title}</h2>
        </div>
    );
};

export default ClassDetails;