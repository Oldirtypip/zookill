import Screen from './Screen.js';

export default class StartScreen extends Screen {
	
	constructor ( name, screenArray ) {

		console.log('in StartScreen, name:' + name + " screens:" + screenArray);

		super( name, screenArray );

		this.dom = document.getElementById( 'start-screen' );

		// Set the background image.

		this.setBackgroundImage( 'img/screens/start-screen.png' );

		// Search for a 'start' button in the this.dom HTML markup. 
		// NOTE: will fail if no button present!

		this.getStartButton(); // defined in Screen.js

		// Wire up the start button to load the GameScreen.

		this.startButton.addEventListener( 'click', () => {

			//alert(' I am in screen:' + this.name );

			this.screens[ 'start' ].hide();  // hide myself

			this.screens[ 'game' ].show();   // show the game screen

			this.screens[ 'game' ].build(); // rebuild the game with all its objects

		} );

		this.getExitButton();

	} // end of constructor



} // end of class