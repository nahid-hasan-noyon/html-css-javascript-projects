const searchBtn = document.getElementById('search-btn');

const searchInput = document.querySelector('.search-input');
// searchBtn.addEventListener('click', function ()
searchBtn.onclick = function () {
	searchInput.classList.toggle('active-search');
};

document.querySelector('main').onclick = function () {
	searchInput.classList.remove('active-search');
};

console.log(searchBtn, searchInput);
