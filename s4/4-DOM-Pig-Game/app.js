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

  var scores, roundScore, activePlayer, dice;
  scores = [0,0];
  // this is cleaner than setting a score var for each player
  roundScore = 0;
  // there is only 1 round score at a time
  activePlayer = 1;
  // 0 will be 1st player and 1 will be 2nd player. 0 will read from first element in scores array, and 1 from the second


// - how to generate a random number (for dice)
  dice = Math.floor(Math.random() * 6) + 1;

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

document.querySelector('#current-' + activePlayer).textContent = dice;
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
