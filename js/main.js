// Global-variables. These are the default variables of our variables
var fixed_scores = [0, 0];
var flash_score = 0;
var active_player = 1;
var game_active = true;

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
    flash_score = 0;
    $(".overlay2").hide();
    $("#hold1").off("click", holdMe1);
    $("#hold2").on("click", holdMe2)
  } else {
    active_player = 1;
    flash_score = 0;
    $(".overlay1").hide();
    $("#hold2").off("click", holdMe2);
    $("#hold1").on("click", holdMe1);
  }

  // held_score = 0;
  // alert("Its Player" + active_player+"'s turn!");

}
// TODO: Roll message show.
var rollMessage = function() {
  $("#overlayTexta" + active_player).text("You rolled One!!");
  $("#overlayTextb" + active_player).text("");
  $(".overlay" + active_player).css("background-color", "#cc0000");
  $(".overlay" + active_player).show();
  $("#activeScore" + active_player).text("0");
}
// TODO:gameReset function.

var gameReset = function() {
  // Reset to default.
  fixed_scores = [0, 0];
  flash_score = 0;
  active_player = 1;
  game_active = true;
  $("#diceFaces").hide();
  $(".overlay2").hide();
  $(".overlay1").hide();
  $("#activeScore1").text("0");
  $("#activeScore2").text("0");
  $("#score-1").text("0");
  $("#score-2").text("0");
  $("#hold1").on("click", holdMe1);
  $("#hold2").on("click", holdMe2);
}

var holdMe1 = function(event) {
  event.stopPropagation();
  // Hold for One
  if (game_active) {
    // When the score is held the flash_scores are updated to the fixed scores
    fixed_scores[0] += flash_score;
    //Update the UI
    $("#score-1").text(fixed_scores[0]);
    //  The winning
    if (fixed_scores[0] >= 50) {
      // the Winning display
      $(".overlay1").css("background-color", "#00cc00");
      $("#overlayTexta1").text("Player" + active_player);
      $("#overlayTextb1").text("You Win!!!");
      $(".overlay1").show();
        // Deactivate the hold boxes
      $("#hold1").off("click");
      $("#hold2").off("click");
      game_active = false;
    } else {
      // the hold display
      $(".overlay1").css("background-color", "#d2ff4d");
      $("#overlayTexta1").text("");
      $("#overlayTextb1").text("Next Player!!");
      $(".overlay1").show();
      nextPlayer();
    }

  }

}

var holdMe2 = function(event) {
  event.stopPropagation();
  // Hold for One
  if (game_active) {
    // When the score is held the flash_scores are updated to the fixed scores
    fixed_scores[1] += flash_score;
    //Update the UI
    $("#score-2").text(fixed_scores[1]);
    //  The winning
    if (fixed_scores[1] >= 50) {
      // the Winning display
      $(".overlay2").css("background-color", "#00cc00");
      $("#overlayTexta2").text("Player" + active_player);
      $("#overlayTextb2").text("You Win!!!");
      $(".overlay2").show();
      game_active = false;
      // Deactivate the hold boxes
      $("#hold1").off("click");
      $("#hold2").off("click");
    } else {
      // the hold display
      $(".overlay2").css("background-color", "#d2ff4d");
      $("#overlayTexta2").text("");
      $("#overlayTextb2").text("Next Player!!");
      $(".overlay2").show();
      nextPlayer();
    }

  }

}

var diceRolled = function functionName() {

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
      rollMessage();
      nextPlayer();
    }
  }
}

gameReset();

// FRONT END
$(document).ready(function() {
  gameReset();
  //click function for "Roll Dice" button
  $("#roll-dice").on("click", diceRolled);


  $("#hold1").on("click", holdMe1);
  $("#hold2").on("click", holdMe2);

  //click function for "New Game" button
  $("#new-game").click(function() {
    // alert("New Game button Working!");
    gameReset();
  });
});
