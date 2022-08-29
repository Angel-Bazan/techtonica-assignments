import React from "react"; 

const Result = ({guess, randomNum, guesses}) => {
    let result; 
    if(guess){
        if(randomNum > guess){
            result = 'Input a higher number'
        }
        else if(randomNum < guess) {
            result = 'Input a Lower number'
        }
        else{
            result = 'Congratulations'
        }
    }
    
    return(
    <div>
     
        <ul>
            {guesses.map((element,index) => 
            (
            <li key={index}>
                
                You have guessed number {element}
            </li>
            )
            )}
            
        </ul>
        <h3>{result}</h3>
    </div>
    
    );
}

export default Result 