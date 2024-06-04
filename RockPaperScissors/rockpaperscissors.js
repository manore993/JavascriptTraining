function getHumanChoice(){
    let humanChoice = "";
    while ((humanChoice != "rock" &&  humanChoice != "paper" && humanChoice != "scissor")) {
        humanChoice = prompt ("Please enter your choice? (Rock/Paper/Scissor)");
        humanChoice = humanChoice.toLowerCase();
    } 
    return humanChoice;
}
// let humanChoice=getHumanChoice()
// console.log(humanChoice);

function getmathRandomNumber(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function getComputerChoice(){
    let computerChoice;
    let mathRondomNumber= getmathRandomNumber(0,2)
    if (mathRondomNumber == 0) {
        computerChoice = "Rock";
        // console.log("Rock");
    } else if (mathRondomNumber == 1) {
        computerChoice = "Paper";
        // console.log("Paper");
    } else {
        computerChoice = "Scissor";
        // console.log("Scissor");
    }
    return computerChoice;
}


let humanScore = 0, computerScore = 0;

function playRound(){
    let computerChoice = getComputerChoice();
    let humanChoice=getHumanChoice();
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats rock.");
        computerScore = computerScore + 1;
    } else if (humanChoice == "paper" && computerChoice == "scissor"){
        console.log("You lose! Scissor beats paper.");
        computerScore = computerScore + 1;
    } else if (humanChoice == "scissor" && computerChoice == "rock"){
        console.log("You lose! Rock beats scissor.");
        computerScore = computerScore + 1;
    } else {
        console.log("You win!");
        humanScore = humanScore + 1;
    }
    console.log("Your score:" + humanScore + " My score:"+computerScore)
}

// playRound(humanChoice, computerChoice);

function playGame(){
    for (let i=0; i<=4; i++){
        playRound();
    }
}

playGame();