function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
  function hasPlayerWonTheRound(player, computer) {
    return (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    );
  }
  
  let playerScore = 0;
  let computerScore = 0;
  
  function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
  
    if (hasPlayerWonTheRound(userOption, computerResult)) {
      playerScore++;
      return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (computerResult === userOption) {
      return `It's a tie! Both chose ${userOption}`;
    } else {
      computerScore++;
      return `Computer wins! ${computerResult} beats ${userOption}`;
    }
  }
  
  const playerScoreSpanElement = document.getElementById("player-score");
  const computerScoreSpanElement = document.getElementById("computer-score");
  const roundResultsMsg = document.getElementById("results-msg");
  const winnerMsgElement = document.getElementById("winner-msg");
  const optionsContainer = document.querySelector(".options-container");
  const resetGameBtn = document.getElementById("reset-game-btn");
  
  function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
  
    // Check if there's a winner
    if (playerScore === 3) {
      winnerMsgElement.innerText = "Player has won the game!";
      endGame();
    } else if (computerScore === 3) {
      winnerMsgElement.innerText = "Computer has won the game!";
      endGame();
    }
  }
  
  function endGame() {
    // Hide options and show reset button
    optionsContainer.style.display = "none";
    resetGameBtn.style.display = "block";
  }
  
  function resetGame() {
    // Reset scores and UI
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    roundResultsMsg.innerText = "";
    winnerMsgElement.innerText = "";
  
    // Show options and hide reset button
    optionsContainer.style.display = "block";
    resetGameBtn.style.display = "none";
  }
  
  const rockBtn = document.getElementById("rock-btn");
  const paperBtn = document.getElementById("paper-btn");
  const scissorsBtn = document.getElementById("scissors-btn");
  resetGameBtn.addEventListener("click", resetGame);
  
  rockBtn.addEventListener("click", function () {
    showResults("Rock");
  });
  
  paperBtn.addEventListener("click", function () {
    showResults("Paper");
  });
  
  scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
  });
  
  // Hide the reset button initially
  resetGameBtn.style.display = "none";
  