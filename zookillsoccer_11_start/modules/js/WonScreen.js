import Screen from './Screen.js';

export default class WonScreen extends Screen {
	
	constructor ( name, screenArray ) {

		console.log('in WonScreen');

		super( name, screenArray );

		this.dom = document.getElementById( 'won-screen' );

		// Set the background image.

		this.setBackgroundImage( 'img/screens/won-screen.png' );

		this.getStartButton();

		this.getExitButton();

	} // end of constructor


} // end of class