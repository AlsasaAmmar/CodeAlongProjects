/* ///-----------
configrations
----------*/
var scores, roundscore, activePlayer, gamePlaying;

init(); 

var exDice;
document.querySelector('.dice').style.display = 'none'; 
document.getElementById('score-1').textContent = '0';
document.getElementById('score-0').textContent = '0';
document.getElementById('current-score-1').textContent = '0';
document.getElementById('current-score-0').textContent = '0';


document.querySelector('#roll').addEventListener('click', function() {
    if (gamePlaying) { 
    //1. random number 
    var dice = Math.floor(Math.random() * 6 +1 );
    //2. display the number on the dice (we use this to shortcut the way of calling a selector)
    
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block'; 
    diceDOM.src ='/images/dice-' + dice +'.png' ; 
    //3. add the number of the dice to the score unless it's 1
    if (dice === 6 && exDice ===6 ) { 
    scores[activePlayer]= 0 ; 
    document.getElementById('score-' + activePlayer).textContent = '0';
    nextPlayer();     
    } else if (dice !== 1 ){
        //add score
        roundscore += dice; 
        document.querySelector('#current-score-'+ activePlayer).textContent = roundscore; 
    }else {
    //next player
       nextPlayer();
    }   
    exDice= dice 
}});
    

document.querySelector('#hold').addEventListener('click', function() {
    if (gamePlaying) { 
      //add score to global score
    scores[activePlayer] +=roundscore;
//update the user interface 
    document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
    
    
//check if player wins
    if (scores[activePlayer] >= 100) {
        //player wins >> stop the roll and hold.. show the player won
    document.querySelector('#player-' + activePlayer).textContent = 'You Win!';
    document.querySelector('.dice').style.display = 'none'; 
    gamePlaying = false ;
    
    } else { 
        nextPlayer(); }
    
}});
  

document.querySelector('#newGame').addEventListener('click', init); 



function init() {
    scores = [0,0];
    roundscore = 0;
    activePlayer = 0;
    gamePlaying = true ;
    document.querySelector('.dice').style.display = 'none'; 
    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-score-1').textContent = '0';
    document.getElementById('current-score-0').textContent = '0';
    document.querySelector('#player-0').textContent = 'Player 1'; 
    document.querySelector('#player-1').textContent = 'Player 2'; 
    document.querySelector('.playerBox-0').classList.add('active');
    document.querySelector('.playerBox-1').classList.remove('active');
    
    
    
}
function nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundscore = 0; 
        document.getElementById('current-score-0').textContent = '0' ;
        document.getElementById('current-score-1').textContent = '0' ;
        document.querySelector('.playerBox-1').classList.toggle('active');
        document.querySelector('.playerBox-0').classList.toggle('active');
        //document.querySelector('.dice').style.display = 'none'; 
}
