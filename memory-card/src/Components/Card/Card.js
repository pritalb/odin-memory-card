import React from 'react';
import './Card.css';

const Card = ({cardName, cardImageSource}) => {
    const onClick = () => {
        console.log("clicked");
    }

    return (
        <div className='card' onClick={onClick}>
            <div className='card-front'>
                <div className='card-front-image-container'>
                    <img src='/Assets/Images/FGOMagicCircle.png' className='card-front-logo'/>
                </div>
                <div className='card-front-text'>
                    Fate/Grand Order
                </div>
            </div>
            <div className='card-back'>
                <div className='card-image-container'>
                    <img className='card-image' src={cardImageSource} /> 
                </div>
                <div className='card-name'> { cardName } </div>
            </div>
        </div>
    );
};

export default Card;