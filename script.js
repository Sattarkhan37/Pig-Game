'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const scrore0El = document.querySelector('#score--0');
const scrore1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
scrore0El.textContent = 0;
scrore1El.textContent = 0;
diceEl.classList.add('hidden');
const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
btnRoll.addEventListener('click', () => {
  if (playing) {
    //1.Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2.display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    console.log(dice);

    //3.Check for rolled 1:if true,switch to next player
    if (dice !== 1) {
      //Add Dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    //1.Add current score to active player's score
    score[activePlayer] += currentScore;
    // score[1] =score[1]+currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    //2.check if player's score is >=100
    if (score[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch the next player
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', () => {
  scrore0El.textContent = 0;
  scrore1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
});
