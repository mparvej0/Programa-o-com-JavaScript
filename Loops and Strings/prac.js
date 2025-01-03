//Qs1. Print all even numbers from 0 to 100
for(let num = 0; num <= 100; num++) {
    if(num % 2 === 0)
        console.log("num =", num);
}

//Qs2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
let gameNum = 25;
let userNum = prompt("Guess the game number : ");
while(userNum != gameNum); 
userNum = prompt("You Entered wrong number Guess agian : ");
console.log("Congratulations, You Enteredthe right number");