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
      playerText.textContent = `Player: ${player}`;
      computerText.textContent = `Computer: ${computer}`;
      resultText.textContent = checkWinner();
}));

/*function to obtain computer's choice*/

function computerChance(){
    const randNum = Math.floor(Math.random() * 5) + 1;

    switch(randNum){
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
        case 4:
            computer = "Lizard";
            break;
        case 5:
            computer = "Spock";
            break;
    }
}

/*logic of the main game, and different returns for different outcomes*/

/*function to display images (images no showing so far) */

function displayImage(url, width, height){
    let img = document.createElement("img");
    img.src = url;
    img.width = width;
    img.height = height;
    document.body.appendChild(img);
}             

displayImage("https://imgur.com/xXIrJQ8", 200, 200);
function checkWinner(){
    if(player === computer){
        return "It's A Tie!!";
        displayImage("https://imgur.com/IeXoxkz", 200, 200);
    }
    else if(player === "Rock"){
        displayImage("https://imgur.com/Xf1px6I", 200, 200);
        if(computer === "Scissors" || computer === "Lizard"){
            return "Player Wins!!";
        }
        else if(computer === "Paper" || computer === "Spock"){
            return "Computer Wins!!";
        }
    }
    else if(player === "Paper"){
        if(computer === "Rock" || computer === "Spock"){
            return "Player Wins!!";
        }
        else if(computer === "Scissors" || computer === "Lizard"){
            return "Computer Wins!!";
        }
    }
    else if(player === "Scissors"){
        if(computer === "Paper" || computer === "Lizard"){
            return "Player Wins!!";
        }
        else if(computer === "Rock" || computer === "Spock"){
            return "Computer Wins!!";
        }
    }
    else if(player === "Lizard"){
        if(computer === "Paper" || computer === "Spock"){
            return "Player Wins!!";
        }
        else if(computer === "Rock" || computer === "Scissors"){
            return "Computer Wins!!";
        }
    }
    else if(player === "Spock"){
        if(computer === "Scissors" || computer === "Rock"){
            return "Player Wins!!";
        }
        else if(computer === "Paper" || computer === "Lizard"){
            return "Computer Wins!!";
        }
    }
}
