(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Animal = function (_Dynamic) {
	_inherits(Animal, _Dynamic);

	function Animal(name, screenId) {
		_classCallCheck(this, Animal);

		console.log('in Animal object, name:' + name);

		var _this = _possibleConstructorReturn(this, (Animal.__proto__ || Object.getPrototypeOf(Animal)).call(this, name));

		_this.dom = document.getElementById(screenId);

		_this.show();

		return _this;
	}

	return Animal;
}(_Dynamic3.default);

exports.default = Animal;

},{"./Dynamic.js":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Static2 = require('./Static.js');

var _Static3 = _interopRequireDefault(_Static2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cage = function (_Static) {
	_inherits(Cage, _Static);

	function Cage(name, screenId) {
		_classCallCheck(this, Cage);

		console.log('in a Zoo Cage, name:' + name);

		var _this = _possibleConstructorReturn(this, (Cage.__proto__ || Object.getPrototypeOf(Cage)).call(this, name));

		_this.dom = document.getElementById(screenId);

		_this.show();

		return _this;
	}

	return Cage;
}(_Static3.default);

exports.default = Cage;

},{"./Static.js":12}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dynamic = function (_GameObj) {
	_inherits(Dynamic, _GameObj);

	function Dynamic(name) {
		_classCallCheck(this, Dynamic);

		console.log('in Dynamic');

		return _possibleConstructorReturn(this, (Dynamic.__proto__ || Object.getPrototypeOf(Dynamic)).call(this, name));
	}

	return Dynamic;
}(_GameObj3.default);

exports.default = Dynamic;

},{"./GameObj.js":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameObj = function () {

	//inherits from generic Javascript Object;

	function GameObj(name) {
		_classCallCheck(this, GameObj);

		console.log('in GameObj');

		this.name = name;

		this.id = this.setId();
	} // end of constructor

	/** 
  * get the unique ID value for an object.
  * @returns {String} the unique id, in uuid format.
  */


	_createClass(GameObj, [{
		key: 'getId',
		value: function getId() {
			return this.id;
		}

		/** 
   * get the name assigned to this object.
   * @returns {String} the name.
   */

	}, {
		key: 'getName',
		value: function getName() {
			return this.name;
		}

		/** 
   * set the object's name to a new value.
   * @param {String} newName the new name to use.
   */

	}, {
		key: 'setName',
		value: function setName(newName) {
			this.name = newName;
		}

		/** 
   * make the onscreen element visible via CSS.
   */

	}, {
		key: 'show',
		value: function show() {

			this.dom.style.display = 'block';
		}

		/**
   * make the onscreen element invisible via CSS.
   */

	}, {
		key: 'hide',
		value: function hide() {

			this.dom.style.display = 'none';
		}

		/** 
   * Load an image from the drive, and set the 
   * css background image property to this image
   * @param {String} imgPath the path to the image on the website.
   */

	}, {
		key: 'setBackgroundImage',
		value: function setBackgroundImage(imgPath) {

			this.dom.style.backgroundImage = "url('" + imgPath + "')";
		}
	}, {
		key: 'setForegroundImage',
		value: function setForegroundImage(imgPath) {

			var img = new Image();

			img.src = imgPath;

			this.dom.appendChild(img);
		}

		/** 
   * set the size of an object, in pixels.
   * @param {Number} width the width, in pixels.
   * @param {Number} height the height, in pixels.
   */

	}, {
		key: 'setSize',
		value: function setSize(width, height) {

			this.dom.style.width = width + 'px';
			this.dom.style.height = height + 'px';
		}

		/** 
   * set the position of an object, relative to the 
   * enclosing Screen object.
   * @param {Number} top the top coordinate of the object, in pixels.
   * @param {Number} left the left coordinate of the object, in pixels.
   */

	}, {
		key: 'setPosition',
		value: function setPosition(top, left) {

			this.dom.style.top = top + 'px';
			this.dom.style.left = left + 'px';
		}

		/** 
   * Generate a unique ID for every game object.
   * @link http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
  * @returns {String} the unique ID in uuid format.
   */

	}, {
		key: 'setId',
		value: function setId() {
			var d = new Date().getTime();
			if (window.performance && typeof window.performance.now === "function") {
				d += performance.now(); //use high-precision timer if available
			}
			var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = (d + Math.random() * 16) % 16 | 0;
				d = Math.floor(d / 16);
				return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
			});
			return uuid;
		} // end of setId

	}]);

	return GameObj;
}(); // end of class


exports.default = GameObj;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

var _Zoo = require('./Zoo.js');

var _Zoo2 = _interopRequireDefault(_Zoo);

var _Trump = require('./Trump.js');

var _Trump2 = _interopRequireDefault(_Trump);

var _Player = require('./Player.js');

var _Player2 = _interopRequireDefault(_Player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameScreen = function (_Screen) {
	_inherits(GameScreen, _Screen);

	function GameScreen(name) {
		_classCallCheck(this, GameScreen);

		console.log('in GameScreen');

		var _this = _possibleConstructorReturn(this, (GameScreen.__proto__ || Object.getPrototypeOf(GameScreen)).call(this, name));

		_this.dom = document.getElementById('game-screen');

		// Set the background image.

		_this.setBackgroundImage('img/screens/game-screen.png');

		return _this;
	} // end of constructor

	/** 
  * create game objects
  *  - add a Zoo
  *    - add 4 Cages
  *    - add 4 Animals
  *  - add a Trump
  *  - add a Player
  */


	_createClass(GameScreen, [{
		key: 'build',
		value: function build() {

			console.log('building the game...');

			// add a Zoo (4 Animals and 4 Cages go inside it)

			this.zoo = new _Zoo2.default('Funky Zoo');

			this.zoo.build(); // make Zoo add Cages and Animals

			this.dom.appendChild(this.zoo.dom);

			// add a Trump

			this.trump = new _Trump2.default('Donald Presidentia Trump', 440, 245);

			// add a Player

			this.player = new _Player2.default('myself', 500, 245);
		}
	}]);

	return GameScreen;
}(_Screen3.default); // end of class


exports.default = GameScreen;

},{"./Player.js":8,"./Screen.js":10,"./Trump.js":13,"./Zoo.js":15}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HUD = function (_GameObj) {
	_inherits(HUD, _GameObj);

	function HUD(name) {
		_classCallCheck(this, HUD);

		console.log('in HUD');

		return _possibleConstructorReturn(this, (HUD.__proto__ || Object.getPrototypeOf(HUD)).call(this, name));
	} // end of constructor

	return HUD;
}(_GameObj3.default); // end of class


