// Global-variables. These are the default variables of our variables
 var scores = [0,0];
 var held_score = 0;
 var active_player = 1;
 var game_active = true;
 var score1 = parseInt($("#score-1").text());
// our dice images

/*
var diceimgs = [
     diceimg01:"images/Dice/one.png",
     diceimg02:"images/Dice/two.png",
     diceimg03:"images/Dice/three.png",
     diceimg04:"images/Dice/four.png",
     diceimg05:"images/Dice/five.png",
     diceimg06:"images/Dice/six.png"
];
*/
var diceimgs = [
     "images/Dice/one.png",
     "images/Dice/two.png",
     "images/Dice/three.png",
     "images/Dice/four.png",
     "images/Dice/five.png",
     "images/Dice/six.png"
];

// TODO: Start with all the functions that we will use in the program

// Game State function.
if(game_active){
  //1. Random Number.
  var dice_face = Math.floor(Math.random()*6)+1;

  //2. Display dice result.
  var diceFace = $("#diceFaces").attr("src", diceimgs[dice_face-1]).appendTo("#diceFaces");
  //3. Display result in current active player box.
  if(active_player === 1 && dice_face != 1 && score1<100){
    held_score += dice_face;
     $("#activeScore1").text(held_score);

  } else if (active_player === 2 && dice_face != 1){
    $("#activeScore2").text(dice_face);
  }else {
    alert("You Rolled One");
  }
}


// FRONT END
$(document).ready(function() {
  //click function for "Roll Dice" button
  $("#roll-dice").click(function() {
    active_player;
    var dice_face = Math.floor(Math.random()*6)+1;
    //  alert("Roll dice button Working! You rolled " + dice_face + ".");
    //  $("#theDice").prepend('<img id="#dice-faces" src="images/Dice/two.png" />')
    //Below code links Jquery to images
    // var diceFace = $("#diceFaces").attr("src", "images/Dice/two.png");
    //Below is links the dice image to the random number.
    // var diceFace = $("#diceFaces").attr("src", diceimgs[dice_face-1]).appendTo("#diceFaces");
    // Below code links random number to active current score
    // $("#activeScore1").text(dice_face);
    // alert(score1);
    var diceFace = $("#diceFaces").attr("src", diceimgs[dice_face-1]).appendTo("#diceFaces");

    if(active_player === 1 && dice_face != 1 && score1<100){
      held_score += dice_face;
       $("#activeScore1").text(held_score);

    } else if (active_player === 2 && dice_face != 1){
      $("#activeScore2").text(dice_face);
    }else {
      alert("You Rolled One");
    }


  })
  //click function for "New Game" button
  $("#new-game").click(function () {
    alert("New Game button Working!");
  })
  // click function for player1 "Hold" button.
  $("#hold1").click(function () {
    alert("Hold player1 button Working!");
    active_player === 2;
  })
  // click function for player2 "Hold" button.
  $("#hold2").click(function () {
    alert("Hold player2 button Working!");
    active_player === 1;
  })
});
