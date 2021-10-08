//generate choices 
function compChoice(){
    //show computer choice
    const rockBackCom = document.getElementById('rockBack-com');
    const paperBackCom = document.getElementById('paperBack-com');
    const scissorBackCom = document.getElementById('scissorBack-com');

    const comp = Math.random();
    if (comp < 0.34){
        setTimeout(function(){
            rockBackCom.style.background = "#C4C4C4";
            rockBackCom.style.borderRadius = '30px';
        }, 200)
        return 'rock';
    }else if (comp >= 0.34 && comp <=0.67){
        setTimeout(function(){
            paperBackCom.style.background = "#C4C4C4";
            paperBackCom.style.borderRadius = '30px';
        },200)
        return 'paper';
    } else{
        setTimeout(function(){
            scissorBackCom.style.background = "#C4C4C4";
            scissorBackCom.style.borderRadius = '30px';
        },200)
        
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
        return (comp == 'scissor') ? 'lose' : 'win';
    }
    else if(player == 'scissor'){
        return (comp == 'rock') ? 'lose' : 'win';
    }
}



var Enabled = true;

//if player choose rock
const playerRock = document.getElementById('rock'); //take the input
playerRock.addEventListener('click', function(){
    //show player choice
    if(Enabled == true){ //no overlap choice
        const playerAction = playerRock.id;
        const compAction = compChoice();
        const result = gameResult(playerAction, compAction);
        
        const rockBack = document.getElementById('rockBack');

        rockBack.style.background = "#C4C4C4";
        rockBack.style.borderRadius = '30px';

        console.log('comp :' + compAction);
        console.log("p :" + playerAction);
        console.log("hasil :" + result);

        Enabled = false;
    }

})

//if player choose paper
const playerPaper = document.getElementById('paper'); //take the input
playerPaper.addEventListener('click', function(){

    if(Enabled == true){
        const compAction = compChoice();
        const playerAction = playerPaper.id;
        const result = gameResult(playerAction, compAction)
        const paperBack = document.getElementById('paperBack');
    
        paperBack.style.background = "#C4C4C4";
        paperBack.style.borderRadius = '30px';
    
        console.log('comp :' + compAction);
        console.log("p :" + playerAction);
        console.log("hasil :" + result);
    
        Enabled = false;
    }
})

//if player choose scissor
const playerScissor = document.getElementById('scissor'); //take the input
playerScissor.addEventListener('click', function(){
    if(Enabled == true){
        const compAction = compChoice();
        const playerAction = playerScissor.id;
        const result = gameResult(playerAction, compAction)
        const scissorBack = document.getElementById('scissorBack');
    
        scissorBack.style.background = "#C4C4C4";
        scissorBack.style.borderRadius = '30px';
    
        console.log('comp :' + compAction);
        console.log("p :" + playerAction);
        console.log("hasil :" + result);
    
        Enabled = false;
    }   
})

const refresh = document.getElementById('refresh'); //take refresh input
refresh.addEventListener('click', function(){
    if(confirm("Play Again??")){
        location.reload();
    }
});

