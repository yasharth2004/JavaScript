let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

let prevGuess = [];
let numGuess = 0;
let playgame = true;

submit.addEventListener('click', function(e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
});

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter valid number');
    } else if (guess < 1) {
        alert('Please enter a number more than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        numGuess++;
        
        if (numGuess === 10 || guess === randomNumber) {
            displayGuess(guess);
            
            if (guess === randomNumber) {
                displayMessage(`You guessed it right`);
            } else {
                displayMessage(`Game Over. Random number was ${randomNumber}`);
            }
            
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess < randomNumber) {
        displayMessage(`Number is too low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is too high`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.disabled = true;
    submit.disabled = true;

    // Remove any existing new game button
    const existingNewGameButton = document.getElementById('newGame');
    if (existingNewGameButton) {
        existingNewGameButton.remove();
    }

    // Create new game button
    const newGameButton = document.createElement('h2');
    newGameButton.id = 'newGame';
    newGameButton.textContent = 'Start New Game';
    newGameButton.classList.add('button');

    // Add event listener to new game button
    newGameButton.addEventListener('click', resetGame);

    // Append button to result container
    startOver.appendChild(newGameButton);
}

function resetGame() {
    // Reset game parameters
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 0;

    // Reset display elements
    guessSlot.innerHTML = '';
    remaining.innerHTML = '10';
    lowOrHi.innerHTML = '';

    // Re-enable input and submit
    userInput.disabled = false;
    submit.disabled = false;
    userInput.value = '';

    // Remove new game button
    const newGameButton = document.getElementById('newGame');
    if (newGameButton) {
        newGameButton.remove();
    }
}