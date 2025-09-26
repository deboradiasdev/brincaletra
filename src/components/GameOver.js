import './GameOver.css';

import React, { useEffect, useState } from 'react';

const GameOver = ({ retry, score, pickedWord }) => {
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        if (score > 500) {
            setShowConfetti(true);
            const timer = setTimeout(() => {
                setShowConfetti(false);
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [score]);

    const createConfetti = () => {
        const confettiElements = [];
        for (let i = 0; i < 50; i++) {
            confettiElements.push(
                <div
                    key={i}
                    className="confetti"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`
                    }}
                />
            );
        }
        return confettiElements;
    };

    return (
        <div className='gameover'>
            {showConfetti && (
                <div className="confetti-container">
                    {createConfetti()}
                </div>
            )}
            
            <div className="gameover-content">
                <h1>Fim de Jogo!</h1>
                
                {score > 500 ? (
                    <div className="high-score-message">
                        <h2 className="celebration">🎉 PARABÉNS! 🎉</h2>
                        <p className="achievement">Você alcançou uma pontuação incrível!</p>
                    </div>
                ) : (
                    <div className="regular-message">
                        <h2>Que pena! Você não conseguiu adivinhar a palavra.</h2>
                    </div>
                )}
                
                <div className="score-display">
                    <h3>Sua pontuação: <span className="score-number">{score}</span></h3>
                </div>
                
                <div className="word-reveal">
                    <p>A palavra era:</p>
                    <div className="revealed-word">{pickedWord}</div>
                </div>

                <button onClick={retry} className="play-again-btn">
                    🎮 Jogar Novamente!
                </button>
            </div>
        </div>
    )
}

export default GameOver;
