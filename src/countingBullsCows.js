'use strict';

function calculateBullsCows(secretNumber, guess) {
  const secretStr = secretNumber.toString();
  const guessStr = guess.toString();

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (guessStr[i] === secretStr[i]) {
      bulls++;
    } else if (secretStr.includes(guessStr[i])) {
      cows++;
    }
  }

  return {
    bulls, cows,
  };
}

module.exports = calculateBullsCows;
