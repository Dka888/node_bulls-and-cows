'use strict';

const readline = require('readline');
const { generateNumber } = require('./createNumber');
const calculateBullsCows = require('./countingBullsCows');

const game = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isInputValid(guess) {
  const uniqueDigits = new Set(guess.split(''));

  return guess.length === 4 && uniqueDigits.size === 4;
}

function playGame() {
  const secretNumber = generateNumber();

  console.log('Welcome to Bulls and Cows game!');

  function takeGuess() {
    game.question('Enter a 4-digit number with no repeating digits: ',
      (guess) => {
        if (!isInputValid(guess)) {
          console.log('Please enter a 4-digit number with no repeating digits.');
          takeGuess();

          return;
        }

        const guessNumber = parseInt(guess);
        const { bulls, cows } = calculateBullsCows(secretNumber, guessNumber);

        console.log(`Bulls: ${bulls}, Cows: ${cows}`);

        if (bulls === 4) {
          console.log('Congratulations! You have guessed the number.');
          game.close();
        } else {
          takeGuess();
        }
      });
  }

  takeGuess();
}

playGame();
