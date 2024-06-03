function getHumanChoice(){
    return prompt ("Please enter your choice? (Rock/Paper/Scissor)");
}
let humanChoice=getHumanChoice()
console.log(humanChoice);

function getComputerChoice(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

let computerChoice = getComputerChoice(0,2)
if (computerChoice == 0) {
    computerChoice = "Rock";
    // console.log("Rock");
} else if (computerChoice == 1) {
    computerChoice = "Paper";
    // console.log("Paper");
} else {
    computerChoice = "Scissor";
    // console.log("Scissor");
}



let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice.toLowerCase();
    computerChoice.toLowerCase();
    if (humanChoice == "rock" & computerChoice == "paper"){
        console.log("You lose! Paper beats rock.");
        computerScore = computerScore + 1;
    } else if (humanChoice == "paper" & computerChoice == "scissor"){
        console.log("You lose! Scissor beats paper.");
        computerScore = computerScore + 1;
    } else if (humanChoice == "scissor" & computerChoice == "rock"){
        console.log("You lose! Rock beats scissor.");
        computerScore = computerScore + 1;
    } else {
        console.log("You win!");
        humanScore = humanScore + 1;
    }
    console.log("Your score:" + humanScore + " My score:"+computerScore)
}

playRound(humanChoice, computerChoice);
