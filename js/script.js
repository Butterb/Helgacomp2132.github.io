let playerTotalScore = 0;
let computerTotalScore = 0;
let rounds = 0;
let playerName = '';


//Pop up box to enter Player name
document.addEventListener('DOMContentLoaded', () => {
    playerName = prompt("Please enter your name:");
    if (playerName === null || playerName.trim() === '') {
        playerName = 'Player';
    }
    document.getElementById('playerName').textContent = playerName;
});

//Rolling dice and adding dice together
function rollDice() {
    if (rounds < 3) { //total 3 rounds
        var playerDice = [rollDie(), rollDie()];
        var computerDice = [rollDie(), rollDie()];

        var playerRoundScore = calculateScore(playerDice); //add player dice
        var computerRoundScore = calculateScore(computerDice); //add computer dice

        playerTotalScore += playerRoundScore; //add player total
        computerTotalScore += computerRoundScore; //add computer total

        updateDisplay(playerDice, playerRoundScore, playerTotalScore, computerDice, computerRoundScore, computerTotalScore);

        rounds++;

        if (rounds === 3) {
            declareWinner();
        }
    }
}

//Function to roll dice (random)
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}
document.getElementById('rollDiceButton').addEventListener('click', rollDice);

//Function to calculate dice
function calculateScore(dice) {
    if (dice.includes(1)) {
        return 0;
    } else if (dice[0] === dice[1]) {
        return (dice[0] + dice[1]) * 2;
    } else {
        return dice[0] + dice[1];
    }
}

//Display of dice and score
function updateDisplay(playerDice, playerRoundScore, playerTotalScore, computerDice, computerRoundScore, computerTotalScore) {
    document.getElementById('playerDice1').src = `images/dice_${playerDice[0]}.png`;
    document.getElementById('playerDice2').src = `images/dice_${playerDice[1]}.png`;
    document.getElementById('playerRoundScore').textContent = playerRoundScore;
    document.getElementById('playerTotalScore').textContent = playerTotalScore;

    document.getElementById('computerDice1').src = `images/dice_${computerDice[0]}.png`;
    document.getElementById('computerDice2').src = `images/dice_${computerDice[1]}.png`;
    document.getElementById('computerRoundScore').textContent = computerRoundScore;
    document.getElementById('computerTotalScore').textContent = computerTotalScore;
}

//Function to declare winner
function declareWinner() {
    let winnerMessage = 'It\'s a tie!';
    if (playerTotalScore > computerTotalScore) {
        winnerMessage = `${playerName} wins!`;
    } else if (computerTotalScore > playerTotalScore) {
        winnerMessage = 'Computer wins!';
    }
    document.getElementById('winnerMessage').textContent = winnerMessage;
}

//Function to play again
function resetGame() {
    playerTotalScore = 0;
    computerTotalScore = 0;
    rounds = 0;
    document.getElementById('playerDice1').src = 'images/dice_1.png';
    document.getElementById('playerDice2').src = 'images/dice_1.png';
    document.getElementById('playerRoundScore').textContent = '';
    document.getElementById('playerTotalScore').textContent = '';
    document.getElementById('computerDice1').src = 'images/dice_1.png';
    document.getElementById('computerDice2').src = 'images/dice_1.png';
    document.getElementById('computerRoundScore').textContent = '';
    document.getElementById('computerTotalScore').textContent = '';
    document.getElementById('winnerMessage').textContent = '';
}
document.getElementById('resetGameButton').addEventListener('click', resetGame);