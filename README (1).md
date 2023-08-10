
#Full Stack developer Course (Code Institute)

##Project 2

This project is realised to obtain an entertaining and funny game called Rock, Paper, Scissors, Lizard and Spock. In this game the user interacts through buttons to obtain an aleatory response from the computer and the actual winner image.




## Authors (Website and Music)

Jorge Pallares Catalan

- [@JorgePC81](https://github.com/JorgePC81)


## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)

 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

- [Pexels] (https://www.pexels.com/)

- [YouTube] (https://www.youtube.com/)

- [W3Schools] https://www.w3schools.com/
## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

https://imgur.com/9ZyTCSr

The screenshot shows that the game is playable in any type of screensize debice.

https://imgur.com/3ff6lGE

The screenshot shows the title and the rules of the game rock, paper, scissors, lizard, spock.

https://imgur.com/6SEpYYR

The screenshot shows the video where this game was presented for the first time and the sentence "Choose Your Weapon" to start the game.

https://imgur.com/3ff6lGE

The screenshot shows the game in the middle of a match with all the interaction that it requires.

https://imgur.com/zechpbq

This screenshot shows the music player of the web/game. There are 4 songs to choose from. All composed by Jorge Pallares Catalan.
## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
background-color: blue

H1 color: azure;

Small text colour & bottons text: color: rgb(209, 243, 140)

Score colour: color: rgb(116, 149, 51);




## Demo and explanation of the game Rock, Paper, Scissors, Lizard and Spock.

Insert gif or link to demo

https://www.youtube.com/watch?v=x5Q6-wMx-K8&t=40s
## Deployment

To deploy this project run

```bash
  npm run deploy
```

https://jorgepc81.github.io/pp2-JPC/

## Documentation

[Documentation](https://linktodocumentation)

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)

 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

- [Pexels] (https://www.pexels.com/)

- [YouTube] (https://www.youtube.com/)

- [W3Schools] https://www.w3schools.com/


## FAQ

#### Question 1

What is the age range for this game?

Answer 1

6 to 99.

#### Question 2

Who invented this game?

Answer 2

The Big Bang Theory crew.


## Features

- Light mode toggle
- Explanatory videos
- Fullscreen mode
- Interactive platform


## 🚀 About Me
I'm a full stack developer and a superior technician in electronics and PLC programation. I have got 5 years experience and tecnician and I am PhD in arts too and teacher of Music.


# Hi, I'm Jorge! 👋


## 🔗 Links
[![portfolio] https://github.com/dashboard]

[![linkedin]https://www.linkedin.com/in/dr-jorge-pallares-catalan/]



## Other Common Github Profile Sections
👩‍💻 I'm currently working on a project about a game.

🧠 I'm currently learning about JavaScript.

👯‍♀️ I'm looking to collaborate on Makathon in CI.

🤔 I'm looking for help with any possible issue in Slack community in CI.

## 🛠 Skills
Javascript, HTML, CSS and PLC.
## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Lessons Learned
I have learned how to work with JavaScript and its interaction with HTML and CSS.


Programing more complex fuctions in JavaScript has become a real challenge in this project/game.


## Optimizations

The web with the game has been improved in order to obtain an interactive site where the user enjoys of a good experience.

## Related

Here are some related projects

https://rock-paper-scissors-lizard-spock-two.vercel.app/


## Run Locally

Clone the project

```bash
  git clone https://github.com/JorgePC81/pp2-JPC.git
```

Go to the project directory

```bash
  /Users/j.pallares@aics.espritscholen.nl/Documents/IT/CI/Code Institute Challenges/Python & JS/PP2


Start the server

```bash
  npm run start
  https://jorgepc81.github.io/pp2-JPC/
```


## Running Tests

All tests have been succesful in HTML, CSS and JavaScript.


## Code Explanation (HTML)

<!DOCTYPE html>
<!--language-->
<html lang="en">

<!--keywords and context-->

In this section below, I create the head using metas and the link to the css file.

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Rock, paper, scissors, lizard, spock</title>
    <link rel="stylesheet" href="assets/css/pp2.css">
</head>

<body>
    <!--title and game context-->

    In this section I open the game div and I inform about the title and the rules of the game with a p and lo elements.

    <h1 class="title">Rock, paper, scissors, lizard, spock</h1>
   
    <div class="rules">
        <p style="text-transform:uppercase; font-size: 45px">Rules:</p>
        <ol>
            <li>Rock crushes Scissors</li>
            <li>Scissors cuts Paper</li>
            <li>Paper covers Rock</li>
            <li>Rock crushes Lizard</li>
            <li>Lizard poisons Spock</li>
            <li>Spock smashes Scissors</li>
            <li>Scissors decapitates Lizard</li>
            <li>Lizard eats Paper</li>
            <li>Paper disproves Spock</li>
            <li>Spock vaporizes Rock</li>
        </ol>
    </div>

    <!--Explanation about origins of the game-->

    I show here an a element with a videotaken from an external website (You Tube).

    <div class="bigbangT">
        <p>The Origins Of The Game: <a href="https://www.youtube.com/watch?v=x5Q6-wMx-K8&t=40s" target="_blank">The Big Bang Theory</a></p>
    </div>

<div id="gameDiv">

         <!--devices to play music when playing the game-->

        <h1 class="chooseM" >Choose Your Music For The Game</h1>

   <div class="play">
    <audio controls>
        <source src="assets/sounds/ambient_music.mp3" type="audio/mpeg">Choose Music One</audio>
    <audio controls>
        <source src="assets/sounds/song_2.mp3" type="audio/mpeg">Choose Music Two</audio>
    <audio controls>
        <source src="assets/sounds/main_theme_piece.mp3" type="audio/mpeg">Choose Music Three</audio>            
    <audio controls>
        <source src= "assets/sounds/no_boss_fight_piece.mp3" type="audio/mpeg">Choose Music Four</audio>
</div>

<!--Weapon choosing heading-->

<h1 class="choose">CHOOSE YOUR WEAPON!!</h1>


    <!--Buttons with game choices-->

    I use here an h1 and a div with buttons to create the interaction tool (buttons) for the game.

    <div id="gameDiv">
        <h1 class="choose">CHOOSE YOUR WEAPON!!</h1>
        <div class="BtnAll">
            <button class="choiceBtn">Rock</button>
            <button class="choiceBtn">Paper</button>
            <button class="choiceBtn">Scissors</button>
            <button class="choiceBtn">Lizard</button>
            <button class="choiceBtn">Spock</button>
        </div>
            
        <!--function to show score-->

I create here the divs for the score with two ids used in js file.

<div id="stats">
    <h1>Wins: </h1>
<div id="scoring"></div>

    <!--function to show text after choices have been made-->

In the section below I use some ids and a class to alter the state of the game outcome in form of text. 

            <div class="gameText">
                <h1 id="playerText">Player: </h1>
                <h1 id="computerText">Computer: </h1>
                <h1 id="resultText">Result: </h1>
            </div>
        </div>
        
Photo result has the same role but showing a photo of the winner
        <div id="photoResult"></div>
    </div>
    
Bellow we can find the link to the js file.

    <script src="pp2.js"></script>
</body>

</html>

## Code Explanation (CSS)



/* whole site styling */
* {
    padding: 0;
    margin: 0;
    background-color: blue;
}

/* header and introductory styling */

.title {
    font-size:120px;
} 

h1 {
    font-family: fantasy;
    color: azure;
    font-style: oblique;
    padding: 25px;
}

.rules {
    font-family: fantasy;
    color: azure;
    font-style: oblique;
    color: rgb(209, 243, 140);
    padding:75px;
}

/* origins video styling */

.bigbangT p {
    padding:30px;
    padding-bottom: 250px;
    color: rgb(209, 243, 140);
    font-size: 45px;
}

.bigbangT a {
    padding:30px;
    color: rgb(209, 243, 140);
    font-size: 45px;
}

/* buttons styling */

.choose {
    padding: 175px 25px 175px 25px;
    text-align: center;
    font-size: 55px;

}
.choiceBtn {
    font-size: 55px;
    color: azure;
    width: 250px;
}

.BtnAll {
    padding: 5px;
}

/* text styling */

.gameText {
    color: rgb(209, 243, 140);
    padding:35px;
}

#stats {
    display: block;
    width: 50%;
    float: left;
}

/* photo final result styling */

#photoResult {
    display: block;
    width: 50%;
    float: right;
}

#photoResult img {
    padding: 45px;
    width: 500px;
    height: 500px;
    position: absolute;
    object-fit: fill;
}
/* showing score  */

#scoring{
    font-size: 45px;
    color: rgb(116, 149, 51);
    padding: 35px;
}

/*Css for music choice*/

.chooseM {
    padding: 25px;
    font-size: 50px;
    color: rgb(116, 149, 51);
    padding-bottom: 100px;
}

/* Media Queries */
/*for larger to medium size screens, from 1200 wide and down*/
@media screen and (max-width: 1200px) {
    .title {
        font-size: 100px;
    }
    .rules {
        font-size: 30px;
    }
    .bigbangT p {
        font-size: 30px;
    }
    .bigbangT a {
        font-size: 30px;
    }
    .choose {
        font-size: 30px;
    }
    .choiceBtn {
        font-size: 30px;
    }
    .gameText {
        font-size: 40px;
    }
    #scoring {
        font-size: 30px;
    }
    #photoResult img {
        width: 300px;
        height: 300px;
    }
    #stats h1{
        font-size: 40px;
    }

    /*Css for music choice heading*/

.chooseM {
    padding: 25px;
    font-size: 50px;
    color: rgb(116, 149, 51);
    padding-bottom: 100px;
}
}

/* For medium size 950 px down*/
@media screen and (max-width: 950px) {
    .title {
        font-size: 80px;
    }
    .rules {
        font-size: 25px;
    }
    .bigbangT p {
        font-size: 25px;
    }
    .bigbangT a {
        font-size: 25px;
    }
    .choose {
        font-size: 25px;
    }
    .choiceBtn {
        font-size: 25px;
    }
    .gameText {
        font-size: 35px;
    }
    #scoring {
        font-size: 35px;
    }
    #photoResult img {
        width: 300px;
        height: 300px;
    }
    #stats h1{
        font-size: 35px;
    }
    .chooseM {
        padding: 25px;
        font-size: 50px;
        color: rgb(116, 149, 51);
        padding-bottom: 100px;
    }
    .BtnAll{
        padding-top: 5px;
    }
}
/* For low medium size 800px down*/
@media screen and (max-width: 800px) {
    .title {
        font-size: 60px;
    }
    .rules {
        font-size: 20px;
    }
    .bigbangT p {
        font-size: 20px;
    }
    .bigbangT a {
        font-size: 20px;
    }
    .choose {
        font-size: 20px;
    }
    .choiceBtn {
        font-size: 20px;
    }
    .gameText {
        font-size: 25px;
    }
    #scoring {
        font-size: 30px;
    }
    #photoResult img {
        width: 260px;
        height: 260px;
    }
    #stats > h1{
        font-size: 30px;
    }
    .chooseM {
        padding: 20px;
        font-size: 35px;
        color: rgb(116, 149, 51);
        padding-bottom: 100px;
    
    }
}
/* For small size 640 px down*/
@media screen and (max-width: 640px) {
    .title {
        font-size: 40px;
    }
    .rules {
        font-size: 15px;
    }
    .bigbangT p {
        font-size: 15px;
    }
    .bigbangT a {
        font-size: 15px;
    }
    .choose {
        font-size: 15px;
        padding-bottom: 30px;
        right: 30px;
    }
    .choiceBtn {
        font-size: 15px;
    }
    .gameText {
        font-size: 20px;
    }
    #scoring {
        font-size: 25px;
        padding:10px;
    }
    #photoResult img {
        width: 180px;
        height: 180px;
        padding:10px;
    }
    #stats > h1{
        font-size: 25px;
        padding-top: 7px;
    }
    .chooseM {
        padding: 18px;
        font-size: 30px;
        color: rgb(116, 149, 51);
        padding-bottom: 100px;
    }
}
/* For very small size 400px down*/
@media screen and (max-width: 400px) {
    .title {
        font-size: 30px;
    }
    .rules {
        font-size: 10px;
    }
    .bigbangT p {
        font-size: 10px;
    }
    .bigbangT a {
        font-size: 10px;
    }
    .choose {
        font-size: 10px;
        padding-bottom: 30px;
        right: 30px;
    }
    .choiceBtn {
        font-size: 10px;
    }
    .gameText {
        font-size: 15px;
    }
    #scoring {
        font-size: 20px;
    }
    #photoResult img {
        width: 125px;
        height: 125px;
    }
    #stats > h1{
        font-size: 20px;
    }
    .chooseM {
        padding: 15px;
        padding-bottom: 100px;
        font-size: 25px;
        color: rgb(116, 149, 51);
    }
}

/* For very small size 300px down*/
@media screen and (max-width: 300px) {
    .title {
        font-size: 20px;
    }
    .rules {
        font-size: 10px;
    }
    .bigbangT {
        font-size: 4px;
    }
    .choose {
        font-size: 10px;
        padding-bottom: 30px;
        right: 30px;
    }
    .choiceBtn {
        font-size: 10px;
    }
    .gameText {
        font-size: 10px;
    }
    #scoring {
        font-size: 20px;
    }
    #photoResult img {
        width: 125px;
        height: 125px;
    }
    #stats > h1{
        font-size: 15px;
    }
    .chooseM {
        padding: 12px;
        padding-bottom: 100px;
        font-size: 22px;
        color: rgb(116, 149, 51);
    }
}
## Code Explanation (JavaScript)

/*constants and variables for the game's logic*/

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const score = document.querySelector("#scoring");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const photoResult = document.querySelector("#photoResult");

let player;
let computer;
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

//function liveScore, to show the winner and loser.

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
