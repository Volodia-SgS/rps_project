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
    console.log(HumanScore)
    console.log(ComputerScore)
}

function playRound(HumanChoice, ComputerChoice){
    console.log(HumanChoice)
    console.log(ComputerChoice)
    if (HumanChoice === ComputerChoice){
        console.log("Tie !")
    } else{
        switch (HumanChoice){
            case "rock":
                if (ComputerChoice === "scissors"){
                    console.log("You won the round !")
                    HumanScore = HumanScore + 1;
                    scoreTracker()
                } else {
                    console.log("You lost the round !")
                    ComputerScore = ComputerScore + 1;
                    scoreTracker()
                }
                break;
                case "scissors":
                    if (ComputerChoice === "paper"){
                        console.log("You won the round !")
                        HumanScore = HumanScore + 1;
                        scoreTracker()
                    } else {
                        console.log("You lost the round !")
                        ComputerScore = ComputerScore + 1;
                        scoreTracker()
                    }
                    break;
                    case "paper":
                        if (ComputerChoice === "rock"){
                            console.log("You won the round !")
                            HumanScore = HumanScore + 1;
                            scoreTracker()
                        } else {
                            console.log("You lost the round !")
                            ComputerScore = ComputerScore + 1;
                            scoreTracker()
                        }
                        break;
                    }
                }
            }
            

let HumanScore = 0
let ComputerScore = 0

function playGame(){
    while(HumanScore < 5 && ComputerScore < 5){
        let HumanChoice = getHumanChoice()
        let ComputerChoice = getComputerchoice()
        playRound(HumanChoice, ComputerChoice)
    }
}

playGame()
