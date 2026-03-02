let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const computerChoices = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomIndex];
} 

const drawGame = () => {
    console.log('It\'s a tie!');
    msg.innerText = 'It\'s a tie!';
    msg.style.backgroundColor = 'orange';
}


const playGame = (userChoice) => {
    console.log(`User choice: ${userChoice}`);
    const computerChoice = getComputerChoice();
    console.log(`Computer choice: ${computerChoice}`);
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
    updateScore();
    console.log(`User Score: ${userScore} | Computer Score: ${computerScore}`);
}

choices.forEach(choice => {
    // console.log(choice);
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        // console.log(choice);
        // console.log(`User chose: ${userChoice}`);
        playGame(userChoice);
    });
});



const updateScore = () => {
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('computer-score').textContent = computerScore;
}