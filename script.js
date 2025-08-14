
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

let playerChoice = document.querySelectorAll(".choice");
playerChoice.forEach(function (choice) {
    choice.addEventListener("click", function () {
        let playerSelection = this.id;
        let computerSelection = computerChoice();
        let result = document.querySelector(".result");

        if (playerSelection === computerSelection) {
            result.innerHTML = `It's a tie! You both chose ${playerSelection}`;
        } else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            result.innerHTML = `🎉 You win! ${playerSelection} beats ${computerSelection}`;
        } else {
            result.innerHTML = `💔 You lose! ${computerSelection} beats ${playerSelection}`;
        }
    });
});
