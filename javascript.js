
let r = "rock";
let p = "paper";
let s = "scissors";

let scorePlayer = 0;
let scoreComputer = 0;
let draws = 0;

/*Generate random choice for Computer*/
function getComputerChoice(){ 

 let x = Math.floor(Math.random()*60);

 if (x<20){
    console.log("Computer picked Rock");
    return r;
    
 }
 else if (x<40){
    console.log("Computer picked Paper");
    return p;
 }
 else {
    console.log("Computer picked Scissors");
    return s;
 }
}





/*Play one round and increase score of winner*/

function playRound(humanChoice, computerChoice){
let x = humanChoice;
let y = getComputerChoice();


if (x==r & y==p){
    console.log("You Lose, Paper beats Rock")
     handleScore('computerWin');
}
else if(x==r & y==s){ 
    console.log("You Win, Rock beats Scissors")
     handleScore('playerWin');

}
else if(x==s & y==p){ 
    console.log("You Win, Scissors beats Paper ")
     handleScore('playerWin');

}else if(x==s & y==r){ 
    console.log("You Lose, Rock beats Scissors")
     handleScore('computerWin' );

}
else if(x==p & y==r){ 
    console.log("You Win, Paper beats Rock")
     handleScore('playerWin' );

}
else if(x==p & y==s){ 
    console.log("You Lose, Scissors beats Paper")
     handleScore('computerWin' );

}

else{
    console.log("It is a draw, !!")
     handleScore('draw' );
}


}



function displayScore()
{
alert("  Player score: " + scorePlayer  + "    Computer score: " + scoreComputer + "    Draws: " + draws);
}

function handleScore(result) {
    if (result === 'playerWin') {
        scorePlayer++;
    } else if (result === 'computerWin') {
        scoreComputer++;
    } else if (result === 'draw') {
        draws++;
    }

    // Display results
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.textContent = "  Player: " + scorePlayer + "    Computer: " + scoreComputer + "   Draws: " + draws;

}



// 1. Select the buttons
const btn_r = document.getElementById('rock');
const btn_p = document.getElementById('paper');
const btn_s = document.getElementById('scissors');
 


// 2. Add event listeners
btn_r.addEventListener('click', () => playRound('rock'));
btn_p.addEventListener('click', () => playRound('paper'));
btn_s.addEventListener('click', () => playRound('scissors'));


