import { pageLoad } from 'utils';

// -------------------  Documents actions
function documentActions() {
	const header = document.querySelector('header.headerActions');

	document.addEventListener('click', (e) => {
		const targetElement = e.target;
		// Tags
		if (targetElement.classList.contains('tags_header__label') && window.innerWidth <= 991.98) {
			header.classList.toggle('tags_open');
		} else if (header.classList.contains('tags_open') && !targetElement.closest('.tags_header__list')) {
			header.classList.remove('tags_open');
		}
		// Lists
		// Catch click on title
		if (targetElement.classList.contains('links_aside__title') && window.innerWidth <= 991.98) {
			// if list is already open - close it
			if (targetElement.parentElement.classList.contains('list_open')) targetElement.parentElement.classList.remove('list_open');
			// else if another list is open - close it and open current
			else if (document.querySelector('.list_open')) {
				document.querySelector('.list_open').classList.remove('list_open');
				targetElement.parentElement.classList.add('list_open');
				// if all lists closed - open current
			} else targetElement.parentElement.classList.add('list_open');
			// if target element NOT list and list is open - close it
		} else if (document.querySelector('.list_open') && !targetElement.closest('.links_aside__list')) {
			document.querySelector('.list_open').classList.remove('list_open');
		}
	});
}

pageLoad(() => {
	documentActions();
});
