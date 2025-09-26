import './Game.css';

import React from 'react';
import { useState, useRef } from 'react';

const Game = ({ 
    verifyLetter, 
    pickedWord, 
    pickedCategory, 
    letters, 
    normalizedLetters,
    guessedLetters, 
    wrongLetters, 
    guesses, 
    score,
    checkWordGuess,
    skipWord,
    timeLeft
}) => {
    const [letter, setLetter] = useState("");
    const [wordGuess, setWordGuess] = useState("");
    const [showWordInput, setShowWordInput] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const letterInputRef = useRef(null);
    const wordInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        verifyLetter(letter);
        setLetter("");

        letterInputRef.current.focus();
    }

    const handleWordGuess = (e) => {
        e.preventDefault();
        
        const result = checkWordGuess(wordGuess);
        setIsCorrect(result);
        setShowResult(true);
        
        // Resetar após mostrar resultado
        setTimeout(() => {
            setShowResult(false);
            setShowWordInput(false);
            setWordGuess("");
        }, 2000);
    };

    const showWordGuessInput = () => {
        setShowWordInput(true);
        setTimeout(() => {
            if (wordInputRef.current) {
                wordInputRef.current.focus();
            }
        }, 100);
    };
    const cancelWordGuess = () => {
        setShowWordInput(false);
        setWordGuess("");
        if (letterInputRef.current) {
            letterInputRef.current.focus();
        }
    };

    return (
        <div className='game'>
            {/* Sidebar de letras erradas */}
            <div className='wrongLettersContainer'>
                <p>Letras já utilizadas:</p>
                <div className='letters-grid'>
                    {wrongLetters.map((letter, i) => (
                        <span key={i}>{letter}</span>
                    ))}
                    {wrongLetters.length === 0 && (
                        <span style={{color: '#bdc3c7', background: 'transparent', border: 'none', boxShadow: 'none'}}>
                            Nenhuma ainda
                        </span>
                    )}
                </div>
            </div>

            {/* Conteúdo principal */}
            <div className='game-main-content'>
                <div className='game-info'>
                    <p className='points'>
                        <span>Pontuação: {score}</span>
                    </p>
                    <p className={`timer ${timeLeft <= 10 ? 'timer-warning' : ''}`}>
                        <span>⏰ Tempo: {timeLeft}s</span>
                    </p>
                </div>
                <h1>Adivinhe a palavra:</h1>
                <h3 className='tip'>
                    Dica: <span>{pickedCategory}</span>
                </h3>
                <p>Você tem {guesses} tentativas restantes</p>
                <div className='wordContainer'>
                    {letters.map((letter, i) => {
                        if (letter === ' ') {
                            return <span key={i} className='spaceSquare'></span>;
                        }
                        else if (letter === '-') {
                            return <span key={i} className='letter'>{letter}</span>;
                        }
                        else if (guessedLetters.includes(normalizedLetters[i])) {
                            return <span key={i} className='letter'>{letter}</span>;
                        }
                        else {
                            return <span key={i} className='blankSquare'></span>;
                        }
                    })}
                </div>

                {!showWordInput && !showResult && (
                    <div className='gameControls'>
                        <div className='letterContainer'>
                            <p>Tente adivinhar uma letra da palavra:</p>
                            <form onSubmit={handleSubmit}>
                                <input 
                                    type='text' 
                                    maxLength={1} 
                                    required 
                                    onChange={(e) => setLetter(e.target.value)}
                                    value={letter}
                                    ref={letterInputRef}
                                />
                                <button type="submit">Verificar Letra!</button>
                            </form>
                        </div>
                        
                        <div className='wordGuessButton'>
                            <button onClick={showWordGuessInput} className='try-word-button'>
                                🎯 Tentar Palavra Completa
                            </button>
                            <button onClick={skipWord} className='skip-word-button'>
                                ⏭️ Pular Palavra (-50 pontos)
                            </button>
                        </div>
                    </div>
                )}

                {showWordInput && !showResult && (
                    <div className='wordGuessContainer'>
                        <p>Digite a palavra completa e ganhe mais pontos!</p>
                        <form onSubmit={handleWordGuess}>
                            <input 
                                type='text' 
                                value={wordGuess}
                                onChange={(e) => setWordGuess(e.target.value)}
                                placeholder="Digite a palavra completa..."
                                className='word-guess-input'
                                ref={wordInputRef}
                            />
                            <div className='word-guess-buttons'>
                                <button type="submit">Confirmar Palavra!</button>
                                <button type="button" onClick={cancelWordGuess} className='cancel-button'>Cancelar</button>
                            </div>
                        </form>
                    </div>
                )}

                {showResult && (
                    <div className='word-result-container'>
                        {isCorrect ? (
                            <div className='correct-word-result'>
                                <h3>🎉 Parabéns! Você acertou a palavra!</h3>
                                <p>Palavra: <strong>{pickedWord}</strong></p>
                            </div>
                        ) : (
                            <div className='wrong-word-result'>
                                <h3>❌ Não foi dessa vez!</h3>
                                <p>Continue tentando letra por letra...</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Game;