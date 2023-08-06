/*constants and variables for the game's logic*/

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const score = document.querySelector("#scoring");
const attempts = document.querySelector("#totalAttempts");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;
let playerScore = 0;
let computerScore = 0;

/* adding text to the Actions through clicking the button. Also calling function computerChance(), to be developed */
choiceBtns.forEach(button => button.addEventListener("click", () => {
       
      player = button.textContent;
      computerChance();
      playerText.textContent = `Player: ${player}`;
      computerText.textContent = `Computer: ${computer}`;
      resultText.textContent = checkWinner();
      liveScore();
      score.textContent = playerScore;
      score.textContent = computerScore;

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

//create function that shows the specific picture when paper, rock, scissors, lizard or spock wins//


function checkWinner(){

    if(player == computer){
        displayImage("/assets/images/tie.jpeg", 200, 200);
        return "It's A Tie!!";
    }
    else if(player == "Rock"){
        if(computer == "Scissors" || computer == "Lizard"){
            displayImage("/assets/images/rock.jpeg", 200, 200);
            return "Player Wins!!";
        }
        else if(computer == "Paper" || computer == "Spock"){
            displayImage(`/assets/images/${computer.toLowerCase()}.jpeg`, 200, 200);
            return "Computer Wins!!";
        }
    }
    else if(player == "Paper"){
        if(computer == "Rock" || computer == "Spock"){
            displayImage("/assets/images/paper.jpeg", 200, 200);
            return "Player Wins!!";
        }
        else if(computer == "Scissors" || computer == "Lizard"){
            displayImage(`/assets/images/${computer.toLowerCase()}.jpeg`, 200, 200);
            return "Computer Wins!!";
        }
    }
    else if(player == "Scissors"){
        if(computer == "Paper" || computer == "Lizard"){
            displayImage("/assets/images/scissors.jpeg", 200, 200);
            return "Player Wins!!";
        }
        else if(computer == "Rock" || computer == "Spock"){
            displayImage(`/assets/images/${computer.toLowerCase()}.jpeg`, 200, 200);
            return "Computer Wins!!";
        }
    }
    else if(player == "Lizard"){
        if(computer == "Paper" || computer == "Spock"){
            displayImage("/assets/images/lizard.jpeg", 200, 200);
            return "Player Wins!!";
        }
        else if(computer == "Rock" || computer == "Scissors"){
            displayImage(`/assets/images/${computer.toLowerCase()}.jpeg`, 200, 200);
            return "Computer Wins!!";
        }
    }
    else if(player == "Spock"){
        if(computer == "Scissors" || computer == "Rock"){
            displayImage("/assets/images/spock.jpeg", 200, 200);
            return "Player Wins!!";
        }
        else if(computer == "Paper" || computer == "Lizard"){
            displayImage(`/assets/images/${computer.toLowerCase()}.jpeg`, 200, 200);
            return "Computer Wins!!";
        }
    }
}

//function liveScore, to show the winner and loser (no workiing yet)//

function liveScore(){

    
        if (checkWinner() === "Player Wins!!"){
            playerScore++;
        }
        else if (checkWinner() === "Computer Wins!!"){
            computerScore++;
        }
    
}