/**
 * @author Andrei
 * @api-note 5/26/2023
 */
const hearts = document.querySelectorAll('.bi-heart-fill');

hearts.forEach((heart) => {
	const vin = heart.dataset.vin;
	const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

	if (favorites.includes(vin)) {
		heart.classList.add('filled');
	}

	heart.addEventListener('click', () => {
		const index = favorites.indexOf(vin);
		if (index !== -1) {
			favorites.splice(index, 1);
			heart.classList.remove('filled');
		} else {
			favorites.push(vin);
			heart.classList.add('filled');
		}
		localStorage.setItem('favorites', JSON.stringify(favorites));
	});
});


document.querySelectorAll('.btn.btn-sm.btn-outline-secondary').forEach((item) => {
	item.addEventListener('click', () => {
		location.replace("car.html");
	});
})