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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  color: black;\\r\\n  margin: 0.1em;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: rgb(176, 224, 230);\\r\\n  text-decoration: none;\\r\\n  font-size: 35px;\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  gap: 3.5rem;\\r\\n  height: 5rem;\\r\\n  font-weight: 700;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  padding: 10px 15px;\\r\\n  letter-spacing: 0.01em;\\r\\n  border: 3px solid black;\\r\\n}\\r\\n\\r\\nheader div i {\\r\\n  font-size: 36px;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\nheader li {\\r\\n  display: flex;\\r\\n  gap: 55px;\\r\\n}\\r\\n\\r\\n.card-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  padding: 20px 0;\\r\\n  padding-right: 20px;\\r\\n  margin: auto;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.movie-cards {\\r\\n  /* text-align: center; */\\r\\n\\r\\n  /* background-color: lightpink; */\\r\\n  padding: 10px;\\r\\n  border-radius: 5px;\\r\\n  margin: 0;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.movie-title {\\r\\n  text-align: center;\\r\\n  color: #464646;\\r\\n  font-weight: 400;\\r\\n  text-decoration: none;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.movie-info {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  width: 340px;\\r\\n  height: 400px;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  width: 100%;\\r\\n  padding: 15px;\\r\\n  background-color: lightgrey;\\r\\n  border: 1px solid black;\\r\\n  border-radius: 10px;\\r\\n  font-size: 1.2rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  border: 3px solid black;\\r\\n  text-align: center;\\r\\n  width: 95%;\\r\\n  bottom: 0;\\r\\n  font-size: 15px;\\r\\n  padding-block: 15px;\\r\\n  letter-spacing: 00.2em;\\r\\n  margin-left: 30px;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  /* border: 5px solid black; */\\r\\n  border-bottom: 8px solid black;\\r\\n  border-right: 10px solid black;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n#close-button {\\r\\n  cursor: pointer;\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\nsection #popup-wrapper {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  overflow: auto;\\r\\n  text-align: center;\\r\\n  background-color: rgb(176, 224, 230, 0.7);\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\nsection #popup-window {\\r\\n  background-color: rgba(255, 188, 193);\\r\\n  margin: 10% auto;\\r\\n\\r\\n  /* width: 30%; */\\r\\n  padding: 20px;\\r\\n  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5), 0 7px 50px 0 rgba(0, 0, 0, 0.7);\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n#popup-window button {\\r\\n  width: 35%;\\r\\n}\\r\\n\\r\\ndiv#comments-wrapper {\\r\\n  /* border: 1px solid black; */\\r\\n  margin: 20px auto;\\r\\n  width: 100%;\\r\\n  padding: 0 30px;\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n/* #table-body td {\\r\\n  width: 15%;\\r\\n  font-weight: 700;\\r\\n} */\\r\\n\\r\\n/* #table-body td:last-child {\\r\\n  width: 65%;\\r\\n  font-weight: 500;\\r\\n} */\\r\\n\\r\\n.popup-image {\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n#popup-window div > h3 {\\r\\n  font-size: 30px;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n#popup-window div > p {\\r\\n  font-size: 20px;\\r\\n  padding: 15px;\\r\\n}\\r\\n\\r\\n#popup-window div > h4 {\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n#popup-window div > span {\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\nform {\\r\\n  text-align: left;\\r\\n  width: 100%;\\r\\n  margin-block-end: 2rem;\\r\\n}\\r\\n\\r\\nform div {\\r\\n  padding-bottom: 20px;\\r\\n}\\r\\n\\r\\nform input {\\r\\n  width: 60%;\\r\\n  padding-block: 0.8rem;\\r\\n}\\r\\n\\r\\nform textarea {\\r\\n  text-align: left;\\r\\n  width: 100%;\\r\\n  height: 80px;\\r\\n}\\r\\n\\r\\n.bottom {\\r\\n  margin-bottom: 70px;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 780px) {\\r\\n  section #popup-window {\\r\\n    width: 100%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 780px) {\\r\\n  section #popup-window {\\r\\n    width: 80%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 1200px) {\\r\\n  section #popup-window {\\r\\n    width: 35%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-js-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://capstone-js-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-js-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-js-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-js-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-js-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-js-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-js-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-js-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-js-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/homepage.js */ \"./src/modules/homepage.js\");\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _modules_modalClose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modalClose.js */ \"./src/modules/modalClose.js\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', async () => {\n  await (0,_modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__.movieList)();\n  const cardContainer = document.querySelector('.card-container');\n\n  cardContainer.addEventListener('click', async (event) => {\n    if (event.target.matches('.comment-button')) {\n      const movieCard = event.target.closest('.movie-cards');\n      (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(movieCard);\n    }\n  });\n  (0,_modules_modalClose_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\ndocument.addEventListener('DOMContentLoaded', async () => {\n  await (0,_modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__.movieList)();\n  const xButton = document.getElementById('x-button');\n  xButton.addEventListener('click', async () => {\n    (0,_modules_modalClose_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  });\n});\n\n\n//# sourceURL=webpack://capstone-js-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createApp = async () => {\n  const id = 'zY21DTL0BIHB4tcz601H';\n  return id;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createApp);\n\n\n//# sourceURL=webpack://capstone-js-project/./src/modules/app.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"giveComments\": () => (/* binding */ giveComments)\n/* harmony export */ });\n/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ \"./src/modules/url.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ \"./src/modules/app.js\");\n\n\n\nconst getComments = async (movieId) => {\n  const appId = await (0,_app_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  try {\n    const response = await fetch(\n      `${_url_js__WEBPACK_IMPORTED_MODULE_0__.capstoneApiURL}/${appId}/comments?item_id=${movieId}`,\n      {\n        method: 'GET',\n      },\n    );\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    throw new Error('Cannot fetch comments.');\n  }\n};\n\nconst giveComments = async ({ movieId, name, comments }) => {\n  const appId = await (0,_app_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  console.log(`movieid: ${movieId}:Name:${name}:Comments:${comments}`);\n  const response = await fetch(`${_url_js__WEBPACK_IMPORTED_MODULE_0__.capstoneApiURL}/${appId}/comments`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: movieId,\n      username: name,\n      comment: comments,\n    }),\n  });\n  const data = await response.json();\n  return data;\n};\n\n\n//# sourceURL=webpack://capstone-js-project/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/createComment.js":
/*!**************************************!*\
  !*** ./src/modules/createComment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createCommentElements = (comments) => {\n  const commentElements = [];\n  const numComments = Array.isArray(comments) ? comments.length : 0;\n\n  const commentRow = document.createElement('li');\n  commentRow.textContent = `Comments(${numComments})`;\n  commentElements.push(commentRow);\n\n  if (Array.isArray(comments)) {\n    comments.forEach((comment) => {\n      const commentData = document.createElement('li');\n      commentData.textContent = `${comment.creation_date} ${comment.username}: ${comment.comment}`;\n      commentElements.push(commentData);\n    });\n  }\n\n  return commentElements;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCommentElements);\n\n\n//# sourceURL=webpack://capstone-js-project/./src/modules/createComment.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"movieApi\": () => (/* binding */ movieApi),\n/* harmony export */   \"movieList\": () => (/* binding */ movieList)\n/* harmony export */ });\n/* harmony import */ var _likeItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeItems.js */ \"./src/modules/likeItems.js\");\n/* harmony import */ var _itemCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemCounter.js */ \"./src/modules/itemCounter.js\");\n\n\n\nconst movieApi = async () => {\n  const fetchResult = await fetch('https://api.tvmaze.com/shows');\n  const ShowResult = await fetchResult.json();\n  const movies = ShowResult.slice(36, 52);\n  return movies;\n};\nmovieApi();\nconst movieCount = document.querySelector('.item-count');\n\nconst movieList = async () => {\n  const allMovies = await movieApi();\n  allMovies.forEach((card) => {\n    const CardContainer = document.querySelector('.card-container');\n    const cardUL = document.createElement('ul');\n    const cardLI = document.createElement('li');\n    cardLI.className = 'movie-cards';\n    cardLI.innerHTML = `<div class=\"cards\" id=${card.id}>\n                          <img src=${card.image.original} alt=${card.name} class=\"movie-img\">\n                        </div>\n                        <a href=\"${card.officialSite}\" class=\"movie-title\" data-id=${card.id}>${card.name}</a>\n                        <div class=\"movie-info\">\n                          <i class=\"fa fa-heart like-count like-btn\" id =\"lik\"aria-hidden=\"true\"></i> <p> likes</p>\n                        </div>\n                        <button class=\"comment-button\" id=\"${card.id}\" data-target=\"#popup-wrapper\">Comments</button>`;\n\n    cardUL.appendChild(cardLI);\n    CardContainer.appendChild(cardUL);\n  });\n  (0,_likeItems_js__WEBPACK_IMPORTED_MODULE_0__.getnumberofLikes)();\n  // interactLikeButton();\n  (0,_itemCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(allMovies, movieCount);\n};\n\n\n\n\n//# sourceURL=webpack://capstone-js-project/./src/modules/homepage.js?");

/***/ }),

