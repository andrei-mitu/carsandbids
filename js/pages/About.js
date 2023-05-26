/**
 * @author Andrei
 * @api-note 5/25/2023
 */

import {PageElement} from '../model/PageElement.js';
import {Page} from '../model/Page.js';

const items = () => {
	return `
		
	`
}

const main = () => {
	const html = items()
	return new PageElement('main', 'main', 2, html);
}

const about = new Page('about', 'about.html', main());
about.drawPage();
