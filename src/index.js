var canvas = document.createElement('canvas');
var divContainer = document.getElementById('drawArea');
divContainer.appendChild(canvas);
document.body.style.margin = 0;
canvas.style.position = 'fixed';
var ctx = canvas.getContext('2d');
resize();
var pos = { x: 0, y: 0 };
window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}
function resize() {
  ctx.canvas.width = divContainer.clientWidth -5; //you set the size as you needs
  ctx.canvas.height = divContainer.clientHeight -5; //in this case i fit to parent div container
}

function draw(e) {
  if (e.buttons !== 1) return;
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#c0392b';
  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.lineTo(pos.x, pos.y)
  ctx.stroke();
}
function reset(){
ctx.clearRect(0,0, canvas.width, canvas.height);
var imgFirma = document.getElementById('imgFirma');
imgFirma.src="";
}
function canvasToImg()
{
	var image = new Image();
	var imgFirma = document.getElementById('imgFirma');
	imgFirma.src = canvas.toDataURL();
}
