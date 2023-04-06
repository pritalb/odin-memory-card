import React from 'react';
import './Card.css';

const Card = ({cardName, cardImageSource}) => {
    return (
        <div className='card'>
            <div className='card-image-container'>
                <img className='card-image' src={cardImageSource} /> 
            </div>
            <div className='card-name'> { cardName } </div>
        </div>
    );
};

export default Card;