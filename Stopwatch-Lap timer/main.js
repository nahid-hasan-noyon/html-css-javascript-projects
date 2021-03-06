////window.addEventListener("DOMConentLoaded");

window.onload = function () {
	const minutes = document.getElementById('minutes');
	const tens = document.getElementById('tens');
	const seconds = document.getElementById('seconds');

	const startBtn = document.getElementById('start-btn');
	const stopBtn = document.getElementById('stop-btn');
	stopBtn.disabled = true;
	const resetBtn = document.getElementById('reset-btn');
	resetBtn.disabled = true;
	console.log(minutes, tens, seconds);
	console.log(startBtn, stopBtn, resetBtn);

	let minutesSet = 00;
	let secondsSet = 00;
	let tensSet = 00;
	let intervel;

	startBtn.onclick = function () {
		// clearInterval(intervel);
		intervel = setInterval(startTimer, 10);
		startBtn.disabled = true;
		stopBtn.disabled = false;
		resetBtn.disabled = false;
		dimEffect();
	};

	// Create Start Timer Function
	function startTimer() {
		tensSet++;
		////console.log(tens++);
		if (tens < 9) {
			tens.innerHTML = '0' + tensSet;
		}
		if (tensSet > 9) {
			tens.innerHTML = tensSet;
		}
		if (tensSet > 99) {
			secondsSet++;
			seconds.innerHTML = '0' + secondsSet;
			tensSet = 0;
			tens.innerHTML = '0' + 0;
		}
		if (secondsSet > 9) {
			seconds.innerHTML = secondsSet;
		}
		if (secondsSet > 59) {
			minutesSet++;
			minutes.innerHTML = '0' + minutesSet;
			secondsSet = 0;
		}
		if (minutesSet > 9) {
			minutes.innerHTML = minutesSet;
		}
	}

	stopBtn.onclick = function () {
		clearInterval(intervel);

		startBtn.disabled = false;
		stopBtn.disabled = true;
		resetBtn.disabled = false;
		dimEffectStop();
		const lap = document.getElementById('laps');
		const li = document.createElement('li');

		// template literals javascript
		li.innerHTML = `lap: <span>${minutes.innerHTML}:${seconds.innerHTML},${tens.innerHTML}</span>`;
		lap.appendChild(li);
	};

	resetBtn.onclick = function () {
		clearInterval(intervel);
		dimEffectStop();

		startBtn.disabled = false;
		stopBtn.disabled = true;
		resetBtn.disabled = true;

		tensSet = '00';
		secondsSet = '00';
		minutesSet = '00';
		tens.innerHTML = tensSet;
		seconds.innerHTML = secondsSet;
		minutes.innerHTML = minutesSet;
		document.getElementById('laps').innerHTML = '';
	};

	function dimEffect() {
		const lapTime = document.querySelector('.lap-time');
		lapTime.classList.add('dimming-effect');
	}

	function dimEffectStop() {
		const lapTime = document.querySelector('.lap-time');
		lapTime.classList.remove('dimming-effect');
	}
};
