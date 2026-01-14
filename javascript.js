
let a = "Rock";
let b = "Paper";
let c = "Scissors";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){ 

 let x = Math.floor(Math.random()*60);

 if (x<20){
    return a;
 }
 else if (x<40){
    return b;
 }
 else {
    return c;
 }
}

console.log(getComputerChoice())

function getHumanChoice(){
    let input = prompt("Enter rock, paper or scissors");
    let string = input.toLowerCase();
    if (string === "rock"){
        return a
    }
    else if (string === "paper"){
        return b
    }
     else if (string === "scissors"){
        return c
    }

}

console.log(getHumanChoice())

