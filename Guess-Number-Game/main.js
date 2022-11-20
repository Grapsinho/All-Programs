"use strict";

//buttons
const again = document.querySelector(".again");
const check = document.querySelector(".check");

//changed variables for count score
let guessNum = 20;
let saveScore = 0;

//some unchanged variables
const body = document.querySelector(".body");
const massage = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");

highScore.textContent = `🥇 HighScore: ${saveScore}`;

let randomNum = Math.floor(Math.random() * 20) + 1;

//these are buttons
check.addEventListener("click", checkBTN);
again.addEventListener("click", againBTN);

//function for check answers
function checkAnswer(inp) {
  if (inp === randomNum) {
    //if input value will be secret number body bg will change to green
    body.style.backgroundColor = "#60b347";
    massage.textContent = "🎉 Correct Number!";
    //if our score will be more then high score high score will change to score=(guessNum)
    //and high score will be score
    //if score is less then high score high score will not change
    if (guessNum > saveScore) {
      saveScore = guessNum;
      highScore.textContent = `🥇 HighScore: ${saveScore}`;
    }
    // and if our input doesn't equal to secret number then...
  } else if (inp !== randomNum) {
    //and the game is not over
    if (guessNum > 0) {
      //this statement will happen
      guessNum--;
      massage.textContent =
        inp < randomNum
          ? (massage.textContent = "📉 Too low!")
          : (massage.textContent = "📈 Too High!");

      if (guessNum === 0) {
        massage.textContent = "🔥 You lost the game!, Start again";
        guessNum = 20;
      } else if (inp > 20) {
        massage.textContent = "🙏 Please choose smaller number!";
        guessNum = guessNum;
      } else if (inp <= 0) {
        massage.textContent = "🙏 Please choose higher number!";
        guessNum = guessNum;
      }
    }
  }
}

//this function is for our check button
function checkBTN() {
  //this is input
  let input = document.getElementById("number");
  input = Number(input.value);
  checkAnswer(input);

  score.textContent = `💯 Score: ${guessNum}`;
}

//this function is for our again button
//we restart the game in here
function againBTN() {
  randomNum = Math.floor(Math.random() * 20) + 1;
  guessNum = 21;

  let input = document.getElementById("number");
  input.value = "";
  input = Number(input.value);
  body.style.backgroundColor = "rgb(36, 36, 36)";

  checkAnswer(input);

  massage.textContent = "🎉 Start Guessing...";
  score.textContent = `💯 Score: ${guessNum}`;
}
