webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "/home/hojonglee/tail-company.github.io/components/Footer.tsx",
    _s = $RefreshSig$();




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    appBar: {
      backgroundColor: theme.palette.common.white,
      // borderTop: "1px solid black",
      borderTop: "1px solid white",
      bottom: 0,
      top: "auto"
    },
    container: {
      paddingLeft: 0,
      paddingRight: 0
    },
    copyright: {
      fontSize: 10.5,
      fontWeight: "bold",
      width: "100%"
    }
  });
});
function Footer() {
  _s();

  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
      position: "fixed",
      color: "default",
      elevation: 0,
      className: classes.appBar,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        maxWidth: "lg",
        className: classes.container,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
            variant: "body2",
            align: "center",
            className: classes.copyright,
            children: "Copyright \u24D2 TAIL 2021. All rights reserved."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(Footer, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Footer;

var _c;

$RefreshReg$(_c, "Footer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsImFwcEJhciIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJ3aGl0ZSIsImJvcmRlclRvcCIsImJvdHRvbSIsInRvcCIsImNvbnRhaW5lciIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiY29weXJpZ2h0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0Iiwid2lkdGgiLCJGb290ZXIiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFVBQU0sRUFBRTtBQUNOQyxxQkFBZSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsS0FEaEM7QUFFTjtBQUNBQyxlQUFTLEVBQUUsaUJBSEw7QUFJTkMsWUFBTSxFQUFFLENBSkY7QUFLTkMsU0FBRyxFQUFFO0FBTEMsS0FERztBQVFYQyxhQUFTLEVBQUU7QUFDVEMsaUJBQVcsRUFBRSxDQURKO0FBRVRDLGtCQUFZLEVBQUU7QUFGTCxLQVJBO0FBWVhDLGFBQVMsRUFBRTtBQUNUQyxjQUFRLEVBQUUsSUFERDtBQUVUQyxnQkFBVSxFQUFFLE1BRkg7QUFHVEMsV0FBSyxFQUFFO0FBSEU7QUFaQSxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCO0FBcUJlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0IsTUFBTUMsT0FBTyxHQUFHcEIsU0FBUyxFQUF6QjtBQUVBLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsd0RBQUQ7QUFDRSxjQUFRLEVBQUMsT0FEWDtBQUVFLFdBQUssRUFBQyxTQUZSO0FBR0UsZUFBUyxFQUFFLENBSGI7QUFJRSxlQUFTLEVBQUVvQixPQUFPLENBQUNoQixNQUpyQjtBQUFBLDZCQU1FLHFFQUFDLDJEQUFEO0FBQVcsZ0JBQVEsRUFBQyxJQUFwQjtBQUF5QixpQkFBUyxFQUFFZ0IsT0FBTyxDQUFDUixTQUE1QztBQUFBLCtCQUNFLHFFQUFDLHlEQUFEO0FBQUEsaUNBQ0UscUVBQUMsNERBQUQ7QUFDRSxtQkFBTyxFQUFDLE9BRFY7QUFFRSxpQkFBSyxFQUFDLFFBRlI7QUFHRSxxQkFBUyxFQUFFUSxPQUFPLENBQUNMLFNBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFzQkQ7O0dBekJ1QkksTTtVQUNObkIsUzs7O0tBRE1tQixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJhZTk5NmRhOTVjOTAzNTdhZTE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBCYXIsIENvbnRhaW5lciwgVG9vbGJhciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgVGhlbWUsIGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIGFwcEJhcjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICAgIC8vIGJvcmRlclRvcDogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICAgIGJvcmRlclRvcDogXCIxcHggc29saWQgd2hpdGVcIixcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHRvcDogXCJhdXRvXCIsXG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiAwLFxuICAgICAgcGFkZGluZ1JpZ2h0OiAwLFxuICAgIH0sXG4gICAgY29weXJpZ2h0OiB7XG4gICAgICBmb250U2l6ZTogMTAuNSxcbiAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QXBwQmFyXG4gICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICBjb2xvcj1cImRlZmF1bHRcIlxuICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBCYXJ9XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29weXJpZ2h0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDb3B5cmlnaHQg4pOSIFRBSUwgMjAyMS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9BcHBCYXI+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9