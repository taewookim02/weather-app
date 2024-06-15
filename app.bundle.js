/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: "Roboto", sans-serif;
  color: #e8eaed;
}

body {
  display: grid;
  min-height: 100vh;
  place-items: center;
  background-color: #1f1f1f;
}

.container {
  height: 100vh;
  max-height: 648px;
  max-width: 720px;
  padding: 96px 128px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr min-content 4fr 3fr;
  align-items: center;
  border: 1px solid #333;
  border-radius: 4px;
}

.heading-primary {
  grid-column: span 2;
  font-size: 24px;
}

/* INPUTS */

.input-container {
  grid-column: span 2;
}

.form {
  display: grid;
  /* justify-content: center; */
  grid-template-columns: 7fr min-content;
  gap: 8px;
}

.search__input,
.search__btn {
  border: 1px solid #4e4e4e;
  border-radius: 4px;
  background-color: #e8eaed;
}

.search__input {
  padding: 4px;
  font: inherit;
  width: 100%;
}

.search__btn {
  display: flex;
  align-items: center;
  padding: 4px;
}

/* CURRENT */
.current-container {
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.current__details {
  display: flex;
  gap: 8px;
}

.current__temp {
  display: flex;
  gap: 4px;
}

.temp {
  font-size: 48px;
}
.celcius,
.sep,
.fahrenheit {
  padding-top: 4px;
}

.celcius,
.fahrenheit {
  cursor: pointer;
}

.current__img {
  padding-top: 4px;
  img,
  svg {
    width: 48px;
    height: 48px;
  }
}

.weather__details {
  display: flex;
  flex-direction: column;
  padding-top: 4px;
  font-size: 12px;
  text-wrap: nowrap;
}

.current__summary {
  display: flex;
  flex-direction: column;
  align-items: end;
  font-size: 14px;
}

.current__summary--heading {
  font-size: 18px;
  font-weight: 700;
}

.weather__details,
.inactive {
  color: #9e9e9e;
}

/* FORECAST */
.forecast-container {
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.forecast__day-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 8px;
}

.forecast__img {
  & svg,
  img {
    width: 40px;
    height: 40px;
  }
}

.forecast__temp {
  display: flex;
  gap: 4px;
}
.heading-secondary {
  text-wrap: nowrap;
}

/* SPINNER */
.loading-spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  width: 100vw;
  height: 100vh;
  background-color: rgba(155, 155, 155, 0.5);
  z-index: 9999;
}

.spinner-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.spinner {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #64d2ff;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,iCAAiC;EACjC,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,8BAA8B;EAC9B,+CAA+C;EAC/C,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA,WAAW;;AAEX;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,sCAAsC;EACtC,QAAQ;AACV;;AAEA;;EAEE,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;AACd;;AAEA,YAAY;AACZ;EACE,mBAAmB;EACnB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,eAAe;AACjB;AACA;;;EAGE,gBAAgB;AAClB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB;;IAEE,WAAW;IACX,YAAY;EACd;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;;EAEE,cAAc;AAChB;;AAEA,aAAa;AACb;EACE,mBAAmB;EACnB,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE;;IAEE,WAAW;IACX,YAAY;EACd;AACF;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;AACA;EACE,iBAAiB;AACnB;;AAEA,YAAY;AACZ;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,aAAa;EACb,YAAY;EACZ,aAAa;EACb,0CAA0C;EAC1C,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;AAClC;;AAEA;EACE,0BAA0B;EAC1B,8BAA8B;EAC9B,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nhtml {\r\n  font-family: \"Roboto\", sans-serif;\r\n  color: #e8eaed;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  min-height: 100vh;\r\n  place-items: center;\r\n  background-color: #1f1f1f;\r\n}\r\n\r\n.container {\r\n  height: 100vh;\r\n  max-height: 648px;\r\n  max-width: 720px;\r\n  padding: 96px 128px;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr min-content 4fr 3fr;\r\n  align-items: center;\r\n  border: 1px solid #333;\r\n  border-radius: 4px;\r\n}\r\n\r\n.heading-primary {\r\n  grid-column: span 2;\r\n  font-size: 24px;\r\n}\r\n\r\n/* INPUTS */\r\n\r\n.input-container {\r\n  grid-column: span 2;\r\n}\r\n\r\n.form {\r\n  display: grid;\r\n  /* justify-content: center; */\r\n  grid-template-columns: 7fr min-content;\r\n  gap: 8px;\r\n}\r\n\r\n.search__input,\r\n.search__btn {\r\n  border: 1px solid #4e4e4e;\r\n  border-radius: 4px;\r\n  background-color: #e8eaed;\r\n}\r\n\r\n.search__input {\r\n  padding: 4px;\r\n  font: inherit;\r\n  width: 100%;\r\n}\r\n\r\n.search__btn {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 4px;\r\n}\r\n\r\n/* CURRENT */\r\n.current-container {\r\n  grid-column: span 2;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.current__details {\r\n  display: flex;\r\n  gap: 8px;\r\n}\r\n\r\n.current__temp {\r\n  display: flex;\r\n  gap: 4px;\r\n}\r\n\r\n.temp {\r\n  font-size: 48px;\r\n}\r\n.celcius,\r\n.sep,\r\n.fahrenheit {\r\n  padding-top: 4px;\r\n}\r\n\r\n.celcius,\r\n.fahrenheit {\r\n  cursor: pointer;\r\n}\r\n\r\n.current__img {\r\n  padding-top: 4px;\r\n  img,\r\n  svg {\r\n    width: 48px;\r\n    height: 48px;\r\n  }\r\n}\r\n\r\n.weather__details {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-top: 4px;\r\n  font-size: 12px;\r\n  text-wrap: nowrap;\r\n}\r\n\r\n.current__summary {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: end;\r\n  font-size: 14px;\r\n}\r\n\r\n.current__summary--heading {\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n}\r\n\r\n.weather__details,\r\n.inactive {\r\n  color: #9e9e9e;\r\n}\r\n\r\n/* FORECAST */\r\n.forecast-container {\r\n  grid-column: span 2;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 16px;\r\n}\r\n\r\n.forecast__day-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 1px solid #333;\r\n  border-radius: 4px;\r\n  padding: 8px;\r\n}\r\n\r\n.forecast__img {\r\n  & svg,\r\n  img {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n}\r\n\r\n.forecast__temp {\r\n  display: flex;\r\n  gap: 4px;\r\n}\r\n.heading-secondary {\r\n  text-wrap: nowrap;\r\n}\r\n\r\n/* SPINNER */\r\n.loading-spinner {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  display: none;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(155, 155, 155, 0.5);\r\n  z-index: 9999;\r\n}\r\n\r\n.spinner-wrapper {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.spinner {\r\n  border: 16px solid #f3f3f3;\r\n  border-top: 16px solid #64d2ff;\r\n  border-radius: 50%;\r\n  width: 120px;\r\n  height: 120px;\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/component/CurrentWeather.js":
/*!*****************************************!*\
  !*** ./src/component/CurrentWeather.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentWeather: () => (/* binding */ CurrentWeather)
/* harmony export */ });
/* harmony import */ var _assets_Cloudy_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/Cloudy.png */ "./src/assets/Cloudy.png");
/* harmony import */ var _assets_PartlyCloudy_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/PartlyCloudy.png */ "./src/assets/PartlyCloudy.png");
/* harmony import */ var _assets_RainThunder_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/RainThunder.png */ "./src/assets/RainThunder.png");
/* harmony import */ var _assets_Rainy_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/Rainy.png */ "./src/assets/Rainy.png");
/* harmony import */ var _assets_Snowy_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/Snowy.png */ "./src/assets/Snowy.png");
/* harmony import */ var _assets_Sunny_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/Sunny.png */ "./src/assets/Sunny.png");







class CurrentWeather {
  constructor() {
    this.element = this.#renderComponent();
  }

  #renderComponent = () => {
    const currentContainer = document.createElement("section");
    currentContainer.classList.add("current-container");

    const currentDetails = document.createElement("div");
    currentDetails.classList.add("current__details");

    const currentImgSpan = document.createElement("span");
    currentImgSpan.classList.add("current__img");
    const currentImg = document.createElement("img");
    currentImg.classList.add("current__img--tag");
    currentImg.setAttribute("src", _assets_Cloudy_png__WEBPACK_IMPORTED_MODULE_0__);
    currentImg.setAttribute("alt", "weather");
    currentDetails.appendChild(currentImgSpan);
    currentImgSpan.appendChild(currentImg);

