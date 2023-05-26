/**
 * @author Andrei
 * @api-note 5/25/2023
 */
import {PageElement} from "./PageElement.js";
import {footerHtml, headerHtml} from "../util/Constants.js";


export class Page {
	name;
	url;
	mainElement;
	elements = [new PageElement('header', 'header', 1, headerHtml),
	new PageElement('footer', 'footer', 3, footerHtml)];

	constructor(name, url, mainElement) {
		this.name = name;
		this.url = url;
		this.mainElement = mainElement;
		this.elements.push(this.mainElement);
	}

	drawPage = () => {
		this.elements.sort((k, v) => k.order < v.order ? -1 : 1);
		this.elements.forEach(element => {
			const node = document.createElement(element.tagName);
			document.body.appendChild(node).innerHTML = element.html;
		});
	}

	changeContent = (main) => {
		document.querySelector('main').innerHTML = main;
	}
}