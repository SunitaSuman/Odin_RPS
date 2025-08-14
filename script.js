let computerChoice = function () {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x === 1) {
        return "rock";
    } else if (x === 2) {
        return "paper";
    } else {
        return "scissors";
    }
};


let playerScore = 0;
let computerScore = 0;
let ties = 0;
let roundsPlayed = 0;
const totalRounds = 5;

let playerChoice = document.querySelectorAll(".choice");
let result = document.querySelector(".result");

playerChoice.forEach(function (choice) {
    choice.addEventListener("click", function () {
        if (roundsPlayed >= totalRounds) {
            result.innerHTML = "Game over! Refresh to play again.";
            return;
        }

        let playerSelection = this.id;
        let computerSelection = computerChoice();
        roundsPlayed++;

        if (playerSelection === computerSelection) {
            ties++;
            result.innerHTML = `Round ${roundsPlayed}: It's a tie! You both chose ${playerSelection}`;
        } else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            playerScore++;
            result.innerHTML = `Round ${roundsPlayed}: 🎉 You win! ${playerSelection} beats ${computerSelection}`;
        } else {
            computerScore++;
            result.innerHTML = `Round ${roundsPlayed}: 💔 You lose! ${computerSelection} beats ${playerSelection}`;
        }


        result.innerHTML += `<br>Score — You: ${playerScore} | Computer: ${computerScore} | Ties: ${ties}`;


        if (roundsPlayed === totalRounds) {
            setTimeout(() => {
                if (playerScore > computerScore) {
                    result.innerHTML = `🏆 Final Result: You won the game! ${playerScore} - ${computerScore}`;
                } else if (computerScore > playerScore) {
                    result.innerHTML = `😞 Final Result: Computer wins! ${computerScore} - ${playerScore}`;
                } else {
                    result.innerHTML = `🤝 Final Result: It's a draw! ${playerScore} - ${computerScore}`;
                }
            }, 500);
        }
    });
});
