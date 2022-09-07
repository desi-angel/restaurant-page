/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _phone_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone.png */ \"./src/phone.png\");\n/* harmony import */ var _map_marker_outline_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-marker-outline.png */ \"./src/map-marker-outline.png\");\n/* harmony import */ var _location_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.png */ \"./src/location.png\");\n\n\n\n\nfunction contact() {\n  document.getElementById('content').innerHTML = '';\n  const container = document.querySelector('#content');\n\n  // Create the div for contact page\n  const contactPage = document.createElement('div');\n  contactPage.classList.add('contact');\n\n  // Create individual elements for the page\n  const number = document.createElement('div');\n  number.classList.add('number');\n  const phoneIcon = new Image();\n  phoneIcon.src = _phone_png__WEBPACK_IMPORTED_MODULE_0__;\n  phoneIcon.classList.add('icon');\n\n  // Create Text Node for the number\n  const textNode = document.createTextNode('+92-213-2345678');\n  number.appendChild(phoneIcon);\n  number.appendChild(textNode);\n\n  contactPage.appendChild(number);\n\n  // Create Address Element\n  const Address = document.createElement('div');\n  const text = document.createTextNode('144 R Hali Road Block 2 P.E.C.H.S');\n  Address.classList.add('address');\n\n  const addIcon = new Image();\n  addIcon.src = _map_marker_outline_png__WEBPACK_IMPORTED_MODULE_1__;\n  addIcon.classList.add('icon');\n\n  const locationImage = new Image();\n  locationImage.src = _location_png__WEBPACK_IMPORTED_MODULE_2__;\n  locationImage.classList.add('location');\n\n  Address.appendChild(addIcon);\n  Address.appendChild(text);\n  contactPage.appendChild(Address);\n  contactPage.appendChild(locationImage);\n  container.appendChild(contactPage);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homepage)\n/* harmony export */ });\n/* harmony import */ var _display_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.jpeg */ \"./src/display.jpeg\");\n\n\nfunction homepage() {\n  const container = document.querySelector('#content');\n  container.innerHTML = '';\n\n  document.querySelector('.Home').classList.add('active');\n\n  const home = document.createElement('div');\n  home.classList.add('home');\n  const para1 = document.createElement('p');\n  const para2 = document.createElement('p');\n\n  para1.textContent = 'Best Italian Food in your town since 1980';\n  para2.textContent = 'Come visit us or Order online';\n  const display = new Image();\n  display.src = _display_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n\n  home.appendChild(para1);\n  home.appendChild(display);\n  home.appendChild(para2);\n  container.appendChild(home);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n  document.getElementById('content').innerHTML = '';\n  const container = document.querySelector('#content');\n\n  const menuCard = document.createElement('div');\n  menuCard.classList.add('menu');\n\n  const createCard = (title, description) => {\n    const card = document.createElement('div');\n    card.classList.add('card');\n\n    const name = document.createElement('h2');\n    name.classList.add('name');\n    name.textContent = title;\n    card.appendChild(name);\n\n    const text = document.createElement('div');\n    text.classList.add('description');\n    text.textContent = description;\n    card.appendChild(text);\n\n    return card;\n  };\n\n  menuCard.appendChild(createCard('Caprese Salad with Pesto Sauce', 'Nothing like a fresh tomato salad in summers! A great antipasto bite to start your meal with. This combination of juicy tomatoes and mozzarella cheese salad topped with freshly made pesto sauce is a distinct yet simple one. It offers a twist to the classic caprese salad. '));\n\n  menuCard.appendChild(createCard('Bruschetta', 'An antipasto dish, bruschetta has grilled bread topped with veggies, rubbed garlic and tomato mix. A country bread sliced and topped with different toppings - the evergreen tomato-basil and an inventive mushroom-garlic. The classic Italian starter!'));\n\n  menuCard.appendChild(createCard('Pasta Carbonara', \"This simple Roman pasta dish derives its name from 'carbone' meaning coal. It was a pasta popular with the coal miners. The original recipe calls for guanciale, which is pig's cheek, but since its not Halal, the chef has used bacon instead.\"));\n\n  menuCard.appendChild(createCard('Margherita Pizza', \"Fancy a pipping hot pizza, fresh out of the oven? Create one at home! Margherita Pizza is to many the true Italian flag. One of the most loved Italian dishes, it just takes a few simple ingredients and you get insanely delicious results! You just can't go wrong with that tomato, basil and fresh mozzarella combo.\"));\n\n  menuCard.appendChild(createCard('Mushroom Risotto', 'A plateful of buttery risotto with the goodness of mushrooms. A healthy bowl of mushroom risotto has benefits more than you can think. A great source of protein, powerful antioxidant and even has cancer-fighting properties. This risotto recipe with mushrooms is a delicious recipe besides being easy and quick! Great to feed a hungry horde!'));\n\n  menuCard.appendChild(createCard('Tiramisu', \"The delightful tiramisu recipe with sponge fingers soaked in coffee, layered around and smeared with a creamy mascarpone mixture. The word 'tiramisu' in Italian means 'pick-me-up'. Owing to its caffeine kick it sure does!\"));\n\n  container.appendChild(menuCard);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initialization)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction initialization() {\n  // Select the content div to append\n  const header = document.querySelector('#header');\n\n  // Create DOM Elements for the header\n  const title = document.createElement('h1');\n  const navbar = document.createElement('nav');\n\n  title.textContent = \"Sam's Bistro\";\n  title.classList.add('title');\n  header.appendChild(title);\n\n  // create buttons\n  const nameArr = ['Home', 'Menu', 'Contact'];\n  for (let i = 0; i < 3; i += 1) {\n    const btn = document.createElement('button');\n    btn.textContent = nameArr[i];\n    btn.classList.add('nav-links', nameArr[i]);\n    navbar.appendChild(btn);\n  }\n  header.appendChild(navbar);\n\n  // set active state on the selected button\n  function setActive(pageBtn) {\n    const btns = document.querySelectorAll('button');\n    btns.forEach((btn) => {\n      if (btn.classList.contains('active')) {\n        btn.classList.remove('active');\n      }\n    });\n    pageBtn.classList.add('active');\n  }\n\n  // Add event listeners to buttons on the tabs\n  const buttons = document.querySelectorAll('button');\n  buttons.forEach((btn) => {\n    btn.addEventListener('click', (e) => {\n      const classes = e.currentTarget.classList;\n      if (classes.contains('Home')) {\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        setActive(e.currentTarget);\n      } else if (classes.contains('Menu')) {\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        setActive(e.currentTarget);\n      } else {\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        setActive(e.currentTarget);\n      }\n    });\n  });\n  // Load homepage on initialization\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

/***/ }),

/***/ "./src/display.jpeg":
/*!**************************!*\
  !*** ./src/display.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e4c80b6b8644ee4a0220.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/display.jpeg?");

/***/ }),

/***/ "./src/location.png":
/*!**************************!*\
  !*** ./src/location.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1aba79e1e0a537bc8c2e.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/location.png?");

/***/ }),

/***/ "./src/map-marker-outline.png":
/*!************************************!*\
  !*** ./src/map-marker-outline.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ce1835f5dd28c618ac57.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/map-marker-outline.png?");

/***/ }),

/***/ "./src/phone.png":
/*!***********************!*\
  !*** ./src/phone.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"33a4f8037c66e8ce806c.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/phone.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;