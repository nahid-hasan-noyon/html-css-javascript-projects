// DOM Elements

const container = document.querySelector('.login-container');
const form = document.getElementById('loginForm');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const togglePasswordIcon = document.querySelector('i.fa-eye');

// * * show hide password   * * \\
togglePasswordIcon.onclick = () => {
	if (password.type === 'password') {
		password.type = 'text';
	} else {
		password.type = 'password';
	}
};

// togglePasswordIcon.addEventListener('click', showPassword);
// function showPassword() {
// 	if (password.type === 'password') {
// 		password.type = 'text';
// 	} else {
// 		password.type = 'password';
// 	}
// }
// * * show hide password   * * \\

// * * simple validation

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (username.value === '' || username.value.length < 4) {
		showError(
			username,
			'Username can not be empty & not less then 4 digit'
		);
	} else showSuccess(username);

	if (password.value === '' || password.value.length < 6) {
		showError(
			password,
			'Password can not be empty & not less then 6 digit'
		);
	} else showSuccess(password);
});

function showError(input, msg) {
	const formField = input.parentElement;
	formField.className = 'form-field error';

	const alert_msg = formField.querySelector('.alert-msg');
	alert_msg.style.visibility = 'visible';
	alert_msg.style.color = 'red';
	alert_msg.innerText = msg;
}

function showSuccess(input) {
	const formField = input.parentElement;
	formField.className = 'form-field success';
	//! add and remove will not work because formField is not a single element.
	//// formField.classlist.remove('error');
	//// formField.classlist.add('success');

	const alert_msg = formField.querySelector('.alert-msg');
	alert_msg.style.visibility = 'hidden';
}

//** Request form */

const requestForm = document.querySelector('.form-request');
requestForm.style.display = 'none';
const showRequestForm = document.querySelector('.reset-password');

showRequestForm.addEventListener('click', function (e) {
	e.preventDefault();
	if (requestForm.style.display !== 'block') {
		container.style.minHeight = '550px';
		requestForm.style.display = 'block';
	} else {
		requestForm.style.display = 'none';
		container.style.minHeight = 'initial';
	}
});

requestForm.onclick = request();

function request(e) {
	e.preventDefault();
	const requestEmail = document.getElementById('requestEmail');
	if (requestEmail.value === '') {
		showError(requestEmail, 'Email can not be empty');
	} else showSuccess(requestEmail);
}
