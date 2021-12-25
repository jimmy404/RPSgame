const computerPlay = () => {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};

const playSingleRound = (playerSelection) => {
  let computerSelection = computerPlay();
  let result = "";

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scisors" && computerSelection == "paper")
  ) {
    userScore++;
    result = `You win! <br>You chose: ${playerSelection}<br>Your opponent chose: ${computerSelection}<br><br>Player score: ${userScore}<br>Computer score: ${computerScore}`;
    if (userScore === 5) {
      result += "<br>You won the best of 5! Congratulations!!!";
      disableButton();
    }
  } else if (playerSelection === computerSelection) {
    result = `Its a tie!<br>You chose: ${playerSelection}<br>Your opponent chose: ${computerSelection}<br><br>Player score: ${userScore}<br>Computer score: ${computerScore}`;
  } else {
    computerScore++;
    result = `You lose!<br>You chose: ${playerSelection}<br>Your opponent chose: ${computerSelection}<br><br>Player score: ${userScore}<br>Computer score: ${computerScore}`;
    if (computerScore === 5) {
      result += `<br>Sorry! You lost the best of 5!`;
      disableButton();
    }
  }
  document.getElementById("result").innerHTML = result;
};
