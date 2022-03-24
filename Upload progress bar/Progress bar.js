const startBtn = document.getElementById('StartBtn');

const element = document.getElementById('MyBar');
const bgImg = document.getElementById('BgImg');

bgImg.classList.add('blur');

let root_speed = getComputedStyle(document.documentElement);

console.log(root_speed.getPropertyValue('--speed'));

document.documentElement.style.setProperty('--speed', '15s');

console.log(root_speed.getPropertyValue('--speed'));

let speed = 50;

document.documentElement.style.setProperty('--speed', `${speed / 10}s`);

console.log(root_speed.getPropertyValue('--speed'));

let i = 0;
startBtn.addEventListener('click', () => {
	if (i == 0) {
		i = 1;
		let width = 0;
		setInterval(frame, speed);
		function frame() {
			if (width >= 100) {
				i = 0;
			} else {
				width++;
				element.style.width = width + '%';
				element.innerHTML = width + '%';
				bgImg.classList.remove('blur');
				bgImg.classList.add('clear');
			}
		}
	}
});
