// ROCK PAPER SCISSORS

const hands = ["rock", "paper", "scissors"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultsdisplay = document.getElementById("resultsdisplay");
const playerscore = document.getElementById("playerscore");
const computerscore = document.getElementById("computerscore");
const reset = document.getElementById("reset");
let com_score = 0;
let play_score = 0;

function playgame(playerchoice){

    const computerchoice = hands[Math.floor(Math.random() * 3)];
   let result = "";

   if(playerchoice === computerchoice){
    result = "IT'S A TIE!";
   }
   else{
    switch(playerchoice){
        case "rock":
            result = (computerchoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
            break;
        case "scissors":
            result = (computerchoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
            break;
        case "paper":
            result = (computerchoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
            break;
    }
   }
   resultsdisplay.classList.remove("greentext", "redtext");

   switch(result){
    case "YOU WIN!":
        resultsdisplay.classList.add("greentext");
        play_score++;
        break;
    case "YOU LOSE!":
        resultsdisplay.classList.add("redtext");
        com_score++;
        break;
   }

   playerdisplay.textContent = `PLAYER OPTION: ${playerchoice}`;
   computerdisplay.textContent = `COMPUTER OPTION: ${computerchoice}`;
   resultsdisplay.textContent = result;
   playerscore.textContent = `PLAYER SCORE: ${play_score}`;
   computerscore.textContent = `COMPUTER SCORE: ${com_score}`;

   if(play_score === 10 || com_score === 10) {
    if (play_score > com_score) {
      resultsdisplay.textContent = "PLAYER WINS THE GAME!";
    } 
    else {
      resultsdisplay.textContent = "COMPUTER WINS THE GAME!";
    }
    document.querySelectorAll("button").forEach(button => {
        button.disabled = true;
    })

    setTimeout(() => {
      com_score = 0;
      play_score = 0;
      playerdisplay.textContent = "PLAYER OPTION:";
      computerdisplay.textContent = "COMPUTER OPTION:";
      resultsdisplay.textContent = "";
      resultsdisplay.classList.remove("greentext", "redtext");
      playerscore.textContent = "PLAYER SCORE: 0";
      computerscore.textContent = "COMPUTER SCORE: 0";
      
      document.querySelectorAll("button").forEach((button) => {
        button.disabled = false;
      });
    }, 2000); 
  }
}
reset.addEventListener("click", function() {
    com_score = 0;
    play_score = 0;
    playerdisplay.textContent = "PLAYER OPTION:";
    computerdisplay.textContent = "COMPUTER OPTION:";
    resultsdisplay.textContent = "";
    resultsdisplay.classList.remove("greentext", "redtext");
    playerscore.textContent = "PLAYER SCORE: 0";
    computerscore.textContent = "COMPUTER SCORE: 0";
  });

