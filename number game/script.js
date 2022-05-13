'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;
console.log(number);
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = document.querySelector('.guess').value;
  console.log(guessNumber);
  let highscore = 0;

  if (!guessNumber) {
    showMessage('Invalid Number!');
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guessNumber == number) {
    showMessage('Correct Number!');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (guessNumber !== number) {
    if (score < 1) {
      showMessage('you lose!');
    } else {
      let message = guessNumber > number ? 'Too High!' : 'Too Low!';
      showMessage(message);
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.guess').value = '';
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = number;
  document.querySelector('.score').textContent = score;
});
function showMessage(message) {
  document.querySelector('.message').textContent = message;
}
