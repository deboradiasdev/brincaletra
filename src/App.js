import './App.css';

import { useCallback, useEffect, useState } from 'react';

import {wordsList} from './data/words.js';

import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);
  const [normalizedLetters, setNormalizedLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(6);
  const [score, setScore] = useState(0);

  const normalizeString = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };



  const pickedWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category = 
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category);

    const word = 
      words[category][Math.floor(Math.random() * words[category].length)];

    console.log(word);

    return {word, category};
  }, [words]);

  const startGame = useCallback(() => {
    clearLetterStates();
    setGuesses(6);
    const {word, category} = pickedWordAndCategory();

    let wordLetters = word.split('');
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    let normalizedWordLetters = wordLetters.map((l) => normalizeString(l));

    console.log(word, category);
    console.log(wordLetters);
    console.log('Normalized:', normalizedWordLetters);

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setNormalizedLetters(normalizedWordLetters);

    setGameStage(stages[1].name)
  }, [pickedWordAndCategory]);

  const verifyLetter = (letter) => {
    const normalizedLetter = normalizeString(letter.toLowerCase());

    if (guessedLetters.includes(normalizedLetter) || 
        wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    if (normalizedLetters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessLetters) => [
        ...actualGuessLetters,
        normalizedLetter
      ]);

      setScore((actualScore) => actualScore + 5);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ]);
    }

    setGuesses((actualGuesses) => actualGuesses - 1);
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  const checkFinalWord = (guessedWord) => {
    const normalizedGuess = normalizeString(guessedWord.toLowerCase().trim());
    const normalizedPickedWord = normalizeString(pickedWord.toLowerCase());
    
    const isCorrect = normalizedGuess === normalizedPickedWord;
    
    if (isCorrect) {
      setScore((actualScore) => actualScore + 50);
      
      setTimeout(() => {
        startGame();
      }, 2500);
    }
    
    return isCorrect;
  };

  const checkWordGuess = (guessedWord) => {
    const normalizedGuess = normalizeString(guessedWord.toLowerCase().trim());
    const normalizedPickedWord = normalizeString(pickedWord.toLowerCase());
    
    const isCorrect = normalizedGuess === normalizedPickedWord;
    
    if (isCorrect) {
      setScore((actualScore) => actualScore + 125);
      
      setTimeout(() => {
        startGame();
      }, 2000);
    }
    
    return isCorrect;
  };

  useEffect(() => {
    if (guesses <= 0) {

      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    if(guessedLetters.length === uniqueLetters.length) {
      setScore((actualScore) => (actualScore += 100))
      startGame();
    }

  }, [guessedLetters, letters, startGame]);

  const retry = () => {
    setScore(0);
    setGuesses(6);

    setGameStage(stages[0].name)
  };

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && (
        <Game
        verifyLetter={verifyLetter} 
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        normalizedLetters={normalizedLetters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
        checkWordGuess={checkWordGuess}
        />
      )}
      {gameStage === 'end' && (
        <GameOver 
          retry={retry} 
          score={score} 
          pickedWord={pickedWord}
          checkFinalWord={checkFinalWord}
        />
      )}
    </div>
  );
}

export default App;
