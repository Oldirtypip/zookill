import Dynamic from './Dynamic.js';

export default class Animal extends Dynamic {
	
	constructor ( name, screenId ) {

		console.log('in Animal object, name:' + name );

		super( name );

		this.dom = document.getElementById(screenId);


		this.show();

	}


}