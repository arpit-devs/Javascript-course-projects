"use strict";

/*document.querySelector(".message").textContent = "Correct Number 🎉";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
*/

let secretNumber = Math.ceil(Math.random() * 20);
let score = 20;
let highscore = 0;

const checkGuess = function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No Value 🚫";
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈 Too high" : "📉 Too low";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".guess").value = "";
    } else {
      document.querySelector(".message").textContent = "💣You Lost";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number 🎉";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector(".highscore").textContent = highscore;
  }
};

const resetGame = function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.ceil(Math.random() * 20);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
};

document.querySelector(".check").addEventListener("click", checkGuess);

document.querySelector(".again").addEventListener("click", resetGame);

document.querySelector(".guess").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkGuess();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    resetGame();
  }
});
