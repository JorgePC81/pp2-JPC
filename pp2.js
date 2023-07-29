/*constants and variables for the game's logic*/

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

/* adding text to the Actions through clicking the button. Also calling function computerChance(), to be developed */
choiceBtns.forEach(button => button.addEventListener("click", () => {
       
      player = button.textContent;
      computerChance();
      playerText.textContent = `player: ${player}`;
      computerText.textContent = `computer: ${computer}`;
      resultText.textContent = checkWinner();
}));