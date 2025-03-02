const randomNumber = (parseInt(Math.random() * 100 +1));
const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p')
let prevGuess=[];
let numGuess = 1;
let playgame = true ;

if(playgame)
{
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess)
{
    if(isNaN(guess))
    {
        alert('Please enter valid number');
    }
    else if(guess<1)
    {
        alert('Please enter a number more than 1');
    } 
    else if(guess>100)
    {
        alert('Please enter a number less than 100');
    }
    else
    {
        prevGuess.push(guess);
        if(numGuess==1)
        {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)

        }
    }

}
function checkGuess(guess)
{
    if(guess=== randomNumber)
    {
        displayMessage(`You guessed it right`);
        endGame()
    }
    else if(guess<randomNumber)
    {
        displayMessage(`Number is too low`);
    }
    else if(guess>randomNumber)
    {
        displayMessage(`Number is too high `);
    }
}

function displayGuess(guess)
{
    userInput.value=''
}

function displayMessage(message)
{

}
function newGame()
{

}
function endGame()
{

}