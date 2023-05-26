/**
 * @author Andrei
 * @api-note 5/25/2023
 */

import {PageElement} from '../model/PageElement.js';
import {Page} from '../model/Page.js';
import {vehicles} from "../util/Constants.js";

const items = (vins) => {
	//list of favourites vehicles with the possibility to remove them from the list
	//one vehicle per row, vehicle image on the left, vehicle details on the right
	const favouritesVehicles = [];
	vins.forEach(vin => {
		const vehicle = vehicles.find(vehicle => vehicle._vin === vin);
		if (vehicle) {
			favouritesVehicles.push(vehicle);
		}
	})
	return `
		<div class="container-fluid" style="min-height: 800px">
			<div class="row">
				<div class="col-12">
					<h1 class="text-center">Favourites</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<table class="table table-striped table-hover">
						<thead>
							<tr>
								<th scope="col">Image</th>
								<th scope="col">Brand</th>
								<th scope="col">Model</th>
								<th scope="col">Year</th>
								<th scope="col">Price</th>
								<th scope="col">Mileage</th>
								<th scope="col">Remove</th>
							</tr>
						</thead>
						<tbody>
							${favouritesVehicles.map(vehicle => `
								<tr>
									<td><img class="img-thumbnail rounded p-0 mb-2" src="${vehicle._images[1]}" alt="Car image cap"></td> 
									<td>${vehicle._brand}</td>
									<td>${vehicle._name}</td>
									<td>${vehicle._year}</td>
									<td>${vehicle._price}</td>
									<td>${vehicle._mileage}</td>
									<td><button class="btn btn-danger" onclick="removeFromFavourites('${vehicle._vin}')">Remove</button></td>
								</tr>
							`).join('')}
						</tbody>
					</table>
				</div>
			</div>
		</div>		
		`
}

const main = () => {
	const html = items(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [])
	return new PageElement('main', 'main', 2, html);
}

const account = new Page('home', 'account.html', main());
account.drawPage();

window.removeFromFavourites = (vin) => {
	let favourites = JSON.parse(localStorage.getItem('favorites'));
	favourites = favourites.filter(favourite => favourite !== vin);
	localStorage.setItem('favorites', JSON.stringify(favourites));
	account.changeContent(items(favourites));
}