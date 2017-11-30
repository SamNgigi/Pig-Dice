// Global-variables. These are the default variables of our variables
 var scores = [0,0];
 var held_score = 0;
 var active_player = 1;
 var game_active = true;
 var score1 = parseInt($("#score-1").text());

// our dice images
var diceimgs = [
     "images/Dice/one.png",
     "images/Dice/two.png",
     "images/Dice/three.png",
     "images/Dice/four.png",
     "images/Dice/five.png",
     "images/Dice/six.png"
];

// TODO: Start with all the functions that we will use in the program
var disableButton = function (btn, time) {
  //disable roll
  btn.disabled = true;
  setTimeout(function () {btn.disabled = false;},time)
}
// Game State function.
if(game_active){
  //1. Random Number.
  var dice_number = Math.floor(Math.random()*6)+1;

  //2. Display dice result.
  var diceFace = $("#diceFaces").attr("src", diceimgs[dice_number-1]).appendTo("#diceFaces");
  //3. Display result in current active player box.
  if(dice_number !== 1){
    //Add the dice numbers to current scores if one is not rolled
     held_score += dice_number;
      // $("#activeScore"+active_player).text(held_score);
  }else{
    // TODO: Disable function for roll button when 1 is rolled
    disableButton($("#roll-dice"),5000);
    alert("You Rolled One");
    if(active_player === 1){
      active_player = 2;
    }else if(active_player === 2){
      active_player = 1;
    }
  }
}


// FRONT END
$(document).ready(function() {
  //click function for "Roll Dice" button
  $("#roll-dice").click(function() {
    $("#diceFaces").show();
    $(".overlay1").hide();
    active_player;
    var dice_number = Math.floor(Math.random()*6)+1;
    //  alert("Roll dice button Working! You rolled " + dice_face + ".");
    //  $("#theDice").prepend('<img id="#dice-faces" src="images/Dice/two.png" />')
    //Below code links Jquery to images
    // var diceFace = $("#diceFaces").attr("src", "images/Dice/two.png");
    //Below is links the dice image to the random number.
    // var diceFace = $("#diceFaces").attr("src", diceimgs[dice_face-1]).appendTo("#diceFaces");
    // Below code links random number to active current score
    // $("#activeScore1").text(dice_face);
    // alert(score1);
    var diceFace = $("#diceFaces").attr("src", diceimgs[dice_number-1]).appendTo("#diceFaces");

    if(dice_number !== 1){
       held_score += dice_number;
        // $("#activeScore"+active_player).text(held_score);
    }else{
      disableButton($("#roll-dice"),5000);
      // alert("You Rolled One");
      if(active_player === 1){
        active_player = 2;
      }else if(active_player === 2){
        active_player = 1;
      }
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
