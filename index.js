function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];

    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case "ROCK":
            if(computerSelection == "PAPER") {
                return "You Lose! Paper beats Rock";
            } else if(computerSelection == "ROCK") {
                return "You Tied! Rock ties with Rock";
            } else {
                return "You Won! Rock beats Scissors";
            }
        case "PAPER":
            if(computerSelection == "SCISSORS") {
                return "You Lose! Scissors beats Paper";
            } else if(computerSelection == "PAPER") {
                return "You Tied! Paper ties with Paper";
            } else {
                return "You Won! Paper beats Rock";
            }
        case "SCISSORS":
            if(computerSelection == "ROCK") {
                return "You Lose! Rock beats Scissors";
            } else if(computerSelection == "SCISSORS") {
                return "You Tied! Scissors ties with Scissors";
            } else {
                return "You Won! Scissors beats Paper";
            }
    }
}

function game() {
    let score = [0, 0, 0];

    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("Pick one of the following (Rock, Paper, Scissors): ").toUpperCase();
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        switch(result.charAt(4)) {
            case "W":
                score[0]++;
                break;
            case "L":
                score[1]++;
                break;
            case "T":
                score[2]++;
        }

        console.log("Score (Wins, Lost, Ties): ", score[0], score[1], score[2]);
    }

    if(score[0] > score[1]) {
        console.log("You won the game!");
    } else if(score[1] > score[1]) {
        console.log("You lost the game!");
    } else {
        console.log("You tied in the game!");
    }
}

game()
