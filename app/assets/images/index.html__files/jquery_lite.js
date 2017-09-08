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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class DOMNodeCollection {
  constructor(htmlElements) {
    this.els = htmlElements;

  }

  //grabs the first element
  //if an argument is given that argument replaces all children of the parent
  //if no argument is given it returns all children (innerHtml)
  html(str) {
    if (str !== undefined) {
      this.els.forEach((el) => {
        //children fo the element exluding the element itself
        el.innerHTML = str;
      });
    } else {
      return this.els[0].innerHTML;
    }
  }

  empty() {
    this.html("");
  }

  append (newElement) {
    if (newElement instanceof DOMNodeCollection) {
      newElement.els.forEach((newEl) => {
        this.els.forEach((el) => {

          el.innerHTML += newEl.outerHTML;
        });
      });
      newElement.remove();
    } else if (typeof(newElement) === "string") {

      this.els.forEach((el) => {

        el.innerHTML += newElement;
      });
    } else if (newElement instanceof HTMLElement) {
      this.els.forEach((el) => {

        el.innerHTML += newElement.outerHTML;
      });
    }
  }

  remove() {
    this.els.forEach( (el)=> {
      el.outerHTML = "";
    });
  }

  attr(attributeName, attributeValue) {
    if (attributeValue === undefined) {
      const el = this.els[0];
      return el[attributeName];
    } else {
      this.els.forEach((el) => {
        el[attributeName] = attributeValue;
      });
    }
  }

  addClass(className) {
    this.els.forEach((el)=>{
      let classes = el.className.split(" ");
      if (!classes.includes(className)) {
        el.className += " " + className;
      }
    });
  }

  removeClass(className) {
    this.els.forEach((el)=>{
      let classes = el.className.split(" ");
      if (classes.includes(className)) {
        let idx = classes.indexOf(className);
        classes.splice(idx,1);
        el.className = classes.join(" ");
      }
    });
  }

  removeAllClasses() {
    this.els.forEach((el)=>{
      el.className = "";
    });
  }

  children() {
    let childrenArr = [];
    // if (selector !== undefined){
    //   this.els.forEach(el => {
    //     const tempChildren = el.querySelectorAll(selector);
    //     for (let i = 0; i < tempChildren.length; i++) {
    //       childrenArr.push(tempChildren[i]);
    //     }
    //   });
    // } else {
      this.els.forEach(el => {
        let tempChildren = el.children;
        for (let i = 0; i < tempChildren.length; i++) {
          childrenArr.push(tempChildren[i]);
        }
      });
    // }

    return new DOMNodeCollection(childrenArr);
  }

  parent() {
    const parentArr = [];
    this.els.forEach(el =>{
      parentArr.push(el.parentElement);
    });
    return new DOMNodeCollection(parentArr);
  }

  find(selector) {
    let selected = [];
    this.els.forEach(el=>{
      selected.concat(Array.from(el.querySelectorAll(selector)));
    });
    return new DOMNodeCollection(selected);
  }

  on(eventName, callback) {
    this.els.forEach(node => {
      node.addEventListener(eventName, callback);
      const eventKey = `DOMinoEvents-${eventName}`;
      if (typeof node[eventKey] === "undefined") {
        node[eventKey] = [];
      }

      node[eventKey].push(callback);
    });
  }

  off(eventName) {
    this.els.forEach(node => {
      const eventKey = `DOMinoEvents-${eventName}`;
      if (node[eventKey]) {
        node[eventKey].forEach(callback => {
          node.removeEventListener(eventName, callback);
        });
      }
      node[eventKey] = [];
    });
  }

}//class end
/* harmony default export */ __webpack_exports__["a"] = (DOMNodeCollection);
// module.exports = DOMNodeCollection;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_node_collection_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todos_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stylehandler_js__ = __webpack_require__(3);





