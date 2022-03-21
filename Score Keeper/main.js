const p1 = {
	score: 0,
	display: document.querySelector('#p1Score'),
	button: document.querySelector('#p1Button'),
};

const p2 = {
	score: 0,
	display: document.querySelector('#p2Score'),
	button: document.querySelector('#p2Button'),
};

const selectWinningScore = document.querySelector('#playto');
const resetButton = document.querySelector('#resetBtn');

let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
	if (!isGameOver) {
		player.score += 1;
		if (player.score === winningScore) {
			isGameOver = true;
			player.display.classList.add('winner');
			opponent.display.classList.add('losser');
			player.button.disabled = true;
			opponent.button.disabled = true;
		}
		player.display.innerText = player.score;
	}
}

p1Button.addEventListener('click', () => {
	updateScores(p1, p2);
});

p2Button.addEventListener('click', () => {
	updateScores(p2, p1);
});

selectWinningScore.addEventListener('change', function () {
	winningScore = parseInt(this.value);
	resetGame();
});

resetButton.addEventListener('click', resetGame);

function resetGame() {
	for (let p of [p1, p2]) {
		p.score = 0;
		p.display.innerText = p.score;
		p.display.classList.remove('winner', 'losser');
		p.button.disabled = false;
	}

	isGameOver = false;
}
