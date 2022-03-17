const mainContent = document.querySelector('main');

const tabs = document.querySelectorAll('.btn');

const content = document.querySelectorAll('.content');

// console.log(mainContent, tabs, content);

mainContent.addEventListener('click', function (e) {
	////    console.log(e);    // where are you clicking
	////    console.log(e.target);  // which element is clicked
	//// console.log(e.target.dataset);

	/**
	 *
	 */
	console.log(e.target.dataset.id);
	const tabId = e.target.dataset.id;

	if (tabId) {
		tabs.forEach(function (tab) {
			tab.classList.remove('active');
		});
		console.log(e.target);
		e.target.classList.add('active');
		content.forEach(function (content) {
			content.classList.remove('active');
		});

		const activeTab = document.getElementById(tabId);
		activeTab.classList.add('active');
	}
});

// mainContent.onclick = (e) => {
// 	const tabId = e.target.dataset.id;

// 	if (tabId) {
// 		tabs.forEach((tab) => tab.classList.remove('active'));
// 		e.target.classList.add('active');
// 		content.forEach((content) => content.classList.remove('active'));

// 		const activeTab = document.getElementById(tabId);
// 		activeTab.classList.add('active');
// 	}
// };