exports.default = HUD;

},{"./GameObj.js":4}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LostScreen = function (_Screen) {
	_inherits(LostScreen, _Screen);

	function LostScreen(name, screenArray) {
		_classCallCheck(this, LostScreen);

		console.log('in LostScreen');

		var _this = _possibleConstructorReturn(this, (LostScreen.__proto__ || Object.getPrototypeOf(LostScreen)).call(this, name, screenArray));

		_this.dom = document.getElementById('lost-screen');

		// Set the background Image.

		_this.setBackgroundImage('img/screens/lost-screen.png');

		_this.getStartButton();

		_this.getExitButton();

		return _this;
	} // end of constructor


	return LostScreen;
}(_Screen3.default); // end of class


exports.default = LostScreen;

},{"./Screen.js":10}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Dynamic) {
	_inherits(Player, _Dynamic);

	function Player(name, top, left, trump) {
		_classCallCheck(this, Player);

		var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, name));

		console.log('in Player Object name:' + name);

		_this.trump = trump;

		_this.dom = document.getElementById('player');

		_this.dom.style.top = top + 'px';
		_this.dom.style.left = left + 'px';

		document.addEventListener('keydown', function (event) {
			return _this.slew(event);
		}, false);

		document.addEventListener('keyup', function (event) {
			return _this.unkick(event);
		}, false);

		_this.show();
		return _this;
	}

	_createClass(Player, [{
		key: 'slew',
		value: function slew(event) {

			var currentY = parseInt(this.dom.style.top);
			var currentX = parseInt(this.dom.style.left);

			switch (event.keyCode) {

				case 37:
					//left arrow
					currentX -= 4;
					this.setPosition(currentY, currentX);
					break;

				case 39:
					//right arrow
					currentX += 4;
					this.setPosition(currentY, currentX);

					break;

				case 32:
					//space bar
					if (currentY < 495) return;
					currentY -= 4;
					this.setPosition(currentY, currentX);
					this.checkForTrump(currentY, currentX);
					break;
			}
		}
	}, {
		key: 'unkick',
		value: function unkick(event) {

			var currentY = parseInt(this.dom.style.top);
			var currentX = parseInt(this.dom.style.left);

			switch (event.keyCode) {

				case 32:
					//space bar
					currentY += 4;
					this.setPosition(currentY, currentX);
					break;
			}
		}
	}, {
		key: 'checkForTrump',
		value: function checkForTrump(top, left) {

			var trumpCurrentX = parseInt(this.trump.dom.style.left);
			var trumpCurrentY = parseInt(this.trump.dom.style.top);

			console.log("top:" + top + 'left' + left + "trumptop:");

			if (trumpCurrentY > 590 && trumpCurrentX > left && trumpCurrentX < left + 50) {

				trump.startPingPong();
			}
		}
	}]);

	return Player;
}(_Dynamic3.default);

exports.default = Player;

},{"./Dynamic.js":3}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _HUD2 = require('./HUD.js');

var _HUD3 = _interopRequireDefault(_HUD2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Score = function (_HUD) {
	_inherits(Score, _HUD);

	function Score(name) {
		_classCallCheck(this, Score);

		console.log('in Score');

		var _this = _possibleConstructorReturn(this, (Score.__proto__ || Object.getPrototypeOf(Score)).call(this, name));

		_this.dom = document.getElementById('game-score');

		return _this;
	} // end of constructor

	return Score;
}(_HUD3.default); // end of class


exports.default = Score;

},{"./HUD.js":6}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Screen = function (_GameObj) {
	_inherits(Screen, _GameObj);

	function Screen(name, screenArray) {
		_classCallCheck(this, Screen);

		console.log('in Screen, name:' + name + ' screens:' + screenArray);

		var _this = _possibleConstructorReturn(this, (Screen.__proto__ || Object.getPrototypeOf(Screen)).call(this, name));

		_this.setScreens(screenArray);

		return _this;
	} // end of constructor

	_createClass(Screen, [{
		key: 'setScreens',
		value: function setScreens(screenArray) {

			console.log("in setScreens, screens:" + screenArray);
			this.screens = screenArray;
		}
	}, {
		key: 'getStartButton',
		value: function getStartButton() {

			this.startButton = this.dom.getElementsByClassName('game-start')[0];
		}
	}, {
		key: 'getExitButton',
		value: function getExitButton() {

			this.exitButton = this.dom.getElementsByClassName('game-exit')[0];
		}
	}]);

	return Screen;
}(_GameObj3.default); // end of class


exports.default = Screen;

},{"./GameObj.js":4}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StartScreen = function (_Screen) {
	_inherits(StartScreen, _Screen);

	function StartScreen(name, screenArray) {
		_classCallCheck(this, StartScreen);

		console.log('in StartScreen, name:' + name + " screens:" + screenArray);

		var _this = _possibleConstructorReturn(this, (StartScreen.__proto__ || Object.getPrototypeOf(StartScreen)).call(this, name, screenArray));

		_this.dom = document.getElementById('start-screen');

		// Set the background image.

		_this.setBackgroundImage('img/screens/start-screen.png');

		// Search for a 'start' button in the this.dom HTML markup. 
		// NOTE: will fail if no button present!

		_this.getStartButton(); // defined in Screen.js

		// Wire up the start button to load the GameScreen.

		_this.startButton.addEventListener('click', function () {

			//alert(' I am in screen:' + this.name );

			_this.screens['start'].hide(); // hide myself

			_this.screens['game'].show(); // show the game screen

			_this.screens['game'].build(); // rebuild the game with all its objects
		});

		_this.getExitButton();

		return _this;
	} // end of constructor


	return StartScreen;
}(_Screen3.default); // end of class


exports.default = StartScreen;

},{"./Screen.js":10}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Static = function (_GameObj) {
	_inherits(Static, _GameObj);

	function Static(name) {
		_classCallCheck(this, Static);

		console.log('in Static');

		return _possibleConstructorReturn(this, (Static.__proto__ || Object.getPrototypeOf(Static)).call(this, name));
	}

	return Static;
}(_GameObj3.default);

