class Game{
      constructor(){  
      }
//reads the game state from the database
    getState(){
      
          var gameStateRef=database.ref('gameState');  // refers to database and with gamestate value
          gameStateRef.on("value",function(data){      //listens to the changes in the value
              gameState=data.val();
          })
    }

 //this will update the database,it refers to main database inside which gamestate has been created
  update(state){
    database.ref('/').update({
        gameState:state
    })
  }

  // start the game and display the form and playercount on the screen
  start(){
            if(gameState===0){
                player=new Player();
                player.getCount();
                form=new Form();
                form.display();
 }
  }
}