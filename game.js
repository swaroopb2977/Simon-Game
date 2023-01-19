
var buttonColors=["red","blue","green","yellow"];

var gamePattern=[];
var userClickedPattern=[];
var label=0;


$(document).keydown(function(event){

  if(event.key==='a'|| event.key==='A')
    {
        
        $("h1").text("Level "+label);
        nextSequence();
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

    

/*

 document.getElementById(randomChosenColour).addEventListener("click",function(){

    var color=this.className;
    var Animated=this.id;
   
    $("#"+Animated).fadeIn(100).fadeOut(100).fadeIn(100);
      

    switch(color)
    {
        case  "btn green":

        var a1=new Audio("sounds/green.mp3");
        a1.play();
        break;

        case "btn blue":

        var a2=new Audio("sounds/blue.mp3");
        a2.play();
        break;

        case "btn red":

        var a3=new Audio("sounds/red.mp3");
        a3.play();
        break;


        case "btn yellow":

        var a4=new Audio("sounds/yellow.mp3");
        a4.play();
        break;

        default:

        var a5=new Audio("sounds/wrong.mp3");
        a5.play();
        break;

    }

  });
  */
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

