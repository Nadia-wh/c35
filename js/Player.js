class Player{
    constructor(){
    }

    //reading the value  count of the player from the database
getCount(){

    var playerCountRef=database.ref('playerCount');
    playerCountRef.on("value",function(data){
        playerCount=data.val();
    })
}

//updates the count in database
updateCount(count){
    database.ref('/').update({
        playerCount: count
    });

}
//creates a new database field which would store new name in the database
update(name){
var playerIndex= "player" + playerCount; //concatenating the playercount with player text
database.ref(playerIndex).set({
    name:name
});

}

}
