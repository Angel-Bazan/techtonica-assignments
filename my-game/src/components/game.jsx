import React, { useState } from "react";
import Result from './results.jsx';

//Using use state for the value of my guess number and random number 
const Game = () => {
    const [guess, setGuess] = useState('');
    const [random, setRandom] = useState('');
    const [submit, setSubmit] = useState('');
    const [guesses, setGuesses] = useState([]);
    //
    const handleChange = (event) => {
        setGuess(event.target.value)
     
    }

    //declare a getRandom function 
    const getRandom10 = () => {
        setRandom(Math.floor(Math.random() * 10) + 1);
        setGuesses([])
        setGuess('')
        console.log(random)
        console.log(setRandom)
    }
    
    
    const getRandom20 = () => {
        setRandom(Math.floor(Math.random() * (11)) + 10); 
        setGuesses([])
        setGuess('')
        console.log(random)
    }

    const onSubmit = () => {
        setSubmit(guess);
        guesses.push(guess)
        setGuesses(guesses);
        
    }

     console.log(guesses)


    return (
        <div>
            <div id=''>
                <label id='description' htmlFor='guessField'>
                    Guess Number between
                </label>
            </div>

            <div >
            <button id='button' onClick={getRandom10}>Random Number 1-10</button>
            <button id='button' onClick={getRandom20}>Random Number 10-20</button>
            </div>
            
            <input
                id='guessField'
                type='text'
                name='guessField'
                value={guess}
                onChange={handleChange}
            />
       
            <button id='guessButton' onClick={onSubmit}>guessed Number</button>

            <Result guess={submit}
                randomNum={random}
                guesses={guesses} />
        </div>
    )
}

export default Game