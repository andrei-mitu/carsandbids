/**
 * @author Andrei
 * @api-note 5/26/2023
 */
export function carouselHtml(images) {
	console.assert(images.length > 2, "images array is empty")
	let htmlCarouselItem = "";
	for (let i = 1; i < images.length; i++) {
		htmlCarouselItem += `<div class="carousel-item">
                <img src="${images[i]}" class="d-block w-100" alt="...">
            </div>`
	}
	return `
        <div class="carousel slide w-75" data-bs-ride="carousel" id="carouselExampleControls">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img alt="First slide" class="d-block w-100" src="${images[0]}">
                </div>
                ${htmlCarouselItem}
            </div>
            <button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleControls" type="button">
                <span aria-hidden="true" class="carousel-control-prev-icon"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleControls" type="button">
                <span aria-hidden="true" class="carousel-control-next-icon"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>`
}
