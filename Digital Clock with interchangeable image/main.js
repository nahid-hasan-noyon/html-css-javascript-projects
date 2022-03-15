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

	// User text

	const userName = 'Nahid';
	const user = document.getElementById('user');
	// change body background
	let backgroundImg;

	if (hour < 8 && session === 'AM') {
		backgroundImg = `url(https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9ybmluZ3xlbnwwfHwwfHw%3D&w=1000&q=80)`;
		user.innerHTML = `Good Morning, ${userName}`;
	} else if (hour < 11 && session === 'AM') {
		backgroundImg = `url(https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9ybmluZ3xlbnwwfHwwfHw%3D&w=1000&q=80)`;
		user.innerHTML = `Good Day, ${userName}`;
	} else if (hour < 8 && session === 'PM') {
		backgroundImg = `url(https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9ybmluZ3xlbnwwfHwwfHw%3D&w=1000&q=80)`;
		user.innerHTML = `Good Afternoon, ${userName}`;
	} else {
		backgroundImg = `url(https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9ybmluZ3xlbnwwfHwwfHw%3D&w=1000&q=80)`;
		user.innerHTML = `Good night, ${userName}`;
	}

	const body = document.querySelector('body');
	body.style.background = `${backgroundImg} center/cover`;
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
