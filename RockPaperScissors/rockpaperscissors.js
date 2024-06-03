function getComputerChoice(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

let computerChoice = getComputerChoice(0,2)
if (computerChoice == 0) {
    console.log("Rock");
} else if (computerChoice == 1) {
    console.log("Paper");
} else {
    console.log("Scissor");
}

function getHumanChoice(){
    return prompt ("Please enter your choice? (Rock/Paper/Scissor)");
}
let humanChoice=getHumanChoice()
console.log(humanChoice);