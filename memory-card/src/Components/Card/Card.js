import React from 'react';

const Card = ({cardName, cardImageSource}) => {
    return (
        <div className='card'>
            <div className='card-name'> { cardName } </div>
            <div>
                <img className='card-image' src={cardImageSource} /> 
            </div>
        </div>
    );
};

export default Card;