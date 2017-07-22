/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, rolledOne, rollScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        rolledOne = false;
        rollScore = 0
        buttonRoll(1);
        buttonRoll(2);
        if (rolledOne) {
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            roundScore = 0;
        }
        if (rollScore === 12) {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function (){
    if (gamePlaying) {
        //1. Add current score to global score
        scores[activePlayer] += roundScore;
        var winningScore;

        //2. Update UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        winningScore = document.querySelector('.final-score').value;
        
        if (!winningScore) {
            winningScore = 100;    
        }

        //3. Check if player won game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');    
            gamePlaying = false;
        }
        else {
            nextPlayer();
        }
    }
});

function nextPlayer () {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function buttonRoll(diceNum) {
     //1.Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2.Display Result
    var diceDOM = document.querySelector('.dice' + diceNum);
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3. Update the round score If the rolled number was NOT a 1
    if (dice !== 1) {
        //Add score;
        rollScore += dice;
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else {
        rolledOne = true;
        nextPlayer();
    }
}

//Setter
//document.querySelector('#current-' + activePlayer).textContent = dice;
//innerHTML example
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//Getter
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

//Code Challenge 1
//roll 2 6s and you loose that turn

//Code Challenge 2
//User input for score to win

//Code Challenge 3
//Add a second dice to the game if 1 of the dice is as 1 player looses current score









