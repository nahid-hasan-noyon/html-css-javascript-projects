//document content load
window.addEventListener('DOMContentLoaded', showTime());

function showTime() {
	let date = new Date();

	////    date.setTime(5000);

	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();
	let session = 'AM';

	if (hour == 0) {
		hour = 12;
	}
	if (hour > 12) {
		hour = hour - 12;
		session = 'PM';
	}
	if (hour < 10) {
		hour = '0' + hour;
	}
	if (minute < 10) {
		minute = '0' + minute;
	}
	if (second < 10) {
		second = '0' + second;
	}

	// hour = hour < 10 ? (hour = "0" + hour) : hour;
	// minute = minute < 10 ? (minute = "0" + minute) : minute;
	// second = second < 10 ? (second = "0" + second) : second;

	// const time = hour + ":" + minute + ":" second + "" + "|" + "" + session;
	// string literal
	const time = `${hour}:${minute}.<small>${second}|${session}</small>`;

	document.getElementById('displayClock').innerHTML = time;
	setTimeout(showTime, 1000);

	// change body background
	let backgroundImg;
	const body = document.querySelector('body');
	body.style.background = `${backgroundImg} cover/center`;

	// User text

	const userName = 'Nahid';
	const user = document.getElementById('user');

	if (hour < 8 && session === 'AM') {
		backgroundImg = ``;
		user.innerHTML = `Good Morning, ${userName}`;
	} else if (hour < 11 && session === 'AM') {
		backgroundImg = ``;
		user.innerHTML = `Good Day, ${userName}`;
	} else if (hour < 8 && session === 'PM') {
		backgroundImg = ``;
		user.innerHTML = `Good Afternoon, ${userName}`;
	} else {
		backgroundImg = ``;
		user.innerHTML = `Good night, ${userName}`;
	}

	// focus
	document
		.querySelector('.focus-container input')
		.addEventListener('keypress', function (event) {
			if (event.key === 'Enter') {
				const focus = document.querySelector('.focus-container input');
				document.querySelector(
					'.focus-container'
				).innerHTML = `<h6>TODAY:</h6><h1>${focus.value}</h1>`;
			}
		});
}
