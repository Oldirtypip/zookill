export default class GameObj {

	//inherits from generic Javascript Object;

	constructor ( name ) {

		console.log('in GameObj');

		this.name = name;

		this.id = this.setId();

	} // end of constructor

	/** 
	 * get the unique ID value for an object.
	 * @returns {String} the unique id, in uuid format.
	 */
	getId () {
		return this.id;
	}

	/** 
	 * get the name assigned to this object.
	 * @returns {String} the name.
	 */
	getName () {
		return this.name;
	}

	/** 
	 * set the object's name to a new value.
	 * @param {String} newName the new name to use.
	 */
	setName ( newName ) {
		this.name = newName;
	}

	/** 
	 * make the onscreen element visible via CSS.
	 */
	show () {

		this.dom.style.display = 'block';

	}

	/**
	 * make the onscreen element invisible via CSS.
	 */
	hide () {

		this.dom.style.display = 'none';

	}

	/** 
	 * Load an image from the drive, and set the 
	 * css background image property to this image
	 * @param {String} imgPath the path to the image on the website.
	 */
	setBackgroundImage( imgPath ) {

		this.dom.style.backgroundImage = "url('" + imgPath + "')";

	}

	setForegroundImage( imgPath ) {

		let img = new Image();

		img.src = imgPath;

		this.dom.appendChild( img );

	}

	/** 
	 * set the size of an object, in pixels.
	 * @param {Number} width the width, in pixels.
	 * @param {Number} height the height, in pixels.
	 */
	setSize( width, height ) {

		this.dom.style.width = width + 'px';
		this.dom.style.height = height + 'px';

	}

	/** 
	 * set the position of an object, relative to the 
	 * enclosing Screen object.
	 * @param {Number} top the top coordinate of the object, in pixels.
	 * @param {Number} left the left coordinate of the object, in pixels.
	 */
	setPosition( top, left ) {

		this.dom.style.top = top + 'px';
		this.dom.style.left = left + 'px';

	}

    /** 
     * Generate a unique ID for every game object.
     * @link http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
	 * @returns {String} the unique ID in uuid format.
     */
    setId () {
        var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now(); //use high-precision timer if available
        }
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;

    } // end of setId

} // end of class