/***/ "./src/modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemsCounter = (data, link) => {\n  link.innerHTML = `Movies(${data.length})`;\n  return data.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsCounter);\n\n\n//# sourceURL=webpack://capstone-js-project/./src/modules/itemCounter.js?");

/***/ }),

/***/ "./src/modules/likeItems.js":
/*!**********************************!*\
  !*** ./src/modules/likeItems.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getnumberofLikes\": () => (/* binding */ getnumberofLikes),\n/* harmony export */   \"interactLikeButton\": () => (/* binding */ interactLikeButton)\n/* harmony export */ });\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ \"./src/modules/homepage.js\");\n\n\nconst url =\n  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ilWLjX7DiufqJ1ygUhcb/likes';\n\nconst getnumberofLikes = async () => {\n  const response = await fetch(url);\n  const json = await response.json();\n  return json;\n};\n\nconst updateLikeCount = (cards, likeCounts, json) => {\n  cards.forEach((card, index) => {\n    const likeCount = json.find((item) => item.item_id === card.id)?.likes || 0;\n    likeCounts[index].textContent = likeCount;\n  });\n};\n\nconst interactLikeButton = async () => {\n  const cards = document.querySelectorAll('.cards');\n  const likeBtns = document.querySelectorAll('.like-btn');\n  const likeCounts = document.querySelectorAll('.like-count');\n  const json = await getnumberofLikes();\n  updateLikeCount(cards, likeCounts, json);\n  likeBtns.forEach((btn, index) => {\n    btn.addEventListener('click', async () => {\n      const response = await fetch(url, {\n        method: 'POST',\n        body: JSON.stringify({ item_id: cards[index].id }),\n        headers: { 'Content-Type': 'application/json' },\n      });\n      if (response.ok) {\n        json[index].likes += 1;\n        updateLikeCount(cards, likeCounts, json);\n        (0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.movieList)();\n      }\n    });\n  });\n};\n\n\n\n\n//# sourceURL=webpack://capstone-js-project/./src/modules/likeItems.js?");

