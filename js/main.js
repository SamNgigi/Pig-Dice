// Global-variables. These are the default variables of our variables
 var scores = [0,0];
 var held_score = 0;
 var active_player = 1;
 var game_active = true;
// our dice images

var diceimgs = {
     diceimg01:"images/Dice/one.png"
     diceimg02:"images/Dice/two.png"
     diceimg03:"images/Dice/three.png"
     diceimg04:"images/Dice/four.png"
     diceimg05:"images/Dice/five.png"
     diceimg06:"images/Dice/six.png"
};


// TODO: Start with all the functions that we will use in the program
var dice_face = Math.floor(Math.random()*6)+1;
// FRONT END
$(document).ready(function() {
  //click function for "Roll Dice" button
  $("#roll-dice").click(function() {
     alert("Roll dice button Working! You rolled " + dice_face + ".");
    //  $("#theDice").prepend('<img id="#dice-faces" src="images/Dice/two.png" />')
    //Below code links Jquery to images
    var diceFace = $("#diceFaces").attr("src", "images/Dice/two.png");
  })
  //click function for "New Game" button
  $("#new-game").click(function () {
    alert("New Game button Working!");
  })
  // click function for player1 "Hold" button.
  $("#hold1").click(function () {
    alert("Hold player1 button Working!");
  })
  // click function for player2 "Hold" button.
  $("#hold2").click(function () {
    alert("Hold player2 button Working!");
  })
});
