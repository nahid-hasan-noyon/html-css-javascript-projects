const p1ScoreDisplay = document.querySelector('#p1Score');
const p2ScoreDisplay = document.querySelector('#p2Score');

const selectWinningScore = document.querySelector('#playto');

const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetBtn');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', () => {
	if (!isGameOver) {
		p1Score += 1;
		if (p1Score === winningScore) {
			isGameOver = true;
			p1ScoreDisplay.classList.add('winner');
			p2ScoreDisplay.classList.add('losser');
		}
		p1ScoreDisplay.innerText = p1Score;
	}
});

p2Button.addEventListener('click', () => {
	if (!isGameOver) {
		p2Score += 1;
		if (p2Score === winningScore) {
			isGameOver = true;
			p2ScoreDisplay.classList.add('winner');
			p1ScoreDisplay.classList.add('losser');
		}
		p2ScoreDisplay.innerText = p2Score;
	}
});
selectWinningScore.addEventListener('change', function () {
	winningScore = parseInt(this.value);
	//// console.log(this.value);
	resetGame();
});

resetButton.addEventListener('click', resetGame);

function resetGame() {
	p1Score = 0;
	p2Score = 0;
	isGameOver = false;
	p1ScoreDisplay.innerText = p1Score;
	p2ScoreDisplay.innerText = p2Score;
	// p1ScoreDisplay.classList.remove('winner');
	// p2ScoreDisplay.classList.remove('losser');
	// p2ScoreDisplay.classList.remove('winner');
	// p1ScoreDisplay.classList.remove('losser');
	p1ScoreDisplay.classList.remove('winner', 'losser');
	p2ScoreDisplay.classList.remove('winner', 'losser');
}
