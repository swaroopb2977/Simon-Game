
var buttonColors=["red","blue","green","yellow"];

var gamePattern=[];
var userClickedPattern=[];

function nextSequence()
{
    var n=Math.random();
    n=(n*4);
    n=Math.floor(n);
    var randomNumber=n;

    var randomChosenColour=buttonColors[n];
    console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);

    return randomChosenColour;

}

 document.getElementById(nextSequence()).addEventListener("click",function(){

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

  function playsound(soundname)
  {
    var audio=new Audio("sounds/"+soundname+".mp3");
    audio.play();
  }
/*
  function animatePress(currentColor)
  {
    document.getElementById(currentColor).classList("pressed");
 //   $(currentColor).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
  }, 100);

  }

*/
function animatePress(currentColor) {

    //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
 //   $("#" + currentColor).addClass("pressed");
 document.getElementById(currentColor).classList.add("pressed");
  
    //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }



   $(".btn").click(function(){

    var userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    /*var Animated=this.id;
    $("#"+Animated).fadeIn(100).fadeOut(100).fadeIn(100);*/
    playsound(userChosenColour);
    console.log(userClickedPattern);

   });




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

