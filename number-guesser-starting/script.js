let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10)
}

function compareGuesses(humanGuessInput, computerGuessDisplay, targetNumberDisplay) {
    let answerOne = targetNumberDisplay - humanGuessInput;
    let answerTwo = targetNumberDisplay - computerGuessDisplay;

    if (answerOne > answerTwo) {
        return true;
    } else {
        return false;
    }
}

function updateScore(winnerDisplay) {
    if (winnerDisplay === 'human') {
        humanScore++;
    } else if (winnerDisplay === 'computer') {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}