    const currentTemp = document.createElement("div");
    currentTemp.classList.add("current__temp");
    const temp = document.createElement("span");
    temp.classList.add("temp");
    temp.textContent = 28;
    const celcius = document.createElement("span");
    celcius.classList.add("celcius");
    celcius.textContent = "°C";
    const sep = document.createElement("span");
    sep.classList.add("sep");
    sep.classList.add("inactive");
    sep.textContent = "|";
    const fahrenheit = document.createElement("span");
    fahrenheit.classList.add("fahrenheit");
    fahrenheit.classList.add("inactive");
    fahrenheit.textContent = "°F";
    currentTemp.appendChild(temp);
    currentTemp.appendChild(celcius);
    currentTemp.appendChild(sep);
    currentTemp.appendChild(fahrenheit);
    currentDetails.appendChild(currentTemp);

    const weatherDetails = document.createElement("div");
    weatherDetails.classList.add("weather__details");
    const precipitation = document.createElement("span");
    precipitation.classList.add("current__precipitation");
    precipitation.textContent = `Precipitation: 0%`;
    const humidity = document.createElement("span");
    humidity.classList.add("current__humidity");
    humidity.textContent = `Humidity: 51%`;
    const wind = document.createElement("span");
    wind.classList.add("current__wind");
    wind.textContent = `Wind: 1 m/s`;
    weatherDetails.appendChild(precipitation);
    weatherDetails.appendChild(humidity);
    weatherDetails.appendChild(wind);

    const summary = document.createElement("div");
    summary.classList.add("current__summary");
    const summaryHeading = document.createElement("span");
    summaryHeading.classList.add("current__summary--heading");
    summaryHeading.textContent = "Weather";
    const day = document.createElement("span");
    day.classList.add("current__day");
    day.textContent = `Thursday (06/14)`;
    const status = document.createElement("span");
    status.classList.add("current__status");
    status.textContent = `Sunny`;
    summary.appendChild(summaryHeading);
    summary.appendChild(day);
    summary.appendChild(status);

    currentContainer.appendChild(currentDetails);
    currentDetails.appendChild(weatherDetails);
    currentContainer.appendChild(summary);

    return currentContainer;
  };

  // Utility function to format date
  #formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { weekday: "long" };
    const weekday = date.toLocaleDateString("en-US", options);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${weekday} (${month}/${day})`;
  }

  update = (data, unit) => {
    // unit handling
    const fahrenheit = this.element.querySelector(".fahrenheit");
    const celcius = this.element.querySelector(".celcius");
    if (unit === "C") {
      fahrenheit.classList.add("inactive");
      celcius.classList.remove("inactive");
    } else {
      fahrenheit.classList.remove("inactive");
      celcius.classList.add("inactive");
    }

    // data querySelectors
    const currentData = data.forecast.forecastday[0];
    const temp = this.element.querySelector(".temp");
    const precipitation = this.element.querySelector(".current__precipitation");
    const humidity = this.element.querySelector(".current__humidity");
    const wind = this.element.querySelector(".current__wind");

    // update data
    temp.textContent =
      unit === "C" ? currentData.day.avgtemp_c : currentData.day.avgtemp_f;
    precipitation.textContent = `Precipitation: ${currentData.day.daily_chance_of_rain}%`;
    humidity.textContent = `Humidity: ${currentData.day.avghumidity}%`;
    wind.textContent = `Wind: ${currentData.day.maxwind_kph} m/s`;

    // update summary
    const day = this.element.querySelector(".current__day");
    const status = this.element.querySelector(".current__status");
    const img = this.element.querySelector(".current__img--tag");

    day.textContent = this.#formatDate(currentData.date);
    status.textContent = currentData.day.condition.text;
    const condition = currentData.day.condition.text;
    img.setAttribute("src", this.#getImageSrc(condition)); // update img based on condition text
  };

  #getImageSrc = (condition) => {
    if (condition.includes("rain")) {
      return _assets_Rainy_png__WEBPACK_IMPORTED_MODULE_3__;
    }
    if (condition.includes("partly") && condition.includes("cloud")) {
      return _assets_PartlyCloudy_png__WEBPACK_IMPORTED_MODULE_1__;
    }
    if (condition.includes("cloud")) {
      return _assets_Cloudy_png__WEBPACK_IMPORTED_MODULE_0__;
    }
    if (condition.includes("snow")) {
      return _assets_Snowy_png__WEBPACK_IMPORTED_MODULE_4__;
    }
    if (condition.includes("thunder")) {
      return _assets_RainThunder_png__WEBPACK_IMPORTED_MODULE_2__;
    }
    return _assets_Sunny_png__WEBPACK_IMPORTED_MODULE_5__;
  };
}


/***/ }),

/***/ "./src/component/ForecastWeather.js":
/*!******************************************!*\
  !*** ./src/component/ForecastWeather.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastWeather: () => (/* binding */ ForecastWeather)
/* harmony export */ });
/* harmony import */ var _assets_PartlyCloudy_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/PartlyCloudy.png */ "./src/assets/PartlyCloudy.png");
/* harmony import */ var _assets_Cloudy_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/Cloudy.png */ "./src/assets/Cloudy.png");
/* harmony import */ var _assets_RainThunder_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/RainThunder.png */ "./src/assets/RainThunder.png");
/* harmony import */ var _assets_Rainy_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/Rainy.png */ "./src/assets/Rainy.png");
/* harmony import */ var _assets_Snowy_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/Snowy.png */ "./src/assets/Snowy.png");
/* harmony import */ var _assets_Sunny_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/Sunny.png */ "./src/assets/Sunny.png");







class ForecastWeather {
  constructor() {
    this.element = this.#renderComponent();
  }

  #renderComponent() {
    const forecast = document.createElement("section");
    forecast.classList.add("forecast-container");

    const dayContainer = document.createElement("div");
    dayContainer.classList.add("forecast__day-container");
    forecast.appendChild(dayContainer);

    const day = document.createElement("span");
    day.classList.add("forecast__day");
    day.textContent = `Fri`;
    dayContainer.appendChild(day);

    const imgSpan = document.createElement("span");
    imgSpan.classList.add("forecast__img");
    dayContainer.appendChild(imgSpan);

    const img = document.createElement("img");
    img.classList.add("forecast-img-tag");
    img.setAttribute("alt", "Weather image");
    img.setAttribute("src", _assets_PartlyCloudy_png__WEBPACK_IMPORTED_MODULE_0__);
    imgSpan.appendChild(img);

    const forecastTemp = document.createElement("div");
    forecastTemp.classList.add("forecast__temp");
    dayContainer.appendChild(forecastTemp);

    const firstHighest = document.createElement("span");
    firstHighest.classList.add("forecast__temp--highest");
    firstHighest.textContent = `34°`;
    forecastTemp.appendChild(firstHighest);
    const firstLowest = document.createElement("span");
    firstLowest.classList.add("forecast__temp--lowest");
    firstLowest.classList.add("inactive");
    firstLowest.textContent = `18°`;
    forecastTemp.appendChild(firstLowest);

    const dayContainerSecond = document.createElement("div");
    dayContainerSecond.classList.add("forecast__day-container");
    forecast.appendChild(dayContainerSecond);

    const daySec = document.createElement("span");
    daySec.classList.add("forecast__day");
    daySec.classList.add("forecast__day-2");
    daySec.textContent = "Sat";
    dayContainerSecond.appendChild(daySec);

    const imgSpanSec = document.createElement("span");
    imgSpanSec.classList.add("forecast__img");
    dayContainerSecond.appendChild(imgSpanSec);
    const imgSec = document.createElement("img");
    imgSec.classList.add("forecast-img-tag-2");
    imgSec.setAttribute("alt", "Weather image");
    imgSec.setAttribute("src", _assets_RainThunder_png__WEBPACK_IMPORTED_MODULE_2__);
    imgSpanSec.appendChild(imgSec);

    const forecastTempSec = document.createElement("div");
    forecastTempSec.classList.add("forecast__temp");
    dayContainerSecond.appendChild(forecastTempSec);

    const secHighest = document.createElement("span");
    secHighest.classList.add("forecast__temp--highest");
    secHighest.classList.add("forecast__temp--highest-2");
    secHighest.textContent = `27°`;
    forecastTempSec.appendChild(secHighest);
    const secLowest = document.createElement("span");
    secLowest.classList.add("forecast__temp--lowest");
    secLowest.classList.add("forecast__temp--lowest-2");
    secLowest.classList.add("inactive");
    secLowest.textContent = `18°`;
    forecastTempSec.appendChild(secLowest);

    return forecast;
  }

  update(data, unit) {
    const dayOne = data.forecast.forecastday[1];

    // get day Sun from "2024-06-16"
    const abbDay = this.#getAbbreviatedDay(dayOne.date);

    // get highest temp
    const highestTemp =
      unit === "C" ? dayOne.day.maxtemp_c : dayOne.day.maxtemp_f;
    const lowestTemp =
      unit === "C" ? dayOne.day.mintemp_c : dayOne.day.mintemp_f;

    // get img
    const condition = dayOne.day.condition.text;
    const imgSrc = this.#getImageSrc(condition);

    // update this.element
    const forecastDay = this.element.querySelector(".forecast__day");
    const highestTempTag = this.element.querySelector(
      ".forecast__temp--highest"
    );
    const lowestTempTag = this.element.querySelector(".forecast__temp--lowest");
    const forecastImgTag = this.element.querySelector(".forecast-img-tag");
    forecastDay.textContent = abbDay;
    highestTempTag.textContent = `${highestTemp}°`;
    lowestTempTag.textContent = `${lowestTemp}°`;
    forecastImgTag.setAttribute("src", imgSrc);

    // Day two
    const dayTwo = data.forecast.forecastday[2];
    // get data
    const abbDay2 = this.#getAbbreviatedDay(dayTwo.date);
    const highestTemp2 =
      unit === "C" ? dayTwo.day.maxtemp_c : dayTwo.day.maxtemp_f;
    const lowestTemp2 =
      unit === "C" ? dayTwo.day.mintemp_c : dayTwo.day.mintemp_f;
    const condition2 = dayTwo.day.condition.text;
    const imgSrc2 = this.#getImageSrc(condition2);

    // update element
    const forecastDay2 = this.element.querySelector(".forecast__day-2");
    const highestTempTag2 = this.element.querySelector(
      ".forecast__temp--highest-2"
    );
    const lowestTempTag2 = this.element.querySelector(
      ".forecast__temp--lowest-2"
    );
    const forecastImgTag2 = this.element.querySelector(".forecast-img-tag-2");
    forecastDay2.textContent = abbDay2;
    highestTempTag2.textContent = `${highestTemp2}°`;
    lowestTempTag2.textContent = `${lowestTemp2}°`;
    forecastImgTag2.setAttribute("src", imgSrc2);
  }

  #getAbbreviatedDay = (dateStr) => {
    const date = new Date(dateStr);
    const options = { weekday: "short" }; // short form of the weekday (e.g., Sun, Mon)
    return date.toLocaleDateString("en-US", options);
  };

  #getImageSrc = (condition) => {
    if (condition.includes("rain")) {
      return _assets_Rainy_png__WEBPACK_IMPORTED_MODULE_3__;
    }
    if (condition.includes("partly") && condition.includes("cloud")) {
      return _assets_PartlyCloudy_png__WEBPACK_IMPORTED_MODULE_0__;
    }
    if (condition.includes("cloud")) {
      return _assets_Cloudy_png__WEBPACK_IMPORTED_MODULE_1__;
    }
    if (condition.includes("snow")) {
      return _assets_Snowy_png__WEBPACK_IMPORTED_MODULE_4__;
    }
    if (condition.includes("thunder")) {
      return _assets_RainThunder_png__WEBPACK_IMPORTED_MODULE_2__;
    }
    return _assets_Sunny_png__WEBPACK_IMPORTED_MODULE_5__;
  };
}


/***/ }),

/***/ "./src/component/Header.js":
/*!*********************************!*\
  !*** ./src/component/Header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _controller_WeatherController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/WeatherController */ "./src/controller/WeatherController.js");


class Header {
  wc;
  constructor() {
    this.wc = new _controller_WeatherController__WEBPACK_IMPORTED_MODULE_0__.WeatherController();
    const header = this.#renderComponent();
    this.#attachListeners(header);
    return header;
  }

  #renderComponent = () => {
    const header = document.createElement("header");
    header.classList.add("input-container");

    // Form
    const form = document.createElement("form");
    form.classList.add("form");

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Search a city name (i.e. Tokyo)");
    input.required = true;
    input.classList.add("search__input");

    const btn = document.createElement("button");
    btn.classList.add("search__btn");
    // search icon in btn
    btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#333333" viewBox="0 0 256 256">
      <path
        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z">
      </path>
    </svg>
    `;

    // append child
    form.appendChild(input);
    form.appendChild(btn);
    header.appendChild(form);

    return header;
  };

  #attachListeners(header) {
    const form = header.querySelector(".form");
    const input = header.querySelector(".search__input");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const city = input.value;

      header.dispatchEvent(new CustomEvent("citySearch", { detail: { city } }));
    });
  }
}


