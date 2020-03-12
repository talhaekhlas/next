webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/actions/counterActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/counterActions.js ***!
  \*****************************************/
/*! exports provided: INCREMENT_COUNTER, DECREMENT_COUNTER, CHANGE_NAME, incrementCounter, decrementCounter, changeName, test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_COUNTER", function() { return INCREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_COUNTER", function() { return DECREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NAME", function() { return CHANGE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementCounter", function() { return incrementCounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementCounter", function() { return decrementCounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeName", function() { return changeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return test; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);

//Action Types
var INCREMENT_COUNTER = "INCREMENT_COUNTER";
var DECREMENT_COUNTER = "DECREMENT_COUNTER";
var CHANGE_NAME = "CHANGE_NAME"; //Action Creator

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
var test = function test() {
  return function _callee(dispatch, getState) {
    var data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = {
              message: 'module after dispatch',
              data: [{
                'name': 'List One',
                'id': 1,
                'project_id': 1
              }, {
                'name': 'List Two',
                'id': 2,
                'project_id': 1
              }, {
                'name': 'List Three',
                'id': 3,
                'project_id': 1
              }, {
                'name': 'List Four',
                'id': 4,
                'project_id': 1
              }, {
                'name': 'List Five',
                'id': 5,
                'project_id': 1
              }, {
                'name': 'List Six',
                'id': 6,
                'project_id': 1
              }]
            };
            dispatch({
              type: TEST,
              payload: data
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.12bf34c38c421e5f7448.hot-update.js.map