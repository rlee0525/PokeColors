/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	document.addEventListener('DOMContentLoaded', function () {
	  var canvas = document.getElementById('pokemon');
	  var ctx = canvas.getContext('2d');
	  canvas.width = window.innerWidth;
	  canvas.height = window.innerHeight - 60;
	
	  var image = new Image();
	  var id = 25;
	  image.crossOrigin = 'anonymous';
	  image.src = 'http://res.cloudinary.com/rlee0525/image/upload/v1487296291/25_rs5sdm.svg';
	  // ctx.drawImage(image, 100, 100);
	  image.onload = function () {
	    ctx.drawImage(image, 100, 100);
	    image.style.display = 'none';
	  };
	  // var color = document.getElementById('color');
	  function pick(event) {
	    var x = event.layerX;
	    var y = event.layerY;
	    var pixel = ctx.getImageData(x, y, 1, 1);
	    var data = pixel.data;
	    var rgba = 'rgba(' + data[0] + ', ' + data[1] + ', ' + data[2] + ', ' + data[3] / 255 + ')';
	    image.style.background = rgba;
	    image.textContent = rgba;
	    console.log(rgba);
	  }
	  canvas.addEventListener('mouseover', pick);
	});
	
	var resizeCanvas = function resizeCanvas() {
	  var canvas = document.getElementById('pokemon');
	  var ctx = canvas.getContext('2d');
	  canvas.width = window.innerWidth;
	  canvas.height = window.innerHeight - 60;
	};
	
	document.addEventListener('resize', function () {
	  return resizeCanvas();
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map