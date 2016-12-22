/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


/* *** 39. Lecture: The DOM and DOM Manipulation *** */
// - how to create our fundemental game Variables

  var scores, roundScore, activePlayer;
  scores = [0,0];
  // this is cleaner than setting a score var for each player
  roundScore = 0;
  // there is only 1 round score at a time
  activePlayer = 0;
  // 0 will be 1st player and 1 will be 2nd player. 0 will read from first element in scores array, and 1 from the second

  // set start scores to zero
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';


// - how to generate a random number (for dice)
  // dice = Math.floor(Math.random() * 6) + 1;

  /*
    // random number creation explained:
      Math.random() //gives random number between 0-1
      (Math.random() * 6) // gives random number 0 - 6
      Math.floor(Math.random() * 6) // gives random number 0 - 5, and rounds it down (Math.random returns a decimal)
      dice = Math.floor(Math.random() * 6) + 1; // all of the above, makes number start at 1 and store the number in the dice var
  */





// - how to manipulate the DOM
  // we call this a SETTER - because we SET a value
// document.querySelector('#current-0').textContent = dice;
// querySelector() only the selects the first thing it finds, but there's a workaround for that. Selects in same way as JS.
// textContent updates the content

// document.querySelector('#current-' + activePlayer).textContent = dice;
// update score based on active player (0 or 1)

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// if we want to use html on selected element, we must use innerHTML and pass HTML as string




// - how to read from the DOM
// we call this a GETTER - because we GET a value

  // read something from the webpage and then store it in some variable, e.g.
var x = document.querySelector('#score-0').textContent;
console.log(x);


// - how to change CSS styles
document.querySelector('.dice').style.display = 'none';
// hide the dice image






/* *** 40. Lecture: Events and Event Handling: Rolling the Dice *** */

// METHOD 1 for event handling. Function declaration and callback

// select the element in which the event will happen & add an event listener

// document.querySelector('.btn-roll').addEventListener('click', btn);
// two arguments: arg 1 = type of event | arg 2 = the function that will be called as soon as the event happens

// function btn() {}

/* we don't use the function call's parentheses here. This is because we don't want to call the function right here, we want the event listener to call the function for us. Thus, the function we want to call after the event handler has been trigged is called the callback function. This is because it's a function that is not called by us, but by another function. */

// callback function = a function that we pass into another function as an argument. Then this function (in our example the event listener method, will call said function for us)

// getElementByID - only works for ID, but faster than querySelector


// METHOD 2: annoymous function

  // BUT: what if we didn't want an external function that gets called by the event listener?
  // we could write our function in the parentheses, and this would be an anonymous function (function w/o a name, that cannot be reused):
  document.querySelector('.btn-roll').addEventListener('click', function(){
    // do something here

    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. display result

      // a. display dice image
      var diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';

       // b. display correct dice image
      diceDOM.src = 'dice-' + dice + '.png';

    document.querySelector('#current-' + activePlayer).textContent = dice;







  /* *** 42. Lecture: Implementing Our 'Hold' Function and and the DRY Principle *** */
  // 3. update the round score IF the rolled number was NOT a 1

  if (dice !== 1){
    // add score
    roundScore += dice;
    // display it in user interface
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    // if active player draws a one, we want to change it to next players turn
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;

    // reset score to zero
    roundScore = 0;

    // show reset score in user interface
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // make who is the active player visible in the user interface
    // the active class gives the active player its dfferent styling

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

      // issue with approach - styling will only switch from player 0 to player 1, not from 1 to 0

      // solution? .toggle()
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');

      // remove the 1 so each player has clean space in interface to start rolling dice on
      document.querySelector('.dice').style.display = 'none';

  }



});








/*  FINAL code
var scores, roundScore, activePlayer;
scores = [0,0];
roundScore = 0;
activePlayer = 1;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function(){

  var dice = Math.floor(Math.random() * 6) + 1;
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';

  diceDOM.src = 'dice-' + dice + '.png';

  document.querySelector('#current-' + activePlayer).textContent = dice;


  if (dice !== 1){
    // add score
    roundScore += dice;
    // display it in user interface
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    // if active player draws a one, we want to change it to next players turn
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;

    // reset score to zero
    roundScore = 0;

    // show reset score in user interface
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // make who is the active player visible in the user interface
    // the active class gives the active player its dfferent styling

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

      // issue with approach - styling will only switch from player 0 to player 1, not from 1 to 0

      // solution? .toggle()
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');

      // remove the 1 so each player has clean space in interface to start rolling dice on
      document.querySelector('.dice').style.display = 'none';

  }

});
*/
