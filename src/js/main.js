/**
 * @fileoverview main.js is used for adding base functionality to the
 *               scrollsjs.com website.
 * @author Rob Dukarski <rob@purplest.com> (https://github.com/RobDukarski)
 * @copyright 2019 Purplest, Inc.
 * @version 1.0.6
 */

const bttButtons = document.querySelectorAll('.js-btt');
const primaryBttButton = document.querySelector('body > .js-btt');
const links = document.querySelectorAll('.js-nav a');
const years = document.querySelectorAll('.js-year');

/**
 * Scrolls to the top of the page.
 */

const backToTop = () => {
  scrolls(0);
};

/**
 * Hides the primary back-to-top button.
 */

const hideBackToTop = () => {
  if (primaryBttButton) {
    primaryBttButton.classList.remove('is--shown');
  }
};

/**
 * Checks for primary back-to-top button and hides or shows it depending on the
 * current vertical scroll offset.
 */

const initPrimaryBttButton = () => {
  if (primaryBttButton) {
    if (window.pageYOffset >= 20) {
      showBackToTop();
    } else {
      hideBackToTop();
    }
  }
};

/**
 * Shows the primary back-to-top button.
 */

const showBackToTop = () => {
  if (primaryBttButton) {
    primaryBttButton.classList.add('is--shown');
  }
};

/**
 * Listens for the scroll event to occur and updates the primary back-to-top button
 * accordingly.
 */

window.addEventListener('scroll', () => {
  initPrimaryBttButton();
});

/**
 * Code setup to execute immediately including initializing events, and their
 * liseners.
 */

(() => {
  if (bttButtons) {
    bttButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        backToTop();
      });
    });
  }

  initPrimaryBttButton();

  if (years) {
    years.forEach((year) => {
      year.innerText = new Date().getFullYear();
    });
  }

  if (links) {
    links.forEach((link) => {
      const section = link.getAttribute('href').replace('#', '');

      link.addEventListener('click', (e) => {
        e.preventDefault();

        scrolls('.' + section);
      });
    });
  }
})();