/**
 * @author Andrei
 * @api-note 5/25/2023
 */

import {PageElement} from '../model/PageElement.js';
import {Page} from '../model/Page.js';
import {filter, vehicles} from "../util/Constants.js";

const items = (vehicles) => {
	return `
		<div class="row page-element">
		    ${vehicles.map(vehicle => `
			    <div class="col-md-6 car">
			        <div class="card mb-4 shadow-sm">
			            <img class="card-img-top" src="${vehicle._images[0]}" alt="Car image cap">
			            <div class="card-body">
			                <p class="card-text">${vehicle._description.substring(0, 200)}...</p>
			                <div class="d-flex justify-content-between align-items-center">
			                    <div class="d-flex w-25 justify-content-between align-items-around">
			                        <a href="car.html?vin=${vehicle._vin}">
			                        	<button type="button" class="btn btn-sm btn-outline-secondary">View</button>
			                        </a>
			                    </div>
			                    <small class="text-muted">
			                    	<button style="background: #fff;" type="submit">
			                    		<i style="background: #fff; font-size: 24px;" class="bi bi-heart-fill" data-vin="${vehicle._vin}"></i>
			                    	</button>
			                    </small>
			                </div>
			            </div>
			        </div>
			    </div>`).join('')}
			</div>
		`
}

const main = () => {
	const html = filter + items(vehicles);
	return new PageElement('main', 'main', 2, html);
}

const home = new Page('home', 'index.html', main());
home.drawPage();


function changeContent(filteredVehicles) {
	home.changeContent(items(filteredVehicles));
}

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup', (e) => {
	const searchString = e.target.value.toLowerCase();
	const filteredVehicles = vehicles.filter((vehicle) => {
		return (
			vehicle._name.toLowerCase().includes(searchString) ||
			vehicle._brand.toLowerCase().includes(searchString)
		);
	});
	changeContent(filteredVehicles);
});