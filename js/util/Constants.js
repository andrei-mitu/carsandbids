/**
 * @author Andrei
 * @api-note 5/25/2023
 */

export const vehicles = [
	{
		_vin: "1G1YY22G8W5100003",
		_brand: "Mercede-Benz",
		_name: "C63s",
		_description: "THIS... is a 2015 Mercedes-AMG C63 S Edition 1, finished in Iridium Silver Metallic with a black exterior wrap and a black interior. It has 0 miles on the odometer. The C63 S is powered by a 4.0L twin-turbocharged V8 engine producing 503 hp and 516 lb-ft of torque through a Rear Wheel Drive system and a 7-Speed AMG SPEEDSHIFT MCT Automatic Transmission. This C63 S is further equipped with the following: AMG Carbon Ceramic Braking System AMG Performance Seats AMG Performance Exhaust System AMG Performance Steering Wheel AMG Performance Suspension AMG Performance Media AMG Night Package AMG Exterior Carbon Fiber Package AMG Carbon Fiber Trim Multimedia Package Driver Assistance Package Lane Tracking Package 19/20 AMG Cross-Spoke Forged Wheels in Black AMG Illuminated Door Sills AMG Carbon Fiber Engine Cover AMG Carbon Fiber Rear Spoiler AMG Carbon Fiber Mirror Covers AMG Carbon Fiber Front Splitter AMG Carbon Fiber Rear Diffuser AMG Carbon Fiber Side Skirts",
		_price: 100000,
		_year: 2021,
		_engine: "4.0L V8",
		_transmission: "Automatic",
		_mileage: 0,
		_bodyStyle: "Sedan",
		_exteriorColor: "Black",
		_interiorColor: "Black",
		_images: ["img/C63s/1.jpg", "img/C63s/2.jpg", "img/C63s/3.jpg", "img/C63s/4.jpg", "img/C63s/5.jpg", "img/C63s/6.jpg", "img/C63s/7.jpg", "img/C63s/8.jpg", "img/C63s/9.jpg", "img/C63s/10.jpg"],
		_seller: "Legal"
	}, {
		_vin: "1G1YY22G8W5100004",
		_brand: "BMW",
		_name: "M4 Competition",
		_description: "The BMW M4 is a high-performance version of the BMW 4 Series coupes and convertibles developed by BMW's motorsport division, BMW M. Part of the renumbering that splits the 3 Series coupé and convertible models to the 4 Series (to further differentiate it from the 3 Series), the M4 replaced the M3 coupé and convertible models. Upgrades over the standard BMW 4-Series include: a very powerful and responsive, twin turbocharged engine; improved handling, suspension, and braking systems; aerodynamic body enhancements; interior/exterior accents with the tri-colour 'M' (Motorsport) badging; the significantly reduced weight compared to the standard 4 series and its predecessor with an all-new stiffer chassis and extensive use of carbon fiber, especially the roof of the car.",
		_price: 100000,
		_year: 2023,
		_engine: "3.0L I6",
		_transmission: "Automatic",
		_mileage: 0,
		_bodyStyle: "Coupe",
		_exteriorColor: "Black",
		_interiorColor: "Black",
		_images: ["img/M4/1.jpg", "img/M4/2.jpg", "img/M4/3.jpg", "img/M4/4.jpg", "img/M4/5.jpg", "img/M4/6.jpg", "img/M4/7.jpg", "img/M4/8.jpg", "img/M4/9.jpg", "img/M4/10.jpg"],
		_seller: "Legal"
	}, {
		_vin: "1G1YY22G8W5100005",
		_brand: "GMC",
		_name: "Yukon",
		_description: "The GMC Yukon is a full-size SUV from GMC. The name Yukon refers to the Yukon territory of northern Canada. The 1995-1999 Tahoe, Yukon, and Suburban were GMT400 platform 2-door models, based on the 1988-1998 Silverado / Sierra pickup (the GMT400-based SUVs were replaced by the GMT800 platform-based SUVs for 2000).",
		_price: 100000,
		_year: 2021,
		_engine: "5.3L V8",
		_transmission: "Automatic",
		_mileage: 0,
		_bodyStyle: "SUV",
		_exteriorColor: "Black",
		_interiorColor: "Black",
		_images: ["img/Yukon/1.jpg", "img/Yukon/2.jpg", "img/Yukon/3.jpg", "img/Yukon/4.jpg", "img/Yukon/5.jpg", "img/Yukon/6.jpg"],
		_seller: "Legal"
	}, {
	_vin: "1G1YY22G8W5100001",
	_brand: "Chevrolet",
	_name: "Corvette",
	_description: "The Chevrolet Corvette, colloquially known as the 'Vette, is a two-door, two-passenger sports car manufactured and marketed by Chevrolet across more than 60 years of production and eight design generations. From 1953 to 2019, it was front-engined, and since 2020, it is mid-engined. With its generations noted sequentially from C1 to C8, the Corvette serves as Chevrolet's halo vehicle and is widely noted for its performance and distinctive plastic—either fiberglass or composite—bodywork.",
	_price: 100000,
	_year: 2021,
	_engine: "6.2L V8",
	_transmission: "Manual",
	_mileage: 0,
	_bodyStyle: "Coupe",
	_exteriorColor: "Black",
	_interiorColor: "Black",
	_images: ["img/Corvette/1.jpg", "img/Corvette/2.jpg", "img/Corvette/3.jpg", "img/Corvette/4.jpg", "img/Corvette/5.jpg"],
	_seller: "Legal"
	}, {
	_vin: "1G1YY22G8W5100002",
	_brand: "Volkswagen",
	_name: "Golf",
	_description: "The Volkswagen Golf (listen (help·info)) is a compact car produced by the German automotive manufacturer Volkswagen since 1974, marketed worldwide across eight generations, in various body configurations and under various nameplates – including as the Volkswagen Rabbit in the United States and Canada (Mk1 and Mk5), and as the Volkswagen Caribe in Mexico (Mk1). The original Golf Mk1 was a front-wheel drive, front-engined replacement for the air-cooled, rear-engined, rear-wheel drive Volkswagen Beetle. Historically, the Golf is Volkswagen's best-selling model and is among the world's top three best-selling models, with more than thirty million built as of June 2013.",
	_price: 10000,
	_year: 2021,
	_engine: "1.4L I4",
	_transmission: "Manual",
	_mileage: 0,
	_bodyStyle: "Hatchback",
	_exteriorColor: "Black",
	_interiorColor: "Black",
	_images: ["img/Golf/1.jpg", "img/Golf/2.jpg", "img/Golf/3.jpg", "img/Golf/4.jpg", "img/Golf/5.jpg", "img/Golf/6.jpg", "img/Golf/7.jpg"],
	_seller: "Legal"
	}
]

