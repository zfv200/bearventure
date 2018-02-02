const start = document.getElementById('start-button')
const player = document.getElementById('player')
const enemy = document.getElementById('enemy')
const game = document.getElementById('game')
const game_height = 600
const game_width = 600
const left_arrow = 37
const right_arrow = 39
const up_arrow = 38
const down_arrow = 40



function startGame() {
	window.addEventListener('keydown', movePlayer);
	moveEnemyDown();
}

function moveEnemyRight() {
	var pos = 560;
	var interval = setInterval(frame, 10);
	function frame() {
		if (pos == 0) {
			moveEnemyDown()
			clearInterval(interval);
		} else {
			pos--;
			enemy.style.top = pos + 'px';
			enemy.style.left = pos + 'px';
		}
	}

};

function moveEnemyDown() {
	var pos = 0;
	var interval = setInterval(frame, 10);
	function frame() {
		if (pos == 560) {
			moveEnemyRight();
			clearInterval(interval)
		} else {
			pos++;
			enemy.style.top = pos + 'px';
			enemy.style.left = pos + 'px';
		}
	}

};


function movePlayer(event) {
	const key = event.which

	if (key === left_arrow) {
		movePlayerLeft();
	} else if (key === right_arrow) {
		movePlayerRight();
	} else if (key === up_arrow) {
		movePlayerUp();
	} else if (key === down_arrow) {
		movePlayerDown();
	}
}

function movePlayerLeft() {
window.requestAnimationFrame(function() {
	var left = parseInt(player.style.left)

	if (left > 0) {
		player.style.left = `${left - 4}px`
		}
	});
}

function movePlayerRight() {
window.requestAnimationFrame(function() {
	var left = parseInt(player.style.left)

	if (left < 560) {
		player.style.left = `${left + 4}px`
		}
	});
}

function movePlayerUp() {
window.requestAnimationFrame(function() {
	var top = parseInt(player.style.top)

	if (top > 0) {
		player.style.top = `${top - 4}px`
		};
	});
};

function movePlayerDown() {
window.requestAnimationFrame(function() {
	var top = parseInt(player.style.top)

	if (top < 580) {
		player.style.top = `${top + 4}px`
	}
})
}



$(document).ready(function() {
    $('#start-button').on('click', function() {
    	$(this).fadeOut();
    });
});