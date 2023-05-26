/**
 * @author Andrei
 * @api-note 5/25/2023
 */

export class Car {
	_vin;
	_brand;
	_name;
	_description;
	_price;
	_year;
	_engine;
	_transmission;
	_mileage;
	_bodyStyle;
	_exteriorColor;
	_interiorColor;
	_images;
	_seller;
	modelName;

	constructor(vin, brand, name, description, price, year, engine, transmission, mileage, bodyStyle, exteriorColor, interiorColor, images, seller) {
		this._vin = vin;
		this._brand = brand;
		this._name = name;
		this._description = description;
		this._price = price;
		this._year = year;
		this._engine = engine;
		this._transmission = transmission;
		this._mileage = mileage;
		this._bodyStyle = bodyStyle;
		this._exteriorColor = exteriorColor;
		this._interiorColor = interiorColor;
		this._images = images;
		this._seller = seller;
	}


	get vin() {
		return this._vin;
	}

	set vin(value) {
		this._vin = value;
	}

	get brand() {
		return this._brand;
	}

	set brand(value) {
		this._brand = value;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}

	get description() {
		return this._description;
	}

	set description(value) {
		this._description = value;
	}

	get price() {
		return this._price;
	}

	set price(value) {
		this._price = value;
	}

	get year() {
		return this._year;
	}

	set year(value) {
		this._year = value;
	}

	get engine() {
		return this._engine;
	}

	set engine(value) {
		this._engine = value;
	}

	get transmission() {
		return this._transmission;
	}

	set transmission(value) {
		this._transmission = value;
	}

	get mileage() {
		return this._mileage;
	}

	set mileage(value) {
		this._mileage = value;
	}

	get bodyStyle() {
		return this._bodyStyle;
	}

	set bodyStyle(value) {
		this._bodyStyle = value;
	}

	get exteriorColor() {
		return this._exteriorColor;
	}

	set exteriorColor(value) {
		this._exteriorColor = value;
	}

	get interiorColor() {
		return this._interiorColor;
	}

	set interiorColor(value) {
		this._interiorColor = value;
	}

	get images() {
		return this._images;
	}

	set images(value) {
		this._images = value;
	}

	get seller() {
		return this._seller;
	}

	set seller(value) {
		this._seller = value;
	}
}