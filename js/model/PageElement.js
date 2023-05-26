/**
 * @author Andrei
 * @api-note 5/25/2023
 */

export class PageElement {
	name;
	tagName;
	order;
	html;

	constructor(name, tagName, order, html) {
		const nnew = this.validate(name, tagName, order, html);
		this.name = nnew.name;
		this.tagName = nnew.tagName;
		this.order = nnew.order;
		this.html = nnew.html;
	}

	validate(name, tagName, order, html) {
		const nnew = {
			name: name, tagName: tagName, order: order, html: html
		};
		if (tagName == null) {
			nnew.tagName = "div";
		}
		if (order == null) {
			nnew.order = 2;
		}
		if (html == null) {
			nnew.html = "";
		}
		return nnew;
	}
}