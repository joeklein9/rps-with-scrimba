// get random computer choice
// change computer choice message
// get user choice from button press
// change player choice message 
// compare computer vs user 
// change round result (give score) 
// change final message when there is a winner (first to 3)




// defining important variables
let computerChoice = ""
let playerChoice = ""
let roundResult = ""
let playerScore = 0
let computerScore = 0
const choices = ["rock", "paper", "scissors"]

const rockBtn = document.getElementById('rock-btn')
const paperBtn = document.getElementById('paper-btn')
const scissorsBtn = document.getElementById('scissors-btn')
let playerChoiceResult = document.getElementById("player-choice-result")
let computerChoiceResult = document.getElementById("computer-choice-result")
let roundResultMessage = document.getElementById ("round-result")
let gameSummaryMessage = document.getElementById("game-summary")


// defining on click functions for each button to store player choice in variable

function getRockChoice () {
    playerChoice = "Rock";
    playerChoiceResult.textContent = "Player choice: " + playerChoice;
    computerChoiceResult.textContent = "Computer choice: " + getComputerChoice();
    compareResults()
}

function getPaperChoice () {
    playerChoice = "Paper";
playerChoiceResult.textContent = "Player choice: " + playerChoice;
computerChoiceResult.textContent = "Computer choice: " + getComputerChoice();

compareResults()

}

function getScissorsChoice () {
    playerChoice = "Scissors";
playerChoiceResult.textContent = "Player choice: " + playerChoice;
computerChoiceResult.textContent = "Computer choice: " + getComputerChoice()

compareResults()

}






 
// defining function for getting computer choice 
function getComputerChoice () {
    for (let i = 0; i < Math.floor (Math.random () * choices.length) +1; i++) {
        computerChoice = choices [i]; 
    }  
    if (computerChoice === "rock") {
        computerChoice = "Rock"
    }
    else if (computerChoice === "paper") {
        computerChoice = "Paper"
    }
    else if (computerChoice === "scissors") {
        computerChoice = "Scissors"
    }
    return computerChoice 
}


// compare choices to give round result 


function compareResults () {
    if (computerChoice === "Rock" && playerChoice === "Scissors") {
       computerScore ++}
    else if (computerChoice === "Rock" && playerChoice === "Paper") {
       playerScore ++ } 
    else if (computerChoice === "Paper" && playerChoice === "Rock") {
        computerScore ++
    }
    else if (computerChoice === "Paper" && playerChoice === "Scissors") {
        playerScore ++ 
    }
    else if (computerChoice === "Scissors" && playerChoice === "Rock") {
        playerScore ++
    }
    else if (computerChoice === "Scissors" && playerChoice === "Paper") {
        computerScore ++ 
    }
    
    roundResultMessage.textContent = "Computer: " + computerScore + " Player: " + playerScore; 
    gameEnd ();
} 

function gameEnd () {
    if (computerScore === 3) {
        gameSummaryMessage.textContent = "You lose! You are less smart than the computer!"
        computerScore = 0
        playerScore = 0
        
    }
    else if (playerScore === 3) {
        gameSummaryMessage.textContent = "You win! You are smarter than the computer!"
        computerScore = 0
        playerScore = 0


    }
    
}


