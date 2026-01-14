
let r = "Rock";
let p = "Paper";
let s = "Scissors";

let humanScore = 0;
let computerScore = 0;

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



function getHumanChoice(){
    let input = prompt("Enter rock, paper or scissors");
    let string = input.toLowerCase();
    if (string === "rock"){
        return r
    }
    else if (string === "paper"){
        return p
    }
     else if (string === "scissors"){
        return s
    }

}


function playRound(humanChoice, computerChoice){
let x = humanChoice;
let y = computerChoice;

if (x==r & y==p){
     console.log("You Lose, Paper beats Rock")
        computerScore++;
}
else if(x==r & y==s){ 
    console.log("You Win, Rock beats Scissors")
    humanScore++;

}
else if(x==s & y==p){ 
    console.log("You Win, Scissors beats Paper ")
    humanScore++;

}else if(x==s & y==r){ 
    console.log("You Lose, Rock beats Scissors")
     computerScore++;

}
else if(x==p & y==r){ 
    console.log("You Win, Paper beats Rock")
    humanScore++;

}
else if(x==p & y==s){ 
    console.log("You Lose, Scissors beats Paper")
    computerScore++;

}

else{
    console.log("It is a draw, Play Again!!")
}

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);

console.log("Human score is ", +humanScore+"  " + "Computer score is " + computerScore);