export function getVehicleByVin(vin) {
	return vehicles.find(vehicle => vehicle._vin === vin);
}

export const filter = `
	<div class="filter page-element">
		<div class="wrapper">
			<div class="row flex-nowrap m-2">
		        <h3 class="col fw-bold">Auctions</h3>
		        <form action="" class="col-10 d-flex justify-content-around">
		            <select class="form-select w-auto" aria-label="Default select example">
		                <option selected>Years</option>
		                <option value="1">2019</option>
		                <option value="2">2020</option>
		                <option value="3">2021</option>
		            </select>
		            <select class="form-select w-auto" aria-label="Default select example">
		                <option selected>Transmission</option>
		                <option value="1">All</option>
		                <option value="2">Auto</option>
		                <option value="3">Manual</option>
		            </select>
		            <select class="form-select w-auto" aria-label="Default select example">
		                <option selected>Body Style</option>
		                <option value="1">All</option>
		                <option value="2">Coupe</option>
		                <option value="3">Convertible</option>
		                <option value="4">Truck</option>
		                <option value="5">Wagon</option>
		                <option value="6">Sedan</option>
		                <option value="7">SUV/Crossover</option>
		                <option value="8">Van/Minivan</option>
		            </select>
		        </form>
		    </div>
		</div>
	</div>`;

