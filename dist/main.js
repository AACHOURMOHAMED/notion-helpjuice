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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*\n! tailwindcss v3.4.0 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured \\`sans\\` font-family by default.\n5. Use the user's configured \\`sans\\` font-feature-settings by default.\n6. Use the user's configured \\`sans\\` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from \\`html\\` so users can set them as a class directly on the \\`html\\` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured \\`mono\\` font-family by default.\n2. Use the user's configured \\`mono\\` font-feature-settings by default.\n3. Use the user's configured \\`mono\\` font-variation-settings by default.\n4. Correct the odd \\`em\\` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent \\`sub\\` and \\`sup\\` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional \\`:invalid\\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to \\`inherit\\` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements \\`display: block\\` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add \\`vertical-align: middle\\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.m-auto {\n  margin: auto;\n}\n.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.mt-\\\\[5rem\\\\] {\n  margin-top: 5rem;\n}\n.flex {\n  display: flex;\n}\n.max-w-screen-md {\n  max-width: 868px;\n}\n.items-center {\n  align-items: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.border-r {\n  border-right-width: 1px;\n}\n.border-gray-400 {\n  --tw-border-opacity: 1;\n  border-color: rgba(156, 163, 175, 1);\n  border-color: rgba(156, 163, 175, var(--tw-border-opacity));\n}\n.pr-4 {\n  padding-right: 1rem;\n}\n.text-heading1-bold {\n  font-size: 36px;\n  line-height: 140%;\n  font-weight: 700;\n}\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgba(107, 114, 128, 1);\n  color: rgba(107, 114, 128, var(--tw-text-opacity));\n}\n.text-title-500 {\n  --tw-text-opacity: 1;\n  color: rgba(53, 53, 61, 1);\n  color: rgba(53, 53, 61, var(--tw-text-opacity));\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  font-family: \"Poppins\", sans-serif;\n  background-color: #f5f5f5;\n}\n\nnav img {\n  width: 25px;\n  height: 25px;\n}\n\n.input {\n  max-width: 100%;\n  width: 100%;\n  white-space: pre-wrap;\n  padding: 0.5rem 0;\n  word-break: break-word;\n  caret-color: #37352f;\n  color: #222;\n  cursor: text;\n  position: relative;\n}\n\n.input:focus {\n  outline: none;\n}\n\n[contenteditable]:empty::before {\n  content: attr(placeholder);\n  color: rgba(55,53,47,0.50196);\n}\n\n.subtitle {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #6e747f;\n  margin-bottom: 0.5rem;\n}\n\n.popup {\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 24rem;\n  height: 25rem;\n  background-color: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 5px;\n  box-shadow: 0 20px 20px 20px rgba(158, 158, 158, 0.09);\n  overflow-y: auto;\n  padding: 0;\n}\n\n.popup::-webkit-scrollbar {\n  width: 0.5rem;\n}\n\n.popup::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n.popup::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n.popup::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n.popup__header {\n  padding: 1rem 0.5rem;\n  font-size: 1rem;\n  font-weight: 600;\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.popup__list {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.popup__item {\n  background: none;\n  border: none;\n  outline: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.popup__item:hover,\n.popup__item:focus,\n.popup__item:active {\n  background-color: #f5f5f5;\n  outline: none;\n}\n\n.popup__item div {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.popup__item p {\n  color: #6e747f;\n  font-size: 0.8rem;\n  margin-top: 0.2rem;\n}\n\n.h1 {\n  font-size: 2rem;\n  font-weight: 700;\n}\n\n.h2 {\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n\n.h3 {\n  font-size: 1.25rem;\n  font-weight: 500;\n}\n\n.h4 {\n  font-size: 1.125rem;\n  font-weight: 500;\n}\n\n.h5 {\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.h6 {\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n\n.p {\n  font-size: 1rem;\n  font-weight: 400;\n}\n\n.hidden {\n  display: none;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://notion-helpjuice/./src/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://notion-helpjuice/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://notion-helpjuice/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://notion-helpjuice/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://notion-helpjuice/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://notion-helpjuice/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://notion-helpjuice/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://notion-helpjuice/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://notion-helpjuice/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://notion-helpjuice/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_blockContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/blockContainer.js */ \"./src/modules/blockContainer.js\");\n\n\n\n(0,_modules_blockContainer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://notion-helpjuice/./src/index.js?");

/***/ }),

