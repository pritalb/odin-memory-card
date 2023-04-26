import React, { useEffect, useState } from 'react';
import './GameBoard.css';
import Card from '../Card/Card.js';

const GameBoard = () => {
    const [cardsArray, setCardsArray] = useState([
        {
            name: "Space Ishtar",
            image: "/Assets/Images/spaceIshtar.jpg",
            canBeFlipped: true,
            isClickable: true,
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
    const [score, setScore] = useState(0);
    const [chances, setChances] = useState(3);

    useEffect(() => {
        if (gameOn) {
            compareCards();
        }
    }, [clickedCardName])

    const startGame = () => {
        setGameOn(true);
    }

    const stopGame = () => {
        console.log(`Game Over! your score is ${score}`);
        setChances(3);
        setScore(0);
        setGameOn(false);
    }

    const compareCards = () => {
        if (clickedCardName === targetCard.name) {
            correctCard();
        } else {
            wrongCard();
        }
    }

    const correctCard = () => {
        console.log("correct");
        setScore(score + 1);
    }

    const wrongCard = () => {
        console.log("wrong");
        setChances(chances - 1);
        if (chances <= 0) {
            stopGame();
            return;
        }
    }

    return (
        <div id='game-board'>
            <div className='game-board-ui'>
                <div className='game-chances'> Chances: {chances} </div>
                <div className='game-instructions'> Find the correct card! </div>
                <div className='game-score'> Score: {score} </div>
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
                                return <Card cardName={card.name}
                                             cardImageSource={card.image}
                                             canBeFlipped={card.canBeFlipped} 
                                             isClickable={card.isClickable} 
                                             setClickedCardName={setClickedCardName}/>;
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