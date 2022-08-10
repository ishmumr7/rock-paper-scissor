        //player points declaration
        let playerPoint = 0;
        let computerPoint = 0;

        //Get the buttons and play a round once clicked
        const btns = document.querySelectorAll('#btn');
        btns.forEach(btn => btn.addEventListener('click', (e) => {
            let playerChoice = btn.dataset.choice;
            let computerChoice = getComputerChoice();
            console.log(playRound(playerChoice, computerChoice));
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
            if (playerChoice === computerChoice) {
                return "Tie!";
            }
            else if (
                playerChoice === 'rock' &&
                computerChoice === 'paper') {
                computerPoint++;
                return "You lose! Paper beats Rock";
            }
            else if (
                playerChoice === 'paper' &&
                computerChoice === 'scissors') {
                computerPoint++;
                return "You lose! Scissors beat Paper";
            }
            else if (
                playerChoice === 'rock' &&
                computerChoice === 'scissors') {
                playerPoint++;
                return "You win! Rock beats Scissors";
            }
            else if (
                playerChoice === 'paper' &&
                computerChoice === 'rock') {
                playerPoint++;
                return "You win! Paper beats Rock";
            }
            else if (
                playerChoice === 'scissors' &&
                computerChoice === 'paper') {
                playerPoint++;
                return "You win! Scissors beat Paper";
            }
            else if (
                playerChoice === 'scissors' &&
                computerChoice === 'rock') {
                computerPoint++;
                return "You lose! Scissors beat Rock";
            }
        }

        function displayResult() {
            if (playerPoint === 5) {
                console.log("You Win!");
            } else if (computerPoint === 5) {
                console.log("You Lose!");
            }
        }