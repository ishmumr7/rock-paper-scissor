let playerPoint = 0;
let computerPoint = 0;

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

function getPlayerChoice() {
    while (true) {
        choice = prompt("Enter 'Rock', 'Paper' or 'Scissors': ");
        if (
            choice.toLowerCase() === 'rock' ||
            choice.toLowerCase() === 'paper' ||
            choice.toLowerCase() === 'scissors') {
            return choice;
        } else {
            alert("Invalid choice! Try again.");
        }
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice.toLowerCase() === computerChoice) {
        return "Tie!";
    }
    else if (
        playerChoice.toLowerCase() === 'rock' &&
        computerChoice === 'paper') {
        computerPoint++;
        return "You lose! Paper beats Rock";
    }
    else if (
        playerChoice.toLowerCase() === 'paper' &&
        computerChoice === 'scissors') {
        computerPoint++;
        return "You lose! Scissors beat Paper";
    }
    else if (
        playerChoice.toLowerCase() === 'rock' &&
        computerChoice === 'scissors') {
        playerPoint++;
        return "You win! Rock beats Scissors";
    }
    else if (
        playerChoice.toLowerCase() === 'paper' &&
        computerChoice === 'rock') {
        playerPoint++;
        return "You win! Paper beats Rock";
    }
    else if (
        playerChoice.toLowerCase() === 'scissors' &&
        computerChoice === 'paper') {
        playerPoint++;
        return "You win! Scissors beat Paper";
    }
    else if (
        playerChoice.toLowerCase() === 'scissors' &&
        computerChoice === 'rock') {
        computerPoint++;
        return "You lose! Scissors beat Rock";
    }
}

function game() {
    while (playerPoint < 5 && computerPoint < 5) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
        console.log("You: " + playerPoint + "\tComputer: " + computerPoint);
    }

    if (playerPoint === 5) {
        console.log("You Win!");
    } else if (computerPoint === 5) {
        console.log("You Lose!");
    }
}

game();