/***/ }),

/***/ "./src/component/LoadingSpinner.js":
/*!*****************************************!*\
  !*** ./src/component/LoadingSpinner.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingSpinner: () => (/* binding */ LoadingSpinner)
/* harmony export */ });
class LoadingSpinner {
  constructor() {
    this.element = this.#renderComponent();
  }

  #renderComponent() {
    const spinner = document.createElement("div");
    spinner.classList.add("loading-spinner");
    spinner.innerHTML = `
      <div class="spinner-wrapper">
        <div class="spinner"></div>
      </div>
    `;
    return spinner;
  }

  show() {
    this.element.style.display = "block";
  }

  hide() {
    this.element.style.display = "none";
  }
}


/***/ }),

/***/ "./src/controller/UIController.js":
/*!****************************************!*\
  !*** ./src/controller/UIController.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIController: () => (/* binding */ UIController)
/* harmony export */ });
/* harmony import */ var _component_CurrentWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/CurrentWeather */ "./src/component/CurrentWeather.js");
/* harmony import */ var _component_ForecastWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/ForecastWeather */ "./src/component/ForecastWeather.js");
/* harmony import */ var _component_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/Header */ "./src/component/Header.js");
/* harmony import */ var _component_LoadingSpinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/LoadingSpinner */ "./src/component/LoadingSpinner.js");
/* harmony import */ var _WeatherController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WeatherController */ "./src/controller/WeatherController.js");






const initialCity = {
  detail: { city: "Tokyo" },
};

class UIController {
  constructor() {
    this.wc = new _WeatherController__WEBPACK_IMPORTED_MODULE_4__.WeatherController();
    this.unit = "C";
    this.spinner = new _component_LoadingSpinner__WEBPACK_IMPORTED_MODULE_3__.LoadingSpinner();
  }

  init() {
    this.#renderComponent();
    // initial citysearch
    this.#handleCitySearch(initialCity);
  }
  // #renderComponent

  #renderComponent() {
    // container
    const container = document.querySelector(".container");

    // heading
    const title = document.createElement("h1");
    title.textContent = "Weather app";
    title.classList.add("heading-primary");

    // header
    const header = new _component_Header__WEBPACK_IMPORTED_MODULE_2__.Header();
    header.addEventListener("citySearch", (e) => this.#handleCitySearch(e));

    // city description
    const city = document.createElement("span");
    city.textContent = `Results for: `;
    city.classList.add("heading-secondary");
    this.cityName = document.createElement("strong");
    this.cityName.textContent = `Tokyo`;
    city.appendChild(this.cityName);

    // current
    this.current = new _component_CurrentWeather__WEBPACK_IMPORTED_MODULE_0__.CurrentWeather();
    // forecast
    this.forecast = new _component_ForecastWeather__WEBPACK_IMPORTED_MODULE_1__.ForecastWeather();

    // append
    container.appendChild(title);
    container.appendChild(header);
    container.appendChild(city);
    container.appendChild(this.current.element);
    container.appendChild(this.forecast.element);
    container.appendChild(this.spinner.element);

    this.current.element
      .querySelector(".celcius")
      .addEventListener("click", () => {
        this.#handleUnitChange("C");
      });
    this.current.element
      .querySelector(".fahrenheit")
      .addEventListener("click", () => {
        this.#handleUnitChange("F");
      });
  }

  async #fetchAndRenderWeather(city) {
    this.spinner.show();
    try {
      this.data = await this.wc.getForecastWeather(city);
      this.#updateUI(this.data);
    } catch (err) {
      console.log(err);
    } finally {
      this.spinner.hide();
    }
  }

  async #handleCitySearch(e) {
    const city = e.detail.city;
    await this.#fetchAndRenderWeather(city);
  }

  #handleUnitChange(unit) {
    if (this.unit !== unit) {
      this.unit = unit;
      this.#updateUI(this.data);
    }
  }

  #updateUI(data) {
    // update city name
    this.cityName.textContent = data.location.name;

    // call updates in current, forecast
    this.current.update(data, this.unit);
    this.forecast.update(data, this.unit);
  }
}


/***/ }),

/***/ "./src/controller/WeatherController.js":
/*!*********************************************!*\
  !*** ./src/controller/WeatherController.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherController: () => (/* binding */ WeatherController)
/* harmony export */ });
class WeatherController {
  static #API_KEY = "52890b893b1d49c29be04209240506";
  static URL = "https://api.weatherapi.com/v1";
  constructor() {}

  async getCurrentWeather(city) {
    try {
      const url = `${WeatherController.URL}/current.json?key=${
        WeatherController.#API_KEY
      }&q=${city}`;

      const res = await fetch(url, { mode: "cors" });

      if (!res.ok) {
        throw new Error("Failed to fetch weather:", res.status);
      }

      const weather = await res.json();
      return weather;
    } catch (error) {
      console.log(error);
    }
  }

