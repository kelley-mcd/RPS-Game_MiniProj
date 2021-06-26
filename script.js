//rock paper siz game

//alert()`, `confirm()`, and `prompt()`
let wins = 0;
let ties = 0;
let loses = 0;

let options = ["R", "P", "S"];

let playGame = function () {

    let userChoice = window.prompt("Choose your player: R, P, or S");

    if (!userChoice) {
        return;
    }

    userChoice = userChoice.toUpperCase();

    let index = Math.floor(Math.random() * options.length);
    let computerChoice = options[index];


    if (userChoice === computerChoice) {
        ties++;
        window.alert("it's a tie");
    }
    else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")
    ) {
        wins++;
        window.alert("You win");
    }
    else {
        losses++;
        window.alert("you lost");
    }

    window.alert(
        "Stats:\nWins:" + wins + "\nLosses:" + losses + "\nTies:" + ties
    );

    if (playAgain) {
        playGame();
    }
};

playGame();