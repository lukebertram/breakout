var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var newColor = "#000000"

function drawBall(color) {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

function getRandomColor() {
  var letters = '789ABCD';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 6)];
  }
  return color;
}
function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall(newColor);
  x += dx;
  y += dy;
  if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
    newColor = getRandomColor();
  }
  if(y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
    newColor = getRandomColor();
  }
}

setInterval(draw, 10);