  async getForecastWeather(city) {
    try {
      // forecast for 3 days ahead
      const url = `${WeatherController.URL}/forecast.json?key=${
        WeatherController.#API_KEY
      }&q=${city}&days=3`;

      // response
      const res = await fetch(url, { mode: "cors" });
      if (!res.ok) {
        throw new Error("Failed to fetch weather:", res.status);
      }

      // json
      const forecast = await res.json();
      return forecast;
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }
}


/***/ }),

/***/ "./src/assets/Cloudy.png":
/*!*******************************!*\
  !*** ./src/assets/Cloudy.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "effac42d5ff37bf91dbe.png";

/***/ }),

/***/ "./src/assets/PartlyCloudy.png":
/*!*************************************!*\
  !*** ./src/assets/PartlyCloudy.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "220ce1c4b90ceec24079.png";

/***/ }),

/***/ "./src/assets/RainThunder.png":
/*!************************************!*\
  !*** ./src/assets/RainThunder.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e9d095148897471a534.png";

/***/ }),

/***/ "./src/assets/Rainy.png":
/*!******************************!*\
  !*** ./src/assets/Rainy.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "74cab8d76f469264c2a9.png";

/***/ }),

/***/ "./src/assets/Snowy.png":
/*!******************************!*\
  !*** ./src/assets/Snowy.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f7294331fd318341d6f.png";

/***/ }),

/***/ "./src/assets/Sunny.png":
/*!******************************!*\
  !*** ./src/assets/Sunny.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0c8c6f31e4aff269daf.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _controller_UIController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/UIController */ "./src/controller/UIController.js");




