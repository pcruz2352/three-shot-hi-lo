const prompt = require('prompt-sync')({
    sigint: true
});

(Math.floor(Math.random() * 101)); // gives us 0-100


prompt("I am thinking of a number between 1 and 100. You only have 3 chances, so good luck."); // This requests an input from the user

let userInput = Number(prompt("> "))
let comPut = (Math.floor(Math.random() * 100));
let count = 0

while (count < 2 && userInput !== comPut) {
    if (userInput < comPut) {
        console.log("Sorry, too low! Guess again")
        Number(prompt("> "))
    } else if (userInput > comPut) {
        console.log("Sorry, too high!, Guess again")
        Number(prompt("> "))
    }
    count++
}

if (userInput === comPut) {
    console.log("Congratulations, " + comPut + " is correct!")
}

console.log("Sorry, the number I was thinking was " + comPut);