function $l (selector) {
  let els;
  const array = [];
  const funcs = [];

  if (typeof(selector) === "string") {
    //find all nodes with this selector
    //string selectors are CSS selectors
    els = document.querySelectorAll(selector);
    //returns an array like object
    for (var i = 0; i < els.length; i++) {
    //convert to a real array object
      array.push(els[i]);
    }
    return new __WEBPACK_IMPORTED_MODULE_0__dom_node_collection_js__["a" /* default */](array);

  } else if (selector instanceof HTMLElement) {
      els = [selector];
      return new __WEBPACK_IMPORTED_MODULE_0__dom_node_collection_js__["a" /* default */](els);
  } else if (selector instanceof Function) {
      funcs.push(selector);
  }

  document.addEventListener("DOMContentLoaded", e => {
    funcs.forEach(func => {
      func();
    });
  });
}

//WINDO TEST
window.$l = $l;

window.document.addEventListener("DOMContentLoaded", e => {
  let  submitTodoButton = $l('#submit-todo');
  let styleHandler = $l("#style-handler");
  submitTodoButton.on('click', (e) => {
    e.preventDefault();

    let titleValue = $l('#todo-input-title').els[0].value;
    let bodyValue = $l('#todo-textarea-body').els[0].value;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__todos_js__["a" /* createTodoListItem */])(titleValue, bodyValue);
    $l('#todo-input-title').els[0].value="";
    $l('#todo-textarea-body').els[0].value="";
  });
  styleHandler.on('change', (e) => {
    e.preventDefault();
    let value = $l('#style-handler').els[0].value;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__stylehandler_js__["a" /* handleStyle */])(value);
  });
});


window.$l.extend = (...args) => {
  args.slice(1).forEach(obj => {
    Object.keys(obj).forEach(k => {
      args[0][k] = obj[k];
    });
  });
  return args[0];
};

window.$l.ajax = (options) => {
  let defaultOpts = {
    method: 'GET',
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    data: {},
    url: "http://api.giphy.com/v1/gifs/search?q=food&api_key=068e61e473a84c9698874654a0a581f3&limit=5",
    success: data => {
      console.log("Retrieved Data");
      console.log(data);
    },
    error: err => {
      console.error("An error occurred.");
    }
  };

  $l.extend(defaultOpts, options);

  const xhr = new XMLHttpRequest();
  xhr.open(defaultOpts.method, defaultOpts.url);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      defaultOpts.success();
    } else {
      defaultOpts.error();
    }
    // console.log(xhr.status);
    // console.log(xhr.reponseType);
    // console.log(xhr.response);
  };

  xhr.send(defaultOpts.data);
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const createTodoListItem = (titleValue, bodyValue) => {
  $l('#todo-list').append(
    `<li>
    <h2>${titleValue}</h2>
    <p>${bodyValue}</p>
    </li>`
  );
};
/* harmony export (immutable) */ __webpack_exports__["a"] = createTodoListItem;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const handleStyle = (value) => {

  function clearClassName() {
    $l("#todo-input-title").removeAllClasses();
    $l("#todo-textarea-body").removeAllClasses();
    $l("#submit-todo").removeAllClasses();
    $l("#form-container").removeAllClasses();
    $l("#main-container").removeAllClasses();
    $l("#todo-list").removeAllClasses();
  }

  if (value === "0" ){
    clearClassName();
  }
  if (value === "1" ){
    clearClassName();
    $l("#todo-input-title").addClass("text-input-style-1");
    $l("#todo-input-body").addClass("text-input-style-1");
  }
  if (value === "2" ){
    clearClassName();
    $l("#todo-input-title").addClass("text-input-style-1");
    $l("#todo-textarea-body").addClass("textarea-style");
    $l("#submit-todo").addClass("submit-button");
  }
  if (value === "3" ){
    clearClassName();
    $l("#form-container ").addClass("form-container");
    $l("#todo-textarea-body").addClass("textarea-style");
    $l("#todo-input-title").addClass("text-input-style-1");
    $l("#submit-todo").addClass("submit-button");
  }
  if (value === "4" ){
    clearClassName();
    $l("#form-container ").addClass("form-container");
    $l("#todo-textarea-body").addClass("textarea-style");
    $l("#todo-input-title").addClass("text-input-style-1");
    $l("#submit-todo").addClass("submit-button");
    $l("#todo-list").addClass("list-style");
    $l("#main-container").addClass("main-container");
  }
  if (value === "5" ){
    clearClassName();
    // $l("#todo-input").addClass("text-input-style-1");
  }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = handleStyle;



/***/ })
/******/ ]);