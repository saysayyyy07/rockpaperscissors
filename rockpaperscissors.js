
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
    return prompt("What is your move? (rock, paper or scissors)").toLowerCase() 
}

    

function playRound(computerChoice, humanChoice) {

    if (computerChoice == "scissors") {
        if (humanChoice == "paper") {
            return "computerWins"
        } else if (humanChoice == "rock") {
            return "humanWins"
        } else if (humanChoice == "scissors") {
        return "roundTie"
        } else {
        console.log("invalid input. try again")
        }

    } else if (computerChoice == "paper") {
        if (humanChoice == "scissors") {
            return "humanWins"
        } else if (humanChoice == "rock") {
            return "computerWins"
        } else if (humanChoice == "paper") {
        return "roundTie"
        } else {
        console.log("invalid input. try again")
        }
    } else if (computerChoice == "rock") {
        if (humanChoice == "paper") {
            return "humanWins"
        } else if (humanChoice == "scissors") {
            return "computerWins"
        } else if (humanChoice == "rock") {
            return "roundTie"
        } else {
            console.log("invalid input. try again")
            return "error: invalid input"
        
        }
    } else {
        console.log("Something's gone wrong. Try refreshing, and try again.")
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    
    for (i = 1; i <= 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        let roundOutcome = playRound(computerChoice, humanChoice);

        if (roundOutcome == "computerWins") {
            computerScore += 1
            console.log(`You lose. ${computerChoice} beats ${humanChoice}`)
        } else if (roundOutcome == "humanWins") {
            humanScore += 1
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        } else if (roundOutcome == "roundTie") {
            console.log(`It's a tie! ${humanChoice} ignores ${computerChoice}. Scores remain the same.`)
        } else {
            i -= 1
        }


        console.log(`The current score is Computer: ${computerScore} and You: ${humanScore}`)
    }

    if (computerScore > humanScore) {
        console.log(`The final winner is the Computer (boooo). 
        Computer: ${computerScore} and You: ${humanScore}`)
    } else if (computerScore < humanScore) {
        console.log(`The final winner is You!!! (yayyyyy). 
        Computer: ${computerScore} and You: ${humanScore}`)
    } else {
        console.log("The final result is a tie! Play again soon!")
    }
}


playGame();



