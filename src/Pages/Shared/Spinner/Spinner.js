import React from 'react';
import { Rings } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className='text-center'>
            <div class="text-center">
                <div class="spinner-grow text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-warning" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-info" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-light" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Spinner;
