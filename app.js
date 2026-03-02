// app.js
// Rock-Paper-Scissors Game

// Initialize scores
let userScore = 0;
let computerScore = 0;

// DOM elements
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const resetBtn = document.querySelector('#reset-btn');
resetBtn.disabled = true; // Disable reset button at the start of the game before a move is made or a page is refreshed

// Computer choices
const computerChoices = ['rock', 'paper', 'scissors'];

// Function to get computer's random choice
const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomIndex];
} 

// Function to handle a draw
const drawGame = () => {
    console.log('It\'s a tie!');
    msg.innerText = 'It\'s a tie!';
    msg.style.backgroundColor = 'orange';
}

// Function to play the game
const playGame = (userChoice) => {

    // console.log(`User choice: ${userChoice}`);

    const computerChoice = getComputerChoice();
    // console.log(`Computer choice: ${computerChoice}`);

    // Determine the winner
    if (userChoice === computerChoice) {
        drawGame();
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
               (userChoice === 'paper' && computerChoice === 'rock') ||
               (userChoice === 'scissors' && computerChoice === 'paper')) {
        console.log('You win!');

        msg.innerText = `You win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = 'green';
        userScore++;
    } else {
        console.log('Computer wins!');
        msg.innerText = `Computer wins! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = 'red';
        computerScore++;
    }
    // Update the score display
    updateScore();

    // console.log(`User Score: ${userScore} | Computer Score: ${computerScore}`);
}

// Add event listeners to choices
choices.forEach(choice => {
    // console.log(choice);

    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        // console.log(choice);
        // console.log(`User chose: ${userChoice}`);

        // Enable the reset button once a move is made or a page is refreshed
        resetBtn.disabled = false;

        // Play the game with the user's choice
        playGame(userChoice);
    });
});


// Function to update the score display
const updateScore = () => {
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('computer-score').textContent = computerScore;
}

// Add event listener to reset button
resetBtn.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    updateScore();
    msg.innerText = 'Game reset! Make your move!';
    msg.style.backgroundColor = '#081b31';
});
