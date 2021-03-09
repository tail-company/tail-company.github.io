webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_full_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-full-page */ "./node_modules/react-full-page/lib/index.js");
/* harmony import */ var react_full_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_full_page__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_About__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/About */ "./components/About.tsx");
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Footer */ "./components/Footer.tsx");
/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Header */ "./components/Header.tsx");
/* harmony import */ var components_Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Home */ "./components/Home.tsx");
/* harmony import */ var components_People__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/People */ "./components/People.tsx");
/* harmony import */ var components_Portfolio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Portfolio */ "./components/Portfolio.tsx");



var _jsxFileName = "C:\\workspace\\tail-company.github.io\\pages\\index.tsx",
    _s = $RefreshSig$();












var KeyboardEventHandler = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-keyboard-event-handler */ "./node_modules/react-keyboard-event-handler/lib/react-keyboard-event-handler.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-keyboard-event-handler */ "./node_modules/react-keyboard-event-handler/lib/react-keyboard-event-handler.js")];
    },
    modules: ["react-keyboard-event-handler"]
  }
});
_c2 = KeyboardEventHandler;
var pageCount = 4;
function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      page = _useState[0],
      setPage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isScrolling = _useState2[0],
      setIsScrolling = _useState2[1];

  var fullPageRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(undefined);

  var afterChange = function afterChange() {
    setIsScrolling(false);
  };

  var beforeChange = function beforeChange(_ref) {
    var to = _ref.to;
    setIsScrolling(true);
    setPage(to);
  };

  var onHeaderButtonClick = function onHeaderButtonClick(page) {
    var _fullPageRef$current;

    if (isScrolling) return;
    fullPageRef === null || fullPageRef === void 0 ? void 0 : (_fullPageRef$current = fullPageRef.current) === null || _fullPageRef$current === void 0 ? void 0 : _fullPageRef$current.scrollToSlide(page);
    setPage(page);
  };

  var onKeyEvent = function onKeyEvent(key, e) {
    if (isScrolling) return;

    if (["pageup", "up", "left"].includes(key) && page > 0) {
      var _fullPageRef$current2;

      var newPage = page - 1;
      fullPageRef === null || fullPageRef === void 0 ? void 0 : (_fullPageRef$current2 = fullPageRef.current) === null || _fullPageRef$current2 === void 0 ? void 0 : _fullPageRef$current2.scrollToSlide(newPage);
      setPage(newPage);
    } else if (["pagedown", "down", "right", "space"].includes(key) && page < pageCount - 1) {
      var _fullPageRef$current3;

      var _newPage = page + 1;

      fullPageRef === null || fullPageRef === void 0 ? void 0 : (_fullPageRef$current3 = fullPageRef.current) === null || _fullPageRef$current3 === void 0 ? void 0 : _fullPageRef$current3.scrollToSlide(_newPage);
      setPage(_newPage);
    } else if (["home"].includes(key) && page !== 0) {
      var _fullPageRef$current4;

      var _newPage2 = 0;
      fullPageRef === null || fullPageRef === void 0 ? void 0 : (_fullPageRef$current4 = fullPageRef.current) === null || _fullPageRef$current4 === void 0 ? void 0 : _fullPageRef$current4.scrollToSlide(_newPage2);
      setPage(_newPage2);
    } else if (["end"].includes(key) && page !== pageCount - 1) {
      var _fullPageRef$current5;

      var _newPage3 = pageCount - 1;

      fullPageRef === null || fullPageRef === void 0 ? void 0 : (_fullPageRef$current5 = fullPageRef.current) === null || _fullPageRef$current5 === void 0 ? void 0 : _fullPageRef$current5.scrollToSlide(_newPage3);
      setPage(_newPage3);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "TAIL: The Art Is Long"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: "First investor to medical startup."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: "https://tail.company/open-graph-image.png?v=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(KeyboardEventHandler, {
      handleKeys: ["pageup", "pagedown", "up", "down", "left", "right", "space", "home", "end"],
      onKeyEvent: onKeyEvent
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onButtonClick: onHeaderButtonClick,
      page: page
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      maxWidth: "lg",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_full_page__WEBPACK_IMPORTED_MODULE_5__["FullPage"], {
        afterChange: afterChange,
        beforeChange: beforeChange,
        duration: 1200,
        ref: fullPageRef,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_full_page__WEBPACK_IMPORTED_MODULE_5__["Slide"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Home__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_full_page__WEBPACK_IMPORTED_MODULE_5__["Slide"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_About__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_full_page__WEBPACK_IMPORTED_MODULE_5__["Slide"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Portfolio__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_full_page__WEBPACK_IMPORTED_MODULE_5__["Slide"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_People__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Index, "he1qZpXbDvwlgy62VtK8w9W0yMA=");

_c3 = Index;

var _c, _c2, _c3;

$RefreshReg$(_c, "KeyboardEventHandler$dynamic");
$RefreshReg$(_c2, "KeyboardEventHandler");
$RefreshReg$(_c3, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIktleWJvYXJkRXZlbnRIYW5kbGVyIiwiZHluYW1pYyIsInNzciIsInBhZ2VDb3VudCIsIkluZGV4IiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsImlzU2Nyb2xsaW5nIiwic2V0SXNTY3JvbGxpbmciLCJmdWxsUGFnZVJlZiIsInVzZVJlZiIsInVuZGVmaW5lZCIsImFmdGVyQ2hhbmdlIiwiYmVmb3JlQ2hhbmdlIiwidG8iLCJvbkhlYWRlckJ1dHRvbkNsaWNrIiwiY3VycmVudCIsInNjcm9sbFRvU2xpZGUiLCJvbktleUV2ZW50Iiwia2V5IiwiZSIsImluY2x1ZGVzIiwibmV3UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLG1EQUFPLE1BQ2xDO0FBQUEsU0FBTSx5TUFBTjtBQUFBLENBRGtDLEVBRWxDO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQURhLHFIQUNiO0FBQUE7QUFBQSxjQURhLDhCQUNiO0FBQUE7QUFBQSxDQUZrQyxDQUFwQztNQUFNRixvQjtBQUtOLElBQU1HLFNBQVMsR0FBRyxDQUFsQjtBQUVlLFNBQVNDLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDTkMsc0RBQVEsQ0FBQyxDQUFELENBREY7QUFBQSxNQUN2QkMsSUFEdUI7QUFBQSxNQUNqQkMsT0FEaUI7O0FBQUEsbUJBRVFGLHNEQUFRLENBQUMsS0FBRCxDQUZoQjtBQUFBLE1BRXZCRyxXQUZ1QjtBQUFBLE1BRVZDLGNBRlU7O0FBRzlCLE1BQU1DLFdBQVcsR0FBR0Msb0RBQU0sQ0FBQ0MsU0FBRCxDQUExQjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FB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LEs7O01BQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjVjMjE4MmEzMTk1MDFhMGM4Y2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRnVsbFBhZ2UsIFNsaWRlIH0gZnJvbSBcInJlYWN0LWZ1bGwtcGFnZVwiO1xyXG5pbXBvcnQgdHlwZSBfS2V5Ym9hcmRFdmVudEhhbmRsZXIgZnJvbSBcInJlYWN0LWtleWJvYXJkLWV2ZW50LWhhbmRsZXJcIjtcclxuXHJcbmltcG9ydCBBYm91dCBmcm9tIFwiY29tcG9uZW50cy9BYm91dFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiY29tcG9uZW50cy9Ib21lXCI7XHJcbmltcG9ydCBQZW9wbGUgZnJvbSBcImNvbXBvbmVudHMvUGVvcGxlXCI7XHJcbmltcG9ydCBQb3J0Zm9saW8gZnJvbSBcImNvbXBvbmVudHMvUG9ydGZvbGlvXCI7XHJcblxyXG5jb25zdCBLZXlib2FyZEV2ZW50SGFuZGxlciA9IGR5bmFtaWM8X0tleWJvYXJkRXZlbnRIYW5kbGVyPihcclxuICAoKSA9PiBpbXBvcnQoXCJyZWFjdC1rZXlib2FyZC1ldmVudC1oYW5kbGVyXCIpLFxyXG4gIHsgc3NyOiBmYWxzZSB9XHJcbik7XHJcblxyXG5jb25zdCBwYWdlQ291bnQgPSA0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2lzU2Nyb2xsaW5nLCBzZXRJc1Njcm9sbGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZnVsbFBhZ2VSZWYgPSB1c2VSZWYodW5kZWZpbmVkKTtcclxuXHJcbiAgY29uc3QgYWZ0ZXJDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1Njcm9sbGluZyhmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBiZWZvcmVDaGFuZ2UgPSAoeyB0byB9OiB7IGZyb206IG51bWJlcjsgdG86IG51bWJlciB9KSA9PiB7XHJcbiAgICBzZXRJc1Njcm9sbGluZyh0cnVlKTtcclxuICAgIHNldFBhZ2UodG8pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uSGVhZGVyQnV0dG9uQ2xpY2sgPSAocGFnZTogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAoaXNTY3JvbGxpbmcpIHJldHVybjtcclxuXHJcbiAgICBmdWxsUGFnZVJlZj8uY3VycmVudD8uc2Nyb2xsVG9TbGlkZShwYWdlKTtcclxuICAgIHNldFBhZ2UocGFnZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25LZXlFdmVudCA9IChrZXksIGUpID0+IHtcclxuICAgIGlmIChpc1Njcm9sbGluZykgcmV0dXJuO1xyXG5cclxuICAgIGlmIChbXCJwYWdldXBcIiwgXCJ1cFwiLCBcImxlZnRcIl0uaW5jbHVkZXMoa2V5KSAmJiBwYWdlID4gMCkge1xyXG4gICAgICBjb25zdCBuZXdQYWdlID0gcGFnZSAtIDE7XHJcbiAgICAgIGZ1bGxQYWdlUmVmPy5jdXJyZW50Py5zY3JvbGxUb1NsaWRlKG5ld1BhZ2UpO1xyXG4gICAgICBzZXRQYWdlKG5ld1BhZ2UpO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgW1wicGFnZWRvd25cIiwgXCJkb3duXCIsIFwicmlnaHRcIiwgXCJzcGFjZVwiXS5pbmNsdWRlcyhrZXkpICYmXHJcbiAgICAgIHBhZ2UgPCBwYWdlQ291bnQgLSAxXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgbmV3UGFnZSA9IHBhZ2UgKyAxO1xyXG4gICAgICBmdWxsUGFnZVJlZj8uY3VycmVudD8uc2Nyb2xsVG9TbGlkZShuZXdQYWdlKTtcclxuICAgICAgc2V0UGFnZShuZXdQYWdlKTtcclxuICAgIH0gZWxzZSBpZiAoW1wiaG9tZVwiXS5pbmNsdWRlcyhrZXkpICYmIHBhZ2UgIT09IDApIHtcclxuICAgICAgY29uc3QgbmV3UGFnZSA9IDA7XHJcbiAgICAgIGZ1bGxQYWdlUmVmPy5jdXJyZW50Py5zY3JvbGxUb1NsaWRlKG5ld1BhZ2UpO1xyXG4gICAgICBzZXRQYWdlKG5ld1BhZ2UpO1xyXG4gICAgfSBlbHNlIGlmIChbXCJlbmRcIl0uaW5jbHVkZXMoa2V5KSAmJiBwYWdlICE9PSBwYWdlQ291bnQgLSAxKSB7XHJcbiAgICAgIGNvbnN0IG5ld1BhZ2UgPSBwYWdlQ291bnQgLSAxO1xyXG4gICAgICBmdWxsUGFnZVJlZj8uY3VycmVudD8uc2Nyb2xsVG9TbGlkZShuZXdQYWdlKTtcclxuICAgICAgc2V0UGFnZShuZXdQYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJUQUlMOiBUaGUgQXJ0IElzIExvbmdcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJGaXJzdCBpbnZlc3RvciB0byBtZWRpY2FsIHN0YXJ0dXAuXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL3RhaWwuY29tcGFueS9vcGVuLWdyYXBoLWltYWdlLnBuZz92PTFcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEtleWJvYXJkRXZlbnRIYW5kbGVyXHJcbiAgICAgICAgaGFuZGxlS2V5cz17W1xyXG4gICAgICAgICAgXCJwYWdldXBcIixcclxuICAgICAgICAgIFwicGFnZWRvd25cIixcclxuICAgICAgICAgIFwidXBcIixcclxuICAgICAgICAgIFwiZG93blwiLFxyXG4gICAgICAgICAgXCJsZWZ0XCIsXHJcbiAgICAgICAgICBcInJpZ2h0XCIsXHJcbiAgICAgICAgICBcInNwYWNlXCIsXHJcbiAgICAgICAgICBcImhvbWVcIixcclxuICAgICAgICAgIFwiZW5kXCIsXHJcbiAgICAgICAgXX1cclxuICAgICAgICBvbktleUV2ZW50PXtvbktleUV2ZW50fVxyXG4gICAgICAvPlxyXG4gICAgICA8SGVhZGVyIG9uQnV0dG9uQ2xpY2s9e29uSGVhZGVyQnV0dG9uQ2xpY2t9IHBhZ2U9e3BhZ2V9IC8+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxyXG4gICAgICAgIDxGdWxsUGFnZVxyXG4gICAgICAgICAgYWZ0ZXJDaGFuZ2U9e2FmdGVyQ2hhbmdlfVxyXG4gICAgICAgICAgYmVmb3JlQ2hhbmdlPXtiZWZvcmVDaGFuZ2V9XHJcbiAgICAgICAgICBkdXJhdGlvbj17MTIwMH1cclxuICAgICAgICAgIHJlZj17ZnVsbFBhZ2VSZWZ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNsaWRlPlxyXG4gICAgICAgICAgICA8SG9tZSAvPlxyXG4gICAgICAgICAgPC9TbGlkZT5cclxuICAgICAgICAgIDxTbGlkZT5cclxuICAgICAgICAgICAgPEFib3V0IC8+XHJcbiAgICAgICAgICA8L1NsaWRlPlxyXG4gICAgICAgICAgPFNsaWRlPlxyXG4gICAgICAgICAgICA8UG9ydGZvbGlvIC8+XHJcbiAgICAgICAgICA8L1NsaWRlPlxyXG4gICAgICAgICAgPFNsaWRlPlxyXG4gICAgICAgICAgICA8UGVvcGxlIC8+XHJcbiAgICAgICAgICA8L1NsaWRlPlxyXG4gICAgICAgIDwvRnVsbFBhZ2U+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=