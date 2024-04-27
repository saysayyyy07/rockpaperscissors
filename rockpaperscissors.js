const HUMAN_SELECTION = getHumanChoice();
const COMPUTER_SELECTION = getComputerChoice()


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


function getHumanChoice() {
    humanChoice = prompt("What is your move? (rock, paper or scissors)").toLowerCase();
    return humanChoice
}

    

function playRound(computerChoice, humanChoice) {
    if (computerChoice == "scissors") {
        if (humanChoice == "paper") {
            console.log("You lose. Scissors beats Paper.")
            return "computerWins"
        } else if (humanChoice == "rock") {
            console.log("You win! Rock beats Scissors.")
            return "humanWins"
        } else if (humanChoice == "scissors") {
        console.log("It's a tie. Scissors ignores Scissors. No points awarded.")
        } else {
        console.log("invalid input. try again")
        }

    } else if (computerChoice == "paper") {
        if (humanChoice == "scissors") {
            console.log("You win! Scissors beats Paper.")
            return "humanWins"
        } else if (humanChoice == "rock") {
            console.log("You lose. Paper beats Rock.")
            return "computerWins"
        } else if (humanChoice == "paper") {
        console.log("It's a tie. Paper ignores Paper. No points awarded.")
        } else {
        console.log("invalid input. try again")
        }
    } else if (computerChoice == "rock") {
        if (humanChoice == "paper") {
            console.log("You win! Paper beats Rock.")
            return "humanWins"
        } else if (humanChoice == "scissors") {
            console.log("You lose. Rock beats Scissors.")
            return "computerWins"
        } else if (humanChoice == "rock") {
        console.log("It's a tie. Rock ignores Rock. No points awarded.")
        } else {
        console.log("invalid input. try again")
        }
    } else {
        console.log("Something's gone wrong. Try refreshing, and try again.")
    }
}


function playGame(computerSelection, humanSelection) {
    let humanScore = 0;
    let computerScore = 0;


    for (i = 1; i <= 5; i++) {
        playRound(computerSelection, humanSelection)
        if (playRound() == "computerWins") {
            computerScore++
        } else if (playRound() == "humanWins") {
            humanScore++
        }
        console.log(`The current score is Computer: ${computerScore} and You: ${humanScore}`)
    }

    if (computerScore > humanScore) {
        console.log(`The final winner is the Computer (boooo). 
        Computer: ${computerScore} and You: ${humanScore} `)
    } else {
        console.log(`The final winner is You!!! (yayyyyy). 
        Computer: ${computerScore} and You: ${humanScore} `)
    }
}


playGame(COMPUTER_SELECTION, HUMAN_SELECTION);

