// Global variables.
const userChoices = document.getElementsByClassName('choice');
const roundText = document.getElementById('round-text');

let playerChoice;
let computerChoice

let scoreHTML = document.getElementsByClassName('score')[0];
let computerHTML = document.getElementsByClassName('comp-score')[0];


// Default score values
let playerScore = 0;
let computerScore = 0;

/**
 * Loops over each choice
 * Adds an event listener to each choice.
 */
 for (let choice of userChoices) {
    choice.addEventListener('click', playGame);
}

/**
 * Creates an array of choices.
 * Generates a random choice from choices array.
 * Assigns random choice to ComputerChoice variable.
 */
 function generateComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoice = randomChoice;
    displayComputerChoice();
}


/**
 * Checks a concatenated string of userChoice and ComputerChoice.
 * Element with an ID of round-text is targeted and its innerHTML is set to notify the user if they are the round winner, round loser or if the round is a draw.
 * User score is incremented if they have won the round.
 * Computer score is incremented if they have won the round.
 * 
 * If answer is Player+Computer = case answers then round text inner goes in the span with the results
 */
 function getResult() {
    switch (playerChoice + computerChoice) {
        case 'rockscissors':
        case 'rocklizard':
        case 'paperrock':
        case 'paperspock':
        case 'scissorspaper':
        case 'scissorslizard':
        case 'lizardpaper':
        case 'lizardspock':
        case 'spockscissors':
        case 'spockrock':
            console.log('You win!');
            roundText.innerHTML = 'Player Wins this time!';
            incrementPlayerScore(scoreHTML);
            break;
        case 'scissorsrock':
        case 'lizardrock':
        case 'rockpaper':
        case 'spockpaper':
        case 'paperscissors':
        case 'lizardscissors':
        case 'paperlizard':
        case 'spocklizard':
        case 'scissorsspock':
        case 'rockspock':
            roundText.innerHTML = 'Computer Wins this time!';
            incrementComputerScore(computerHTML);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
        case 'lizardlizard':
        case 'spockspock':
            roundText.innerHTML = 'Tie break!';
            break;
    }
}

