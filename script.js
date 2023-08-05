'use strict';

const rockBtn = document.querySelector('#rock'),
    paperBtn = document.querySelector('#paper'),
    scissorsBtn = document.querySelector('#scissors'),
    results = document.querySelector('.results'),
    pyScore = document.querySelector('.player-score'),
    compScore = document.querySelector('.computer-score'),
    buttons = [rockBtn, paperBtn, scissorsBtn];

function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choice.length);
    const item = choice[randomIndex].toLowerCase();

    return item;
}

function disablingBts() {
    buttons.forEach(button => {
        button.disabled = true;
    })
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let computerSelection = getComputerChoice();
    let result = '';

    function playRound(playerSelection, computerSelection) {
        if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
            (playerSelection == 'scissors' && computerSelection == 'paper') ||
            (playerSelection == 'paper' && computerSelection == 'rock')) {

            playerScore = + 1;
            result = ('You win! ' + playerSelection + ' beats ' + computerSelection
                + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        } if (playerScore == 5) {
            result += 'You won the game! Reload the page to play again'
            disablingBts()

        } else if (playerSelection == computerSelection) {
            result = ('It\'s a tie. You both chose ' + playerSelection
                + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        } else {
            computerScore += 1;
            result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
                + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        } if (computerScore == 5) {
            result += '<br><br>I won the game! Reload the page to play again'
            disablingBts()
        }

        results.innerHTML = result
    }

    rockBtn.addEventListener('click', () => {
        playRound("rock", computerSelection);
    })
    paperBtn.addEventListener('click', () => {
        playRound("paper", computerSelection);
    })
    scissorsBtn.addEventListener('click', () => {
        playRound("scissors", computerSelection);
    })

}

game();


