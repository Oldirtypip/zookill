import Dynamic from './Dynamic.js';

export default class Player extends Dynamic {
	
	constructor( name, top, left, trump ) {

	super( name );

		console.log('in Player Object name:' + name);
	

		this.trump = trump;

		this.dom = document.getElementById('player');

		this.dom.style.top = top + 'px';
		this.dom.style.left = left + 'px';

		document.addEventListener('keydown', event => this.slew(event), false);

		document.addEventListener('keyup', event => this.unkick(event), false);

		this.show();
	}

	slew(event) {

	let currentY = parseInt(this.dom.style.top);
		let currentX = parseInt(this.dom.style.left);
		

		switch(event.keyCode) {

			case 37: //left arrow
				currentX -= 4;
				this.setPosition(currentY, currentX);
				break;

			case 39: //right arrow
				currentX += 4;
				this.setPosition(currentY, currentX);
				
				break;

			case 32: //space bar
				if (currentY < 495) return;
				currentY -= 4;
				this.setPosition(currentY, currentX);
				this.checkForTrump(currentY, currentX);
				break;
		}
	}

	unkick(event) {

				let currentY = parseInt(this.dom.style.top);
				let currentX = parseInt(this.dom.style.left);
				
			
	

		switch(event.keyCode) {

			case 32: //space bar
				currentY += 4;
				this.setPosition(currentY, currentX);
				break;
			}

}

checkForTrump(top, left) {

	let trumpCurrentX = parseInt(this.trump.dom.style.left);
	let trumpCurrentY = parseInt(this.trump.dom.style.top);

	console.log("top:" + top + 'left' + left + "trumptop:");

	if ( trumpCurrentY > 590 && trumpCurrentX > left && trumpCurrentX < left + 50) {

		trump.startPingPong();

	}
}
}
