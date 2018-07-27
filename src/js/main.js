/**
 * @fileoverview main.js is used for adding base functionaltiy to the
 *               scrollsjs.com website.
 * @author Rob Dukarski <rob@purplest.com> (https://github.com/RobDukarski)
 * @copyright 2018 Purplest, Inc.
 * @version 1.0.2
 */

const bttButton = document.querySelector('.js-btt');
const links = document.querySelectorAll('.js-nav a');

/**
 * Scrolls to the top of the page.
 */

const backToTop = () => {
	scrolls(0);
};

/**
 * Hides the back-to-top button.
 */

const hideBackToTop = () => {
  if (window.pageYOffset < 20 && bttButton) {
		bttButton.classList.remove('is--shown');
	}
};

/**
 * Shows the back-to-top button.
 */

const showBackToTop = () => {
  if (window.pageYOffset >= 20 && bttButton) {
		bttButton.classList.add('is--shown');
	}
};

/**
 * Listens for the scroll event to occur and updates the back-to-top button
 * accordingly.
 */

window.addEventListener('scroll', () => {
	if (window.pageYOffset < 20) {
		hideBackToTop();
	} else {
		showBackToTop();
	}
});

/**
 * Code setup to execute immediately including initializing events, and their
 * liseners.
 */

(() => {
	if (bttButton) {
		bttButton.addEventListener('click', () => {
			backToTop();
		});

		if (window.pageYOffset >= 20) {
			bttButton.classList.add('is--shown');
		}
	}

	if (links) {
		let linksCount = links.length;

		for (let i = 0; i < linksCount; i++) {
			let tempLink = links[i];
			let tempSection = tempLink.getAttribute('href').replace('#', '');

			tempLink.addEventListener('click', (e) => {
				e.preventDefault();

				scrolls('.' + tempSection);
			});
		}
	}
})();