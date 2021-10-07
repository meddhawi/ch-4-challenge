//generate choices 
function compChoice(){
    const comp = Math.random();
    if (comp < 0.34){
        return 'rock';
    }else if (comp >= 0.34 && comp <=0.67){
        return 'paper';
    } else{
        return 'scissor';
    }
}

//setup rules
function gameResult(player, comp){
    if(player == comp){
        return 'DRAW'
    }
    else if(player == 'rock'){
        return (comp == 'paper') ? 'lose' : 'win';
    }
    else if (player == 'paper'){
        return (comp == 'scissors') ? 'lose' : 'win';
    }
    else if(player == 'scissor'){
        return (comp == 'rock') ? 'lose' : 'win';
    }
}


//if player choose rock
const playerRock = document.getElementById('rock'); //take the input
playerRock.addEventListener('click', function(){
    const compAction = compChoice();
    const playerAction = playerRock.id;
    const result = gameResult(playerAction, compAction)
    console.log('comp :' + compAction)
    console.log("p :" + playerAction)
    console.log("hasil :" + result)
})

//if player choose paper
const playerPaper = document.getElementById('paper'); //take the input
playerPaper.addEventListener('click', function(){
    const compAction = compChoice();
    const playerAction = playerPaper.id;
    const result = gameResult(playerAction, compAction)
    console.log('comp :' + compAction)
    console.log("p :" + playerAction)
    console.log("hasil :" + result)
})

//if player choose scissor
const playerScissor = document.getElementById('scissor'); //take the input
playerScissor.addEventListener('click', function(){
    const compAction = compChoice();
    const playerAction = playerScissor.id;
    const result = gameResult(playerAction, compAction)
    console.log('comp :' + compAction)
    console.log("p :" + playerAction)
    console.log("hasil :" + result)
})

