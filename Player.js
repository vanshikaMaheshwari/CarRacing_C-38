class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
    }
    //reads the playerCount value from the database
    getCount(){
        database.ref("playerCount").on("value",(data)=>{
            playerCount = data.val();
        })
    }
    //writes the playerCount value to the database
    updateCount(count){
        database.ref("/").update({
            playerCount: count
        })
    }
    //writes the player name  and distance to the database
    updateInfo(){
        database.ref("players/player" + this.index).set({
            name: this.name,
            distance: this.distance
        })
    }

    //reads all the players info from the database
    static getPlayerInfo(){
        database.ref("players").on("value",(data) => {
            players = data.val();
        })
    }
}