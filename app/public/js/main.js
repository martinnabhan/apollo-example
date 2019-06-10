(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./generated/types.tsx":
/*!*****************************!*\
  !*** ./generated/types.tsx ***!
  \*****************************/
/*! exports provided: UsersDocument, useUsersQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersDocument", function() { return UsersDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUsersQuery", function() { return useUsersQuery; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo-hooks */ "./node_modules/react-apollo-hooks/es/index.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query Users {\n    users {\n      id\n      email\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/** All built-in and custom scalars, mapped to their actual values */


var UsersDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());
function useUsersQuery(baseOptions) {
  return react_apollo_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"](UsersDocument, baseOptions);
}
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UsersDocument, "UsersDocument", "/Users/martin/Sites/apollo-test/app/generated/types.tsx");
  reactHotLoader.register(useUsersQuery, "useUsersQuery", "/Users/martin/Sites/apollo-test/app/generated/types.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/app/App.tsx":
/*!*************************!*\
  !*** ./src/app/App.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _generated_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../generated/types */ "./generated/types.tsx");
var _jsxFileName = "/Users/martin/Sites/apollo-test/app/src/app/App.tsx";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query Users {\n    users {\n      id\n      email\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var GET_USERS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());

var App = function App() {
  var _useUsersQuery = Object(_generated_types__WEBPACK_IMPORTED_MODULE_3__["useUsersQuery"])(),
      data = _useUsersQuery.data,
      error = _useUsersQuery.error,
      loading = _useUsersQuery.loading;

  var users = data && data.users;

  if (loading) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Loading...");
  }

  ;

  if (error) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Error! ", error.message);
  }

  ;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, users && users.map(function (user) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Id: ", user.id, ", Email: ", user.email);
  }));
};

var _default = App;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GET_USERS, "GET_USERS", "/Users/martin/Sites/apollo-test/app/src/app/App.tsx");
  reactHotLoader.register(App, "App", "/Users/martin/Sites/apollo-test/app/src/app/App.tsx");
  reactHotLoader.register(_default, "default", "/Users/martin/Sites/apollo-test/app/src/app/App.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/app/index.ts":
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/app/App.tsx");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();


var _default = _App__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/martin/Sites/apollo-test/app/src/app/index.ts");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var react_apollo_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo-hooks */ "./node_modules/react-apollo-hooks/es/index.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app */ "./src/app/index.ts");
var _jsxFileName = "/Users/martin/Sites/apollo-test/app/src/index.tsx";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();








