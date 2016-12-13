import Static from './Static.js';

export default class Cage extends Static {
	
	constructor ( name, screenId ) {

		console.log('in a Zoo Cage, name:' + name );

		super( name );


		this.dom = document.getElementById(screenId);

		this.show();

	}


}