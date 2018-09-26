/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/client/client.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader!./src/client/client.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/client/Home.js":
/*!****************************!*\
  !*** ./src/client/Home.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName="/Users/bic_mac/Documents/JavascriptAround/apollo-server-rendering/react-piano-task/express-apollo-server/src/client/Home.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ "react");var _react2=_interopRequireDefault(_react);var _reactRedux=__webpack_require__(/*! react-redux */ "react-redux");var _store=__webpack_require__(/*! ./store */ "./src/client/store.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Home=function(_React$Component){_inherits(Home,_React$Component);function Home(){_classCallCheck(this,Home);return _possibleConstructorReturn(this,(Home.__proto__||Object.getPrototypeOf(Home)).apply(this,arguments));}_createClass(Home,[{key:"componentDidMount",value:function componentDidMount(){if(this.props.circuits.length<=0){this.props.fetchData();}}},{key:"render",value:function render(){var circuits=this.props.circuits;return _react2.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:16}},_react2.default.createElement("h2",{__source:{fileName:_jsxFileName,lineNumber:17}},"F1 2018 Season Calendar"),_react2.default.createElement("ul",{__source:{fileName:_jsxFileName,lineNumber:18}},circuits.map(function(_ref){var circuitId=_ref.circuitId,circuitName=_ref.circuitName,Location=_ref.Location;return _react2.default.createElement("li",{key:circuitId,__source:{fileName:_jsxFileName,lineNumber:20}},circuitName," - ",Location.locality,", ",Location.country);})));}}]);return Home;}(_react2.default.Component);Home.serverFetch=_store.fetchData;var mapStateToProps=function mapStateToProps(state){return{circuits:state.data};};var mapDispatchToProps={fetchData:_store.fetchData};exports.default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(Home);

/***/ }),

/***/ "./src/client/Layout.js":
/*!******************************!*\
  !*** ./src/client/Layout.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="/Users/bic_mac/Documents/JavascriptAround/apollo-server-rendering/react-piano-task/express-apollo-server/src/client/Layout.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ "react");var _react2=_interopRequireDefault(_react);var _reactRouterDom=__webpack_require__(/*! react-router-dom */ "react-router-dom");var _routes=__webpack_require__(/*! ./routes */ "./src/client/routes.js");var _routes2=_interopRequireDefault(_routes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Layout=function(_React$Component){_inherits(Layout,_React$Component);function Layout(){_classCallCheck(this,Layout);var _this=_possibleConstructorReturn(this,(Layout.__proto__||Object.getPrototypeOf(Layout)).call(this));_this.state={title:"Welcome to React SSR!"};return _this;}_createClass(Layout,[{key:"render",value:function render(){return _react2.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:15}},_react2.default.createElement("h1",{__source:{fileName:_jsxFileName,lineNumber:16}},this.state.title),_react2.default.createElement(_reactRouterDom.Switch,{__source:{fileName:_jsxFileName,lineNumber:17}},_routes2.default.map(function(route){return _react2.default.createElement(_reactRouterDom.Route,_extends({key:route.key},route,{__source:{fileName:_jsxFileName,lineNumber:18}}));})));}}]);return Layout;}(_react2.default.Component);exports.default=Layout;

/***/ }),

