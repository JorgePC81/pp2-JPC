/*constants and variables for the game's logic*/

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const score = document.querySelector("#scoring");
const attempts = document.querySelector("#totalAttempts");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const photoResult = document.querySelector("#photoResult");

let player;
let computer;
let result;
let playerScore = 0;
let computerScore = 0;

/* adding text to the Actions through clicking the button. Also calling function computerChance() or liveScore(). In addition, I developed the score.textContent function */
choiceBtns.forEach(button => button.addEventListener("click", () => {
       
      player = button.textContent;
      computerChance();
      playerText.textContent = `Player: ${player}`;
      computerText.textContent = `Computer: ${computer}`;
      const winner = checkWinner();
      resultText.textContent = winner
      liveScore(winner);
      score.textContent = `Player: ${playerScore} / Computer: ${computerScore}`;

}));

/*function to obtain computer's weapon choice*/

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


function checkWinner(){

    if(player == computer){
        displayImage('tie');
        return "It's A Tie!!";
    }
    else if(player == "Rock"){
        if(computer == "Scissors" || computer == "Lizard"){
           
            displayImage('rock');
            return "Player Wins!!";
        }
        else if(computer == "Paper" || computer == "Spock"){
           
            displayImage(computer);
            return "Computer Wins!!";
        }
    }
    else if(player == "Paper"){
        if(computer == "Rock" || computer == "Spock"){
          
            displayImage('paper');
            return "Player Wins!!";
        }
        else if(computer == "Scissors" || computer == "Lizard"){
           
            displayImage(computer);
            return "Computer Wins!!";
        }
    }
    else if(player == "Scissors"){
        if(computer == "Paper" || computer == "Lizard"){
         
            displayImage('scissors');
            return "Player Wins!!";
        }
        else if(computer == "Rock" || computer == "Spock"){
           
            displayImage(computer);
            return "Computer Wins!!";
        }
    }
    else if(player == "Lizard"){
        if(computer == "Paper" || computer == "Spock"){
            
            displayImage('lizard');
            return "Player Wins!!";
        }
        else if(computer == "Rock" || computer == "Scissors"){
            
            displayImage(computer);
            return "Computer Wins!!";
        }
    }
    else if(player == "Spock"){
        if(computer == "Scissors" || computer == "Rock"){
            
            displayImage('spock');
            return "Player Wins!!";
        }
        else if(computer == "Paper" || computer == "Lizard"){
            
            displayImage(computer);
            return "Computer Wins!!";
        }
    }
}

//function liveScore, to show the winner and loser (no workiing yet)//

function liveScore(winner){
        if (winner === "Player Wins!!"){
            playerScore++;
        }
        else if (winner === "Computer Wins!!"){
            computerScore++;
        }
    
}

//create function that shows the specific picture when paper, rock, scissors, lizard or spock wins//

function displayImage(image) {
    const img = document.createElement("img");
    img.src = `assets/images/${image.toLowerCase()}.jpeg`;
    img.width = 200;
    img.height = 200;
    
    photoResult?.replaceChildren(img);
}
