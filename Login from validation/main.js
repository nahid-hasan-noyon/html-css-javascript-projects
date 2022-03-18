// DOM Elements

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
