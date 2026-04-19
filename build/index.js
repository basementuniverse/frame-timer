/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts"
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
(__unused_webpack_module, exports) {

eval("{\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass FrameTimer {\n    constructor(options) {\n        this._lastFrameElapsedTime = 0;\n        this._frameRate = 0;\n        this._frameCount = 0;\n        this.options = { ...FrameTimer.DEFAULT_OPTIONS, ...(options !== null && options !== void 0 ? options : {}) };\n        this._lastFrameTime = this._lastFrameCountTime = performance.now();\n    }\n    /**\n     * The elapsed time in seconds since the last frame.\n     */\n    get elapsedTime() {\n        return this._lastFrameElapsedTime;\n    }\n    /**\n     * The current framerate in frames per second (FPS). This value is updated\n     * once per second and represents the number of frames rendered in the last\n     * second.\n     */\n    get frameRate() {\n        return this._frameRate;\n    }\n    update() {\n        var _a;\n        const now = performance.now();\n        const elapsedTime = Math.min((now - this._lastFrameTime) / 1000, 1 / ((_a = this.options.minFPS) !== null && _a !== void 0 ? _a : 30));\n        // Calculate framerate\n        if (now - this._lastFrameCountTime >= 1000) {\n            this._lastFrameCountTime = now;\n            this._frameRate = this._frameCount;\n            this._frameCount = 0;\n        }\n        this._frameCount++;\n        this._lastFrameTime = now;\n        this._lastFrameElapsedTime = elapsedTime;\n    }\n}\nexports[\"default\"] = FrameTimer;\nFrameTimer.DEFAULT_OPTIONS = {\n    minFPS: 30,\n};\n\n\n//# sourceURL=webpack://@basementuniverse/frame-timer/./index.ts?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.ts"](0,__webpack_exports__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});