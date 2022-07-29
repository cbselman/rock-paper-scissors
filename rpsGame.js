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

    document.getElementById("cpu").innerText = computerChoice;
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
    document.getElementById("player").innerText = playerChoice;
    
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
    
    return;
}

function newGame() { //Resets all points to 0
    playerScore = 0;
    computerScore = 0;
    ties = 0;
    document.getElementById('playerScore').innerText = `Player Score: 0`;
    document.getElementById('cpuScore').innerText = `Computer Score: 0`;
    document.getElementById('ties').innerText = `Ties: 0`;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    return;
}

function gameOver() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    if (playerScore == 5) winnerBox.innerText = 'Congrats, you win!';
    if (computerScore == 5) winnerBox.innerText = 'Sorry, you lose!';
    playAgain.style.visibility = "visible";
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const winnerBox = document.querySelector('#winner');
const playAgain = document.getElementById('playAgain');
    
    
rock.addEventListener('click', function () { 
    playRound('ROCK');
    if (playerScore == 5 || computerScore == 5) {
        gameOver();
    }

});

paper.addEventListener('click', function () {
    playRound('PAPER');
    if (playerScore == 5 || computerScore == 5) {
        gameOver();
    }
});

scissors.addEventListener('click', function () {
    playRound('SCISSORS');
    if (playerScore == 5 || computerScore == 5) {
        gameOver();
    }
});

playAgain.addEventListener('click', function() {
    newGame();
    winnerBox.innerText = "";
    playAgain.style.visibility = "hidden";
})