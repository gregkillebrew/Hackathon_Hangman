let words = ["new york", "texas", "california", "washington", "nebraska"]


let word = words[Math.floor(Math.random() * words.length)]


let answerArray = [];
for(let i = 0; i < word.length; i++){
  answerArray[i] = "_"
}



let remainingLetters = word.length;

while(remainingLetters > 0) {
  alert(answerArray.join(" "));

  
  let guessInput = prompt("Guess a letter");

  
  if (guessInput == null) {
    break;
  }
  
  else if (guessInput.length !== 1 ){
    alert("One letter at a time, bub");

  } 
  
  else {
    for (let j = 0; j < word.length; j++){

      if(word[j] == guessInput){
      
       answerArray[j] = guessInput;
        remainingLetters--;
      
        
      }
    }
  }
}

  alert(answerArray.join);
  alert("Good Job! Answer was " + word);