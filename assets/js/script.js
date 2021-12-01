// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them 

document.addEventListener("DOMContentLoaded",function (){
    let buttons = document.getElementsByTagName("button")
    // for (let i = 0; i <<button.length; i++ ) OLD way of doing it
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                // alert(`You clicked ${gameType}`); to run the game see below the parameter is "gameType"
                runGame(gameType);
            }
        })
    }  
    
    runGame("addition");


})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame (gameType) {

    // Creates two random nummbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`unknown game type: ${gameType}`);
        throw `Unkonwn game type: ${gameType}.Aborting!`;
    }



}

// runGame();  This pops up the description for the DOcstring in JS so you know the description without having to search for where it was placed in the script

function checkAnswer () {

}

function incrementScore () {

}

function incrementWrongAnswer () {

}

function displayAdditionQuestion (operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}


function displaySubtractQuestion () {
    
}

function displaMultiplyQuestion () {
    
}

// TEST one for me to do DIVIDE function displayDivideQuestion () {
    
// }