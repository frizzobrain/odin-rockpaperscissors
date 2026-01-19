//Algorithm

// create variable humanChoice (must by type string and possible strings are rock paper scissors)
// create variable computerChoice (must by type string and possible strings are rock paper scissors)
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
const buttons = document.querySelectorAll("button");
buttons.forEach ((button) => {
    button.addEventListener("click", function (e) {
        playRound(e.target.textContent);
});
});
// create const string humanChoice and set to empty
let humanChoice = "";
let humanChoiceDisplay = document.createElement("div");
humanChoiceDisplay.classList="humanChoice";
humanChoiceDisplay.textContent= "Player choice is: ";

document.body.appendChild(humanChoiceDisplay);
// create const string computerChoice and set to empty
let computerChoice = "";
let computerChoiceDisplay = document.createElement("div");
computerChoiceDisplay.classList = "computerChoice";
computerChoiceDisplay.textContent = "Computer choice is: ";

document.body.appendChild(computerChoiceDisplay);


// create var humanScore and set to 0
let humanScore = 0;
let humanScoreDisplay = document.createElement("div");
humanScoreDisplay.textContent = "Player score is: "+ humanScore;

document.body.appendChild(humanScoreDisplay);
// create var computerScore and set to 0 
let computerScore = 0;
let computerScoreDisplay = document.createElement("div");
computerScoreDisplay.textContent = "Computer score is: "+ computerScore;

document.body.appendChild(computerScoreDisplay);

let winner = document.createElement("div");

document.body.append(winner);
//     function getComputerChoice
function getComputerChoice(){
//      create a var named random containing a random number between 0 and 99
let random = Math.random()*100;
console.log(random);
//      if the number is minor then 33 saves in var computerChoice the string "rock"
if (random<33){
    computerChoiceDisplay.textContent = "Computer choice is: "
    computerChoice="rock";
    computerChoiceDisplay.textContent+= computerChoice;
}
//      if the number is bigger than 32 and lesser than 66 saves in var computerChoice the string "paper"
else if (random>= 33 &&random < 66){
    computerChoiceDisplay.textContent = "Computer choice is: "
    computerChoice="paper";
    computerChoiceDisplay.textContent+= computerChoice;
}
//      if the number is bigger than 65 saves in var computerChoice the string "scissors"
else {
    computerChoiceDisplay.textContent = "Computer choice is: "
    computerChoice="scissors";
    computerChoiceDisplay.textContent+= computerChoice;
}
//      than it prints a message in the console showing the string in computerChoice
//console.log(computerChoice);
//return what's in var computerChoice
return computerChoice;
}


// create a function playRound (humanChoice, computerChoice) 
function playRound(e){
humanChoice = e.toLowerCase();
humanChoiceDisplay.textContent= "Player choice is: "
humanChoiceDisplay.textContent+= humanChoice;
console.log("humanChoice="+humanChoice);
//    make var humanChoiceLow = humanChoice lowercased
computerChoice = getComputerChoice();
    // if humanChoiceLow is the same as computerChoice
if (humanChoice === computerChoice)
    //     print round tied
    console.log("Round Tied!");
    // else if (humanChoiceLow === rock and computerChoice === scissors) or (humanChoiceLow === paper and computerChoice === rock) or (humanChoiceLow === scissors && computerChoice === paper)
else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
    //     Print "Wow, you won!" humanChoice "beats" computerChoice
    console.log("Wow, you won! " +humanChoice+ " beats " +computerChoice);
    //     humanScore increase by one
    humanScore++;
    if (humanScore== 5){
        winner.textContent= "Player won! Congratulations!"
    }
    humanScoreDisplay.textContent = "Player score is: ";
    humanScoreDisplay.textContent += humanScore;
    console.log(humanScore);
}
else{
    // else
    //     print "you lost this round" humanChoice "lose against" computerChoice"
    console.log("you lost this round "+ humanChoice +" lose against " +computerChoice)
    //     computerScore increase by one
    computerScore++;
    if (computerScore == 5){
        winner.textContent= "Computer won! This is really sad!"
    }
    computerScoreDisplay.textContent = "Computer score is: ";
    computerScoreDisplay.textContent += computerScore;
    console.log(computerScore);
}
}

//PSEUDOCODE for funcion playGame:


//create a function without any input that doesn't return any valor called playGame()
function playGame(){
//make a var i that starts from 0
let i = 0;
//while i<5 
while (i<5){
    //let human choice what to play and collect the choice in var humanChoice
    humanChoice= getHumanChoice();
    //collect in var computerChoice the computer's choice
    computerChoice= getComputerChoice();
    //      than it prints a message in the console showing the string in humanChoice
    console.log(humanChoice.toLowerCase());
    //use the data collected as imput for the function playRound()
    playRound(humanChoice, computerChoice);
    i++;
    }
//at the end of the cycle, if Human wins, print "OH YES, you won. Congratulations!" 
if (humanScore>=computerScore)
    console.log("OH YES, you won. Congratulations!"); //yes you will win also a tied match because joy must prevail in this world! :O
//else print "Computer got the best of you. Better luck next time!"
else 
    console.log("Computer got the best of you. Better luck next time!");
//print the Human score with a message describing it
console.log("Final Human Score: "+humanScore);
//print the computer score with a message describing it
console.log("Final computer Score: "+computerScore);
}

//playGame();