export const headerHtml = `
			<header class="header sticky-top sticky page-element container-fluid mt-2 mb-3" id="header">
			    <a class="logo" href="index.html">
			        <img alt="" src="img/navbar-brand.svg">
			    </a>
			    <div class="navbar w-75 d-flex flex-column flex-md-row">
			        <ul class="nav d-flex justify-content-around align-items-center">
			            <li>
			                <a href="index.html">
			                    Auctions
			                </a>
			            </li>
			            <li>
			                <a href="account.html" class="focus-page">
			                    Sell a car
			                </a>
			            </li>
			                    <li>
			                <a href="about.html">
			                    What’s Cars & Bids?
			                </a>
			            </li>
			            <li>
			                <a href="">
			                    Daily Email
			                </a>
			            </li>
			        </ul>
			        <div>
			            <form action="" class="search">
			                <div class="form-floating">
			                    <input type="text" class="input form-control" id="searchInput" placeholder="BMW">
			                    <label for="searchInput" class="d-flex justify-content-around w-50"><img src="img/pseudo.svg" alt="">Search for cars</label>
			                </div>
			            </form>
			        </div>
			    </div>		
			    <button class="sign-up fw-bold">
			        <a href="sign-up.html">Sign Up</a>
			    </button>	
                <small class="text-muted">
                    <button style="background: #fff;" type="submit">
                       	<a href="account.html">
                       		<i style="background: #fff; font-size: 24px;" class="bi bi-heart""></i>
                        </a>
                    </button>
                </small>
			</header>`

export const footerHtml = `
		<footer class="footer container-fluid d-block">
		    <div class="footer__info">
		        <div class="row">
		            <div class="col">
		                <div class="h4 card-title">
		                    Why Cars & Bids?
		                </div>
		                <div class="h6 modal-title">
		                    12,000+
		                </div>
		                <p>Auctions completed</p>
		                <div class="h6 modal-title">
		                    85%+
		                </div>
		                <p>Sell-through rate</p>
		            </div>
		            <div class="col">
		                <div class="h4 card-title">
		                    <br>
		                </div>
		                <div class="h6 modal-title">
		                    $265M+
		                </div>
		                <p>Value of cars sold</p>
		                <div class="h6 modal-title">
		                    360k+
		                </div>
		                <p>Registered members</p>
		            </div>
		            <div class="col-6">
		                <div class="h4 card-title">
		                    Our customers love us!
		                </div>
		                <div class="h6 modal-title">
		                    Erik N.
		                </div>
		                <p>Probably the best experience I've had selling a car privately. The listing team was exceptionally helpful, and I had funds just 3 days after the auction ended. Great experience.</p>
		            </div>
		            <div class="col">
		                <div class="h4 card-title">
		                    Get the Daily Email
		                </div>
		                <div class="h6 modal-title h-75">
		                    <form action="" class="text-center d-flex flex-column align-items-center justify-content-around h-100">
		                        <input type="email" class="form-control" id="email" placeholder="Email address">
		                        <button class="btn btn-dark w-75" type="submit">Subscribe</button>
		                    </form>
		                </div>
		            </div>
		        </div>
		    </div>
		    <div class="footer__pages">
		        <div class="row">
		            <div class="col">
		                <a class="logo" href="index.html">
		                    <img alt="" src="img/navbar-brand.svg">
		                </a>
		            </div>
		            <div class="col d-flex flex-column h-100  justify-content-around align-items-start">
		                <div class="fw-light">
		                    HOW IT WORKS
		                </div>
		                <a href="">
		                    Buying a Car
		                </a>
		                <a href="">
		                    Selling a Car
		                </a>
		                <a href="">
		                    Finalizing the Sale
		                </a>
		                <a href="">
		                    FAQs
		                </a>
		            </div>
		            <div class="col d-flex flex-column h-100  justify-content-around align-items-start">
		                <div class="fw-light">
		                    SELLERS
		                </div>
		                <a href="">Submit Your Car</a>
		                <a href="">Photography Guide</a>
		            </div>
		            <div class="col d-flex flex-column h-100  justify-content-around align-items-start">
		                <div class="fw-light">
		                    HELPFUL LINKS
		                </div>
		                <a href="">Support</a>
		                <a href="">Shipping</a>
		                <a href="">Inspections</a>
		                <a href="">Shop C&B Merch</a>
		                <a href="">Careers</a>
		            </div>
		            <div class="col d-flex flex-column h-100  justify-content-around align-items-start">
		                <div class="fw-light">
		
		                </div>
		            </div>
		        </div>
		    </div>
		</footer>
	`;