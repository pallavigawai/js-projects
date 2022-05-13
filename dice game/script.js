'use strict';
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// stored variable

let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let current0 = document.querySelector('#current--0');
let current1 = document.querySelector('#current--1');
let scores, currentScore, activePlayer, playing;
const diceImg = document.querySelector('.dice');

const initialize = function () {
  scores = [0, 0];

  currentScore = 0;
  activePlayer = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  playing = true;
  diceImg.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player1.classList.remove('player--active');
  player0.classList.add('player--active');
};
initialize();

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceImg.classList.remove('hidden');
  diceImg.src = `dice-${dice}.png`;
  if (playing) {
    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  // add currscore to totalscore
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    console.log(scores[activePlayer]);

    if (scores[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceImg.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', initialize);
