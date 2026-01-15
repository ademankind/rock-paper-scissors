
let r = "Rock";
let p = "Paper";
let s = "Scissors";

/*initialize score to 0*/
let humanScore = 0;
let computerScore = 0;



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


/*Get input from human*/

function getHumanChoice(){
    let input = prompt("Play 5 Rounds!! Enter rock, paper or scissors");
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

/*Play one round and increase score of winner*/

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
    console.log("It is a draw, !!")
}

}

   




/*Play 5 rounds */
function playGame(){

   

    for(let i = 0; i < 5; i++) {
  
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Human score is ", +humanScore+"  " + "Computer score is " + computerScore);
     }

    if( humanScore> computerScore){
        alert("You Win!!");
    }else if(computerScore>humanScore){
        alert("You Lose :(");
    }else{
        alert("It's a draw");
    }

/*Set score to 0 after 5 rounds*/
humanScore=0;
computerScore=0;

}

/*call the function*/
playGame();







