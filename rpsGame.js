let playerScore = 0;
let computerScore = 0;
let ties = 0;

function getComputerChoice() { 
    let number = Math.floor(Math.random() * (4 - 1) + 1); // Calculates an interger of 1-3
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

function whoWins(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    let playerLose = `You lose! ${computerSelection} beats ${playerSelection}`;
    let playerWin = `You win! ${playerSelection} beats ${computerSelection}`;

    if (playerSelection === computerSelection) {
        //alert("It's a tie!");
        return 'Tie';
    }
    else if (playerSelection === 'ROCK') {
        if (computerSelection === 'PAPER') {
           // alert(playerLose);
            return 'Computer';
        } else if (computerSelection === 'SCISSORS') {
            //alert(playerWin);
            return 'Player';
        }
    }
    else if (playerSelection === 'PAPER') {
        if (computerSelection === 'SCISSORS') {
            //alert(playerLose);
            return 'Computer';;
        } else if (computerSelection === 'ROCK') {
            //alert(playerWin);
            return 'Player';
        }
    }
    else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK') {
            //alert(playerLose);
            return 'Computer';
        }
        else if (computerSelection === 'PAPER') {
            //alert(playerWin);
            return 'Player';
        }
    }
}

function playRound(playerChoice) {
    const cpuChoice = getComputerChoice();
    let winner = whoWins(playerChoice, cpuChoice);
    
    if (winner === 'Player') {
        playerScore++;
        document.getElementById('playerScore').innerText = `Player Score: ${playerScore}`;
    }

    if (winner === 'Computer') {
        computerScore++;
        document.getElementById('cpuScore').innerText = `Computer Score: ${computerScore}`;
    }

    if (winner === 'Tie') {
        ties++;
        document.getElementById('ties').innerText = `Ties: ${ties}`;
    }
    
    return winner;
}

function newGame() { //Resets all points to 0
    playerScore = 0;
    computerScore = 0;
    ties = 0;
    alert('Scores are reset!')
    document.getElementById('playerScore').innerText = `Player Score: 0`;
    document.getElementById('cpuScore').innerText = `Computer Score: 0`;
    document.getElementById('ties').innerText = `Ties: 0`;
    return;
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
    
    
rock.addEventListener('click', function () { 
    let winner = playRound('ROCK');
    console.log(winner);
    if (playerScore == 5) {
        alert('Congrats! You win!');
        newGame();
    }
    if (computerScore == 5) {
        alert('Sorry, you lose!');
        newGame();
    }
});

paper.addEventListener('click', function () {
    let winner = playRound('PAPER');
    console.log(winner);
    if (playerScore == 5) {
        alert('Congrats! You win!');
        newGame();
    }
    if (computerScore == 5) {
        alert('Sorry, you lose!');
        newGame();
    }
});

scissors.addEventListener('click', function () {
    let winner = playRound('SCISSORS');
    console.log(winner);
    if (playerScore == 5) {
        alert('Congrats! You win!');
        newGame();
    }
    if (computerScore == 5) {
        alert('Sorry, you lose!');
        newGame();
    }
});