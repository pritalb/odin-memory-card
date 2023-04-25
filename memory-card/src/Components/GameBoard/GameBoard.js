import React, { useState } from 'react';
import './GameBoard.css';
import Card from '../Card/Card.js';

const GameBoard = () => {
    // const [cardsArray, setCardsArray] = useState([
    //     <Card cardName="Space Ishtar" cardImageSource="/Assets/Images/spaceIshtar.jpg" />,
    //     <Card cardName="Mashu Kyrielight" cardImageSource="/Assets/Images/mash.jpg" />,
    //     <Card cardName="Musashi Miyamoto" cardImageSource="/Assets/Images/musashi.jpg" />,
    //     <Card cardName="Ushiwakamaru" cardImageSource="/Assets/Images/ushi.png" />,
    //     <Card cardName="Anastasia" cardImageSource="/Assets/Images/anastasia.jpg" />,
    //     <Card cardName="Quetzalcoatl" cardImageSource="/Assets/Images/quetzalcoatl.jpg" />,
    //     <Card cardName="BB" cardImageSource="/Assets/Images/bb.jpg" />,
    //     <Card cardName="Artoria Caster" cardImageSource="/Assets/Images/artoria caster.jpg" />,
    //     <Card cardName="Morgan Le Fae" cardImageSource="/Assets/Images/morgan.jpg" />,
    //     <Card cardName="Ereshkigal" cardImageSource="/Assets/Images/ereshkigal.jpg" />,
    // ]);

    const [cardsArray, setCardsArray] = useState([
        {
            name: "Space Ishtar",
            image: "/Assets/Images/spaceIshtar.jpg",
            canBeFlipped: true,
            // isFlippedAtStart: true,
        },
        {
            name: "Mashu Kyrielight",
            image: "/Assets/Images/mash.jpg" ,
            canBeFlipped: true,
        },
        {
            name: "Musashi Miyamoto",
            image: "/Assets/Images/musashi.jpg",
            canBeFlipped: true,
        },
        {
            name: "Ushiwakamaru",
            image: "/Assets/Images/ushi.png",
            canBeFlipped: true,
        },
        {
            name: "Anastasia",
            image: "/Assets/Images/anastasia.jpg",
            canBeFlipped: true,
        },
        {
            name: "Quetzalcoatl",
            image: "/Assets/Images/quetzalcoatl.jpg",
            canBeFlipped: true,
        },
        {
            name: "BB",
            image: "/Assets/Images/bb.jpg",
            canBeFlipped: true,
        },
        {
            name: "Artoria Caster",
            image: "/Assets/Images/artoria caster.jpg",
            canBeFlipped: true,
        },
        {
            name: "Morgan le Fae",
            image: "/Assets/Images/morgan.jpg",
            canBeFlipped: true,
        },
        {
            name: "Ereshkigal",
            image: "/Assets/Images/ereshkigal.jpg",
            canBeFlipped: true,
        },
    ])

    const [targetCard, setTargetCard] = useState(cardsArray[3]);

    return (
        <div id='game-board'>
            <div className='game-board-ui'>
                <div className='game-chances'> Chances: 3 </div>
                <div className='game-instructions'> Find the correct card! </div>
                <div className='game-score'> Score: 0 </div>
            </div>

            <div>
                <div className='target-card-container'>
                    <Card cardName={targetCard.name} cardImageSource={targetCard.image} canBeFlipped={false}/>
                </div>
                <div className='game-play-area'>
                    { cardsArray.map((card) => {
                        return <Card cardName={card.name} cardImageSource={card.image} canBeFlipped={card.canBeFlipped}/>;
                    })}
                </div>
            </div>
        </div>
    )
}

export default GameBoard;