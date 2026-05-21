let humanScore=0;
let computerScore=0;

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

function getHumanChoice(){
    let choice=prompt("Enter 'rock' 'paper' 'scissors'");
    return choice;
}

function playRound(humanChoice, computerChoice){
    

    if(humanChoice===computerChoice){
        console.log("it's a draw!");
    }
    else if(humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper"){

        humanScore++;
        console.log("You won this round!");
    }
    else{
        computerScore++;
        console.log("Computer won this round!");
    }

    console.log("Human Score: ", humanScore);
    console.log("Computer Score: ", computerScore);

}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if(humanScore > computerScore){
        console.log("Congratulations! you won the game.");
    }
    else if(computerScore > humanScore){
        console.log("Computer won the game");
    }
    else{
        console.log("Game Draw!");
    }
}

playGame();