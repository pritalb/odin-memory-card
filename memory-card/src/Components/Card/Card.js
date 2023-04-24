import React, { useState, useEffect } from 'react';
import './Card.css';

const Card = ({cardName, cardImageSource, isClickable, isFlippedAtStart}) => {
    const [isCardFlipped, setIsCardFlipped] = useState(true);

    useEffect(() => {
        // if(!isFlippedAtStart) {
        //     setIsCardFlipped(false);
        // }

        // if(isClickable === undefined) {
        //     isClickable = true;
        // }
        flipCard(4000);
    }, [])

    const flipCard = (timeout) => {
        setIsCardFlipped(true);
    
        setTimeout(() => {
            setIsCardFlipped(false);
        }, timeout);
    }

    const onClick = (e) => {
        // if (isClickable) {
            console.log("clicked");
            flipCard(2500)
        // }
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