var client = new apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloClient"]({
  cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"](),
  link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]({
    uri: 'http://localhost:4000/graphql'
  })
});
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo_hooks__WEBPACK_IMPORTED_MODULE_5__["ApolloProvider"], {
  client: client,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
})), document.querySelector('.App'));
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(client, "client", "/Users/martin/Sites/apollo-test/app/src/index.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./src/index.tsx whatwg-fetch ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.tsx */"./src/index.tsx");
module.exports = __webpack_require__(/*! whatwg-fetch */"./node_modules/whatwg-fetch/fetch.js");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9nZW5lcmF0ZWQvdHlwZXMudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsiVXNlcnNEb2N1bWVudCIsImdxbCIsInVzZVVzZXJzUXVlcnkiLCJiYXNlT3B0aW9ucyIsIlJlYWN0QXBvbGxvSG9va3MiLCJHRVRfVVNFUlMiLCJBcHAiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwidXNlcnMiLCJtZXNzYWdlIiwibWFwIiwidXNlciIsImlkIiwiZW1haWwiLCJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJsaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUE2Q0E7QUFFQTtBQUdPLElBQU1BLGFBQWEsR0FBR0Msa0RBQUgsbUJBQW5CO0FBU0EsU0FBU0MsYUFBVCxDQUNMQyxXQURLLEVBRUw7QUFDQSxTQUFPQywyREFBQSxDQUNMSixhQURLLEVBRUxHLFdBRkssQ0FBUDtBQUlEOzs7Ozs7Ozs7OzBCQWhCWUgsYTswQkFTR0UsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURoQjtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1HLFNBQVMsR0FBR0osa0RBQUgsbUJBQWY7O0FBU0EsSUFBTUssR0FBNEIsR0FBRyxTQUEvQkEsR0FBK0IsR0FBTTtBQUFBLHVCQUNSSixzRUFBYSxFQURMO0FBQUEsTUFDakNLLElBRGlDLGtCQUNqQ0EsSUFEaUM7QUFBQSxNQUMzQkMsS0FEMkIsa0JBQzNCQSxLQUQyQjtBQUFBLE1BQ3BCQyxPQURvQixrQkFDcEJBLE9BRG9COztBQUV6QyxNQUFNQyxLQUFLLEdBQUdILElBQUksSUFBSUEsSUFBSSxDQUFDRyxLQUEzQjs7QUFFQSxNQUFJRCxPQUFKLEVBQWE7QUFDWCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFQO0FBQ0Q7O0FBQUE7O0FBRUQsTUFBSUQsS0FBSixFQUFXO0FBQ1QsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBYUEsS0FBSyxDQUFDRyxPQUFuQixDQUFQO0FBQ0Q7O0FBQUE7QUFFRCxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELEtBQUssSUFBSUEsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLFdBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUUEsSUFBSSxDQUFDQyxFQUFiLGVBQTBCRCxJQUFJLENBQUNFLEtBQS9CLENBQUo7QUFBQSxHQUFkLENBRFosQ0FERjtBQUtELENBakJEOztlQW1CZVQsRztBQUFBOzs7Ozs7Ozs7OzBCQTVCVEQsUzswQkFTQUMsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmTjtlQUVlQSw0QztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1VLE1BQU0sR0FBRyxJQUFJQywwREFBSixDQUFpQjtBQUM5QkMsT0FBSyxFQUFFLElBQUlDLG1FQUFKLEVBRHVCO0FBRTlCQyxNQUFJLEVBQUUsSUFBSUMseURBQUosQ0FBYTtBQUNqQkMsT0FBRyxFQUFFO0FBRFksR0FBYjtBQUZ3QixDQUFqQixDQUFmO0FBT0FDLGdEQUFRLENBQUNDLE1BQVQsQ0FDRSwyREFBQyxpRUFBRDtBQUFnQixRQUFNLEVBQUVSLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsMkRBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixDQURGLEVBSUVTLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUpGOzs7Ozs7Ozs7OzBCQVBNVixNIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBNYXliZTxUPiA9IFQgfCBudWxsO1xuLyoqIEFsbCBidWlsdC1pbiBhbmQgY3VzdG9tIHNjYWxhcnMsIG1hcHBlZCB0byB0aGVpciBhY3R1YWwgdmFsdWVzICovXG5leHBvcnQgdHlwZSBTY2FsYXJzID0ge1xuICBJRDogc3RyaW5nO1xuICBTdHJpbmc6IHN0cmluZztcbiAgQm9vbGVhbjogYm9vbGVhbjtcbiAgSW50OiBudW1iZXI7XG4gIEZsb2F0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBNdXRhdGlvbiA9IHtcbiAgLyoqIENyZWF0ZSBhIHVzZXIuICovXG4gIGNyZWF0ZVVzZXI/OiBNYXliZTxVc2VyPjtcbiAgLyoqIFJlbW92ZSBhIHVzZXIuICovXG4gIHJlbW92ZVVzZXI/OiBNYXliZTxVc2VyPjtcbn07XG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQ3JlYXRlVXNlckFyZ3MgPSB7XG4gIGVtYWlsOiBTY2FsYXJzW1wiU3RyaW5nXCJdO1xufTtcblxuZXhwb3J0IHR5cGUgTXV0YXRpb25SZW1vdmVVc2VyQXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbXCJJRFwiXTtcbn07XG5cbmV4cG9ydCB0eXBlIFF1ZXJ5ID0ge1xuICAvKiogR2V0IGEgdXNlciBieSBJRC4gKi9cbiAgdXNlcjogVXNlcjtcbiAgLyoqIEdldCBhbGwgdXNlcnMuICovXG4gIHVzZXJzOiBBcnJheTxVc2VyPjtcbn07XG5cbmV4cG9ydCB0eXBlIFF1ZXJ5VXNlckFyZ3MgPSB7XG4gIGlkOiBTY2FsYXJzW1wiSURcIl07XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyID0ge1xuICBpZDogU2NhbGFyc1tcIklEXCJdO1xuICBlbWFpbDogU2NhbGFyc1tcIlN0cmluZ1wiXTtcbn07XG5leHBvcnQgdHlwZSBVc2Vyc1F1ZXJ5VmFyaWFibGVzID0ge307XG5cbmV4cG9ydCB0eXBlIFVzZXJzUXVlcnkgPSB7IF9fdHlwZW5hbWU/OiBcIlF1ZXJ5XCIgfSAmIHtcbiAgdXNlcnM6IEFycmF5PHsgX190eXBlbmFtZT86IFwiVXNlclwiIH0gJiBQaWNrPFVzZXIsIFwiaWRcIiB8IFwiZW1haWxcIj4+O1xufTtcblxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCAqIGFzIFJlYWN0QXBvbGxvIGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCAqIGFzIFJlYWN0QXBvbGxvSG9va3MgZnJvbSBcInJlYWN0LWFwb2xsby1ob29rc1wiO1xuZXhwb3J0IHR5cGUgT21pdDxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBQaWNrPFQsIEV4Y2x1ZGU8a2V5b2YgVCwgSz4+O1xuXG5leHBvcnQgY29uc3QgVXNlcnNEb2N1bWVudCA9IGdxbGBcbiAgcXVlcnkgVXNlcnMge1xuICAgIHVzZXJzIHtcbiAgICAgIGlkXG4gICAgICBlbWFpbFxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVzZXJzUXVlcnkoXG4gIGJhc2VPcHRpb25zPzogUmVhY3RBcG9sbG9Ib29rcy5RdWVyeUhvb2tPcHRpb25zPFVzZXJzUXVlcnlWYXJpYWJsZXM+XG4pIHtcbiAgcmV0dXJuIFJlYWN0QXBvbGxvSG9va3MudXNlUXVlcnk8VXNlcnNRdWVyeSwgVXNlcnNRdWVyeVZhcmlhYmxlcz4oXG4gICAgVXNlcnNEb2N1bWVudCxcbiAgICBiYXNlT3B0aW9uc1xuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8taG9va3MnO1xuaW1wb3J0ICdub3JtYWxpemUuY3NzJztcbmltcG9ydCB7IHVzZVVzZXJzUXVlcnkgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvdHlwZXMnO1xuXG5jb25zdCBHRVRfVVNFUlMgPSBncWxgXG4gIHF1ZXJ5IFVzZXJzIHtcbiAgICB1c2VycyB7XG4gICAgICBpZFxuICAgICAgZW1haWxcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEFwcDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVVzZXJzUXVlcnkoKTtcbiAgY29uc3QgdXNlcnMgPSBkYXRhICYmIGRhdGEudXNlcnM7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9O1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PkVycm9yISB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3VzZXJzICYmIHVzZXJzLm1hcCh1c2VyID0+IDxwPklkOiB7dXNlci5pZH0sIEVtYWlsOiB7dXNlci5lbWFpbH08L3A+KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcbmltcG9ydCB7IEh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5JztcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAncmVhY3QtYXBvbGxvLWhvb2tzJztcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG4gIGxpbms6IG5ldyBIdHRwTGluayh7XG4gICAgdXJpOiAnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWwnLFxuICB9KSxcbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgPEFwcCAvPlxuICA8L0Fwb2xsb1Byb3ZpZGVyPixcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkFwcCcpLFxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=