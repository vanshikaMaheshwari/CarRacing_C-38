var gameState = 0;
var player, form, game, playerCount
var database;
var players;
var distance;
var Car1, Car2, Car3, Car4, Cars
function setup(){
    createCanvas(displayWidth-30,displayHeight-130);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    
    if(playerCount === 4){
        game.updateState(1);
    }

    if(gameState === 1){
        clear()
        game.play();
    }
}
