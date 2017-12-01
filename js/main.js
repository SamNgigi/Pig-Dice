// Global-variables. These are the default variables of our variables
var fixed_scores = [0, 0];
var flash_score = 0;
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

// TODO: Disables roll button
//the button , the duration of disabling
var disableButton = function(btn, time) {
  //disable roll
  btn.disabled = true;
  setTimeout(function() {
    btn.disabled = false;
  }, time)
}

// TODO:Next Player function
var nextPlayer = function() {

  if (active_player === 1) {
    active_player = 2;
    $(".overlay2").hide();
  } else {
    active_player = 1;
    $(".overlay1").hide();
  }
  // held_score = 0;
  // alert("Its Player" + active_player+"'s turn!");

}
// TODO: Roll message show.
var rollMessage = function() {
  $(".overlay" + active_player).show();

}
// TODO: Game is Active function



// FRONT END
$(document).ready(function() {
  //click function for "Roll Dice" button
  $("#roll-dice").click(function() {

    if (game_active) {
      //1. Random Number.
      var dice_number = Math.floor(Math.random() * 6) + 1;

      //2. Display dice result.
      var diceFace = $("#diceFaces").attr("src", diceimgs[dice_number - 1]).appendTo("#diceFaces");
      $("#diceFaces").show();
      //3. Display result in current active player box.
      if (dice_number !== 1) {

        //Add the dice numbers to current scores if one is not rolled
        flash_score += dice_number;

        // TODO: Update the player current scores
        $("#activeScore" + active_player).text(flash_score);
      } else {
        // TODO: Disable function for roll button when 1 is rolled
        disableButton($("#roll-dice"), 5000);
        alert("You Rolled One");
        flash_score = 0;
        $("#activeScore" + active_player).text(flash_score);
        rollMessage();
        nextPlayer();
      }
    }
  });
  //click function for "New Game" button
  $("#new-game").click(function() {
    alert("New Game button Working!");
  });
  // Trying to combine both hold functionallity into one.
  $(".hold").click(function() {
    // alert("United hold working");
    if(game_active){
      score_index = active_player - 1;
      fixed_scores[score_index] += flash_score;
      $("#score-"+active_player).text(fixed_scores[score_index]);

      if (fixed_scores[score_index]>= 100) {
        $(".overlay" + active_player).css("background-color","#00cc00");
        $("#overlayTexta"+active_player).text("Player"+active_player);
        $("#overlayTextb"+active_player).text("You Win!!!");
        $(".overlay" + active_player).show();
        game_active = false;

      } else {
        // The held player display.
        $(".overlay" + active_player).css("background-color","#d2ff4d");
        $("#overlayTexta"+active_player).text("");
        $("#overlayTextb"+active_player).text("");
        $(".overlay" + active_player).show();
        nextPlayer();
      }
    }

  });

});
