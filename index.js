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
const honey = []



function startGame() {
	window.addEventListener('keydown', movePlayer);
	moveEnemyDown();
	produceHoney();
}

//maybe would be better to create a grid, and then place it randomly on one of the grids
//then when the player reaches the grid they attain the piece

function produceHoney(x) {
	const honey = document.createElement('div')
	position = Math.floor(Math.random() * Math.floor(560))

	honey.id = 'honey'
	honey.style.right = `${position}px`
	honey.style.top = `${position}px`
	honey.style.left = `${position}px`
	honey.style.height = "20px"
	honey.style.width = "40px"
	honey.style.color = "yellow"

	game.appendChild(honey)

	// honey.push(honey)
	return honey
}

function getHoney() {
	// const top = parseInt(honey.style.top);
	const honey_piece = document.getElementById('honey')

	const playerLeftEdge = parseInt(player.style.left);
	const playerRightEdge = playerLeftEdge + 40;
	// const honeyLeftEdge = parseInt(honey_piece.style.left) + 20;
	// const honeyRightEdge = honeyLeftEdge + 40;

	const honeyCenterLeft = parseInt(honey_piece.style.right)
	const honeyCenterRight = parseInt(honey_piece.style.right)
	const honeyTop = parseInt(honey_piece.style.top)
	const honeyBottom = parseInt(honey_piece.style.top) - 20


	if (playerLeftEdge <= honeyCenterRight) {
		console.log('true')
		produceHoney();
	}
}

function moveEnemyLeft() {
	var pos = 560;
	var interval = setInterval(frame, 5);
	function frame() {
		if (pos == 0) {
			moveEnemyDown();
			clearInterval(interval);
		} else {
			pos--;
			enemy.style.top = pos + 'px';
			enemy.style.left = pos + 'px';
		}
	}
};

function moveEnemyDown() {
	enemy.style.top = 40
	var pos = 0;
	var interval = setInterval(frame, 5);
	function frame() {
		if (pos == 560) {
			moveEnemyLeft();
			clearInterval(interval)
		} else {
			pos ++;
			enemy.style.top = pos + 'px';
			enemy.style.left = pos + 'px';
		}
	}
};


function movePlayer(event) {
	const key = event.which
	getHoney();

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
		player.style.left = `${left - 8}px`
		}
	});
}

function movePlayerRight() {
window.requestAnimationFrame(function() {
	var left = parseInt(player.style.left)

	if (left < 560) {
		player.style.left = `${left + 8}px`
		}
	});
}

function movePlayerUp() {
window.requestAnimationFrame(function() {
	var top = parseInt(player.style.top)

	if (top > 0) {
		player.style.top = `${top - 8}px`
		};
	});
};

function movePlayerDown() {
window.requestAnimationFrame(function() {
	var top = parseInt(player.style.top)

	if (top < 580) {
		player.style.top = `${top + 8}px`
	}
})
}



$(document).ready(function() {
    $('#start-button').on('click', function() {
    	$(this).fadeOut();
    });
});