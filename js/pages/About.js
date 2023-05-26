/**
 * @author Andrei
 * @api-note 5/25/2023
 */

import {PageElement} from '../model/PageElement.js';
import {Page} from '../model/Page.js';

const items = () => {
	return `		
		<div class="container">
		    <div class="row">
		        <div class="col-12">
		            <h1>About Cars & Bids</h1>
		            <p>Cars & Bids is an internet marketplace that sells cars. We are a
		                small team of car enthusiasts who are passionate about
		                connecting buyers and sellers of cool cars. We are based in San
		                Diego, California, and we are a subsidiary of the Doug DeMuro
		                YouTube channel.</p>
		            <p>Our goal is to provide a fun, exciting, and easy place to buy
		                and sell interesting cars. We are not a traditional auction
		                site, and we are not a traditional classifieds site. We are
		                something new and different, and we hope you enjoy it.</p>
		            <p>Our founder, Doug DeMuro, is a well-known automotive YouTuber
		                who has reviewed hundreds of cars on his YouTube channel. He
		                also writes articles for Autotrader.com and AutoTrader Oversteer
		                and has written for Jalopnik, GQ, and The Week. He has owned
		                dozens of cars, including a Ferrari 360 and a Range Rover, and
		                he currently owns a 1997 Land Rover Defender 90 NAS, a 1993
		                Range Rover Classic LWB, and a 2005 Mercedes-Benz G-Wagen.</p>
		            <p>Our team is small, but we are passionate about cars. We hope you
		                enjoy Cars & Bids, and we hope you find your dream car.</p>
		            <p>Thanks for visiting!</p>
		            <p>The Cars & Bids Team</p>
		        </div>
		    </div>
		</div>
	`
}

const main = () => {
	const html = items()
	return new PageElement('main', 'main', 2, html);
}

const about = new Page('about', 'about.html', main());
about.drawPage();
