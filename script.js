'use strict';

function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choice.length);
    const item = choice[randomIndex].toLowerCase();

    return item;
}


function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    computerSelection.toLowerCase();
    //Due decide winner
    if (playerSelection === computerSelection) {
        return `It's a tie. You both chose ${playerSelection}`
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        } else {
            return `You won! ${playerSelection} beats ${computerSelection}`
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        } else {
            return `You won! ${playerSelection} beats ${computerSelection}`
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        } else {
            return `You won! ${playerSelection} beats ${computerSelection}`
        }
    }
}



const playerSelection = prompt('Rock, Paper or Scissors?')
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i <= 5; i++) {
        playRound(playerSelection, computerSelection);
    }
}
game();
