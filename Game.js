class Game{
    constructor(){
    }
    //reads the gameState value from the database
    getState(){
        database.ref("gameState").on("value",function(data){
            gameState = data.val();
        })
    }
    //writes the gameState value to the database
    updateState(state){
        database.ref("/").update({
            gameState: state
        })
    }

    start(){
        if(gameState === 0){
            form = new Form();
            form.display();
            player = new Player();
            player.getCount();
        }
        Car1 = createSprite(100,200);
        Car2 = createSprite(300,200);
        Car3 = createSprite(500,200);
        Car4 = createSprite(700,200);
        Cars = [Car1, Car2, Car3, Car4];
    }
    play(){
        form.Hide();
        Player.getPlayerInfo()
        if(players !== undefined){
            var index = 0;
            var x = 0;
            var y;
            for(var i in players){
                index++
                x+=200
                y=displayHeight - players[i].distance
                Cars[index - 1].x = x;
                Cars[index - 1].y = y;
                if(index === player.index){
                    Cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth/2
                    camera.position.y = Cars[index-1].y
                }
            }
        }
        if(keyDown("UP_ARROW") && player.index !== null){
            player.distance += 10
            player.updateInfo();
        }
        drawSprites();
    }
}