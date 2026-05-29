let humanScore=0;
let computerScore=0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const resultText = document.querySelector("#resultText");
const roundText = document.querySelector("#roundText");

const playerScoreElement = document.querySelector("#player-score");
const computerScoreElemnt = document.querySelector("#computer-score");

const gameOver = document.querySelector(".gameOver");
const winnerText = document.querySelector("#winnerText");
const playAgainBtn = document.querySelector("#playAgain"); 

const playerChoiceDisplay = document.querySelector("#playerTurn");
const computerChoiceDisplay = document.querySelector("#computerTurn");

function getComputerChoice(){
    let random=Math.random();

    if(random<=0.33){
        return "rock";
    }
    else if(random<=0.66){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice){

    playerChoiceDisplay.textContent = 
    humanChoice ==="rock" ? "✊":
    humanChoice === "paper"? "✋": "✌️";

    computerChoiceDisplay.textContent = 
    computerChoice ==="rock" ? "✊":
    computerChoice === "paper"? "✋": "✌️";


    if(humanChoice===computerChoice){
        resultText.textContent = "It's a draw!";
        roundText.textContent=`Both chose ${humanChoice}!`;
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        playerScoreElement.textContent = humanScore;
        resultText.textContent= "You won this round!";
        roundText.textContent= "rock beats scissors";
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        playerScoreElement.textContent = humanScore;
        roundText.textContent= "You won this round!";
        resultText.textContent= "paper beats rock";
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        playerScoreElement.textContent = humanScore;
        resultText.textContent= "You won this round!";
        roundText.textContent= "scissors beats paper";
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        computerScoreElemnt.textContent = computerScore;
        resultText.textContent = "Computer won this round!";
        roundText.textContent = "paper beats rock";
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        computerScoreElemnt.textContent = computerScore;
        resultText.textContent = "Computer won this round!";
        roundText.textContent = "scissors beats paper";
    }
    else{
        computerScore++;
        computerScoreElemnt.textContent = computerScore;
        resultText.textContent = "Computer won this round!";
        roundText.textContent = "rock beats scissors";
    }
    if(humanScore === 5){
        resultText.textContent = "You won the game!";
        winnerText.textContent = "YOU WON!";
        gameOver.classList.remove("hidden");

        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
    if(computerScore == 5){
        resultText.textContent = "computer won the game!";
        winnerText.textContent = "COMPUTER WON!";
        gameOver.classList.remove("hidden");

        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }

}

rockBtn.addEventListener("click", ()=> {
    playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", ()=> {
    playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", ()=> {
    playRound("scissors", getComputerChoice());
});

playAgainBtn.addEventListener("click", ()=>{
    humanScore= 0;
    computerScore=0;

    playerScoreElement.textContent = 0;
    computerScoreElemnt.textContent = 0;

    resultText.textContent = "Choose your weapon";
    roundText.textContent = "First to score 5 points wins the game";

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

    gameOver.classList.add("hidden");
});

