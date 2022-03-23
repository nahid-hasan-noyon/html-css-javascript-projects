const pea = document.querySelector('.pea');

pea.style.opacity = '1';

const shells = document.querySelectorAll('.shell');

//? hold and invisible are not style sheet but working

function dragStart() {
	this.className += ' hold';
	setTimeout(() => {
		this.className = 'invisible';
	}, 0);
}

function dragEnd() {
	this.className = 'pea';
	this.classList.toggle('pea-hidden');
	this.style.opacity = '0';
	document.querySelector('body').style.backgroundColor = 'red';
	title.innerText = 'Find the pea';
	title.style.color = '#fff';
}

pea.addEventListener('dragstart', dragStart);
pea.addEventListener('dragend', dragEnd);

function dragOver(e) {
	e.preventDefault();
}

function dragEnter(e) {
	e.preventDefault();
	this.className += ' hovered';
}

function dragLeave() {
	this.className = 'shell';
}

function dragDrop() {
	this.className = 'shell';
	this.append(pea);
}

for (let shell of shells) {
	shell.addEventListener('dragover', dragOver);
	shell.addEventListener('draenter', dragEnter);
	shell.addEventListener('dragleave', dragLeave);
	shell.addEventListener('drop', dragDrop);
}

shells.forEach((shell) => {
	shell.addEventListener('click', () => {
		const winOrLose = document.querySelector('.overlay');
		pea.style.opacity = '1';
		winOrLose.style.display = 'block';
		if (shell.childElementCount == 1) {
			winOrLose.innerHTML = `<h2 class="win">You win</h2>`;
		} else {
			pea.style.opacity = '1';
			winOrLose.innerHTML = `<h2 class="lose">You Lost</h2>`;
		}
		setTimeout(() => {
			alert('Try again');
			location.reload();
		}, 1000);
	});
});
