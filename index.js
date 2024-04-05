const diceImages = [
  "dice1.png",
  "dice2.png",
  "dice3.png",
  "dice4.png",
  "dice5.png",
  "dice6.png",
];
let player1Score = 0;
let player2Score = 0;
var winningScore = 20;

initializeScore();

// Function that initialize score
function initializeScore() {
  document.getElementById("winningScore").innerText = `"${winningScore}"`;
  document.getElementById("winningScoreInput").value = winningScore;
}

// Function that handle roll of dice
function rollDice() {
  const dice1Value = Math.floor(Math.random() * 6) + 1;
  const dice2Value = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice1").classList.add("shrink");
  document.getElementById("dice2").classList.add("shrink");

  setTimeout(() => {
    document.getElementById("dice1").src = diceImages[dice1Value - 1];
    document.getElementById("dice2").src = diceImages[dice2Value - 1];

    document.getElementById("dice1").classList.remove("shrink");
    document.getElementById("dice2").classList.remove("shrink");
    document.getElementById("dice1").classList.add("expand");
    document.getElementById("dice2").classList.add("expand");

    setTimeout(() => {
      document.getElementById("dice1").classList.remove("expand");
      document.getElementById("dice2").classList.remove("expand");
    }, 500);
  }, 500);

  const scoreDiff = Math.abs(dice1Value - dice2Value);
  if (dice1Value > dice2Value) {
    player1Score += scoreDiff;
  } else if (dice2Value > dice1Value) {
    player2Score += scoreDiff;
  }

  document.getElementById("player1Score").textContent = player1Score;
  document.getElementById("player2Score").textContent = player2Score;

  checkWinner();
}

// Function that check winner
function checkWinner() {
  if (player1Score >= winningScore) {
    alert("Player 1 wins!");
    resetGame();
  } else if (player2Score >= winningScore) {
    alert("Player 2 wins!");
    resetGame();
  }
}

// Function that reset game after winning
function resetGame() {
  player1Score = 0;
  player2Score = 0;
  document.getElementById("player1Score").textContent = player1Score;
  document.getElementById("player2Score").textContent = player2Score;
  document.getElementById("dice1").src = diceImages[0];
  document.getElementById("dice2").src = diceImages[0];
}

function changeWinningScore() {
  winningScore = document.getElementById("winningScoreInput").value;
  initializeScore();
}

document.getElementById("rollBtn").addEventListener("click", rollDice);
