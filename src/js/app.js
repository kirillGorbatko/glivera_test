// ------------------- imports
import $ from 'jquery';
import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';
import pageWidgetInit from './dev_vendors/dev_widget';
// ------------------- imports###

// ------------------  import components
// ------------------  import components###

window.jQuery = $;
window.$ = $;

const styles = ['color: #fff', 'background: #cf8e1f'].join(';');
const message = 'Developed by Glivera-team https://glivera-team.com/';
// eslint-disable-next-line no-console
console.info('%c%s', styles, message);

// -------------------  dev widget
if (GLOBAL_VARS.projectDevStatus) {
	pageWidgetInit();
	console.log(process.env.NODE_ENV);
}
// -------------------  dev widget###

// -------------------  global variables

const readyFunc = () => {
	console.log('ready');
};

function documentActions() {
	const header = document.querySelector('header.headerActions');

	document.addEventListener('click', (e) => {
		const targetElement = e.target;
		// Tags
		if (targetElement.classList.contains('tags_header__label') && window.innerWidth <= 991.98) {
			header.classList.toggle('_active');
		} else if (header.classList.contains('_active') && !targetElement.closest('.tags_header__list')) {
			header.classList.remove('_active');
		}
	});
}

documentReady(() => {
	readyFunc();
});

pageLoad(() => {
	documentActions();
});
