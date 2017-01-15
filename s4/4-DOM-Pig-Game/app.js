/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


// - how to create our fundemental game Variables

  var scores, roundScore, activePlayer, dice;
  scores = [0,0];
  // this is cleaner than setting a score var for each player
  roundScore = 0;
  // there is only 1 round score at a time
  activePlayer = 0;
  // 0 will be 1st player and 1 will be 2nd player. 0 will read from first element in scores array, and 1 from the second


// - how to generate a random number (for dice)
  dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);

  /*
    // random number creation explained:
      Math.random() //gives random number between 0-1
      (Math.random() * 6) // gives random number 0 - 6
      Math.floor(Math.random() * 6) // gives random number 0 - 5, and rounds it down (Math.random returns a decimal)
      dice = Math.floor(Math.random() * 6) + 1; // all of the above, makes number start at 1 and store the number in the dice var
  */

// - how to manipulate the DOM

document.querySelector('#score-0').textContent = dice;
// querySelector() only the selects the first thing it finds, but there's a workaround for that. Selects in same way as JS.
// textContent updates the content

// - how to read from the DOM
// - how to change CSS styles
