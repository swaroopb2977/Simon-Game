
var buttonColors=["red","blue","green","yellow"];

var gamePattern=[];

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

  //  return randomNumber;





/*
$(randomChosenColour).fadeOut();
/*
$(document).click(function()
{
    var audio
});*/

