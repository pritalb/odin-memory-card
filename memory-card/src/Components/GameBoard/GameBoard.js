import React, { useState } from 'react';
import './GameBoard.css';
import Card from '../Card/Card.js';

const GameBoard = () => {
    const [cardsArray, setCardsArray] = useState([
        <Card cardName="Space Ishtar" cardImageSource="/Assets/Images/spaceIshtar.jpg" />,
        <Card cardName="Mashu Kyrielight" cardImageSource="/Assets/Images/mash.jpg" />,
        <Card cardName="Musashi Miyamoto" cardImageSource="/Assets/Images/musashi.jpg" />,
        <Card cardName="Ushiwakamaru" cardImageSource="/Assets/Images/ushi.png" />,
        <Card cardName="Anastasia" cardImageSource="/Assets/Images/anastasia.jpg" />,
        <Card cardName="Quetzalcoatl" cardImageSource="/Assets/Images/quetzalcoatl.jpg" />,
        <Card cardName="BB" cardImageSource="/Assets/Images/bb.jpg" />,
        <Card cardName="Artoria Caster" cardImageSource="/Assets/Images/artoria caster.jpg" />,
        <Card cardName="Morgan Le Fae" cardImageSource="/Assets/Images/morgan.jpg" />,
        <Card cardName="Ereshkigal" cardImageSource="/Assets/Images/ereshkigal.jpg" />,
    ]);

    return (
        <div id='game-board'>
            <div className='game-board-ui'>
                <div className='game-chances'> Chances: 3 </div>
                <div className='game-instructions'> Find the correct card! </div>
                <div className='game-score'> Score: 0 </div>
            </div>

            <div>
                <div className='target-card-container'>
                <Card cardName="Space Ishtar" cardImageSource="/Assets/Images/spaceIshtar.jpg"/>
                </div>
                <div className='game-play-area'>
                    { cardsArray }
                </div>
            </div>
        </div>
    )
}

export default GameBoard;