class Form{

  constructor(){
   }

   display(){

      //different DOM elements to be displayed while displaying the form
        var title=createElement("h2");   //h2 is the highest size of heading
        title.html("Car Racing Game");
        title.position(300,2);

        var input=createInput("Name");  //rectangular box will appear
        input.position(400,200);

        var button=createButton("Submit");  // button
        button.position(400,250);
        button.mousePressed();  

        var greeting=createElement("h3");  //greeting message
        greeting.position(250,200);
        
        //this event will happen when the mouse is pressed 
        //once it is pressed we want to play the game
        //hide the form elements,updating the player count when each player logs in 
        //updating the name with agreeting display
        button.mousePressed(function(){
              input.hide();
              button.hide();

              var name=input.value();

              playerCount+=1;
              player.update(name);
              player.updateCount(playerCount);

              greeting.html("Hello"+ name );

              greeting.position(130,160);
        });
}

}