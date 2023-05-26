/**
 * @author Andrei
 * @api-note 5/25/2023
 */

import {PageElement} from '../model/PageElement.js';
import {carouselHtml} from "../util/Util.js";
import {Page} from '../model/Page.js';
import {getVehicleByVin} from "../util/Constants.js";

const item = (vehicle) => {
	return `
		<div class="row page-element w-100 d-flex">
			${carouselHtml(vehicle._images)}
			<div class="col-md-3">
				<div class="container p-0">
				  <div class="row">
				    <div class="col"><img src="${vehicle._images[1]}" class="img-thumbnail rounded p-0 mb-2" alt=""></div>
				    <div class="col"><img src="${vehicle._images[2]}" class="img-thumbnail rounded p-0 mb-2" alt=""></div>
				    <div class="w-100"></div>
				    <div class="col"><img src="${vehicle._images[3]}" class="img-thumbnail rounded p-0 mb-2" alt=""></div>
				    <div class="col"><img src="${vehicle._images[4]}" class="img-thumbnail rounded p-0 mb-2" alt=""></div>
				    <div class="w-100"></div>
				    <div class="col"><img src="${vehicle._images[5]}" class="img-thumbnail rounded p-0 mb-2" alt=""></div>
				    <div class="col"><img src="${vehicle._images[6]}" class="img-thumbnail rounded p-0 mb-2" alt=""></div>
				    <div class="w-100"></div>
				    <div class="col"><img src="${vehicle._images[7]}" class="img-thumbnail rounded p-0 mb-2" alt=""></div>
				    <div class="col"><img src="${vehicle._images[8]}" class="img-thumbnail rounded p-0 mb-2" alt=""></div>
				    <div class="w-100"></div>
				    <div class="col"><img src="${vehicle._images[9]}" class="img-thumbnail rounded p-0 mb-2" alt=""></div>
				    <div class="col"><img src="${vehicle._images[10]}" class="img-thumbnail rounded p-0 mb-2" alt=""></div>
				    <div class="w-100"></div>
				    <div class="col"><img src="${vehicle._images[11]}" class="img-thumbnail rounded p-0 mb-2" alt=""></div>
				    <div class="col"><img src="${vehicle._images[12]}" class="img-thumbnail rounded p-0 mb-2" alt=""></div>
				  </div>
				</div>
			</div>
			<table class="table page-element col-4 fw-light m-lg-3">
			  <tbody>
			    <tr>
			      <th scope="row">Brand</th>
			      <th scope="row">${vehicle._brand}</th>
			    </tr>
			    <tr>
			      <th scope="row">Model</th>
			      <th scope="row">${vehicle._name}</th>
			    </tr>
			    <tr>
			      <th scope="row">Year</th>
			      <th scope="row">${vehicle._year}</th>
			    </tr>
			    <tr>
                  <th scope="row">Price</th>
                  <th scope="row">${vehicle._price}</th>
                </tr>
                <tr>
                  <th scope="row">Mileage</th>
                  <th scope="row">${vehicle._mileage}</th>
                </tr>
                <tr>
                  <th scope="row">Seller</th>
                  <th scope="row">${vehicle._seller}</th>
				</tr>
				<tr>
				  <th scope="row">Description</th>
				  <th scope="row">${vehicle._description}</th>
				</tr>
			  </tbody>
			</table>
		<div>
		
		`

}
const vin = new URLSearchParams(window.location.search).get('vin');
const main = () => {
	const vehicleByVin = getVehicleByVin(vin);
	document.querySelector('title').innerText = vehicleByVin._brand + ' ' + vehicleByVin._name;
	const html = item(vehicleByVin);
	return new PageElement('main', 'main', 2, html);
}

new Page('car', 'car.html', main()).drawPage();