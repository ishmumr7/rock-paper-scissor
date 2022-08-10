//player points declaration
let playerPoint = 0;
let computerPoint = 0;

//Display the initial scores
updateScore();

//Get the buttons and play a round once clicked
const btns = document.querySelectorAll('#btn');
btns.forEach(btn => btn.addEventListener('click', (e) => {
    let playerChoice = btn.dataset.choice;
    let computerChoice = getComputerChoice();
    
    playRound(playerChoice, computerChoice);
    if (playerPoint >= 5 || computerPoint >= 5) {
        return displayResult();
    }
}));

//Function declarations
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1

    switch (choice) {
        case 1:
            return 'rock';

        case 2:
            return 'paper';

        case 3:
            return 'scissors';
    }
}

function playRound(playerChoice, computerChoice) {
    let comment = document.querySelector('.comment');

    if (playerChoice === computerChoice) {
        comment.innerText = "Tie!";
    }
    else if (
        playerChoice === 'rock' &&
        computerChoice === 'paper') {
        computerPoint++;
        comment.innerText = "You lose! Paper beats Rock";
    }
    else if (
        playerChoice === 'paper' &&
        computerChoice === 'scissors') {
        computerPoint++;
        comment.innerText = "You lose! Scissors beat Paper";
    }
    else if (
        playerChoice === 'rock' &&
        computerChoice === 'scissors') {
        playerPoint++;
        comment.innerText = "You win! Rock beats Scissors";
    }
    else if (
        playerChoice === 'paper' &&
        computerChoice === 'rock') {
        playerPoint++;
        comment.innerText = "You win! Paper beats Rock";
    }
    else if (
        playerChoice === 'scissors' &&
        computerChoice === 'paper') {
        playerPoint++;
        comment.innerText = "You win! Scissors beat Paper";
    }
    else if (
        playerChoice === 'scissors' &&
        computerChoice === 'rock') {
        computerPoint++;
        comment.innerText = "You lose! Scissors beat Rock";
    }

    updateScore();
}

function updateScore() {
    let you = document.querySelector('.you .points');
    let comp = document.querySelector('.computer .points');
    
    you.innerText = playerPoint;
    comp.innerText = computerPoint;
}

function displayResult() {
    selection = document.querySelector('.selection');
    result = document.querySelector('.result');

    //hide selection
    selection.classList.add('hidden');

    //unhide result
    result.classList.remove('hidden');

    if (playerPoint === 5) {
        result.innerHTML = "<span>You Win!</span>";
    } else if (computerPoint === 5) {
        result.innerHTML = "<span>You Lose!</span>";
    }

    result.innerHTML += "<a href='./index.html'><button>Play Again</button></a>";
}
