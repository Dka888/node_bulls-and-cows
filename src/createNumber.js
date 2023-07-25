'use strict';

function generateNumber() {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const number = [];

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * 10);

    number.push(digits[randomIndex]);
    digits.splice(randomIndex, 1);
  }

  return number.join('');
}

module.exports = { generateNumber };
