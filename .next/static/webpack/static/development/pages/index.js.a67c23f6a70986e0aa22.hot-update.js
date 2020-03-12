webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./redux/actions/counterActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/counterActions.js ***!
  \*****************************************/
/*! exports provided: INCREMENT_COUNTER, DECREMENT_COUNTER, incrementCounter, decrementCounter, changeName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_COUNTER", function() { return INCREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_COUNTER", function() { return DECREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementCounter", function() { return incrementCounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementCounter", function() { return decrementCounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeName", function() { return changeName; });
//Action Types
var INCREMENT_COUNTER = "INCREMENT_COUNTER";
var DECREMENT_COUNTER = "DECREMENT_COUNTER"; //Action Creator

var incrementCounter = function incrementCounter() {
  return {
    type: INCREMENT_COUNTER
  };
};
var decrementCounter = function decrementCounter() {
  return {
    type: DECREMENT_COUNTER
  };
};
var changeName = function changeName() {
  return {
    type: CHANGE_NAME
  };
};

/***/ })

})
//# sourceMappingURL=index.js.a67c23f6a70986e0aa22.hot-update.js.map