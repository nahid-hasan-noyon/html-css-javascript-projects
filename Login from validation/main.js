// DOM Elements

const container = document.querySelector('.login-container');
const form = document.querySelector('.loginForm');
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
	if (username.value === '' || username.value.length < 3) {
	}

	if (password.value === '' || password.value.length < 6) {
	}
});
