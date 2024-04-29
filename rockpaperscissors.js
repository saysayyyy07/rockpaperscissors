const container = document.createElement("div");
const body = document.querySelector("body");
body.appendChild(container)

const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");

container.appendChild(btnRock);
container.appendChild(btnPaper);
container.appendChild(btnScissors);

btnRock.textContent = "Rock"
btnPaper.textContent = "Paper"
btnScissors.textContent = "Scissors"

btnRock.setAttribute("style", "background-color: lightBlue; height: 100px; width: 100px;")
btnPaper.setAttribute("style", "background-color: lightBlue; height: 100px; width: 100px;")
btnScissors.setAttribute("style", "background-color: lightBlue; height: 100px; width: 100px;")

let numberOfRounds = 0;

btnScissors.addEventListener("click", () => ++numberOfRounds)
btnPaper.addEventListener("click", () => ++numberOfRounds)
btnRock.addEventListener("click", () => ++numberOfRounds)




function getComputerChoice() {
    let randomNumber = Math.random()
    if (randomNumber < 1/3) {
        return "rock"
    } else if (randomNumber < 2/3 ) {
        return "paper"
    } else {
        return "scissors"
    }
}




btnRock.addEventListener("click", () => getHumanChoice("rock"));
btnPaper.addEventListener("click", () => getHumanChoice("paper"));
btnScissors.addEventListener("click", () => getHumanChoice("scissors"));

function getHumanChoice(humanChoice) {
    determineWinner(humanChoice)
}


let humanScore = 0;
let computerScore = 0;

function determineWinner(humanChoice) {
    let computerChoice = getComputerChoice();
    if (computerChoice == "rock" && humanChoice == "rock") currentRound.textContent = `It's a tie! ${humanChoice} vs ${computerChoice}!!`;
    else if (computerChoice == "paper" && humanChoice == "paper") currentRound.textContent = `It's a tie! ${humanChoice} vs ${computerChoice}!!`;
    else if (computerChoice == "scissors" && humanChoice == "scissors") currentRound.textContent = `It's a tie! ${humanChoice} vs ${computerChoice}!!`;
    else if (computerChoice == "rock" && humanChoice == "paper") {
        currentRound.textContent = `You win! ${humanChoice} beats ${computerChoice}!!`
        humanScore++
    }
    else if (computerChoice == "scissors" && humanChoice == "rock") {
        currentRound.textContent = `You win! ${humanChoice} beats ${computerChoice}!!`
        humanScore++
    }
    else if (computerChoice == "paper" && humanChoice == "scissors") {
        currentRound.textContent = `You win! ${humanChoice} beats ${computerChoice}!!`
        humanScore++
    }
    else if (computerChoice == "rock" && humanChoice == "scissors") {
        currentRound.textContent = `You lose. ${computerChoice} beats ${humanChoice}!!`
        computerScore++
    }
    else if (computerChoice == "scissors" && humanChoice == "paper") {
        currentRound.textContent = `You lose. ${computerChoice} beats ${humanChoice}!!`
        computerScore++
    }
    else if (computerChoice == "paper" && humanChoice == "rock") {
        currentRound.textContent = `You lose. ${computerChoice} beats ${humanChoice}!!`
        computerScore++
    } else {
        console.log("PANIC!! UNKNOWN MATCHUP")
    }
    displayRoundResults();
    displayGameResults();
}


const displayResults = document.createElement("div");
container.appendChild(displayResults);

function displayRoundResults() {
    displayResults.textContent = `The current score is Computer: ${computerScore} Human (you!): ${humanScore}`;
}

function displayGameResults() {
    if (humanScore == 5) {
        gameResults.textContent = `Congratulations! You are the winner! You beat the computer by ${humanScore - computerScore} point(s)!`
        humanScore = 0;
        computerScore = 0;
        setTimeout(clearGameResults, 5000)

    } else if (computerScore == 5) {
        gameResults.textContent = `Unlucky! You are the loser. You lost to the computer by ${computerScore - humanScore} point(s) hahah`
        humanScore = 0;
        computerScore = 0;
        setTimeout(clearGameResults, 5000)
    }
}

const currentRound = document.createElement("div");
container.appendChild(currentRound);

const gameResults = document.createElement("h2");
container.appendChild(gameResults);

function clearGameResults() {
    gameResults.textContent = ""
}






