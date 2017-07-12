var x = 10, y = 410;
var middle = 315, end = 410;
var jumping = true;
var speed = 6;
var interval;

window.addEventListener('load', init);

function init() {

	var canvas = document.getElementById('my_canvas');
	var context = canvas.getContext('2d');
	draw(canvas, context, x, y);

	interval = window.setInterval(function () {
		jump(Context, context);
	}, 32);

}

function draw(canvas, context, x, y) {
	canvas.width = canvas.width;
	var img = document.getElementById('rex');
	context.drawImage(img, x, y);
}

function moveUp(canvas, context) {
	y -= speed;
	draw(canvas, context, x, y);
}

function moveDown(canvas, context) {
	y += speed;
	draw(canvas, context, x, y);
}

function stop(canvas, context) {
	var x = 10, y = 410;
	draw(canvas, context, x, y);
}

function jump(canvas, context) {
	if (jumping == true) {
		moveUp(canvas, context);
		if (y <= middle) {
			jumping = false;
		}
	}
	else {
		moveDown(canvas, context);
		if (y >= end) {
			stop(canvas, context);
		}
	}
}

function keyJump(canvas, context) {
	document.addEventListener('keyup', (event) => {
		const keyName = event.key;
		if (keyName === 'Control') {
			jump(canvas, context);
		}
	}, true);

}


