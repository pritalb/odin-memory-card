import React, { useState } from 'react';
import './GameBoard.css';
import Card from '../Card/Card.js';

const GameBoard = () => {
    const [cardsArray, setCardsArray] = useState([
        <Card cardName="Space Ishtar" cardImageSource="/Assets/Images/spaceIshtar.jpg" />,
        <Card cardName="Mashu Kyrielight" cardImageSource="/Assets/Images/mash.jpg" />,
        <Card cardName="Mashu Kyrielight" cardImageSource="/Assets/Images/mash.jpg" />,
        <Card cardName="Mashu Kyrielight" cardImageSource="/Assets/Images/mash.jpg" />,
        <Card cardName="Mashu Kyrielight" cardImageSource="/Assets/Images/mash.jpg" />,
        <Card cardName="Mashu Kyrielight" cardImageSource="/Assets/Images/mash.jpg" />,
        <Card cardName="Mashu Kyrielight" cardImageSource="/Assets/Images/mash.jpg" />,
        <Card cardName="Mashu Kyrielight" cardImageSource="/Assets/Images/mash.jpg" />,
        <Card cardName="Mashu Kyrielight" cardImageSource="/Assets/Images/mash.jpg" />,
        <Card cardName="Mashu Kyrielight" cardImageSource="/Assets/Images/mash.jpg" />,
    ]);

    return (
        <div id='game-board'>
            <div className='game-board-ui'>
                <div className='game-chances'> Chances: 3 </div>
                <div className='game-instructions'> Do not click on the same card twice! </div>
                <div className='game-score'> Score: 0 </div>
            </div>

            <div className='game-play-area'>
                { cardsArray }
            </div>
        </div>
    )
}

export default GameBoard;