document.addEventListener("DOMContentLoaded", () => {
  const app = new _controller_UIController__WEBPACK_IMPORTED_MODULE_1__.UIController();

  app.init();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxrQkFBa0I7QUFDakk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLFdBQVcsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxNQUFN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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7OztBQ0FrQztBQUNsQztBQUN5RDtBQUN6RDtBQUNBO0FBQ0Esa0JBQWtCLGtFQUFZO0FBQzlCO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnQvQ3VycmVudFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50L0ZvcmVjYXN0V2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnQvSGVhZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudC9Mb2FkaW5nU3Bpbm5lci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb250cm9sbGVyL1VJQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb250cm9sbGVyL1dlYXRoZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICNlOGVhZWQ7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjFmO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1heC1oZWlnaHQ6IDY0OHB4O1xyXG4gIG1heC13aWR0aDogNzIwcHg7XHJcbiAgcGFkZGluZzogOTZweCAxMjhweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgbWluLWNvbnRlbnQgNGZyIDNmcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uaGVhZGluZy1wcmltYXJ5IHtcclxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLyogSU5QVVRTICovXHJcblxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDdmciBtaW4tY29udGVudDtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLnNlYXJjaF9faW5wdXQsXHJcbi5zZWFyY2hfX2J0biB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzRlNGU0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZWFlZDtcclxufVxyXG5cclxuLnNlYXJjaF9faW5wdXQge1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2VhcmNoX19idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbi8qIENVUlJFTlQgKi9cclxuLmN1cnJlbnQtY29udGFpbmVyIHtcclxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG59XHJcblxyXG4uY3VycmVudF9fZGV0YWlscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLmN1cnJlbnRfX3RlbXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA0cHg7XHJcbn1cclxuXHJcbi50ZW1wIHtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbn1cclxuLmNlbGNpdXMsXHJcbi5zZXAsXHJcbi5mYWhyZW5oZWl0IHtcclxuICBwYWRkaW5nLXRvcDogNHB4O1xyXG59XHJcblxyXG4uY2VsY2l1cyxcclxuLmZhaHJlbmhlaXQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmN1cnJlbnRfX2ltZyB7XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxuICBpbWcsXHJcbiAgc3ZnIHtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gIH1cclxufVxyXG5cclxuLndlYXRoZXJfX2RldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LXdyYXA6IG5vd3JhcDtcclxufVxyXG5cclxuLmN1cnJlbnRfX3N1bW1hcnkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZW5kO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmN1cnJlbnRfX3N1bW1hcnktLWhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ud2VhdGhlcl9fZGV0YWlscyxcclxuLmluYWN0aXZlIHtcclxuICBjb2xvcjogIzllOWU5ZTtcclxufVxyXG5cclxuLyogRk9SRUNBU1QgKi9cclxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XHJcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5mb3JlY2FzdF9fZGF5LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4uZm9yZWNhc3RfX2ltZyB7XHJcbiAgJiBzdmcsXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcmVjYXN0X190ZW1wIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogNHB4O1xyXG59XHJcbi5oZWFkaW5nLXNlY29uZGFyeSB7XHJcbiAgdGV4dC13cmFwOiBub3dyYXA7XHJcbn1cclxuXHJcbi8qIFNQSU5ORVIgKi9cclxuLmxvYWRpbmctc3Bpbm5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU1LCAxNTUsIDE1NSwgMC41KTtcclxuICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4uc3Bpbm5lci13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjNjRkMmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsK0NBQStDO0VBQy9DLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isc0NBQXNDO0VBQ3RDLFFBQVE7QUFDVjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTs7O0VBR0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEI7O0lBRUUsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUEsYUFBYTtBQUNiO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0U7O0lBRUUsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLFlBQVk7QUFDWjtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiAjZThlYWVkO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjFmO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBtYXgtaGVpZ2h0OiA2NDhweDtcXHJcXG4gIG1heC13aWR0aDogNzIwcHg7XFxyXFxuICBwYWRkaW5nOiA5NnB4IDEyOHB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciBtaW4tY29udGVudCA0ZnIgM2ZyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5nLXByaW1hcnkge1xcclxcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSU5QVVRTICovXFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciB7XFxyXFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDdmciBtaW4tY29udGVudDtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoX19pbnB1dCxcXHJcXG4uc2VhcmNoX19idG4ge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzRlNGU0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGVhZWQ7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hfX2lucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaF9fYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDVVJSRU5UICovXFxyXFxuLmN1cnJlbnQtY29udGFpbmVyIHtcXHJcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudF9fZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50X190ZW1wIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAge1xcclxcbiAgZm9udC1zaXplOiA0OHB4O1xcclxcbn1cXHJcXG4uY2VsY2l1cyxcXHJcXG4uc2VwLFxcclxcbi5mYWhyZW5oZWl0IHtcXHJcXG4gIHBhZGRpbmctdG9wOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5jZWxjaXVzLFxcclxcbi5mYWhyZW5oZWl0IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnRfX2ltZyB7XFxyXFxuICBwYWRkaW5nLXRvcDogNHB4O1xcclxcbiAgaW1nLFxcclxcbiAgc3ZnIHtcXHJcXG4gICAgd2lkdGg6IDQ4cHg7XFxyXFxuICAgIGhlaWdodDogNDhweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXJfX2RldGFpbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nLXRvcDogNHB4O1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgdGV4dC13cmFwOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50X19zdW1tYXJ5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGVuZDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnRfX3N1bW1hcnktLWhlYWRpbmcge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXJfX2RldGFpbHMsXFxyXFxuLmluYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiAjOWU5ZTllO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGT1JFQ0FTVCAqL1xcclxcbi5mb3JlY2FzdC1jb250YWluZXIge1xcclxcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdF9fZGF5LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdF9faW1nIHtcXHJcXG4gICYgc3ZnLFxcclxcbiAgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0X190ZW1wIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDRweDtcXHJcXG59XFxyXFxuLmhlYWRpbmctc2Vjb25kYXJ5IHtcXHJcXG4gIHRleHQtd3JhcDogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTUElOTkVSICovXFxyXFxuLmxvYWRpbmctc3Bpbm5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NSwgMTU1LCAxNTUsIDAuNSk7XFxyXFxuICB6LWluZGV4OiA5OTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uc3Bpbm5lci13cmFwcGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5zcGlubmVyIHtcXHJcXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xcclxcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjNjRkMmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc3BpbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY2xvdWR5UG5nIGZyb20gXCIuLi9hc3NldHMvQ2xvdWR5LnBuZ1wiO1xyXG5pbXBvcnQgcGFydGx5Q2xvdWR5IGZyb20gXCIuLi9hc3NldHMvUGFydGx5Q2xvdWR5LnBuZ1wiO1xyXG5pbXBvcnQgUmFpblRodW5kZXIgZnJvbSBcIi4uL2Fzc2V0cy9SYWluVGh1bmRlci5wbmdcIjtcclxuaW1wb3J0IFJhaW55IGZyb20gXCIuLi9hc3NldHMvUmFpbnkucG5nXCI7XHJcbmltcG9ydCBTbm93eSBmcm9tIFwiLi4vYXNzZXRzL1Nub3d5LnBuZ1wiO1xyXG5pbXBvcnQgU3VubnkgZnJvbSBcIi4uL2Fzc2V0cy9TdW5ueS5wbmdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW50V2VhdGhlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLiNyZW5kZXJDb21wb25lbnQoKTtcclxuICB9XHJcblxyXG4gICNyZW5kZXJDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICBjdXJyZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjdXJyZW50RGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiY3VycmVudF9fZGV0YWlsc1wiKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50SW1nU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgY3VycmVudEltZ1NwYW4uY2xhc3NMaXN0LmFkZChcImN1cnJlbnRfX2ltZ1wiKTtcclxuICAgIGNvbnN0IGN1cnJlbnRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgY3VycmVudEltZy5jbGFzc0xpc3QuYWRkKFwiY3VycmVudF9faW1nLS10YWdcIik7XHJcbiAgICBjdXJyZW50SW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBjbG91ZHlQbmcpO1xyXG4gICAgY3VycmVudEltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJ3ZWF0aGVyXCIpO1xyXG4gICAgY3VycmVudERldGFpbHMuYXBwZW5kQ2hpbGQoY3VycmVudEltZ1NwYW4pO1xyXG4gICAgY3VycmVudEltZ1NwYW4uYXBwZW5kQ2hpbGQoY3VycmVudEltZyk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY3VycmVudFRlbXAuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRfX3RlbXBcIik7XHJcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wXCIpO1xyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IDI4O1xyXG4gICAgY29uc3QgY2VsY2l1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgY2VsY2l1cy5jbGFzc0xpc3QuYWRkKFwiY2VsY2l1c1wiKTtcclxuICAgIGNlbGNpdXMudGV4dENvbnRlbnQgPSBcIsKwQ1wiO1xyXG4gICAgY29uc3Qgc2VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBzZXAuY2xhc3NMaXN0LmFkZChcInNlcFwiKTtcclxuICAgIHNlcC5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XHJcbiAgICBzZXAudGV4dENvbnRlbnQgPSBcInxcIjtcclxuICAgIGNvbnN0IGZhaHJlbmhlaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LmFkZChcImZhaHJlbmhlaXRcIik7XHJcbiAgICBmYWhyZW5oZWl0LmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcclxuICAgIGZhaHJlbmhlaXQudGV4dENvbnRlbnQgPSBcIsKwRlwiO1xyXG4gICAgY3VycmVudFRlbXAuYXBwZW5kQ2hpbGQodGVtcCk7XHJcbiAgICBjdXJyZW50VGVtcC5hcHBlbmRDaGlsZChjZWxjaXVzKTtcclxuICAgIGN1cnJlbnRUZW1wLmFwcGVuZENoaWxkKHNlcCk7XHJcbiAgICBjdXJyZW50VGVtcC5hcHBlbmRDaGlsZChmYWhyZW5oZWl0KTtcclxuICAgIGN1cnJlbnREZXRhaWxzLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wKTtcclxuXHJcbiAgICBjb25zdCB3ZWF0aGVyRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB3ZWF0aGVyRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwid2VhdGhlcl9fZGV0YWlsc1wiKTtcclxuICAgIGNvbnN0IHByZWNpcGl0YXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHByZWNpcGl0YXRpb24uY2xhc3NMaXN0LmFkZChcImN1cnJlbnRfX3ByZWNpcGl0YXRpb25cIik7XHJcbiAgICBwcmVjaXBpdGF0aW9uLnRleHRDb250ZW50ID0gYFByZWNpcGl0YXRpb246IDAlYDtcclxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBodW1pZGl0eS5jbGFzc0xpc3QuYWRkKFwiY3VycmVudF9faHVtaWRpdHlcIik7XHJcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogNTElYDtcclxuICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHdpbmQuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRfX3dpbmRcIik7XHJcbiAgICB3aW5kLnRleHRDb250ZW50ID0gYFdpbmQ6IDEgbS9zYDtcclxuICAgIHdlYXRoZXJEZXRhaWxzLmFwcGVuZENoaWxkKHByZWNpcGl0YXRpb24pO1xyXG4gICAgd2VhdGhlckRldGFpbHMuYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xyXG4gICAgd2VhdGhlckRldGFpbHMuYXBwZW5kQ2hpbGQod2luZCk7XHJcblxyXG4gICAgY29uc3Qgc3VtbWFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzdW1tYXJ5LmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50X19zdW1tYXJ5XCIpO1xyXG4gICAgY29uc3Qgc3VtbWFyeUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHN1bW1hcnlIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50X19zdW1tYXJ5LS1oZWFkaW5nXCIpO1xyXG4gICAgc3VtbWFyeUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIldlYXRoZXJcIjtcclxuICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgZGF5LmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50X19kYXlcIik7XHJcbiAgICBkYXkudGV4dENvbnRlbnQgPSBgVGh1cnNkYXkgKDA2LzE0KWA7XHJcbiAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiY3VycmVudF9fc3RhdHVzXCIpO1xyXG4gICAgc3RhdHVzLnRleHRDb250ZW50ID0gYFN1bm55YDtcclxuICAgIHN1bW1hcnkuYXBwZW5kQ2hpbGQoc3VtbWFyeUhlYWRpbmcpO1xyXG4gICAgc3VtbWFyeS5hcHBlbmRDaGlsZChkYXkpO1xyXG4gICAgc3VtbWFyeS5hcHBlbmRDaGlsZChzdGF0dXMpO1xyXG5cclxuICAgIGN1cnJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudERldGFpbHMpO1xyXG4gICAgY3VycmVudERldGFpbHMuYXBwZW5kQ2hpbGQod2VhdGhlckRldGFpbHMpO1xyXG4gICAgY3VycmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChzdW1tYXJ5KTtcclxuXHJcbiAgICByZXR1cm4gY3VycmVudENvbnRhaW5lcjtcclxuICB9O1xyXG5cclxuICAvLyBVdGlsaXR5IGZ1bmN0aW9uIHRvIGZvcm1hdCBkYXRlXHJcbiAgI2Zvcm1hdERhdGUoZGF0ZVN0cikge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHIpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgd2Vla2RheTogXCJsb25nXCIgfTtcclxuICAgIGNvbnN0IHdlZWtkYXkgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIG9wdGlvbnMpO1xyXG4gICAgY29uc3QgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gICAgY29uc3QgZGF5ID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgICByZXR1cm4gYCR7d2Vla2RheX0gKCR7bW9udGh9LyR7ZGF5fSlgO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlID0gKGRhdGEsIHVuaXQpID0+IHtcclxuICAgIC8vIHVuaXQgaGFuZGxpbmdcclxuICAgIGNvbnN0IGZhaHJlbmhlaXQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYWhyZW5oZWl0XCIpO1xyXG4gICAgY29uc3QgY2VsY2l1cyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbGNpdXNcIik7XHJcbiAgICBpZiAodW5pdCA9PT0gXCJDXCIpIHtcclxuICAgICAgZmFocmVuaGVpdC5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XHJcbiAgICAgIGNlbGNpdXMuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmFocmVuaGVpdC5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XHJcbiAgICAgIGNlbGNpdXMuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRhdGEgcXVlcnlTZWxlY3RvcnNcclxuICAgIGNvbnN0IGN1cnJlbnREYXRhID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXTtcclxuICAgIGNvbnN0IHRlbXAgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wXCIpO1xyXG4gICAgY29uc3QgcHJlY2lwaXRhdGlvbiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRfX3ByZWNpcGl0YXRpb25cIik7XHJcbiAgICBjb25zdCBodW1pZGl0eSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRfX2h1bWlkaXR5XCIpO1xyXG4gICAgY29uc3Qgd2luZCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRfX3dpbmRcIik7XHJcblxyXG4gICAgLy8gdXBkYXRlIGRhdGFcclxuICAgIHRlbXAudGV4dENvbnRlbnQgPVxyXG4gICAgICB1bml0ID09PSBcIkNcIiA/IGN1cnJlbnREYXRhLmRheS5hdmd0ZW1wX2MgOiBjdXJyZW50RGF0YS5kYXkuYXZndGVtcF9mO1xyXG4gICAgcHJlY2lwaXRhdGlvbi50ZXh0Q29udGVudCA9IGBQcmVjaXBpdGF0aW9uOiAke2N1cnJlbnREYXRhLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbn0lYDtcclxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2N1cnJlbnREYXRhLmRheS5hdmdodW1pZGl0eX0lYDtcclxuICAgIHdpbmQudGV4dENvbnRlbnQgPSBgV2luZDogJHtjdXJyZW50RGF0YS5kYXkubWF4d2luZF9rcGh9IG0vc2A7XHJcblxyXG4gICAgLy8gdXBkYXRlIHN1bW1hcnlcclxuICAgIGNvbnN0IGRheSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRfX2RheVwiKTtcclxuICAgIGNvbnN0IHN0YXR1cyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRfX3N0YXR1c1wiKTtcclxuICAgIGNvbnN0IGltZyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRfX2ltZy0tdGFnXCIpO1xyXG5cclxuICAgIGRheS50ZXh0Q29udGVudCA9IHRoaXMuI2Zvcm1hdERhdGUoY3VycmVudERhdGEuZGF0ZSk7XHJcbiAgICBzdGF0dXMudGV4dENvbnRlbnQgPSBjdXJyZW50RGF0YS5kYXkuY29uZGl0aW9uLnRleHQ7XHJcbiAgICBjb25zdCBjb25kaXRpb24gPSBjdXJyZW50RGF0YS5kYXkuY29uZGl0aW9uLnRleHQ7XHJcbiAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIHRoaXMuI2dldEltYWdlU3JjKGNvbmRpdGlvbikpOyAvLyB1cGRhdGUgaW1nIGJhc2VkIG9uIGNvbmRpdGlvbiB0ZXh0XHJcbiAgfTtcclxuXHJcbiAgI2dldEltYWdlU3JjID0gKGNvbmRpdGlvbikgPT4ge1xyXG4gICAgaWYgKGNvbmRpdGlvbi5pbmNsdWRlcyhcInJhaW5cIikpIHtcclxuICAgICAgcmV0dXJuIFJhaW55O1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbmRpdGlvbi5pbmNsdWRlcyhcInBhcnRseVwiKSAmJiBjb25kaXRpb24uaW5jbHVkZXMoXCJjbG91ZFwiKSkge1xyXG4gICAgICByZXR1cm4gcGFydGx5Q2xvdWR5O1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbmRpdGlvbi5pbmNsdWRlcyhcImNsb3VkXCIpKSB7XHJcbiAgICAgIHJldHVybiBjbG91ZHlQbmc7XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZGl0aW9uLmluY2x1ZGVzKFwic25vd1wiKSkge1xyXG4gICAgICByZXR1cm4gU25vd3k7XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZGl0aW9uLmluY2x1ZGVzKFwidGh1bmRlclwiKSkge1xyXG4gICAgICByZXR1cm4gUmFpblRodW5kZXI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gU3Vubnk7XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgcGFydGx5Q2xvdWR5IGZyb20gXCIuLi9hc3NldHMvUGFydGx5Q2xvdWR5LnBuZ1wiO1xyXG5pbXBvcnQgY2xvdWR5UG5nIGZyb20gXCIuLi9hc3NldHMvQ2xvdWR5LnBuZ1wiO1xyXG5pbXBvcnQgUmFpblRodW5kZXIgZnJvbSBcIi4uL2Fzc2V0cy9SYWluVGh1bmRlci5wbmdcIjtcclxuaW1wb3J0IFJhaW55IGZyb20gXCIuLi9hc3NldHMvUmFpbnkucG5nXCI7XHJcbmltcG9ydCBTbm93eSBmcm9tIFwiLi4vYXNzZXRzL1Nub3d5LnBuZ1wiO1xyXG5pbXBvcnQgU3VubnkgZnJvbSBcIi4uL2Fzc2V0cy9TdW5ueS5wbmdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JlY2FzdFdlYXRoZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy4jcmVuZGVyQ29tcG9uZW50KCk7XHJcbiAgfVxyXG5cclxuICAjcmVuZGVyQ29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgZm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgIGZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1jb250YWluZXJcIik7XHJcblxyXG4gICAgY29uc3QgZGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3RfX2RheS1jb250YWluZXJcIik7XHJcbiAgICBmb3JlY2FzdC5hcHBlbmRDaGlsZChkYXlDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgZGF5LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdF9fZGF5XCIpO1xyXG4gICAgZGF5LnRleHRDb250ZW50ID0gYEZyaWA7XHJcbiAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5KTtcclxuXHJcbiAgICBjb25zdCBpbWdTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBpbWdTcGFuLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdF9faW1nXCIpO1xyXG4gICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGltZ1NwYW4pO1xyXG5cclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWcuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWltZy10YWdcIik7XHJcbiAgICBpbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiV2VhdGhlciBpbWFnZVwiKTtcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcGFydGx5Q2xvdWR5KTtcclxuICAgIGltZ1NwYW4uYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbiAgICBjb25zdCBmb3JlY2FzdFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZm9yZWNhc3RUZW1wLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdF9fdGVtcFwiKTtcclxuICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdFRlbXApO1xyXG5cclxuICAgIGNvbnN0IGZpcnN0SGlnaGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgZmlyc3RIaWdoZXN0LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdF9fdGVtcC0taGlnaGVzdFwiKTtcclxuICAgIGZpcnN0SGlnaGVzdC50ZXh0Q29udGVudCA9IGAzNMKwYDtcclxuICAgIGZvcmVjYXN0VGVtcC5hcHBlbmRDaGlsZChmaXJzdEhpZ2hlc3QpO1xyXG4gICAgY29uc3QgZmlyc3RMb3dlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGZpcnN0TG93ZXN0LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdF9fdGVtcC0tbG93ZXN0XCIpO1xyXG4gICAgZmlyc3RMb3dlc3QuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xyXG4gICAgZmlyc3RMb3dlc3QudGV4dENvbnRlbnQgPSBgMTjCsGA7XHJcbiAgICBmb3JlY2FzdFRlbXAuYXBwZW5kQ2hpbGQoZmlyc3RMb3dlc3QpO1xyXG5cclxuICAgIGNvbnN0IGRheUNvbnRhaW5lclNlY29uZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkYXlDb250YWluZXJTZWNvbmQuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0X19kYXktY29udGFpbmVyXCIpO1xyXG4gICAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQoZGF5Q29udGFpbmVyU2Vjb25kKTtcclxuXHJcbiAgICBjb25zdCBkYXlTZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGRheVNlYy5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3RfX2RheVwiKTtcclxuICAgIGRheVNlYy5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3RfX2RheS0yXCIpO1xyXG4gICAgZGF5U2VjLnRleHRDb250ZW50ID0gXCJTYXRcIjtcclxuICAgIGRheUNvbnRhaW5lclNlY29uZC5hcHBlbmRDaGlsZChkYXlTZWMpO1xyXG5cclxuICAgIGNvbnN0IGltZ1NwYW5TZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGltZ1NwYW5TZWMuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0X19pbWdcIik7XHJcbiAgICBkYXlDb250YWluZXJTZWNvbmQuYXBwZW5kQ2hpbGQoaW1nU3BhblNlYyk7XHJcbiAgICBjb25zdCBpbWdTZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW1nU2VjLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1pbWctdGFnLTJcIik7XHJcbiAgICBpbWdTZWMuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiV2VhdGhlciBpbWFnZVwiKTtcclxuICAgIGltZ1NlYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgUmFpblRodW5kZXIpO1xyXG4gICAgaW1nU3BhblNlYy5hcHBlbmRDaGlsZChpbWdTZWMpO1xyXG5cclxuICAgIGNvbnN0IGZvcmVjYXN0VGVtcFNlYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmb3JlY2FzdFRlbXBTZWMuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0X190ZW1wXCIpO1xyXG4gICAgZGF5Q29udGFpbmVyU2Vjb25kLmFwcGVuZENoaWxkKGZvcmVjYXN0VGVtcFNlYyk7XHJcblxyXG4gICAgY29uc3Qgc2VjSGlnaGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgc2VjSGlnaGVzdC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3RfX3RlbXAtLWhpZ2hlc3RcIik7XHJcbiAgICBzZWNIaWdoZXN0LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdF9fdGVtcC0taGlnaGVzdC0yXCIpO1xyXG4gICAgc2VjSGlnaGVzdC50ZXh0Q29udGVudCA9IGAyN8KwYDtcclxuICAgIGZvcmVjYXN0VGVtcFNlYy5hcHBlbmRDaGlsZChzZWNIaWdoZXN0KTtcclxuICAgIGNvbnN0IHNlY0xvd2VzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgc2VjTG93ZXN0LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdF9fdGVtcC0tbG93ZXN0XCIpO1xyXG4gICAgc2VjTG93ZXN0LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdF9fdGVtcC0tbG93ZXN0LTJcIik7XHJcbiAgICBzZWNMb3dlc3QuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xyXG4gICAgc2VjTG93ZXN0LnRleHRDb250ZW50ID0gYDE4wrBgO1xyXG4gICAgZm9yZWNhc3RUZW1wU2VjLmFwcGVuZENoaWxkKHNlY0xvd2VzdCk7XHJcblxyXG4gICAgcmV0dXJuIGZvcmVjYXN0O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGRhdGEsIHVuaXQpIHtcclxuICAgIGNvbnN0IGRheU9uZSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV07XHJcblxyXG4gICAgLy8gZ2V0IGRheSBTdW4gZnJvbSBcIjIwMjQtMDYtMTZcIlxyXG4gICAgY29uc3QgYWJiRGF5ID0gdGhpcy4jZ2V0QWJicmV2aWF0ZWREYXkoZGF5T25lLmRhdGUpO1xyXG5cclxuICAgIC8vIGdldCBoaWdoZXN0IHRlbXBcclxuICAgIGNvbnN0IGhpZ2hlc3RUZW1wID1cclxuICAgICAgdW5pdCA9PT0gXCJDXCIgPyBkYXlPbmUuZGF5Lm1heHRlbXBfYyA6IGRheU9uZS5kYXkubWF4dGVtcF9mO1xyXG4gICAgY29uc3QgbG93ZXN0VGVtcCA9XHJcbiAgICAgIHVuaXQgPT09IFwiQ1wiID8gZGF5T25lLmRheS5taW50ZW1wX2MgOiBkYXlPbmUuZGF5Lm1pbnRlbXBfZjtcclxuXHJcbiAgICAvLyBnZXQgaW1nXHJcbiAgICBjb25zdCBjb25kaXRpb24gPSBkYXlPbmUuZGF5LmNvbmRpdGlvbi50ZXh0O1xyXG4gICAgY29uc3QgaW1nU3JjID0gdGhpcy4jZ2V0SW1hZ2VTcmMoY29uZGl0aW9uKTtcclxuXHJcbiAgICAvLyB1cGRhdGUgdGhpcy5lbGVtZW50XHJcbiAgICBjb25zdCBmb3JlY2FzdERheSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0X19kYXlcIik7XHJcbiAgICBjb25zdCBoaWdoZXN0VGVtcFRhZyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5mb3JlY2FzdF9fdGVtcC0taGlnaGVzdFwiXHJcbiAgICApO1xyXG4gICAgY29uc3QgbG93ZXN0VGVtcFRhZyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0X190ZW1wLS1sb3dlc3RcIik7XHJcbiAgICBjb25zdCBmb3JlY2FzdEltZ1RhZyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0LWltZy10YWdcIik7XHJcbiAgICBmb3JlY2FzdERheS50ZXh0Q29udGVudCA9IGFiYkRheTtcclxuICAgIGhpZ2hlc3RUZW1wVGFnLnRleHRDb250ZW50ID0gYCR7aGlnaGVzdFRlbXB9wrBgO1xyXG4gICAgbG93ZXN0VGVtcFRhZy50ZXh0Q29udGVudCA9IGAke2xvd2VzdFRlbXB9wrBgO1xyXG4gICAgZm9yZWNhc3RJbWdUYWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGltZ1NyYyk7XHJcblxyXG4gICAgLy8gRGF5IHR3b1xyXG4gICAgY29uc3QgZGF5VHdvID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXTtcclxuICAgIC8vIGdldCBkYXRhXHJcbiAgICBjb25zdCBhYmJEYXkyID0gdGhpcy4jZ2V0QWJicmV2aWF0ZWREYXkoZGF5VHdvLmRhdGUpO1xyXG4gICAgY29uc3QgaGlnaGVzdFRlbXAyID1cclxuICAgICAgdW5pdCA9PT0gXCJDXCIgPyBkYXlUd28uZGF5Lm1heHRlbXBfYyA6IGRheVR3by5kYXkubWF4dGVtcF9mO1xyXG4gICAgY29uc3QgbG93ZXN0VGVtcDIgPVxyXG4gICAgICB1bml0ID09PSBcIkNcIiA/IGRheVR3by5kYXkubWludGVtcF9jIDogZGF5VHdvLmRheS5taW50ZW1wX2Y7XHJcbiAgICBjb25zdCBjb25kaXRpb24yID0gZGF5VHdvLmRheS5jb25kaXRpb24udGV4dDtcclxuICAgIGNvbnN0IGltZ1NyYzIgPSB0aGlzLiNnZXRJbWFnZVNyYyhjb25kaXRpb24yKTtcclxuXHJcbiAgICAvLyB1cGRhdGUgZWxlbWVudFxyXG4gICAgY29uc3QgZm9yZWNhc3REYXkyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3RfX2RheS0yXCIpO1xyXG4gICAgY29uc3QgaGlnaGVzdFRlbXBUYWcyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLmZvcmVjYXN0X190ZW1wLS1oaWdoZXN0LTJcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGxvd2VzdFRlbXBUYWcyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLmZvcmVjYXN0X190ZW1wLS1sb3dlc3QtMlwiXHJcbiAgICApO1xyXG4gICAgY29uc3QgZm9yZWNhc3RJbWdUYWcyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3QtaW1nLXRhZy0yXCIpO1xyXG4gICAgZm9yZWNhc3REYXkyLnRleHRDb250ZW50ID0gYWJiRGF5MjtcclxuICAgIGhpZ2hlc3RUZW1wVGFnMi50ZXh0Q29udGVudCA9IGAke2hpZ2hlc3RUZW1wMn3CsGA7XHJcbiAgICBsb3dlc3RUZW1wVGFnMi50ZXh0Q29udGVudCA9IGAke2xvd2VzdFRlbXAyfcKwYDtcclxuICAgIGZvcmVjYXN0SW1nVGFnMi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW1nU3JjMik7XHJcbiAgfVxyXG5cclxuICAjZ2V0QWJicmV2aWF0ZWREYXkgPSAoZGF0ZVN0cikgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHIpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgd2Vla2RheTogXCJzaG9ydFwiIH07IC8vIHNob3J0IGZvcm0gb2YgdGhlIHdlZWtkYXkgKGUuZy4sIFN1biwgTW9uKVxyXG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyk7XHJcbiAgfTtcclxuXHJcbiAgI2dldEltYWdlU3JjID0gKGNvbmRpdGlvbikgPT4ge1xyXG4gICAgaWYgKGNvbmRpdGlvbi5pbmNsdWRlcyhcInJhaW5cIikpIHtcclxuICAgICAgcmV0dXJuIFJhaW55O1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbmRpdGlvbi5pbmNsdWRlcyhcInBhcnRseVwiKSAmJiBjb25kaXRpb24uaW5jbHVkZXMoXCJjbG91ZFwiKSkge1xyXG4gICAgICByZXR1cm4gcGFydGx5Q2xvdWR5O1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbmRpdGlvbi5pbmNsdWRlcyhcImNsb3VkXCIpKSB7XHJcbiAgICAgIHJldHVybiBjbG91ZHlQbmc7XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZGl0aW9uLmluY2x1ZGVzKFwic25vd1wiKSkge1xyXG4gICAgICByZXR1cm4gU25vd3k7XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZGl0aW9uLmluY2x1ZGVzKFwidGh1bmRlclwiKSkge1xyXG4gICAgICByZXR1cm4gUmFpblRodW5kZXI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gU3Vubnk7XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBXZWF0aGVyQ29udHJvbGxlciB9IGZyb20gXCIuLi9jb250cm9sbGVyL1dlYXRoZXJDb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyIHtcclxuICB3YztcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMud2MgPSBuZXcgV2VhdGhlckNvbnRyb2xsZXIoKTtcclxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuI3JlbmRlckNvbXBvbmVudCgpO1xyXG4gICAgdGhpcy4jYXR0YWNoTGlzdGVuZXJzKGhlYWRlcik7XHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG4gIH1cclxuXHJcbiAgI3JlbmRlckNvbXBvbmVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImlucHV0LWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAvLyBGb3JtXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtXCIpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlNlYXJjaCBhIGNpdHkgbmFtZSAoaS5lLiBUb2t5bylcIik7XHJcbiAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwic2VhcmNoX19pbnB1dFwiKTtcclxuXHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hfX2J0blwiKTtcclxuICAgIC8vIHNlYXJjaCBpY29uIGluIGJ0blxyXG4gICAgYnRuLmlubmVySFRNTCA9IGBcclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCIjMzMzMzMzXCIgdmlld0JveD1cIjAgMCAyNTYgMjU2XCI+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0yMjkuNjYsMjE4LjM0bC01MC4wNy01MC4wNmE4OC4xMSw4OC4xMSwwLDEsMC0xMS4zMSwxMS4zMWw1MC4wNiw1MC4wN2E4LDgsMCwwLDAsMTEuMzItMTEuMzJaTTQwLDExMmE3Miw3MiwwLDEsMSw3Miw3MkE3Mi4wOCw3Mi4wOCwwLDAsMSw0MCwxMTJaXCI+XHJcbiAgICAgIDwvcGF0aD5cclxuICAgIDwvc3ZnPlxyXG4gICAgYDtcclxuXHJcbiAgICAvLyBhcHBlbmQgY2hpbGRcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbiAgfTtcclxuXHJcbiAgI2F0dGFjaExpc3RlbmVycyhoZWFkZXIpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBoZWFkZXIucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBoZWFkZXIucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfX2lucHV0XCIpO1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgY2l0eSA9IGlucHV0LnZhbHVlO1xyXG5cclxuICAgICAgaGVhZGVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2l0eVNlYXJjaFwiLCB7IGRldGFpbDogeyBjaXR5IH0gfSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBMb2FkaW5nU3Bpbm5lciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLiNyZW5kZXJDb21wb25lbnQoKTtcclxuICB9XHJcblxyXG4gICNyZW5kZXJDb21wb25lbnQoKSB7XHJcbiAgICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZChcImxvYWRpbmctc3Bpbm5lclwiKTtcclxuICAgIHNwaW5uZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXJcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgcmV0dXJuIHNwaW5uZXI7XHJcbiAgfVxyXG5cclxuICBzaG93KCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgfVxyXG5cclxuICBoaWRlKCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ3VycmVudFdlYXRoZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50L0N1cnJlbnRXZWF0aGVyXCI7XHJcbmltcG9ydCB7IEZvcmVjYXN0V2VhdGhlciB9IGZyb20gXCIuLi9jb21wb25lbnQvRm9yZWNhc3RXZWF0aGVyXCI7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnQvSGVhZGVyXCI7XHJcbmltcG9ydCB7IExvYWRpbmdTcGlubmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudC9Mb2FkaW5nU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyBXZWF0aGVyQ29udHJvbGxlciB9IGZyb20gXCIuL1dlYXRoZXJDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCBpbml0aWFsQ2l0eSA9IHtcclxuICBkZXRhaWw6IHsgY2l0eTogXCJUb2t5b1wiIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgVUlDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMud2MgPSBuZXcgV2VhdGhlckNvbnRyb2xsZXIoKTtcclxuICAgIHRoaXMudW5pdCA9IFwiQ1wiO1xyXG4gICAgdGhpcy5zcGlubmVyID0gbmV3IExvYWRpbmdTcGlubmVyKCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy4jcmVuZGVyQ29tcG9uZW50KCk7XHJcbiAgICAvLyBpbml0aWFsIGNpdHlzZWFyY2hcclxuICAgIHRoaXMuI2hhbmRsZUNpdHlTZWFyY2goaW5pdGlhbENpdHkpO1xyXG4gIH1cclxuICAvLyAjcmVuZGVyQ29tcG9uZW50XHJcblxyXG4gICNyZW5kZXJDb21wb25lbnQoKSB7XHJcbiAgICAvLyBjb250YWluZXJcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG5cclxuICAgIC8vIGhlYWRpbmdcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIldlYXRoZXIgYXBwXCI7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZy1wcmltYXJ5XCIpO1xyXG5cclxuICAgIC8vIGhlYWRlclxyXG4gICAgY29uc3QgaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG4gICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaXR5U2VhcmNoXCIsIChlKSA9PiB0aGlzLiNoYW5kbGVDaXR5U2VhcmNoKGUpKTtcclxuXHJcbiAgICAvLyBjaXR5IGRlc2NyaXB0aW9uXHJcbiAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBjaXR5LnRleHRDb250ZW50ID0gYFJlc3VsdHMgZm9yOiBgO1xyXG4gICAgY2l0eS5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZy1zZWNvbmRhcnlcIik7XHJcbiAgICB0aGlzLmNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiKTtcclxuICAgIHRoaXMuY2l0eU5hbWUudGV4dENvbnRlbnQgPSBgVG9reW9gO1xyXG4gICAgY2l0eS5hcHBlbmRDaGlsZCh0aGlzLmNpdHlOYW1lKTtcclxuXHJcbiAgICAvLyBjdXJyZW50XHJcbiAgICB0aGlzLmN1cnJlbnQgPSBuZXcgQ3VycmVudFdlYXRoZXIoKTtcclxuICAgIC8vIGZvcmVjYXN0XHJcbiAgICB0aGlzLmZvcmVjYXN0ID0gbmV3IEZvcmVjYXN0V2VhdGhlcigpO1xyXG5cclxuICAgIC8vIGFwcGVuZFxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHkpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3VycmVudC5lbGVtZW50KTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZvcmVjYXN0LmVsZW1lbnQpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuc3Bpbm5lci5lbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnQuZWxlbWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jZWxjaXVzXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuI2hhbmRsZVVuaXRDaGFuZ2UoXCJDXCIpO1xyXG4gICAgICB9KTtcclxuICAgIHRoaXMuY3VycmVudC5lbGVtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmZhaHJlbmhlaXRcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4jaGFuZGxlVW5pdENoYW5nZShcIkZcIik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgI2ZldGNoQW5kUmVuZGVyV2VhdGhlcihjaXR5KSB7XHJcbiAgICB0aGlzLnNwaW5uZXIuc2hvdygpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5kYXRhID0gYXdhaXQgdGhpcy53Yy5nZXRGb3JlY2FzdFdlYXRoZXIoY2l0eSk7XHJcbiAgICAgIHRoaXMuI3VwZGF0ZVVJKHRoaXMuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHRoaXMuc3Bpbm5lci5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyAjaGFuZGxlQ2l0eVNlYXJjaChlKSB7XHJcbiAgICBjb25zdCBjaXR5ID0gZS5kZXRhaWwuY2l0eTtcclxuICAgIGF3YWl0IHRoaXMuI2ZldGNoQW5kUmVuZGVyV2VhdGhlcihjaXR5KTtcclxuICB9XHJcblxyXG4gICNoYW5kbGVVbml0Q2hhbmdlKHVuaXQpIHtcclxuICAgIGlmICh0aGlzLnVuaXQgIT09IHVuaXQpIHtcclxuICAgICAgdGhpcy51bml0ID0gdW5pdDtcclxuICAgICAgdGhpcy4jdXBkYXRlVUkodGhpcy5kYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICN1cGRhdGVVSShkYXRhKSB7XHJcbiAgICAvLyB1cGRhdGUgY2l0eSBuYW1lXHJcbiAgICB0aGlzLmNpdHlOYW1lLnRleHRDb250ZW50ID0gZGF0YS5sb2NhdGlvbi5uYW1lO1xyXG5cclxuICAgIC8vIGNhbGwgdXBkYXRlcyBpbiBjdXJyZW50LCBmb3JlY2FzdFxyXG4gICAgdGhpcy5jdXJyZW50LnVwZGF0ZShkYXRhLCB0aGlzLnVuaXQpO1xyXG4gICAgdGhpcy5mb3JlY2FzdC51cGRhdGUoZGF0YSwgdGhpcy51bml0KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFdlYXRoZXJDb250cm9sbGVyIHtcclxuICBzdGF0aWMgI0FQSV9LRVkgPSBcIjUyODkwYjg5M2IxZDQ5YzI5YmUwNDIwOTI0MDUwNlwiO1xyXG4gIHN0YXRpYyBVUkwgPSBcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxXCI7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBhc3luYyBnZXRDdXJyZW50V2VhdGhlcihjaXR5KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1cmwgPSBgJHtXZWF0aGVyQ29udHJvbGxlci5VUkx9L2N1cnJlbnQuanNvbj9rZXk9JHtcclxuICAgICAgICBXZWF0aGVyQ29udHJvbGxlci4jQVBJX0tFWVxyXG4gICAgICB9JnE9JHtjaXR5fWA7XHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCB3ZWF0aGVyOlwiLCByZXMuc3RhdHVzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHJldHVybiB3ZWF0aGVyO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0Rm9yZWNhc3RXZWF0aGVyKGNpdHkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGZvcmVjYXN0IGZvciAzIGRheXMgYWhlYWRcclxuICAgICAgY29uc3QgdXJsID0gYCR7V2VhdGhlckNvbnRyb2xsZXIuVVJMfS9mb3JlY2FzdC5qc29uP2tleT0ke1xyXG4gICAgICAgIFdlYXRoZXJDb250cm9sbGVyLiNBUElfS0VZXHJcbiAgICAgIH0mcT0ke2NpdHl9JmRheXM9M2A7XHJcblxyXG4gICAgICAvLyByZXNwb25zZVxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XHJcbiAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHdlYXRoZXI6XCIsIHJlcy5zdGF0dXMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBqc29uXHJcbiAgICAgIGNvbnN0IGZvcmVjYXN0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGZvcmVjYXN0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBhbGVydChlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFVJQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXIvVUlDb250cm9sbGVyXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgYXBwID0gbmV3IFVJQ29udHJvbGxlcigpO1xyXG5cclxuICBhcHAuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9