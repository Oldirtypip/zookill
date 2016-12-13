import Static from './Static.js';
import Cage from './Cage.js';
import Animal from './Animal.js';

export default class Zoo extends Static {
	
	constructor ( name ) {

		console.log('in the Zoo');

		super( name );

		// grab a Cage from the dom.

		this.dom = document.createElement( 'div' );

	}

	/** 
	 * Create 4 Cages
	 * Create 4 Animals
	 */
	build() {

		console.log( 'in Zoo build...' );

		this.cages = [];

		this.cages.push( new Cage( 'Cage #1', 'cage1' ) ); // or, this.cages[0] = new Cage(....)
		this.cages.push( new Cage( 'Cage #2', 'cage2' ) ); // 
		this.cages.push( new Cage( 'Cage #3', 'cage3' ) );
		this.cages.push( new Cage( 'Cage #4', 'cage4' ) );



		this.animals = [];

		this.animals.push( new Animal( 'Angry lion', "lion" ) );
		this.animals.push( new Animal( 'Raging Tiger', 'tiger'  ) );
		this.animals.push( new Animal( 'Mauling Bear', 'bear' ) );
		this.animals.push( new Animal( 'Rampaging Gorilla' , "gorilla" ) );

	}


}












