
let a = "Rock";
let b = "Paper";
let c = "Scissors"

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