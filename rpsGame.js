function getComputerChoice() {
    
    let number = Math.floor(Math.random() * (4 - 1) + 1);
    let computerChoice;

    if (number === 1) {
        computerChoice = 'ROCK';
    } else if (number === 2) {
        computerChoice = 'PAPER';
    } else {
        computerChoice = 'SCISSORS';
    }

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    let playerLose = `You lose! ${computerSelection} beats ${playerSelection}`;
    let playerWin = `You win! ${playerSelection} beats ${computerSelection}`;

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection === 'ROCK') {
        if (computerSelection === 'PAPER') {
            return playerLose;
        } else if (computerSelection === 'SCISSORS') {
            return playerWin;
        }
    }
    else if (playerSelection === 'PAPER') {
        if (computerSelection === 'SCISSORS') {
            return playerLose;
        } else if (computerSelection === 'PAPER') {
            return playerWin;
        }
    }
    else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK') {
            return playerLose;
        }
        else if (computerSelection === 'PAPER') {
            return playerWin;
        }
    }
    else {
        return "That is not a valid answer!"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();