//Algorithm

// create variable humanChoice (must by tipe string and possible strings are rock paper scissors)
// create variable computerChoice (must by tipe string and possible strings are rock paper scissors)
// create variable humanScore type int starting from 0
// create variable computerScore type int starting from 0
// inputs
// create a function (getComputerChoice()) that will generate a string between rock paper scissor and save it to var computerChoice
// test must be used (console.log) to check if right value is generated
// a message will ask the human to make his choice and the player will type a string (rock paper scissors) in the prompt. This choice will be saved in var humanChoice
// test must be used (console.log) to check if right value is generated
// create a function (playRound) that takes 2 parameters as input (humanChoice computerChoice) 
//     as output it prints with console.log a message like "you lose, paper beats rock!"
// increment the score based who won (humanScore or computerScore)
// create a function (playGame) that will run 5 rounds and than console.log the winner

//Pseudo code

// create const string humanChoice and set to empty
let humanChoice = '';
// create const string computerChoice and set to empty
let computerChoice = '';
// create var humanScore and set to 0
let humanScore = 0;
// create var computerScore and set to 0 
let computerScore = 0;
//     function getComputerChoice
function getComputerChoice(){
//      create a var named random containing a random number between 0 and 99
let random = Math.random()*100;
console.log(random);
//      if the number is minor then 33 saves in var computerChoice the string "rock"
if (random<33){
    computerChoice="rock";
}
//      if the number is bigger than 32 and lesser than 66 saves in var computerChoice the string "paper"
else if (random>= 33 &&random < 66){
    computerChoice="paper";
}
//      if the number is bigger than 65 saves in var computerChoice the string "scissors"
else {
    computerChoice="scissors";
}
//      than it prints a message in the console showing the string in computerChoice
console.log(computerChoice);
//     function getHumanChoice
//      prompt a question to the human player: "make your choice: rock, paper or scissor"
//      save the choice in const humanChoice
//      than it prints a message in the console showing the string in humanChoice
}

getComputerChoice();