var  database;
var gameState=0;
var playerCount;
var form,game,player;


function setup(){
  createCanvas(500,500);
  database = firebase.database();
  //console.log(database);
   game=new Game();
   
   //ask for the current state
  game.getState();
  // it starts the game 
  game.start();
    
}

function draw(){
  background("white");
}

