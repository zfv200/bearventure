var canvas = document.getElementById("my-canvas");
var ctx = canvas.getContext("2d");
var bear = new Image();
bear.src = ""


function addBear() {
bear.addEventListener('load', function() {
	ctx.drawImage(bear, 100, 400)
	})
}

addBear();

// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();
