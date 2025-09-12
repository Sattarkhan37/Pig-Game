'use strict';
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
let currentScore = 0;
btnRoll.addEventListener('click', () => {
  //1.Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2.display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3.Check for rolled 1:if true,switch to next player
  if (dice !== 1) {
    //Add Dice to current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    //switch to next player
  }
});
