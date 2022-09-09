let randomNumber = Math.floor(Math.random() * 10 + 1);
      
   
// made for correct Guess
let guess = 1;
      
document.getElementById("submitguess").onclick = function(){
//create a variable with the value of li's in it 
let node = document.createElement("li"); 
// number guessed by user     
let guessNumber=document.getElementById("guessField").value;
//create a text node so the values can appear in the li's
const textnode=document.createTextNode(guessNumber);
//append textnode child with node since textnode will be the values of li's
node.appendChild(textnode);
//
document.getElementById("list").appendChild(node);
 // counting the number of guesses
document.querySelector("h2").innerHTML = `Total guesses: ${guess}`;
  //using Document query selector  the first Element within the document that matches h1
   if(randomNumber == guessNumber)
   {    
       document.querySelector("h1").innerHTML = `CONGRATULATIONS!!!`
      
   }
   else if(guessNumber > randomNumber) /* if guessed number is greater
                   than actual number*/ 
   {   
       guess++;
       document.querySelector("h1").innerHTML = `Oh no! try a Lower Number!`;
       
    
   }
   else
   {
        guess++;
       document.querySelector("h1").innerHTML = `Oh no! try a Greater Number!`;
       
 
   }
}






