webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FullPageSlide.tsx":
/*!**************************************!*\
  !*** ./components/FullPageSlide.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FullPageSlide; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/home/hojonglee/tail-company.github.io/components/FullPageSlide.tsx",
    _s = $RefreshSig$();




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    spacer: {
      height: 1
    },
    toolbarBottom: {
      minHeight: 48
    },
    toolbarTop: {
      minHeight: 75
    }
  });
});
function FullPageSlide(props) {
  _s();

  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
        className: classes.toolbarTop
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      flexGrow: 1,
      height: 0,
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.spacer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
        className: classes.toolbarBottom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

_s(FullPageSlide, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = FullPageSlide;

var _c;

$RefreshReg$(_c, "FullPageSlide");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdWxsUGFnZVNsaWRlLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJzcGFjZXIiLCJoZWlnaHQiLCJ0b29sYmFyQm90dG9tIiwibWluSGVpZ2h0IiwidG9vbGJhclRvcCIsIkZ1bGxQYWdlU2xpZGUiLCJwcm9wcyIsImNsYXNzZXMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFVBQU0sRUFBRTtBQUNOQyxZQUFNLEVBQUU7QUFERixLQURHO0FBSVhDLGlCQUFhLEVBQUU7QUFDYkMsZUFBUyxFQUFFO0FBREUsS0FKSjtBQU9YQyxjQUFVLEVBQUU7QUFDVkQsZUFBUyxFQUFFO0FBREQ7QUFQRCxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCO0FBY2UsU0FBU0UsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQTs7QUFDM0MsTUFBTUMsT0FBTyxHQUFHWCxTQUFTLEVBQXpCO0FBRUEsc0JBQ0UscUVBQUMscURBQUQ7QUFBSyxXQUFPLEVBQUMsTUFBYjtBQUFvQixpQkFBYSxFQUFDLFFBQWxDO0FBQTJDLFVBQU0sRUFBQyxNQUFsRDtBQUFBLDRCQUNFLHFFQUFDLHFEQUFEO0FBQUEsNkJBQ0UscUVBQUMseURBQUQ7QUFBUyxpQkFBUyxFQUFFVyxPQUFPLENBQUNIO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSxxRUFBQyxxREFBRDtBQUFLLGNBQVEsRUFBRSxDQUFmO0FBQWtCLFlBQU0sRUFBRSxDQUExQjtBQUFBLGdCQUNHRSxLQUFLLENBQUNFO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBT0UscUVBQUMscURBQUQ7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVELE9BQU8sQ0FBQ1A7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMseURBQUQ7QUFBUyxpQkFBUyxFQUFFTyxPQUFPLENBQUNMO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEOztHQWpCdUJHLGE7VUFDTlQsUzs7O0tBRE1TLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2M2Yzc2YTBjZmRlYWNkMzU3NGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgVG9vbGJhciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgVGhlbWUsIGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHNwYWNlcjoge1xuICAgICAgaGVpZ2h0OiAxLFxuICAgIH0sXG4gICAgdG9vbGJhckJvdHRvbToge1xuICAgICAgbWluSGVpZ2h0OiA0OCxcbiAgICB9LFxuICAgIHRvb2xiYXJUb3A6IHtcbiAgICAgIG1pbkhlaWdodDogNzUsXG4gICAgfSxcbiAgfSlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZ1bGxQYWdlU2xpZGUocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBoZWlnaHQ9XCIxMDAlXCI+XG4gICAgICA8Qm94PlxuICAgICAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhclRvcH0gLz5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBmbGV4R3Jvdz17MX0gaGVpZ2h0PXswfT5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFjZXJ9IC8+XG4gICAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyQm90dG9tfSAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9