/***/ "./src/client/PianoApp.js":
/*!********************************!*\
  !*** ./src/client/PianoApp.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _jsxFileName='/Users/bic_mac/Documents/JavascriptAround/apollo-server-rendering/react-piano-task/express-apollo-server/src/client/PianoApp.js';var _react=__webpack_require__(/*! react */ "react");var _react2=_interopRequireDefault(_react);var _reactDom=__webpack_require__(/*! react-dom */ "react-dom");var _reactDom2=_interopRequireDefault(_reactDom);var _graphqlTag=__webpack_require__(/*! graphql-tag */ "graphql-tag");var _graphqlTag2=_interopRequireDefault(_graphqlTag);var _store=__webpack_require__(/*! ./store */ "./src/client/store.js");var _reactRouterDom=__webpack_require__(/*! react-router-dom */ "react-router-dom");var _routes=__webpack_require__(/*! ./routes */ "./src/client/routes.js");var _routes2=_interopRequireDefault(_routes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function Square(props){return _react2.default.createElement('button',{className:props.className,onClick:props.onClick,__source:{fileName:_jsxFileName,lineNumber:15}},props.value);}var KeyBoard=function(_React$Component){_inherits(KeyBoard,_React$Component);function KeyBoard(props){_classCallCheck(this,KeyBoard);var _this=_possibleConstructorReturn(this,(KeyBoard.__proto__||Object.getPrototypeOf(KeyBoard)).call(this,props));_this.state={squares:Array(12).fill(null),className:"square"};return _this;}_createClass(KeyBoard,[{key:'handleClick',value:function handleClick(i){var squares=this.state.squares.slice();squares[i]='X';console.log("handleClick !:"+i);this.setState({squares:squares});}},{key:'drawKey',value:function drawKey(i){if(i%2===0){if(i<=4)return"thinSquare";if(i>=8)return"square";}if(i%2!==0){if(i>=7){return"thinSquare";}if(i<=5)return"square";}return"square";}},{key:'renderKey',value:function renderKey(i){var _this2=this;return _react2.default.createElement(Square,{className:this.drawKey(i),value:this.state.squares[i],onClick:function onClick(){return _this2.handleClick(i);},__source:{fileName:_jsxFileName,lineNumber:95}});}},{key:'render',value:function render(){var rows=[];var length=++this.state.squares.length;console.log("PianoApp !:"+length);for(var i=1;i<length;++i){rows.push(this.renderKey(i));}return _react2.default.createElement('div',{className:'board-row',__source:{fileName:_jsxFileName,lineNumber:116}},rows);}}]);return KeyBoard;}(_react2.default.Component);var PianoApp=function(_React$Component2){_inherits(PianoApp,_React$Component2);function PianoApp(props){_classCallCheck(this,PianoApp);return _possibleConstructorReturn(this,(PianoApp.__proto__||Object.getPrototypeOf(PianoApp)).call(this,props));}_createClass(PianoApp,[{key:'render',value:function render(){return _react2.default.createElement('div',{className:'App-KeyBoard',__source:{fileName:_jsxFileName,lineNumber:170}},_react2.default.createElement(KeyBoard,{__source:{fileName:_jsxFileName,lineNumber:171}}));}}]);return PianoApp;}(_react2.default.Component);exports.default=PianoApp;

/***/ }),

/***/ "./src/client/api.js":
/*!***************************!*\
  !*** ./src/client/api.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.fetchCircuits=fetchCircuits;var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function fetchCircuits(){return(0,_isomorphicFetch2.default)("http://ergast.com/api/f1/2018/circuits.json").then(function(res){return res.json();}).then(function(res){return res.MRData.CircuitTable.Circuits;});}

/***/ }),

/***/ "./src/client/client.css":
/*!*******************************!*\
  !*** ./src/client/client.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader!./client.css */ "./node_modules/css-loader/index.js!./src/client/client.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/client/client.js":
/*!******************************!*\
  !*** ./src/client/client.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _jsxFileName='/Users/bic_mac/Documents/JavascriptAround/apollo-server-rendering/react-piano-task/express-apollo-server/src/client/client.js';var _templateObject=_taggedTemplateLiteral(['\n      {\n        rates(currency: "USD") {\n          currency\n        }\n      }\n    '],['\n      {\n        rates(currency: "USD") {\n          currency\n        }\n      }\n    ']),_templateObject2=_taggedTemplateLiteral(['\n      {\n        rates(currency: "USD") {\n          currency\n          rate\n        }\n      }\n    '],['\n      {\n        rates(currency: "USD") {\n          currency\n          rate\n        }\n      }\n    ']);var _react=__webpack_require__(/*! react */ "react");var _react2=_interopRequireDefault(_react);var _reactDom=__webpack_require__(/*! react-dom */ "react-dom");var _reactDom2=_interopRequireDefault(_reactDom);var _PianoApp=__webpack_require__(/*! ./PianoApp */ "./src/client/PianoApp.js");var _PianoApp2=_interopRequireDefault(_PianoApp);var _registerServiceWorker=__webpack_require__(/*! ./registerServiceWorker */ "./src/client/registerServiceWorker.js");var _registerServiceWorker2=_interopRequireDefault(_registerServiceWorker);var _redux=__webpack_require__(/*! redux */ "redux");var _reactRedux=__webpack_require__(/*! react-redux */ "react-redux");var _reactApollo=__webpack_require__(/*! react-apollo */ "react-apollo");var _graphqlTag=__webpack_require__(/*! graphql-tag */ "graphql-tag");var _graphqlTag2=_interopRequireDefault(_graphqlTag);var _apolloBoost=__webpack_require__(/*! apollo-boost */ "apollo-boost");var _apolloBoost2=_interopRequireDefault(_apolloBoost);var _Layout=__webpack_require__(/*! ./Layout */ "./src/client/Layout.js");var _Layout2=_interopRequireDefault(_Layout);var _reactRouterDom=__webpack_require__(/*! react-router-dom */ "react-router-dom");__webpack_require__(/*! ./client.css */ "./src/client/client.css");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var client=new _apolloBoost2.default({uri:"https://w5xlvm3vzz.lp.gql.zone/graphql"});client.query({query:(0,_graphqlTag2.default)(_templateObject)}).then(function(result){return console.log(result);});var ExchangeRates=function ExchangeRates(){return _react2.default.createElement(_reactApollo.Query,{query:(0,_graphqlTag2.default)(_templateObject2),__source:{fileName:_jsxFileName,lineNumber:37}},function(_ref){var loading=_ref.loading,error=_ref.error,data=_ref.data;if(loading)return _react2.default.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:48}},'Loading...');if(error)return _react2.default.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:49}},'Error :(');return data.rates.map(function(_ref2){var currency=_ref2.currency,rate=_ref2.rate;return _react2.default.createElement('div',{key:currency,__source:{fileName:_jsxFileName,lineNumber:52}},_react2.default.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:53}},currency+': '+rate));});});};var App=function App(){return _react2.default.createElement(_reactApollo.ApolloProvider,{client:client,__source:{fileName:_jsxFileName,lineNumber:61}},_react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:62}},_react2.default.createElement('h2',{__source:{fileName:_jsxFileName,lineNumber:63}},'My first Apollo app \uD83D\uDE80'),_react2.default.createElement(ExchangeRates,{__source:{fileName:_jsxFileName,lineNumber:64}})));};var store=(0,_redux.createStore)(window.REDUX_DATA);var providedApp=_react2.default.createElement(_reactRedux.Provider,{store:store,__source:{fileName:_jsxFileName,lineNumber:71}},_react2.default.createElement(_reactRouterDom.BrowserRouter,{__source:{fileName:_jsxFileName,lineNumber:72}},_react2.default.createElement(_PianoApp2.default,{__source:{fileName:_jsxFileName,lineNumber:73}})));_reactDom2.default.hydrate(providedApp,document.getElementById('root'));

