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
            isClickable: true,
            // isFlippedAtStart: true,
        },
        {
            name: "Mashu Kyrielight",
            image: "/Assets/Images/mash.jpg" ,
            canBeFlipped: true,
            isClickable: true,
        },
        {
            name: "Musashi Miyamoto",
            image: "/Assets/Images/musashi.jpg",
            canBeFlipped: true,
            isClickable: true,
        },
        {
            name: "Ushiwakamaru",
            image: "/Assets/Images/ushi.png",
            canBeFlipped: true,
            isClickable: true,
        },
        {
            name: "Anastasia",
            image: "/Assets/Images/anastasia.jpg",
            canBeFlipped: true,
            isClickable: true,
        },
        {
            name: "Quetzalcoatl",
            image: "/Assets/Images/quetzalcoatl.jpg",
            canBeFlipped: true,
            isClickable: true,
        },
        {
            name: "BB",
            image: "/Assets/Images/bb.jpg",
            canBeFlipped: true,
            isClickable: true,
        },
        {
            name: "Artoria Caster",
            image: "/Assets/Images/artoria caster.jpg",
            canBeFlipped: true,
            isClickable: true,
        },
        {
            name: "Morgan le Fae",
            image: "/Assets/Images/morgan.jpg",
            canBeFlipped: true,
            isClickable: true,
        },
        {
            name: "Ereshkigal",
            image: "/Assets/Images/ereshkigal.jpg",
            canBeFlipped: true,
            isClickable: true,
        },
    ])

    const [targetCard, setTargetCard] = useState(cardsArray[3]);
    const [clickedCardName, setClickedCardName] = useState("");
    const [gameOn, setGameOn] = useState(false);

    const startGame = () => {
        setGameOn(true);
    }

    const stopGame = () => {
        setGameOn(false);
    }

    return (
        <div id='game-board'>
            <div className='game-board-ui'>
                <div className='game-chances'> Chances: 3 </div>
                <div className='game-instructions'> Find the correct card! </div>
                <div className='game-score'> Score: 0 </div>
            </div>
            {
                gameOn 
                ?
                    <div>
                        <div className='target-card-container'>
                            <Card cardName={targetCard.name} cardImageSource={targetCard.image} canBeFlipped={false} isClickable={false}/>
                        </div>
                        <div className='game-play-area'>
                            { cardsArray.map((card) => {
                                return <Card cardName={card.name} cardImageSource={card.image} canBeFlipped={card.canBeFlipped} isClickable={card.isClickable}/>;
                            })}
                        </div>
                    </div>
                :
                    <div>
                        <button onClick={startGame}> Start Game </button>
                    </div>
            }
        </div>
    )
}

export default GameBoard;