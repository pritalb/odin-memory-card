import React, { useState } from 'react';
import './Card.css';

const Card = ({cardName, cardImageSource}) => {
    const [isCardFlipped, setIsCardFlipped] = useState(false);

    const onClick = () => {
        console.log("clicked");
        setIsCardFlipped(true);

        setTimeout(() => {
            setIsCardFlipped(false);
        }, 2500);
    }

    return (
        <div className={isCardFlipped ? 'card flipped' : 'card'} onClick={onClick}>
            <div className='card-sides-container'>
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
        </div>
    );
};

export default Card;