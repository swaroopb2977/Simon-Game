/*

var buttonColors=["red","blue","green","yellow"];

var gamePattern=[];
var userClickedPattern=[];
var label=0;
var started = false;


$(document).keydown(function(event){

  if (!started) {
    $("h1").text("Level " + level);
    nextSequence();
    started = true;
  }

});

function nextSequence()
{
    label=label+1;
    $("h1").text("Level "+label);
    var n=Math.random();
    n=(n*4);
    n=Math.floor(n);
    var randomNumber=n;

    var randomChosenColour=buttonColors[n];
   
    gamePattern.push(randomChosenColour);

    


}

  function playsound(soundname)
  {
    var audio=new Audio("sounds/"+soundname+".mp3");
    audio.play();
  }

function animatePress(currentColor) {

    
 document.getElementById(currentColor).classList.add("pressed");
  
    //3.  Javascript to remove the pressed class after a 100 milliseconds.
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }



   $(".btn").click(function(){

    var userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    
    playsound(userChosenColour);
    console.log(userClickedPattern);

    checkAnswer(userClickedPattern.length-1);

   });


function checkanswer(currentlevel){


  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length){

      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {

    console.log("wrong");
    playSound("wrong");

      //2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
      $("h1").text("Game Over, Press Any Key to Restart");

  }


}


function nextSequence() {

  //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
  userClickedPattern = [];

  level++;
  $("h1").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function startOver() {

  //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;
}


*/

  //  return randomNumber;





/*
$(randomChosenColour).fadeOut();

    var userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);



/*
$(document).click(function()
{
    var audio
});*/




var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    } else {

      console.log("wrong");

      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Any Key to Restart");

      //2. Call startOver() if the user gets the sequence wrong.
      startOver();
    }

}

function nextSequence() {

  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//1. Create a new function called startOver().
function startOver() {

  //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;
}
