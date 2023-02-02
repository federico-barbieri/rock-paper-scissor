

// all btns 

const allBtns = document.querySelector('#buttons');

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const winBtn = document.querySelector('#win');
const loseBtn = document.querySelector('#lose');
const drawBtn = document.querySelector('#draw');

const allTxtBtns = document.querySelector('#texts');

const playAgain = document.querySelector('#again');


// both players

const player1 = document.querySelector('#player1');

const player2 = document.querySelector('#player2');


// randomize what the machine will choose

const arrayOfPicks = ['rock', 'paper', 'scissors'];

let randomNum;

const randomize = () => {
    return Math.floor(Math.random() * arrayOfPicks.length);  
}

// function that removes the shake

function removeShake(){
    player1.classList.remove('shake');
}

function removeShake2(){
    player2.classList.remove('shake');
}

// functions that checks who won 

function whoWonScissor(){

    playAgain.style.display = "block";

if (player2.classList.contains('rock')){
    loseBtn.style.display = "block";
} else if (player2.classList.contains('paper')){
    winBtn.style.display = "block";
} else {
    drawBtn.style.display = "block";
}

}

function whoWonPaper(){

    playAgain.style.display = "block";

if (player2.classList.contains('rock')){
    winBtn.style.display = "block";
} else if (player2.classList.contains('paper')){
    drawBtn.style.display = "block";
} else {
    loseBtn.style.display = "block";
}
    
}

function whoWonRock(){

    playAgain.style.display = "block";

if (player2.classList.contains('rock')){
    drawBtn.style.display = "block";
} else if (player2.classList.contains('paper')){
    loseBtn.style.display = "block";
} else {
    winBtn.style.display = "block";
}
        
}

// function to play again

function replay(){
    player1.classList.remove('scissors', 'rock', 'paper');
    player2.classList.remove('scissors', 'rock', 'paper');
    allBtns.style.display = "block";
    playAgain.style.display = "none";
    
    winBtn.style.display = "none";
    loseBtn.style.display = "none";
    drawBtn.style.display = "none";
}


// play again event listener for the button

playAgain.addEventListener('click', () => {
    replay();
})


    // if you choose to play the scissors

    scissors.addEventListener('click', () =>{

        // what happens to the user
        
        player1.classList.add('shake');
        setTimeout(removeShake, 1600);
        player1.classList.add('scissors');
        allBtns.style.display = "none";

        // what happens to the machine

        player2.classList.add('shake');
        setTimeout(removeShake2, 1600);
        
        player2.classList.add(`${arrayOfPicks[randomize()]}`);

        setTimeout(whoWonScissor, 1601);

    })

    // if you choose to play the rock

    rock.addEventListener('click', () =>{
        
        // what happens to the user
        
        player1.classList.add('shake');
        setTimeout(removeShake, 1600);
        player1.classList.add('rock');
        allBtns.style.display = "none";

         // what happens to the machine

         player2.classList.add('shake');
         setTimeout(removeShake2, 1600);
         
         player2.classList.add(`${arrayOfPicks[randomize()]}`);

         setTimeout(whoWonRock, 1601);
    })

    // if you choose to play the paper

    paper.addEventListener('click', () =>{
        
        player1.classList.add('shake');
        setTimeout(removeShake, 1600);
        player1.classList.add('paper');
        allBtns.style.display = "none";

        // what happens to the machine

        player2.classList.add('shake');
        setTimeout(removeShake2, 1600);
        
        player2.classList.add(`${arrayOfPicks[randomize()]}`);

        setTimeout(whoWonPaper, 1601);

    })
