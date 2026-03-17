const canvas= document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.style.backgroundColor = "lightblue";

function drawPicture(){
  //Ground
  ctx.fillStyle="green";
  ctx.fillRect(0,300, 400, 100);
  //House
  ctx.fillStyle="red";
  ctx.fillRect(150,200,100,100);
  //Door
  ctx.beginPath();
  ctx.fillStyle="sienna";
  ctx.fillRect(175,250,25,50);
  ctx.fillStyle="slategray";
  ctx.arc(195,275, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  //Window
  ctx.fillStyle="silver";
  ctx.fillRect(210,250,25,25);
  ctx.lineWidth=2;
  ctx.strokeStyle="black";
  ctx.beginPath();
  ctx.moveTo(210,250);
  ctx.lineTo(210,275);
  ctx.lineTo(235,275);
  ctx.lineTo(235,250);
  ctx.lineTo(210,250);
  ctx.moveTo(222.5,250);
  ctx.lineTo(222.5,275);
  ctx.moveTo(210,262.5);
  ctx.lineTo(235,262.5);
  ctx.closePath();
  ctx.stroke();
  //Sun
  ctx.beginPath();
  ctx.strokeStyle="gold";
  ctx.fillStyle="gold";
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  //Roof
  ctx.beginPath();
  ctx.fillStyle ="darkslategray";
  ctx.strokeStyle="darkslategray";
  ctx.moveTo(150,200);
  ctx.lineTo(250,200);
  ctx.lineTo(200,125);
  ctx.lineTo(150,200);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  
}

drawPicture()