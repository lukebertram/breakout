var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//RED SQUARE
ctx.beginPath();
//rect(topLeft_X, topLeft_Y, width, height)
ctx.rect(65, 165, 125, 125);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

//SOLID GREEN CIRCLE
ctx.beginPath();
//arc(center_X, center_Y, radius, startAngle_rad, endAngle_rad, direction)
ctx.arc(350, 220, 77, 0, Math.PI*2, false);
ctx.fillStyle = "#55CC88";
ctx.fill();
ctx.closePath();

//TRANSP. STROKE BLUE BOX
ctx.beginPath();
ctx.rect(160, 10, 250, 175);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.endPath();