/***/ "./src/modules/addInput.js":
/*!*********************************!*\
  !*** ./src/modules/addInput.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createNewInput = (currentId) => {\n  const newInput = document.createElement('div');\n  newInput.classList.add('input');\n  newInput.setAttribute('contenteditable', true);\n  newInput.setAttribute('spellcheck', true);\n  newInput.setAttribute('placeholder', \"Type '/' for blocks\");\n  newInput.setAttribute('id', `${Number(currentId) + 1}`);\n\n  return newInput;\n};\n\nconst addInput = (currentInput, currentId) => {\n  const newInput = createNewInput(currentId);\n\n  currentInput.insertAdjacentElement('afterend', newInput);\n  newInput.focus();\n\n  return newInput;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addInput);\n\n\n//# sourceURL=webpack://notion-helpjuice/./src/modules/addInput.js?");

/***/ }),

/***/ "./src/modules/blockContainer.js":
/*!***************************************!*\
  !*** ./src/modules/blockContainer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _blocksMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocksMenu.js */ \"./src/modules/blocksMenu.js\");\n/* harmony import */ var _addInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addInput.js */ \"./src/modules/addInput.js\");\n/* harmony import */ var _selectBlock_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectBlock.js */ \"./src/modules/selectBlock.js\");\n/* harmony import */ var _filterBlocksMenu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filterBlocksMenu.js */ \"./src/modules/filterBlocksMenu.js\");\n/* harmony import */ var _createBlockItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createBlockItem.js */ \"./src/modules/createBlockItem.js\");\n\n\n\n\n\n\n// Function to handle input events\nconst handleInput = (input) => {\n  // If the input starts with '/', perform block-related actions\n  if (input.textContent[0] === \"/\") {\n    (0,_blocksMenu_js__WEBPACK_IMPORTED_MODULE_0__.createMenuBlock)(input);\n    (0,_selectBlock_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(input);\n    (0,_filterBlocksMenu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(input.textContent);\n  } else {\n    (0,_blocksMenu_js__WEBPACK_IMPORTED_MODULE_0__.removeMenuBlock)();\n  }\n};\n\n// Function to handle keydown events\nconst handleKeyDown = (e, input) => {\n  const text = input.textContent;\n\n  // If the user presses 'Enter':\n  if (e.key === \"Enter\") {\n    e.preventDefault();\n\n    // If the input starts with '/1' or '/2', create block items\n    if (text[0] === \"/\" && text[1] === \"1\") (0,_createBlockItem_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(input, \"h1\");\n    if (text[0] === \"/\" && text[1] === \"2\") (0,_createBlockItem_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(input, \"h2\");\n\n    // If the input is empty, remove the placeholder\n    if (text === \"\") input.removeAttribute(\"placeholder\");\n\n    // Add a new input and attach event listeners to it\n    const newInput = (0,_addInput_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(input, input.id);\n    blockContainer(newInput);\n  }\n\n  // If the user presses 'Backspace' and the input is empty, remove it\n  if (\n    e.key === \"Backspace\" &&\n    input.textContent.length === 0 &&\n    input.id !== \"1\"\n  ) {\n    const previousInput = input.previousElementSibling;\n    input.remove();\n    previousInput.setAttribute(\"placeholder\", \"Type '/' for blocks\");\n\n    // Add space to the previous input to ensure the cursor is at the end\n    previousInput.textContent += \" \";\n    previousInput.focus();\n    const range = document.createRange();\n    const sel = window.getSelection();\n    range.setStart(\n      previousInput.childNodes[0] || previousInput,\n      previousInput.textContent.length\n    );\n    sel.removeAllRanges();\n    sel.addRange(range);\n  }\n};\n\n// Main function for block container\nconst blockContainer = (input = document.getElementById(\"1\")) => {\n  // Event listener for input changes\n  input.addEventListener(\"input\", () => handleInput(input));\n\n  // Event listener for keydown events\n  input.addEventListener(\"keydown\", (e) => handleKeyDown(e, input));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blockContainer);\n\n\n//# sourceURL=webpack://notion-helpjuice/./src/modules/blockContainer.js?");

/***/ }),

