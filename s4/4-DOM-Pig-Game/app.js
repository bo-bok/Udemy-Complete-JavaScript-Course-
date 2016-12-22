/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, gamePlaying;

// reset the scores to zero, ready to start new game
init();


// this function rolls a random number between 1-6 and displays appropriate current score and dice image
document.querySelector('.btn-roll').addEventListener('click', function(){

  if (gamePlaying){
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. display result:
    // a. display dice image
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';

    // b. display correct dice image
    diceDOM.src = 'dice-' + dice + '.png';

    document.querySelector('#current-' + activePlayer).textContent = dice;

    // 3. update the round score IF the rolled number was NOT a 1
    if (dice !== 1){
      // add score
      roundScore += dice;
      // display it in user interface
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      // next player
      nextPlayer();
    }
  }

});


// this function adds the current score to the global score when a player decides to hold and checks whether the player has won the game or whether it should continue the game
document.querySelector('.btn-hold').addEventListener('click', function(){

  if(gamePlaying){
    // add current score to global score
    scores[activePlayer] += roundScore;

    // update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // check if player won the game and display appropriate UI
    if (scores[activePlayer] >= 20) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

      // set the state of the game to false
      gamePlaying = false;
    } else {
      // next player
      nextPlayer();
    }
  }

});


function nextPlayer(){
  // if active player draws a one, change it to next players turn
  activePlayer === 0 ? activePlayer = 1: activePlayer = 0;

  // reset score to zero
  roundScore = 0;

  // show reset score in user interface
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // show active UI on active player
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // remove the dice image so each player has clean space in interface to start rolling dice on
  document.querySelector('.dice').style.display = 'none';
}

// when a user clicks btn-new, a new game will be initialised
document.querySelector('.btn-new').addEventListener('click', init);


// this function handles initialising a new game, with all values set to and displayed as their start (0)
function init(){
  // set the state back to true
  gamePlaying = true;

  // reset the scores
  scores = [0,0];
  // this is cleaner than setting a score var for each player
  roundScore = 0;
  // there is only 1 round score at a time
  activePlayer = 0;
  // 0 will be 1st player and 1 will be 2nd player. 0 will read from first element in scores array, and 1 from the second

  // show reset score in user interface
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';

  // reset the names
  document.getElementById('name-0').textContent = 'Player 1!';
  document.getElementById('name-1').textContent = 'Player 2!';

  // change from winning to active styling
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

  // hide the dice;
  document.querySelector('.dice').style.display = 'none';
}
