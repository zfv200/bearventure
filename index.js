const start = document.getElementById('start-button')
const player = document.getElementById('player')
// const enemy = document.getElementById('enemy')
const game = document.getElementById('game')
const game_height = 600
const game_width = 600
const left_arrow = 37
const right_arrow = 39
const up_arrow = 38
const down_arrow = 40
const enemies = []
const score = document.getElementById('score')
const enemy_piece = document.getElementById('enemy')
const honey_piece = document.getElementById('honey')


function startGame() {
	window.addEventListener('keydown', movePlayer);
  gameInterval = setInterval(function() {
    createEnemy(Math.floor(Math.random() *  (600 - 20)))
  }, 1000)
	produceHoney();
}

function endGame() {
	clearInterval(gameInterval)
	var end_button = document.getElementById('end-button');
	end_button.style.display = "block";
  	enemies.forEach(function(enemy) {enemy.remove() });
  	honey.remove();
  	window.removeEventListener('keydown', movePlayer);
}

//maybe would be better to create a grid, and then place it randomly on one of the grids
//then when the player reaches the grid they attain the piece

function produceHoney(x) {
	const honey = document.createElement('div')
	position = Math.floor(Math.random() * Math.floor(560))

	honey.id = 'honey'
	honey_height = 300
	honey.className = 'honey-image'
	// honey.style.right = `${position}px`
	honey.style.top = "300px"
	honey.style.top = `${Math.floor(Math.random() * (570 - 300)) + 300}px`
	honey.style.left = `${Math.floor(Math.random() * Math.floor(560))}px`
	honey.style.height = "30px"
	honey.style.width = "30px"
	honey.style.color = "yellow"

	game.appendChild(honey)

	// honey.push(honey)
	return honey
}

function getHoney() {
	// const top = parseInt(honey.style.top);
	const honey_piece = document.getElementById('honey')
	var score = document.getElementById('score')


	const playerLeftEdge = parseInt(player.style.left) - 6;
	const playerRightEdge = playerLeftEdge + 50;
	const playerTop = parseInt(player.style.top) - 8;
	const playerBottom = parseInt(player.style.top) + 46

	const honeyPositionRight = parseInt(honey_piece.style.left) + 30
	const honeyPositionLeft = parseInt(honey_piece.style.left)
	const honeyTop = parseInt(honey_piece.style.top)
	const honeyBottom = parseInt(honey_piece.style.top) + 30


	if (playerLeftEdge <= honeyPositionRight && playerRightEdge >= honeyPositionLeft && 
		(playerTop <= honeyBottom && playerBottom >= honeyTop))  {
		score.innerText++
		game.removeChild(honey_piece)
		produceHoney();
	}
}

function enemyCollide(enemy) {
	const playerLeft = parseInt(player.style.left);
	const playerRight = playerLeft + 40;
	const playerT = parseInt(player.style.top);

	const enemyBottom = parseInt(enemy.style.top) + 38
	const enemyLeft = parseInt(enemy.style.left)
	const enemyRight = parseInt(enemyLeft) + 40

	if (enemyBottom >= playerT && enemyLeft <= playerRight && enemyRight <= playerRight + 38
		&& enemyRight >= playerLeft && enemyBottom <= playerT)
		return true
	}




// function moveEnemyLeft() {
// 	var pos = 560;
// 	var interval = setInterval(frame, 5);
// 	function frame() {
// 		if (pos == 0) {
// 			moveEnemyDown();
// 			clearInterval(interval);
// 		} else {
// 			pos--;
// 			enemy.style.top = pos + 'px';
// 			enemy.style.left = pos + 'px';
// 		}
// 	}
// };



// function moveEnemyDown() {
// 	const enemy = document.createElement('div')
// 	var pos = Math.floor(Math.random() * Math.floor(560))
// 	var top = 0
// 	enemy.style.left = pos
// 	enemy.style.top = 0
// 	enemy.id = enemy

// 	game.appendChild(enemy)

// 	function moveEnemy() {
// 	  enemy.style.top = `${top += 3}px`
// 	if (parseInt(enemy.style.top) < 600) {
// 		window.requestAnimationFrame(moveEnemy)
// 	} else {
// 	   enemy.remove();
// 	}
//   }
//   window.requestAnimationFrame(moveEnemy)
//   enemies.push(enemy)

//   return enemy
// };

function createEnemy(x) {
  const enemy = document.createElement('div')

  enemy.id = 'enemy'
  var top = 0
  var pos = Math.floor(Math.random() * Math.floor(560))

  enemy.style.left = `${pos}px`

  enemy.style.top = top

  game.appendChild(enemy)

  function moveEnemy() {
    enemy.style.top = `${top += 2}px`;

    if (enemyCollide(enemy)) {
      console.log('working')
      endGame();
    }

    if (top < 560) {
      window.requestAnimationFrame(moveEnemy)
    } else {
      enemy.remove()
    }
  }

  window.requestAnimationFrame(moveEnemy)

  enemies.push(enemy)

  return enemy
}




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

    $('#end-button').on('click', function() {
    	$(this).fadeOut();
    })
});