/***/ "./src/modules/blocksMenu.js":
/*!***********************************!*\
  !*** ./src/modules/blocksMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuBlock: () => (/* binding */ createMenuBlock),\n/* harmony export */   removeMenuBlock: () => (/* binding */ removeMenuBlock)\n/* harmony export */ });\n/* harmony import */ var _menuItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItems.js */ \"./src/modules/menuItems.js\");\n/* harmony import */ var _createBlocks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createBlocks.js */ \"./src/modules/createBlocks.js\");\n\n\n\nlet isOpen = false;\nlet activeIndex = -1;\n\nconst createPopupElement = () => {\n  const popup = document.createElement('div');\n  popup.classList.add('popup');\n\n  const header = document.createElement('div');\n  header.classList.add('popup__header');\n  header.innerHTML = `\n    <h4>Add blocks</h4>\n    <p class=\"subtitle\">Keep typing to filter, or escape to exit</p>\n  `;\n\n  const list = document.createElement('div');\n  list.classList.add('popup__list');\n  list.setAttribute('role', 'listitem');\n\n  _menuItems_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(option => {\n    const block = (0,_createBlocks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(option);\n    list.appendChild(block); \n  });\n\n  popup.appendChild(header);\n  popup.appendChild(list);\n\n  return popup;\n};\n\nconst attachPopupToInput = (currentInput, popup) => {\n  currentInput.parentNode.appendChild(popup); // Append the popup to the parent of the input\n  isOpen = true;\n};\n\nconst createMenuBlock = (currentInput) => {\n  if (isOpen) return;\n\n  const popupElement = createPopupElement();\n  attachPopupToInput(currentInput, popupElement);\n};\n\nconst removeMenuBlock = () => {\n  const popup = document.querySelector(\".popup\");\n  if (popup) {\n    popup.remove();\n    isOpen = false;\n  }\n};\n\nconst handleKeyEvents = (e) => {\n  const popOptions = [...document.querySelectorAll(\".popup__item\")];\n  if (!isOpen) return;\n\n  if (e.key === \"ArrowDown\" && activeIndex < popOptions.length - 1) {\n    activeIndex += 1;\n    popOptions[activeIndex].focus();\n  }\n\n  if (e.key === \"ArrowUp\" && activeIndex > 0) {\n    activeIndex -= 1;\n    popOptions[activeIndex].focus();\n  }\n\n  if (e.key === \"Escape\" || (e.key === \" \" && e.repeat)) removeMenuBlock();\n};\n\nconst handleDocumentClick = (e) => {\n  if (e.target.closest(\".popup\")) return;\n  removeMenuBlock();\n};\n\ndocument.addEventListener(\"keydown\", handleKeyEvents);\ndocument.addEventListener(\"click\", handleDocumentClick);\n\n\n\n\n//# sourceURL=webpack://notion-helpjuice/./src/modules/blocksMenu.js?");

/***/ }),

/***/ "./src/modules/createBlockItem.js":
/*!****************************************!*\
  !*** ./src/modules/createBlockItem.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _blocksMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocksMenu.js */ \"./src/modules/blocksMenu.js\");\n\n\nconst createBlockItem = (input, tagType) => {\n  input.className = \"input\";\n  input.classList.add(tagType);\n  input.setAttribute(\"contenteditable\", true);\n  input.setAttribute(\"spellcheck\", true);\n\n  const textContent = input.textContent.slice(2).trim();\n  input.textContent = textContent;\n\n  if (tagType === \"p\") {\n    input.setAttribute(\"placeholder\", \"Paragraph\");\n  } else if (tagType === \"ul\") {\n    input.setAttribute(\"placeholder\", \"List Item\");\n    input.innerHTML = \"&#8226; \";\n  } else if (tagType === \"img\") {\n    const fileInput = document.createElement(\"input\");\n    fileInput.type = \"file\";\n    fileInput.accept = \"image/*\";\n\n    fileInput.addEventListener(\"change\", (event) => {\n      const file = event.target.files[0];\n      if (file) {\n        const reader = new FileReader();\n        reader.onload = function (e) {\n          input.innerHTML = `<img src=\"${e.target.result}\" alt=\"Uploaded Image\">`;\n        };\n        reader.readAsDataURL(file);\n      }\n    });\n\n    input.appendChild(fileInput);\n  } else if (tagType === \"blockquote\") {\n    input.setAttribute(\"placeholder\", \"Quoted text\");\n  } else {\n    input.setAttribute(\"placeholder\", `Heading ${tagType}`);\n  }\n\n  input.parentNode.insertBefore(input, input.nextSibling);\n  input.focus();\n  (0,_blocksMenu_js__WEBPACK_IMPORTED_MODULE_0__.removeMenuBlock)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBlockItem);\n\n\n//# sourceURL=webpack://notion-helpjuice/./src/modules/createBlockItem.js?");

