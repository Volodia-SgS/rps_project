function random(max){
    return Math.floor(Math.random()*max);
}

function getComputerchoice(){
    let a = random(3);

    if (a == 0){
        return "Rock"
    }
    else if (a == 1){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}

function getUserchoice(){
    const value = window.prompt("Rock, Paper or Scissors ?")
    console.log(value)
    if (value != "Rock" || value != "Paper" || value != "Scissors"){
        return window.prompt("Je vais te baiser choisis mieux !");
    } else{
        return value;
    }
}


console.log(getUserchoice())