exports.default = Static;

},{"./GameObj.js":4}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Trump = function (_Dynamic) {
	_inherits(Trump, _Dynamic);

	function Trump(name, top, left) {
		_classCallCheck(this, Trump);

		console.log('in Trump object, name:' + name);

		var _this = _possibleConstructorReturn(this, (Trump.__proto__ || Object.getPrototypeOf(Trump)).call(this, name));

		_this.dom = document.getElementById("trump");
		_this.dom.style.top = top + "px";
		_this.dom.style.left = left + "px";

		_this.initPinPong;

		_this.show();

		return _this;
	}

	_createClass(Trump, [{
		key: 'initPingPong',
		value: function initPingPong() {

			console.log("in pingpong");
		}
	}, {
		key: 'startPingPong',
		value: function startPingPong() {
			var _this2 = this;

			console.log("I got Kicked in trump.startPingPong()");

			this.intervalId = setInterval(function () {
				return _this2.doPingPong;
			}, 40);
		}
	}, {
		key: 'doPingPong',
		value: function doPingPong() {}
	}, {
		key: 'stopPingPong',
		value: function stopPingPong() {

			clearInterval(this.intervalId);
		}
	}]);

	return Trump;
}(_Dynamic3.default);

exports.default = Trump;

},{"./Dynamic.js":3}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WonScreen = function (_Screen) {
	_inherits(WonScreen, _Screen);

	function WonScreen(name, screenArray) {
		_classCallCheck(this, WonScreen);

		console.log('in WonScreen');

		var _this = _possibleConstructorReturn(this, (WonScreen.__proto__ || Object.getPrototypeOf(WonScreen)).call(this, name, screenArray));

		_this.dom = document.getElementById('won-screen');

		// Set the background image.

		_this.setBackgroundImage('img/screens/won-screen.png');

		_this.getStartButton();

		_this.getExitButton();

		return _this;
	} // end of constructor


	return WonScreen;
}(_Screen3.default); // end of class


exports.default = WonScreen;

},{"./Screen.js":10}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Static2 = require('./Static.js');

var _Static3 = _interopRequireDefault(_Static2);

var _Cage = require('./Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

var _Animal = require('./Animal.js');

var _Animal2 = _interopRequireDefault(_Animal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Zoo = function (_Static) {
	_inherits(Zoo, _Static);

	function Zoo(name) {
		_classCallCheck(this, Zoo);

		console.log('in the Zoo');

		// grab a Cage from the dom.

		var _this = _possibleConstructorReturn(this, (Zoo.__proto__ || Object.getPrototypeOf(Zoo)).call(this, name));

		_this.dom = document.createElement('div');

		return _this;
	}

	/** 
  * Create 4 Cages
  * Create 4 Animals
  */


	_createClass(Zoo, [{
		key: 'build',
		value: function build() {

			console.log('in Zoo build...');

			this.cages = [];

			this.cages.push(new _Cage2.default('Cage #1', 'cage1')); // or, this.cages[0] = new Cage(....)
			this.cages.push(new _Cage2.default('Cage #2', 'cage2')); // 
			this.cages.push(new _Cage2.default('Cage #3', 'cage3'));
			this.cages.push(new _Cage2.default('Cage #4', 'cage4'));

			this.animals = [];

			this.animals.push(new _Animal2.default('Angry lion', "lion"));
			this.animals.push(new _Animal2.default('Raging Tiger', 'tiger'));
			this.animals.push(new _Animal2.default('Mauling Bear', 'bear'));
			this.animals.push(new _Animal2.default('Rampaging Gorilla', "gorilla"));
		}
	}]);

	return Zoo;
}(_Static3.default);

exports.default = Zoo;

},{"./Animal.js":1,"./Cage.js":2,"./Static.js":12}],16:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // Master object.


// Screen objects.
//never directly visible, used to construct visible screens.


// HUD objects.
//never directly visible, used to construct visible screens.


var _GameObj = require('./GameObj.js');

var _GameObj2 = _interopRequireDefault(_GameObj);

var _Screen = require('./Screen.js');

var _Screen2 = _interopRequireDefault(_Screen);

var _StartScreen = require('./StartScreen.js');

var _StartScreen2 = _interopRequireDefault(_StartScreen);

var _GameScreen = require('./GameScreen.js');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

var _WonScreen = require('./WonScreen.js');

var _WonScreen2 = _interopRequireDefault(_WonScreen);

var _LostScreen = require('./LostScreen.js');

var _LostScreen2 = _interopRequireDefault(_LostScreen);

var _HUD = require('./HUD.js');

var _HUD2 = _interopRequireDefault(_HUD);

var _Score = require('./Score.js');

var _Score2 = _interopRequireDefault(_Score);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Static Objects.

// Dynamic Objects.

console.log('loading game.');

// Global storage of all screens created.

// NOTE: convert the 'window.' to 'let' since we don't 
// NOTE: want to run globally anymore.

window.gameScreens = {};

var startScreen = new _StartScreen2.default('start', window.gameScreens);
window.gameScreens['start'] = startScreen;

var gameScreen = new _GameScreen2.default('game', window.gameScreens);
window.gameScreens['game'] = gameScreen;

var wonScreen = new _WonScreen2.default('won', window.gameScreens);
window.gameScreens['won'] = wonScreen;

var lostScreen = new _LostScreen2.default('lost', window.gameScreens);
window.gameScreens['lost'] = lostScreen;

console.log(" gameScreens:" + _typeof(window.gameScreens));

window.score = new _Score2.default('game score object');

// START THE GAME...

// Attach event listeners to the buttons on the start screen.
// Specify what each button does in code.

