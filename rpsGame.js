let playerScore;
let computerScore;
let ties;

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
        alert("It's a tie!");
        return ++ties;
    }
    else if (playerSelection === 'ROCK') {
        if (computerSelection === 'PAPER') {
            alert(playerLose);
            return ++computerScore;
        } else if (computerSelection === 'SCISSORS') {
            alert(playerWin);
            return ++playerScore;
        }
    }
    else if (playerSelection === 'PAPER') {
        if (computerSelection === 'SCISSORS') {
            alert(playerLose);
            return ++computerScore;
        } else if (computerSelection === 'ROCK') {
            alert(playerWin);
            return ++playerScore;
        }
    }
    else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK') {
            alert(playerLose);
            return ++computerScore;
        }
        else if (computerSelection === 'PAPER') {
            alert(playerWin);
            return ++playerScore;
        }
    }
    else {
        alert("That is not a valid answer! Point for computer!");
        return ++computerScore;
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    ties = 0;

    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Please enter your choice of rock, paper, or scissors:", "");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    return alert(`The final score is ${playerScore} to ${computerScore}, with ${ties} draws!`);
}