/***/ }),

/***/ "./src/client/registerServiceWorker.js":
/*!*********************************************!*\
  !*** ./src/client/registerServiceWorker.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=register;exports.unregister=unregister;var isLocalhost=Boolean(window.location.hostname==='localhost'||window.location.hostname==='[::1]'||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function register(){if(false){ var publicUrl; }}function registerValidSW(swUrl){navigator.serviceWorker.register(swUrl).then(function(registration){registration.onupdatefound=function(){var installingWorker=registration.installing;installingWorker.onstatechange=function(){if(installingWorker.state==='installed'){if(navigator.serviceWorker.controller){console.log('New content is available; please refresh.');}else{console.log('Content is cached for offline use.');}}};};}).catch(function(error){console.error('Error during service worker registration:',error);});}function checkValidServiceWorker(swUrl){fetch(swUrl).then(function(response){if(response.status===404||response.headers.get('content-type').indexOf('javascript')===-1){navigator.serviceWorker.ready.then(function(registration){registration.unregister().then(function(){window.location.reload();});});}else{registerValidSW(swUrl);}}).catch(function(){console.log('No internet connection found. App is running in offline mode.');});}function unregister(){if('serviceWorker'in navigator){navigator.serviceWorker.ready.then(function(registration){registration.unregister();});}}

/***/ }),

/***/ "./src/client/routes.js":
/*!******************************!*\
  !*** ./src/client/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _Home=__webpack_require__(/*! ./Home */ "./src/client/Home.js");var _Home2=_interopRequireDefault(_Home);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=[{path:"/",component:_Home2.default,exact:true}];

/***/ }),

/***/ "./src/client/store.js":
/*!*****************************!*\
  !*** ./src/client/store.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.fetchData=exports.initializeSession=undefined;var _redux=__webpack_require__(/*! redux */ "redux");var _reduxThunk=__webpack_require__(/*! redux-thunk */ "redux-thunk");var _reduxThunk2=_interopRequireDefault(_reduxThunk);var _api=__webpack_require__(/*! ./api */ "./src/client/api.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var initializeSession=exports.initializeSession=function initializeSession(){return{type:"INITIALIZE_SESSION"};};var storeData=function storeData(data){return{type:"STORE_DATA",data:data};};var fetchData=exports.fetchData=function fetchData(){return function(dispatch){return(0,_api.fetchCircuits)().then(function(res){return dispatch(storeData(res));});};};var sessionReducer=function sessionReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;var action=arguments[1];switch(action.type){case"INITIALIZE_SESSION":return true;default:return state;}};var dataReducer=function dataReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var action=arguments[1];switch(action.type){case"STORE_DATA":return action.data;default:return state;}};var reducer=(0,_redux.combineReducers)({loggedIn:sessionReducer,data:dataReducer});exports.default=function(initialState){return(0,_redux.createStore)(reducer,initialState,(0,_redux.applyMiddleware)(_reduxThunk2.default));};

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map