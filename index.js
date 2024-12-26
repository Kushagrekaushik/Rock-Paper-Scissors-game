const buttons =document.querySelectorAll('button');
const resultE=document.getElementById('Result');
const PlayerScoreE=document.getElementById('user-score');
const ComputerScoreE=document.getElementById('computer-score');

let playerScore=0;
let ComputerScore=0;

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        const result=playround(button.id,computerPlay());
        resultE.textContent=result;
    });
});

function computerPlay(){
    const choices=["rock","paper","scissors"];
    const randomChoice=Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}

function playround(playerSelection,ComputerSelection){
    if(playerSelection===ComputerSelection){
        return `It's a Tie!`;
    }
    else if(
        (playerSelection==='rock' && ComputerSelection === 'scissors') || 
        (playerSelection==='scissors' && ComputerSelection === 'paper') ||
        (playerSelection==='paper' && ComputerSelection === 'rock')
    )
    {
        playerScore++;
        PlayerScoreE.textContent=playerScore;
        return "You win ! " + playerSelection + " beats " + ComputerSelection
    }
    else{
        ComputerScore++;
        ComputerScoreE.textContent=ComputerScore;
        return "You Lose ! " + ComputerSelection + " beats " + playerSelection
    }



    
}