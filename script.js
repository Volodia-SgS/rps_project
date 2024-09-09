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
    const HumanChoice = window.prompt("Rock, Paper or Scissors ?")
    if (HumanChoice.toLowerCase() == "rock" || HumanChoice.toLowerCase() == "paper" || HumanChoice.toLowerCase() == "scissors"){
        alert("You picked " + HumanChoice);
        return HumanChoice.toLowerCase();
    } else{
        return alert("Please enter a valid answer");
    }
}

let HumanScore = 0;
let ComputerScore = 0;



function playRound(HumanChoice, ComputerChoice){
    if (HumanChoice === ComputerChoice){
        console.log("Tie !")
    } else{
        switch (HumanChoice){
            case "rock":
                if (ComputerChoice === "scissors"){
                    console.log("You won the round !")
                } else {
                    console.log("You lost the round !")
                }
                break;
            case "scissors":
                if (ComputerChoice === "paper"){
                    console.log("You won the round !")
                } else {
                    console.log("You lost the round !")
                }
                break;
            case "paper":
                if (ComputerChoice === "rock"){
                    console.log("You won the round !")
                } else {
                    console.log("You lost the round !")
                }
                break;
            }
        }
    }