// Make the start screen visible
startScreen.show();

},{"./GameObj.js":4,"./GameScreen.js":5,"./HUD.js":6,"./LostScreen.js":7,"./Score.js":9,"./Screen.js":10,"./StartScreen.js":11,"./WonScreen.js":14}]},{},[16])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQ2FnZS5qcyIsIm1vZHVsZXMvanMvRHluYW1pYy5qcyIsIm1vZHVsZXMvanMvR2FtZU9iai5qcyIsIm1vZHVsZXMvanMvR2FtZVNjcmVlbi5qcyIsIm1vZHVsZXMvanMvSFVELmpzIiwibW9kdWxlcy9qcy9Mb3N0U2NyZWVuLmpzIiwibW9kdWxlcy9qcy9QbGF5ZXIuanMiLCJtb2R1bGVzL2pzL1Njb3JlLmpzIiwibW9kdWxlcy9qcy9TY3JlZW4uanMiLCJtb2R1bGVzL2pzL1N0YXJ0U2NyZWVuLmpzIiwibW9kdWxlcy9qcy9TdGF0aWMuanMiLCJtb2R1bGVzL2pzL1RydW1wLmpzIiwibW9kdWxlcy9qcy9Xb25TY3JlZW4uanMiLCJtb2R1bGVzL2pzL1pvby5qcyIsIm1vZHVsZXMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0lBRXFCLE07OztBQUVwQixpQkFBYyxJQUFkLEVBQW9CLFFBQXBCLEVBQStCO0FBQUE7O0FBRTlCLFVBQVEsR0FBUixDQUFZLDRCQUE0QixJQUF4Qzs7QUFGOEIsOEdBSXZCLElBSnVCOztBQU05QixRQUFLLEdBQUwsR0FBVyxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBWDs7QUFHQSxRQUFLLElBQUw7O0FBVDhCO0FBVzlCOzs7OztrQkFibUIsTTs7Ozs7Ozs7O0FDRnJCOzs7Ozs7Ozs7Ozs7SUFFcUIsSTs7O0FBRXBCLGVBQWMsSUFBZCxFQUFvQixRQUFwQixFQUErQjtBQUFBOztBQUU5QixVQUFRLEdBQVIsQ0FBWSx5QkFBeUIsSUFBckM7O0FBRjhCLDBHQUl2QixJQUp1Qjs7QUFPOUIsUUFBSyxHQUFMLEdBQVcsU0FBUyxjQUFULENBQXdCLFFBQXhCLENBQVg7O0FBRUEsUUFBSyxJQUFMOztBQVQ4QjtBQVc5Qjs7Ozs7a0JB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QixxQkFBWSxtQkFBWixFQUFrQyxTQUFsQyxDQUFuQjtBQUVBOzs7Ozs7a0JBdENtQixHOzs7Ozs4UUNKckI7OztBQUdBO0FBQ2tDOzs7QUFNbEM7QUFDNEI7OztBQVY1Qjs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7Ozs7QUFFQTs7QUFFQTs7QUFFQSxRQUFRLEdBQVIsQ0FBWSxlQUFaOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTyxXQUFQLEdBQXFCLEVBQXJCOztBQUVBLElBQUksY0FBYywwQkFBZ0IsT0FBaEIsRUFBeUIsT0FBTyxXQUFoQyxDQUFsQjtBQUNBLE9BQU8sV0FBUCxDQUFvQixPQUFwQixJQUErQixXQUEvQjs7QUFFQSxJQUFJLGFBQWEseUJBQWUsTUFBZixFQUF1QixPQUFPLFdBQTlCLENBQWpCO0FBQ0EsT0FBTyxXQUFQLENBQW9CLE1BQXBCLElBQStCLFVBQS9COztBQUVBLElBQUksWUFBWSx3QkFBYyxLQUFkLEVBQXFCLE9BQU8sV0FBNUIsQ0FBaEI7QUFDQSxPQUFPLFdBQVAsQ0FBb0IsS0FBcEIsSUFBOEIsU0FBOUI7O0FBRUEsSUFBSSxhQUFhLHlCQUFlLE1BQWYsRUFBdUIsT0FBTyxXQUE5QixDQUFqQjtBQUNBLE9BQU8sV0FBUCxDQUFvQixNQUFwQixJQUErQixVQUEvQjs7QUFFQSxRQUFRLEdBQVIsQ0FBWSwwQkFBeUIsT0FBTyxXQUFoQyxDQUFaOztBQUVBLE9BQU8sS0FBUCxHQUFlLG9CQUFVLG1CQUFWLENBQWY7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFlBQVksSUFBWiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgRHluYW1pYyBmcm9tICcuL0R5bmFtaWMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYWwgZXh0ZW5kcyBEeW5hbWljIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSwgc2NyZWVuSWQgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gQW5pbWFsIG9iamVjdCwgbmFtZTonICsgbmFtZSApO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2NyZWVuSWQpO1xuXG5cblx0XHR0aGlzLnNob3coKTtcblxuXHR9XG5cblxufSIsImltcG9ydCBTdGF0aWMgZnJvbSAnLi9TdGF0aWMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWdlIGV4dGVuZHMgU3RhdGljIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSwgc2NyZWVuSWQgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gYSBab28gQ2FnZSwgbmFtZTonICsgbmFtZSApO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXG5cdFx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzY3JlZW5JZCk7XG5cblx0XHR0aGlzLnNob3coKTtcblxuXHR9XG5cblxufSIsImltcG9ydCBHYW1lT2JqIGZyb20gJy4vR2FtZU9iai5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWMgZXh0ZW5kcyBHYW1lT2JqIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBEeW5hbWljJyApO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHR9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT2JqIHtcblxuXHQvL2luaGVyaXRzIGZyb20gZ2VuZXJpYyBKYXZhc2NyaXB0IE9iamVjdDtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gR2FtZU9iaicpO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblxuXHRcdHRoaXMuaWQgPSB0aGlzLnNldElkKCk7XG5cblx0fSAvLyBlbmQgb2YgY29uc3RydWN0b3JcblxuXHQvKiogXG5cdCAqIGdldCB0aGUgdW5pcXVlIElEIHZhbHVlIGZvciBhbiBvYmplY3QuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSB1bmlxdWUgaWQsIGluIHV1aWQgZm9ybWF0LlxuXHQgKi9cblx0Z2V0SWQgKCkge1xuXHRcdHJldHVybiB0aGlzLmlkO1xuXHR9XG5cblx0LyoqIFxuXHQgKiBnZXQgdGhlIG5hbWUgYXNzaWduZWQgdG8gdGhpcyBvYmplY3QuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBuYW1lLlxuXHQgKi9cblx0Z2V0TmFtZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcblx0fVxuXG5cdC8qKiBcblx0ICogc2V0IHRoZSBvYmplY3QncyBuYW1lIHRvIGEgbmV3IHZhbHVlLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmV3TmFtZSB0aGUgbmV3IG5hbWUgdG8gdXNlLlxuXHQgKi9cblx0c2V0TmFtZSAoIG5ld05hbWUgKSB7XG5cdFx0dGhpcy5uYW1lID0gbmV3TmFtZTtcblx0fVxuXG5cdC8qKiBcblx0ICogbWFrZSB0aGUgb25zY3JlZW4gZWxlbWVudCB2aXNpYmxlIHZpYSBDU1MuXG5cdCAqL1xuXHRzaG93ICgpIHtcblxuXHRcdHRoaXMuZG9tLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG5cdH1cblxuXHQvKipcblx0ICogbWFrZSB0aGUgb25zY3JlZW4gZWxlbWVudCBpbnZpc2libGUgdmlhIENTUy5cblx0ICovXG5cdGhpZGUgKCkge1xuXG5cdFx0dGhpcy5kb20uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuXHR9XG5cblx0LyoqIFxuXHQgKiBMb2FkIGFuIGltYWdlIGZyb20gdGhlIGRyaXZlLCBhbmQgc2V0IHRoZSBcblx0ICogY3NzIGJhY2tncm91bmQgaW1hZ2UgcHJvcGVydHkgdG8gdGhpcyBpbWFnZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaW1nUGF0aCB0aGUgcGF0aCB0byB0aGUgaW1hZ2Ugb24gdGhlIHdlYnNpdGUuXG5cdCAqL1xuXHRzZXRCYWNrZ3JvdW5kSW1hZ2UoIGltZ1BhdGggKSB7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnXCIgKyBpbWdQYXRoICsgXCInKVwiO1xuXG5cdH1cblxuXHRzZXRGb3JlZ3JvdW5kSW1hZ2UoIGltZ1BhdGggKSB7XG5cblx0XHRsZXQgaW1nID0gbmV3IEltYWdlKCk7XG5cblx0XHRpbWcuc3JjID0gaW1nUGF0aDtcblxuXHRcdHRoaXMuZG9tLmFwcGVuZENoaWxkKCBpbWcgKTtcblxuXHR9XG5cblx0LyoqIFxuXHQgKiBzZXQgdGhlIHNpemUgb2YgYW4gb2JqZWN0LCBpbiBwaXhlbHMuXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCB0aGUgd2lkdGgsIGluIHBpeGVscy5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCB0aGUgaGVpZ2h0LCBpbiBwaXhlbHMuXG5cdCAqL1xuXHRzZXRTaXplKCB3aWR0aCwgaGVpZ2h0ICkge1xuXG5cdFx0dGhpcy5kb20uc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG5cdFx0dGhpcy5kb20uc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcblxuXHR9XG5cblx0LyoqIFxuXHQgKiBzZXQgdGhlIHBvc2l0aW9uIG9mIGFuIG9iamVjdCwgcmVsYXRpdmUgdG8gdGhlIFxuXHQgKiBlbmNsb3NpbmcgU2NyZWVuIG9iamVjdC5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IHRvcCB0aGUgdG9wIGNvb3JkaW5hdGUgb2YgdGhlIG9iamVjdCwgaW4gcGl4ZWxzLlxuXHQgKiBAcGFyYW0ge051bWJlcn0gbGVmdCB0aGUgbGVmdCBjb29yZGluYXRlIG9mIHRoZSBvYmplY3QsIGluIHBpeGVscy5cblx0ICovXG5cdHNldFBvc2l0aW9uKCB0b3AsIGxlZnQgKSB7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS50b3AgPSB0b3AgKyAncHgnO1xuXHRcdHRoaXMuZG9tLnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4JztcblxuXHR9XG5cbiAgICAvKiogXG4gICAgICogR2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIGV2ZXJ5IGdhbWUgb2JqZWN0LlxuICAgICAqIEBsaW5rIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2NyZWF0ZS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdFxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgdW5pcXVlIElEIGluIHV1aWQgZm9ybWF0LlxuICAgICAqL1xuICAgIHNldElkICgpIHtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpKjE2KSUxNiB8IDA7XG4gICAgICAgICAgICBkID0gTWF0aC5mbG9vcihkLzE2KTtcbiAgICAgICAgICAgIHJldHVybiAoYz09J3gnID8gciA6IChyJjB4M3wweDgpKS50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXVpZDtcblxuICAgIH0gLy8gZW5kIG9mIHNldElkXG5cbn0gLy8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5pbXBvcnQgWm9vIGZyb20gJy4vWm9vLmpzJztcbmltcG9ydCBUcnVtcCBmcm9tICcuL1RydW1wLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBHYW1lU2NyZWVuJylcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cblx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnZ2FtZS1zY3JlZW4nICk7XG5cblx0XHQvLyBTZXQgdGhlIGJhY2tncm91bmQgaW1hZ2UuXG5cblx0XHR0aGlzLnNldEJhY2tncm91bmRJbWFnZSggJ2ltZy9zY3JlZW5zL2dhbWUtc2NyZWVuLnBuZycgKTtcblxuXHR9IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXG5cdC8qKiBcblx0ICogY3JlYXRlIGdhbWUgb2JqZWN0c1xuXHQgKiAgLSBhZGQgYSBab29cblx0ICogICAgLSBhZGQgNCBDYWdlc1xuXHQgKiAgICAtIGFkZCA0IEFuaW1hbHNcblx0ICogIC0gYWRkIGEgVHJ1bXBcblx0ICogIC0gYWRkIGEgUGxheWVyXG5cdCAqL1xuXHRidWlsZCAoKSB7XG5cblx0XHRjb25zb2xlLmxvZyggJ2J1aWxkaW5nIHRoZSBnYW1lLi4uJyApO1xuXG5cblxuXHRcdC8vIGFkZCBhIFpvbyAoNCBBbmltYWxzIGFuZCA0IENhZ2VzIGdvIGluc2lkZSBpdClcblxuXHRcdHRoaXMuem9vID0gbmV3IFpvbyggJ0Z1bmt5IFpvbycgKTtcblxuXHRcdHRoaXMuem9vLmJ1aWxkKCk7IC8vIG1ha2UgWm9vIGFkZCBDYWdlcyBhbmQgQW5pbWFsc1xuXG5cdFx0dGhpcy5kb20uYXBwZW5kQ2hpbGQoIHRoaXMuem9vLmRvbSApO1xuXG5cdFx0Ly8gYWRkIGEgVHJ1bXBcblxuXHRcdHRoaXMudHJ1bXAgPSBuZXcgVHJ1bXAoICdEb25hbGQgUHJlc2lkZW50aWEgVHJ1bXAnLCA0NDAsIDI0NSApO1xuXG5cdFx0Ly8gYWRkIGEgUGxheWVyXG5cblx0XHR0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoICdteXNlbGYnLCA1MDAsIDI0NSk7XG5cblxuXG5cdH1cblxufSAvLyBlbmQgb2YgY2xhc3NcblxuIiwiaW1wb3J0IEdhbWVPYmogZnJvbSAnLi9HYW1lT2JqLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFVEIGV4dGVuZHMgR2FtZU9iaiB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gSFVEJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXG5cdH0gLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG5cbn0gLy8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvc3RTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXHRcblx0Y29uc3RydWN0b3IgKCBuYW1lLCBzY3JlZW5BcnJheSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBMb3N0U2NyZWVuJyk7XG5cblx0XHRzdXBlciggbmFtZSwgc2NyZWVuQXJyYXkgKTtcblxuXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdsb3N0LXNjcmVlbicgKTtcblxuXHRcdC8vIFNldCB0aGUgYmFja2dyb3VuZCBJbWFnZS5cblxuXHRcdHRoaXMuc2V0QmFja2dyb3VuZEltYWdlKCAnaW1nL3NjcmVlbnMvbG9zdC1zY3JlZW4ucG5nJyApO1xuXG5cdFx0dGhpcy5nZXRTdGFydEJ1dHRvbigpO1xuXG5cdFx0dGhpcy5nZXRFeGl0QnV0dG9uKCk7XG5cblx0fSAvLyBlbmQgb2YgY29uc3RydWN0b3JcbiBcblxufSAvLyBlbmQgb2YgY2xhc3MiLCJpbXBvcnQgRHluYW1pYyBmcm9tICcuL0R5bmFtaWMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBEeW5hbWljIHtcblx0XG5cdGNvbnN0cnVjdG9yKCBuYW1lLCB0b3AsIGxlZnQsIHRydW1wICkge1xuXG5cdHN1cGVyKCBuYW1lICk7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gUGxheWVyIE9iamVjdCBuYW1lOicgKyBuYW1lKTtcblx0XG5cblx0XHR0aGlzLnRydW1wID0gdHJ1bXA7XG5cblx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXInKTtcblxuXHRcdHRoaXMuZG9tLnN0eWxlLnRvcCA9IHRvcCArICdweCc7XG5cdFx0dGhpcy5kb20uc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHRoaXMuc2xldyhldmVudCksIGZhbHNlKTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4gdGhpcy51bmtpY2soZXZlbnQpLCBmYWxzZSk7XG5cblx0XHR0aGlzLnNob3coKTtcblx0fVxuXG5cdHNsZXcoZXZlbnQpIHtcblxuXHRsZXQgY3VycmVudFkgPSBwYXJzZUludCh0aGlzLmRvbS5zdHlsZS50b3ApO1xuXHRcdGxldCBjdXJyZW50WCA9IHBhcnNlSW50KHRoaXMuZG9tLnN0eWxlLmxlZnQpO1xuXHRcdFxuXG5cdFx0c3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcblxuXHRcdFx0Y2FzZSAzNzogLy9sZWZ0IGFycm93XG5cdFx0XHRcdGN1cnJlbnRYIC09IDQ7XG5cdFx0XHRcdHRoaXMuc2V0UG9zaXRpb24oY3VycmVudFksIGN1cnJlbnRYKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzk6IC8vcmlnaHQgYXJyb3dcblx0XHRcdFx0Y3VycmVudFggKz0gNDtcblx0XHRcdFx0dGhpcy5zZXRQb3NpdGlvbihjdXJyZW50WSwgY3VycmVudFgpO1xuXHRcdFx0XHRcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzI6IC8vc3BhY2UgYmFyXG5cdFx0XHRcdGlmIChjdXJyZW50WSA8IDQ5NSkgcmV0dXJuO1xuXHRcdFx0XHRjdXJyZW50WSAtPSA0O1xuXHRcdFx0XHR0aGlzLnNldFBvc2l0aW9uKGN1cnJlbnRZLCBjdXJyZW50WCk7XG5cdFx0XHRcdHRoaXMuY2hlY2tGb3JUcnVtcChjdXJyZW50WSwgY3VycmVudFgpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHR1bmtpY2soZXZlbnQpIHtcblxuXHRcdFx0XHRsZXQgY3VycmVudFkgPSBwYXJzZUludCh0aGlzLmRvbS5zdHlsZS50b3ApO1xuXHRcdFx0XHRsZXQgY3VycmVudFggPSBwYXJzZUludCh0aGlzLmRvbS5zdHlsZS5sZWZ0KTtcblx0XHRcdFx0XG5cdFx0XHRcblx0XG5cblx0XHRzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xuXG5cdFx0XHRjYXNlIDMyOiAvL3NwYWNlIGJhclxuXHRcdFx0XHRjdXJyZW50WSArPSA0O1xuXHRcdFx0XHR0aGlzLnNldFBvc2l0aW9uKGN1cnJlbnRZLCBjdXJyZW50WCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG59XG5cbmNoZWNrRm9yVHJ1bXAodG9wLCBsZWZ0KSB7XG5cblx0bGV0IHRydW1wQ3VycmVudFggPSBwYXJzZUludCh0aGlzLnRydW1wLmRvbS5zdHlsZS5sZWZ0KTtcblx0bGV0IHRydW1wQ3VycmVudFkgPSBwYXJzZUludCh0aGlzLnRydW1wLmRvbS5zdHlsZS50b3ApO1xuXG5cdGNvbnNvbGUubG9nKFwidG9wOlwiICsgdG9wICsgJ2xlZnQnICsgbGVmdCArIFwidHJ1bXB0b3A6XCIpO1xuXG5cdGlmICggdHJ1bXBDdXJyZW50WSA+IDU5MCAmJiB0cnVtcEN1cnJlbnRYID4gbGVmdCAmJiB0cnVtcEN1cnJlbnRYIDwgbGVmdCArIDUwKSB7XG5cblx0XHR0cnVtcC5zdGFydFBpbmdQb25nKCk7XG5cblx0fVxufVxufVxuIiwiaW1wb3J0IEhVRCBmcm9tICcuL0hVRC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlIGV4dGVuZHMgSFVEIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBTY29yZScpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdnYW1lLXNjb3JlJyApO1xuXG5cdH0gLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG5cbn0gLy8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IEdhbWVPYmogZnJvbSAnLi9HYW1lT2JqLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyZWVuIGV4dGVuZHMgR2FtZU9iaiB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUsIHNjcmVlbkFycmF5ICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIFNjcmVlbiwgbmFtZTonICsgbmFtZSArICcgc2NyZWVuczonICsgc2NyZWVuQXJyYXkpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHRcdHRoaXMuc2V0U2NyZWVucyggc2NyZWVuQXJyYXkgKTtcblxuXHR9IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXG5cdHNldFNjcmVlbnMgKCBzY3JlZW5BcnJheSApIHtcblxuXHRcdGNvbnNvbGUubG9nKFwiaW4gc2V0U2NyZWVucywgc2NyZWVuczpcIiArIHNjcmVlbkFycmF5IClcblx0XHR0aGlzLnNjcmVlbnMgPSBzY3JlZW5BcnJheTtcblxuXHR9XG5cblx0Z2V0U3RhcnRCdXR0b24gKCkge1xuXG5cdFx0dGhpcy5zdGFydEJ1dHRvbiA9IHRoaXMuZG9tLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoICdnYW1lLXN0YXJ0JyApWyAwIF07XG5cblx0fVxuXG5cdGdldEV4aXRCdXR0b24oKSB7XG5cblx0XHR0aGlzLmV4aXRCdXR0b24gPSB0aGlzLmRvbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCAnZ2FtZS1leGl0JyApWyAwIF07XG5cblx0fVxuXG59IC8vIGVuZCBvZiBjbGFzc1xuXG5cblxuIiwiaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0U2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSwgc2NyZWVuQXJyYXkgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gU3RhcnRTY3JlZW4sIG5hbWU6JyArIG5hbWUgKyBcIiBzY3JlZW5zOlwiICsgc2NyZWVuQXJyYXkpO1xuXG5cdFx0c3VwZXIoIG5hbWUsIHNjcmVlbkFycmF5ICk7XG5cblx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc3RhcnQtc2NyZWVuJyApO1xuXG5cdFx0Ly8gU2V0IHRoZSBiYWNrZ3JvdW5kIGltYWdlLlxuXG5cdFx0dGhpcy5zZXRCYWNrZ3JvdW5kSW1hZ2UoICdpbWcvc2NyZWVucy9zdGFydC1zY3JlZW4ucG5nJyApO1xuXG5cdFx0Ly8gU2VhcmNoIGZvciBhICdzdGFydCcgYnV0dG9uIGluIHRoZSB0aGlzLmRvbSBIVE1MIG1hcmt1cC4gXG5cdFx0Ly8gTk9URTogd2lsbCBmYWlsIGlmIG5vIGJ1dHRvbiBwcmVzZW50IVxuXG5cdFx0dGhpcy5nZXRTdGFydEJ1dHRvbigpOyAvLyBkZWZpbmVkIGluIFNjcmVlbi5qc1xuXG5cdFx0Ly8gV2lyZSB1cCB0aGUgc3RhcnQgYnV0dG9uIHRvIGxvYWQgdGhlIEdhbWVTY3JlZW4uXG5cblx0XHR0aGlzLnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcblxuXHRcdFx0Ly9hbGVydCgnIEkgYW0gaW4gc2NyZWVuOicgKyB0aGlzLm5hbWUgKTtcblxuXHRcdFx0dGhpcy5zY3JlZW5zWyAnc3RhcnQnIF0uaGlkZSgpOyAgLy8gaGlkZSBteXNlbGZcblxuXHRcdFx0dGhpcy5zY3JlZW5zWyAnZ2FtZScgXS5zaG93KCk7ICAgLy8gc2hvdyB0aGUgZ2FtZSBzY3JlZW5cblxuXHRcdFx0dGhpcy5zY3JlZW5zWyAnZ2FtZScgXS5idWlsZCgpOyAvLyByZWJ1aWxkIHRoZSBnYW1lIHdpdGggYWxsIGl0cyBvYmplY3RzXG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLmdldEV4aXRCdXR0b24oKTtcblxuXHR9IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXG5cblxufSAvLyBlbmQgb2YgY2xhc3MiLCJpbXBvcnQgR2FtZU9iaiBmcm9tICcuL0dhbWVPYmouanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aWMgZXh0ZW5kcyBHYW1lT2JqIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBTdGF0aWMnICk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXG5cdH1cblxufSIsImltcG9ydCBEeW5hbWljIGZyb20gJy4vRHluYW1pYy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRydW1wIGV4dGVuZHMgRHluYW1pYyB7XG5cdFxuXG5cdGNvbnN0cnVjdG9yICggbmFtZSwgdG9wLCBsZWZ0ICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIFRydW1wIG9iamVjdCwgbmFtZTonICsgbmFtZSk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXG5cdFx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRydW1wXCIpO1xuXHRcdHRoaXMuZG9tLnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcblx0XHR0aGlzLmRvbS5zdHlsZS5sZWZ0ID0gbGVmdCArIFwicHhcIjtcblxuXHRcdHRoaXMuaW5pdFBpblBvbmdcblxuXG5cdFx0dGhpcy5zaG93KCk7XG5cblx0fVxuXG5cdGluaXRQaW5nUG9uZyAoKSB7XG5cblx0XHRjb25zb2xlLmxvZyhcImluIHBpbmdwb25nXCIpXG5cblx0fVxuXG5cblxuXG5zdGFydFBpbmdQb25nKCkge1xuXG5cdGNvbnNvbGUubG9nKFwiSSBnb3QgS2lja2VkIGluIHRydW1wLnN0YXJ0UGluZ1BvbmcoKVwiKVxuXG5cdHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCAoKSA9PiB0aGlzLmRvUGluZ1BvbmcsIDQwICk7XG5cbn1cblxuZG9QaW5nUG9uZygpIHtcblxufVxuXG5zdG9wUGluZ1BvbmcoKSB7XG5cblx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpXG5cbn1cbn0iLCJpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29uU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSwgc2NyZWVuQXJyYXkgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gV29uU2NyZWVuJyk7XG5cblx0XHRzdXBlciggbmFtZSwgc2NyZWVuQXJyYXkgKTtcblxuXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd3b24tc2NyZWVuJyApO1xuXG5cdFx0Ly8gU2V0IHRoZSBiYWNrZ3JvdW5kIGltYWdlLlxuXG5cdFx0dGhpcy5zZXRCYWNrZ3JvdW5kSW1hZ2UoICdpbWcvc2NyZWVucy93b24tc2NyZWVuLnBuZycgKTtcblxuXHRcdHRoaXMuZ2V0U3RhcnRCdXR0b24oKTtcblxuXHRcdHRoaXMuZ2V0RXhpdEJ1dHRvbigpO1xuXG5cdH0gLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG5cblxufSAvLyBlbmQgb2YgY2xhc3MiLCJpbXBvcnQgU3RhdGljIGZyb20gJy4vU3RhdGljLmpzJztcbmltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XG5pbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vIGV4dGVuZHMgU3RhdGljIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiB0aGUgWm9vJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXG5cdFx0Ly8gZ3JhYiBhIENhZ2UgZnJvbSB0aGUgZG9tLlxuXG5cdFx0dGhpcy5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXG5cdH1cblxuXHQvKiogXG5cdCAqIENyZWF0ZSA0IENhZ2VzXG5cdCAqIENyZWF0ZSA0IEFuaW1hbHNcblx0ICovXG5cdGJ1aWxkKCkge1xuXG5cdFx0Y29uc29sZS5sb2coICdpbiBab28gYnVpbGQuLi4nICk7XG5cblx0XHR0aGlzLmNhZ2VzID0gW107XG5cblx0XHR0aGlzLmNhZ2VzLnB1c2goIG5ldyBDYWdlKCAnQ2FnZSAjMScsICdjYWdlMScgKSApOyAvLyBvciwgdGhpcy5jYWdlc1swXSA9IG5ldyBDYWdlKC4uLi4pXG5cdFx0dGhpcy5jYWdlcy5wdXNoKCBuZXcgQ2FnZSggJ0NhZ2UgIzInLCAnY2FnZTInICkgKTsgLy8gXG5cdFx0dGhpcy5jYWdlcy5wdXNoKCBuZXcgQ2FnZSggJ0NhZ2UgIzMnLCAnY2FnZTMnICkgKTtcblx0XHR0aGlzLmNhZ2VzLnB1c2goIG5ldyBDYWdlKCAnQ2FnZSAjNCcsICdjYWdlNCcgKSApO1xuXG5cblxuXHRcdHRoaXMuYW5pbWFscyA9IFtdO1xuXG5cdFx0dGhpcy5hbmltYWxzLnB1c2goIG5ldyBBbmltYWwoICdBbmdyeSBsaW9uJywgXCJsaW9uXCIgKSApO1xuXHRcdHRoaXMuYW5pbWFscy5wdXNoKCBuZXcgQW5pbWFsKCAnUmFnaW5nIFRpZ2VyJywgJ3RpZ2VyJyAgKSApO1xuXHRcdHRoaXMuYW5pbWFscy5wdXNoKCBuZXcgQW5pbWFsKCAnTWF1bGluZyBCZWFyJywgJ2JlYXInICkgKTtcblx0XHR0aGlzLmFuaW1hbHMucHVzaCggbmV3IEFuaW1hbCggJ1JhbXBhZ2luZyBHb3JpbGxhJyAsIFwiZ29yaWxsYVwiICkgKTtcblxuXHR9XG5cblxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiLy8gTWFzdGVyIG9iamVjdC5cbmltcG9ydCBHYW1lT2JqIGZyb20gJy4vR2FtZU9iai5qcyc7XG5cbi8vIFNjcmVlbiBvYmplY3RzLlxuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7IC8vbmV2ZXIgZGlyZWN0bHkgdmlzaWJsZSwgdXNlZCB0byBjb25zdHJ1Y3QgdmlzaWJsZSBzY3JlZW5zLlxuaW1wb3J0IFN0YXJ0U2NyZWVuIGZyb20gJy4vU3RhcnRTY3JlZW4uanMnO1xuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi9HYW1lU2NyZWVuLmpzJztcbmltcG9ydCBXb25TY3JlZW4gZnJvbSAnLi9Xb25TY3JlZW4uanMnO1xuaW1wb3J0IExvc3RTY3JlZW4gZnJvbSAnLi9Mb3N0U2NyZWVuLmpzJztcblxuLy8gSFVEIG9iamVjdHMuXG5pbXBvcnQgSFVEIGZyb20gJy4vSFVELmpzJzsgLy9uZXZlciBkaXJlY3RseSB2aXNpYmxlLCB1c2VkIHRvIGNvbnN0cnVjdCB2aXNpYmxlIHNjcmVlbnMuXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZS5qcyc7XG5cbi8vIFN0YXRpYyBPYmplY3RzLlxuXG4vLyBEeW5hbWljIE9iamVjdHMuXG5cbmNvbnNvbGUubG9nKCdsb2FkaW5nIGdhbWUuJyk7XG5cbi8vIEdsb2JhbCBzdG9yYWdlIG9mIGFsbCBzY3JlZW5zIGNyZWF0ZWQuXG5cbi8vIE5PVEU6IGNvbnZlcnQgdGhlICd3aW5kb3cuJyB0byAnbGV0JyBzaW5jZSB3ZSBkb24ndCBcbi8vIE5PVEU6IHdhbnQgdG8gcnVuIGdsb2JhbGx5IGFueW1vcmUuXG4gXG53aW5kb3cuZ2FtZVNjcmVlbnMgPSB7fTtcblxubGV0IHN0YXJ0U2NyZWVuID0gbmV3IFN0YXJ0U2NyZWVuKCdzdGFydCcsIHdpbmRvdy5nYW1lU2NyZWVucyApO1xud2luZG93LmdhbWVTY3JlZW5zWyAnc3RhcnQnXSA9IHN0YXJ0U2NyZWVuO1xuXG5sZXQgZ2FtZVNjcmVlbiA9IG5ldyBHYW1lU2NyZWVuKCdnYW1lJywgd2luZG93LmdhbWVTY3JlZW5zICk7XG53aW5kb3cuZ2FtZVNjcmVlbnNbICdnYW1lJyBdID0gZ2FtZVNjcmVlbjsgXG5cbmxldCB3b25TY3JlZW4gPSBuZXcgV29uU2NyZWVuKCd3b24nLCB3aW5kb3cuZ2FtZVNjcmVlbnMgKTtcbndpbmRvdy5nYW1lU2NyZWVuc1sgJ3dvbicgXSA9IHdvblNjcmVlbjtcblxubGV0IGxvc3RTY3JlZW4gPSBuZXcgTG9zdFNjcmVlbignbG9zdCcsIHdpbmRvdy5nYW1lU2NyZWVucyApO1xud2luZG93LmdhbWVTY3JlZW5zWyAnbG9zdCcgXSA9IGxvc3RTY3JlZW47XG5cbmNvbnNvbGUubG9nKFwiIGdhbWVTY3JlZW5zOlwiICsgdHlwZW9mIHdpbmRvdy5nYW1lU2NyZWVucylcblxud2luZG93LnNjb3JlID0gbmV3IFNjb3JlKCdnYW1lIHNjb3JlIG9iamVjdCcpO1xuXG4vLyBTVEFSVCBUSEUgR0FNRS4uLlxuXG4vLyBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBidXR0b25zIG9uIHRoZSBzdGFydCBzY3JlZW4uXG4vLyBTcGVjaWZ5IHdoYXQgZWFjaCBidXR0b24gZG9lcyBpbiBjb2RlLlxuXG4vLyBNYWtlIHRoZSBzdGFydCBzY3JlZW4gdmlzaWJsZVxuc3RhcnRTY3JlZW4uc2hvdygpO1xuXG5cblxuXG5cblxuXG5cblxuXG4iXX0=