/***/ }),

/***/ "./src/modules/createBlocks.js":
/*!*************************************!*\
  !*** ./src/modules/createBlocks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_text_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/text.svg */ \"./src/images/text.svg\");\n\n\nconst createBlocks = (option) => {\n  const { title, description } = option;\n\n  const button = document.createElement('button');\n  button.classList.add('popup__item');\n  button.dataset.type = option.type;\n\n  const img = document.createElement('img');\n  img.src = _images_text_svg__WEBPACK_IMPORTED_MODULE_0__;\n  img.alt = 'heading icon';\n  img.width = '30';\n\n  const contentDiv = document.createElement('div');\n  \n  const heading = document.createElement('h4');\n  heading.textContent = title;\n\n  const para = document.createElement('p');\n  para.textContent = description;\n\n  contentDiv.appendChild(heading);\n  contentDiv.appendChild(para);\n\n  button.appendChild(img);\n  button.appendChild(contentDiv);\n\n  return button;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBlocks);\n\n\n\n//# sourceURL=webpack://notion-helpjuice/./src/modules/createBlocks.js?");

/***/ }),

/***/ "./src/modules/filterBlocksMenu.js":
/*!*****************************************!*\
  !*** ./src/modules/filterBlocksMenu.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst filterBlocksMenu = (searchInput) => {\n  const standardizedInput = searchInput\n    .slice(1)\n    .toLowerCase()\n    .replace(/\\s+/g, \"\");\n\n  const options = [...document.querySelectorAll(\".popup__item\")];\n  options.forEach((option) => {\n    const title = option.querySelector(\"h4\").textContent.toLowerCase().replace(/\\s+/g, \"\");\n\n    const standardTitle = title.includes(\"heading\")\n      ? \"heading\" + title.replace(/\\D/g, \"\")\n      : title;\n\n    if (standardTitle.includes(standardizedInput)) {\n      option.style.display = \"flex\";\n    } else {\n      option.style.display = \"none\";\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterBlocksMenu);\n\n\n//# sourceURL=webpack://notion-helpjuice/./src/modules/filterBlocksMenu.js?");

/***/ }),

/***/ "./src/modules/menuItems.js":
/*!**********************************!*\
  !*** ./src/modules/menuItems.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuItems = [\n  {\n    title: \"Heading 1\",\n    value: \"heading1\",\n    description: \"Large Section heading\",\n    type: \"h1\",\n  },\n  {\n    title: \"Heading 2\",\n    value: \"heading2\",\n    description: \"Medium Section heading\",\n    type: \"h2\",\n  },\n  {\n    title: \"Heading 3\",\n    value: \"heading3\",\n    description: \"Small Section heading\",\n    type: \"h3\",\n  },\n  {\n    title: \"Paragraph\",\n    value: \"paragraph\",\n    description: \"Text block\",\n    type: \"p\",\n  },\n  {\n    title: \"Image\",\n    value: \"image\",\n    description: \"Image block\",\n    type: \"img\",\n  },\n  {\n    title: \"Blockquote\",\n    value: \"blockquote\",\n    description: \"Quoted text\",\n    type: \"blockquote\",\n  },\n  {\n    title: \"List\",\n    value: \"list\",\n    description: \"Bulleted list\",\n    type: \"ul\",\n  },\n  {\n    title: \"Numbered List\",\n    value: \"numberedlist\",\n    description: \"Numbered list\",\n    type: \"ol\",\n  },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuItems);\n\n\n//# sourceURL=webpack://notion-helpjuice/./src/modules/menuItems.js?");

/***/ }),

/***/ "./src/modules/selectBlock.js":
/*!************************************!*\
  !*** ./src/modules/selectBlock.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createBlockItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBlockItem.js */ \"./src/modules/createBlockItem.js\");\n\n\nconst selectBlock = (input) => {\n  const options = document.querySelectorAll('.popup__item');\n  options.forEach((option) => {\n    option.addEventListener('click', () => {\n      const tagType = option.getAttribute('data-type');\n      (0,_createBlockItem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input, tagType);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectBlock);\n\n\n//# sourceURL=webpack://notion-helpjuice/./src/modules/selectBlock.js?");

/***/ }),

/***/ "./src/images/text.svg":
/*!*****************************!*\
  !*** ./src/images/text.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b094bdab9e888a8114ea.svg\";\n\n//# sourceURL=webpack://notion-helpjuice/./src/images/text.svg?");

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
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;