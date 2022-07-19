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
        return alert("It's a tie!");
    }
    else if (playerSelection === 'ROCK') {
        if (computerSelection === 'PAPER') {
            return alert(playerLose);
        } else if (computerSelection === 'SCISSORS') {
            return alert(playerWin);
        }
    }
    else if (playerSelection === 'PAPER') {
        if (computerSelection === 'SCISSORS') {
            return alert(playerLose);
        } else if (computerSelection === 'ROCK') {
            return alert(playerWin);
        }
    }
    else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK') {
            return alert(playerLose);
        }
        else if (computerSelection === 'PAPER') {
            return alert(playerWin);
        }
    }
    else {
        return alert("That is not a valid answer!")
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Please enter your choice of rock, paper, or scissors:", "");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}