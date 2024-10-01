const rock = document.querySelector("#rock-btn")
const paper = document.querySelector("#paper-btn")
const scissors = document.querySelector("#scissors-btn")
const humanScoreDisplay = document.querySelector("#human-score")
const computerScoreDisplay = document.querySelector("#computer-score")
const roundResultDisplay = document.querySelector("#round-result")
const gameResultDisplay = document.querySelector("#game-result")

let HumanScore = 0
let ComputerScore = 0


function random(max){
    return Math.floor(Math.random()*max);
}

function getComputerchoice(){
    let ComputerChoice = random(3);

    if (ComputerChoice == 0){
        ComputerChoice = "rock"
        return ComputerChoice
    }
    else if (ComputerChoice == 1){
        ComputerChoice = "paper"
        return ComputerChoice
    }
    else{
        ComputerChoice = "scissors"
        return ComputerChoice
    }
}

function getHumanChoice(){
    const value = window.prompt("Rock, Paper or Scissors ?")
    if (value.toLowerCase() == "rock" || value.toLowerCase() == "paper" || value.toLowerCase() == "scissors"){
        alert(`You picked ${value}`);
        return value.toLowerCase();
    } else{
        return alert("Please enter a valid answer");
    }
}

function scoreTracker(){
    humanScoreDisplay.textContent = HumanScore
    computerScoreDisplay.textContent = ComputerScore
}

function playRound(HumanChoice, ComputerChoice){
    console.log(HumanChoice)
    console.log(ComputerChoice)
    if (HumanChoice === ComputerChoice){
        roundResultDisplay.textContent = "It's a tie !"
    } else{
        switch (HumanChoice){
            case "rock":
                if (ComputerChoice === "scissors"){
                    roundResultDisplay.textContent = "You won the round !"
                    HumanScore = HumanScore + 1;
                    scoreTracker()
                } else {
                    roundResultDisplay.textContent = "You lost the round !"
                    ComputerScore = ComputerScore + 1;
                    scoreTracker()
                }
                break;
                case "scissors":
                    if (ComputerChoice === "paper"){
                        roundResultDisplay.textContent = "You won the round !"
                        HumanScore = HumanScore + 1;
                        scoreTracker()
                    } else {
                        roundResultDisplay.textContent = "You lost the round !"
                        ComputerScore = ComputerScore + 1;
                        scoreTracker()
                    }
                    break;
                    case "paper":
                        if (ComputerChoice === "rock"){
                            roundResultDisplay.textContent = "You won the round !"
                            HumanScore = HumanScore + 1;
                            scoreTracker()
                        } else {
                            roundResultDisplay.textContent = "You lost the round !"
                            ComputerScore = ComputerScore + 1;
                            scoreTracker()
                        }
                        break;
                    }
                }
            }
            


function playGame(){
    while(HumanScore < 3 && ComputerScore < 3){
        let HumanChoice = getHumanChoice()
        let ComputerChoice = getComputerchoice()
        playRound(HumanChoice, ComputerChoice)
    }
    if (HumanScore === 3){
        gameResultDisplay.textContent = "You won the game !"
    } else {
        gameResultDisplay.textContent = "You lost the game !"
    }
}

let playerChoice = 0

rock.addEventListener("click", () =>{
    playerChoice = "rock"
    console.log(playerChoice)
})

paper.addEventListener("click", () =>{
    playerChoice = "paper"
    console.log(playerChoice)
})

scissors.addEventListener("click", () =>{
    playerChoice = "scissors"
    console.log(playerChoice)
})
