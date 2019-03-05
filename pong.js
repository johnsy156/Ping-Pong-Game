// Student Name: Mallavarapu Johnsy Vineela
// Student ID: 1001562621
// Declaring all the variables global to make
var ball_coord = null;
var ball_top = null;
var ball_left = null;
var ball_right = null;
var ball_bottom = null;
var x = 1;
var y = 1;
var intervalid;

// Function for setting speed based on the radio button selected
function startGame(event)
{
intervalid = setInterval(moveTheBall, 1)
var mtext =  "";
document.getElementById('messages').innerHTML = mtext;
document.getElementById('strikes').innerHTML = 0;
// alert(intervalid);
};

function initialize()
{
  //Get ball coordinates
  ball_coord = document.getElementById('ball').getBoundingClientRect();
  ball_top = ball_coord.top;
  ball_left = ball_coord.left;
  ball_right = ball_coord.right;
  ball_bottom = ball_coord.bottom;
};

function movePaddle(event)
{
  var paddle_move = event.clientY

if(event.clientY + 10 > document.getElementById('court').getBoundingClientRect().bottom)
{
    document.getElementById("paddle").style.bottom = document.getElementById('court').getBoundingClientRect().bottom;
}
else if (event.clientY < document.getElementById('court').getBoundingClientRect().top + 100)
{
    document.getElementById("paddle").style.top = document.getElementById('court').getBoundingClientRect().top;
}
else
{
  document.getElementById("paddle").style.top = event.clientY - 200 + "px";
}
};

function moveTheBall()
{
  // alert(document.getElementById('court').getBoundingClientRect().top +'>'+ court_bottom);
  if(document.getElementById('ball').getBoundingClientRect().bottom > document.getElementById('court').getBoundingClientRect().bottom || document.getElementById('ball').getBoundingClientRect().top < document.getElementById('court').getBoundingClientRect().top)
  {
   y = -y;
   // x = -x;
  }
  if(document.getElementById('ball').getBoundingClientRect().left < document.getElementById('court').getBoundingClientRect().left)
  {
    x = -x;
    // y = -y;
  }
  if(document.getElementById('ball').getBoundingClientRect().right > document.getElementById('court').getBoundingClientRect().right)
  {
    // reload for now
    // alert("You Lost! :( ")
    var errtext =  "You Lost! :(";
    document.getElementById('messages').innerHTML = errtext;
    ball_top = 0;
    ball_left = 0;
	// Reset the interval id
    clearInterval(intervalid);
    if (document.getElementById("score").innerHTML < document.getElementById("strikes").innerHTML)
    {
    document.getElementById("score").innerHTML = document.getElementById("strikes").innerHTML;
    var errtext =  "You beat the max score!";
    document.getElementById('messages').innerHTML = errtext;
    }
    // document.getElementById("strikes").innerHTML = 0;
    // alert(intervalid);
  }
  if(document.getElementById('ball').getBoundingClientRect().right > document.getElementById('paddle').getBoundingClientRect().left)
  {
    if (document.getElementById('ball').getBoundingClientRect().top > document.getElementById('paddle').getBoundingClientRect().top)
  {
    if (document.getElementById('ball').getBoundingClientRect().bottom < document.getElementById('paddle').getBoundingClientRect().bottom)
  {
    x = -x;
    y = -y;
    document.getElementById("strikes").innerHTML = parseInt(document.getElementById("strikes").innerHTML) + 1;
    // strike = strike + 1;
  }
}
}
  // if(document.getElementById('ball').getBoundingClientRect().right > document.getElementById('paddle').getBoundingClientRect().top)
    // alert(y);
    ball_top = ball_top + y;
    ball_left = ball_left + x;
  // document.getElementById("ball").style.top = ball_coord.top + x;
  document.getElementById("ball").style.left = ball_left + "px";
  document.getElementById("ball").style.top = ball_top + "px";
}
;

function setSpeed(speed)
{
x=speed;
y=speed;
};

function resetGame(event)
{
// Testing with alert
// alert("The game has been reset");
var errtext =  "The game has been reset";
document.getElementById('messages').innerHTML = errtext;
// Get the boundingbox coordinates to reset ball to left
document.getElementById("ball").style.left = "0px";
// Reset score to zero
// document.getElementById("score").innerHTML = 0;
document.getElementById("strikes").innerHTML = 0;
// refresh page to start fresh game
// location.reload();
};