/***/ }),

/***/ "./src/modules/modalClose.js":
/*!***********************************!*\
  !*** ./src/modules/modalClose.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalClose = () => {\n  const modal = document.querySelector('#popup-wrapper');\n  modal.style.display = 'none';\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalClose);\n\n\n//# sourceURL=webpack://capstone-js-project/./src/modules/modalClose.js?");

/***/ }),

/***/ "./src/modules/modalShow.js":
/*!**********************************!*\
  !*** ./src/modules/modalShow.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n/* harmony import */ var _createComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createComment.js */ \"./src/modules/createComment.js\");\n\n\n\nconst modalShow = async (movieId, load) => {\n  if (!load) {\n    const commentTable = document.querySelector('#table-body');\n    commentTable.innerHTML = '';\n    const comments = await (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(movieId);\n    const commentElements = (0,_createComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(comments);\n    commentElements.forEach((element) => commentTable.appendChild(element));\n    load = true;\n  }\n  const modal = document.querySelector('#popup-wrapper');\n  const movieTitle = modal.querySelector('.movie-name');\n  movieTitle.dataset.id = movieId;\n  modal.style.display = 'block';\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalShow);\n\n\n//# sourceURL=webpack://capstone-js-project/./src/modules/modalShow.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _show_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.js */ \"./src/modules/show.js\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n/* harmony import */ var _modalShow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalShow.js */ \"./src/modules/modalShow.js\");\n\n\n\n\nconst popup = async (movieCard) => {\n  const movieTitle = movieCard.querySelector('.movie-title');\n  const movieImgSrc = movieCard.querySelector('.movie-img');\n  const modal = document.querySelector('#popup-wrapper');\n  const movieId = movieTitle.dataset.id;\n  const data = await (0,_show_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(movieId);\n  // // get past comments already submitted\n  const popUpBtn = modal.querySelector('#submit-button');\n  const commentForm = modal.querySelector('#comment-form');\n  const commentTable = modal.querySelector('#table-body');\n\n  modal.querySelector('.summary').innerHTML = data.summary;\n  modal.querySelector('.movie-name').textContent = movieTitle.textContent;\n  modal.querySelector('.movie-image').src = movieImgSrc.src;\n\n  // Add a flag to track whether comments have already been loaded\n  const load = false;\n\n  // listener for creating new comments\n  popUpBtn.addEventListener('click', async (event) => {\n    event.preventDefault();\n    const name = modal.querySelector('#username').value;\n    const comments = modal.querySelector('#insights').value;\n    const movieTitle = modal.querySelector('.movie-name');\n    const movieId = movieTitle.dataset.id;\n    if (name !== '' || comments !== '') {\n      (0,_comments_js__WEBPACK_IMPORTED_MODULE_1__.giveComments)({ movieId, name, comments });\n      const newCommentRow = document.createElement('li');\n      newCommentRow.textContent = `${new Date()\n        .toISOString()\n        .slice(0, 10)} ${name}: ${comments}`;\n      commentTable.appendChild(newCommentRow);\n      commentForm.reset();\n    }\n  });\n\n  // Call loadComments when the modal is shown\n  (0,_modalShow_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(movieId, load);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);\n\n\n//# sourceURL=webpack://capstone-js-project/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/show.js":
/*!*****************************!*\
  !*** ./src/modules/show.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getShowById = async (id) => {\n  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);\n  const data = await response.json();\n  return data;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShowById);\n\n\n//# sourceURL=webpack://capstone-js-project/./src/modules/show.js?");

/***/ }),

/***/ "./src/modules/url.js":
/*!****************************!*\
  !*** ./src/modules/url.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"capstoneApiURL\": () => (/* binding */ capstoneApiURL),\n/* harmony export */   \"moviesURL\": () => (/* binding */ moviesURL)\n/* harmony export */ });\nconst capstoneApiURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';\n\nconst moviesURL = 'https://api.tvmaze.com/shows/';\n\n\n//# sourceURL=webpack://capstone-js-project/./src/modules/url.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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