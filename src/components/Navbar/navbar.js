import { logout } from '../../modules/apiService.js';

/**
 * Class representing the navigation bar.
 */
export default class Navbar {
	/**
   * Creates an instance of Navbar.
   * @param {HTMLElement} nav - The nav element.
   * @param {Object} app - The application instance.
   */
	constructor(nav, app) {
		this.nav = nav;
		this.app = app;
		this.addEventListeners();
	}
  
	/**
   * Adds event listeners to the navigation links and logout button.
   */
	addEventListeners() {
		const navLinks = document.querySelectorAll('li.nav-link a');

		navLinks.forEach(link => {
			link.addEventListener('click', (event) => {
				event.preventDefault();
				const path = link.getAttribute('href');
				this.app.render(path);
			});
		});
      
		const button = document.getElementById('button-logout');
		if (button) {
			button.addEventListener('click', async () => {
				await logout();
				this.app.render('/login');
			});
		}
	}
}