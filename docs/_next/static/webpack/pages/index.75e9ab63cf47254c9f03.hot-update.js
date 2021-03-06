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
    },
    toolbar: {
      minHeight: 32
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
          className: classes.toolbar,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
            variant: "body2",
            align: "center",
            className: classes.copyright,
            children: "Copyright \u24D2 TAIL 2021. All rights reserved."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsImFwcEJhciIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJ3aGl0ZSIsImJvcmRlclRvcCIsImJvdHRvbSIsInRvcCIsImNvbnRhaW5lciIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiY29weXJpZ2h0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0Iiwid2lkdGgiLCJ0b29sYmFyIiwibWluSGVpZ2h0IiwiRm9vdGVyIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxVQUFNLEVBQUU7QUFDTkMscUJBQWUsRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWNDLE1BQWQsQ0FBcUJDLEtBRGhDO0FBRU47QUFDQUMsZUFBUyxFQUFFLGlCQUhMO0FBSU5DLFlBQU0sRUFBRSxDQUpGO0FBS05DLFNBQUcsRUFBRTtBQUxDLEtBREc7QUFRWEMsYUFBUyxFQUFFO0FBQ1RDLGlCQUFXLEVBQUUsQ0FESjtBQUVUQyxrQkFBWSxFQUFFO0FBRkwsS0FSQTtBQVlYQyxhQUFTLEVBQUU7QUFDVEMsY0FBUSxFQUFFLElBREQ7QUFFVEMsZ0JBQVUsRUFBRSxNQUZIO0FBR1RDLFdBQUssRUFBRTtBQUhFLEtBWkE7QUFpQlhDLFdBQU8sRUFBRTtBQUNQQyxlQUFTLEVBQUU7QUFESjtBQWpCRSxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCO0FBd0JlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0IsTUFBTUMsT0FBTyxHQUFHdEIsU0FBUyxFQUF6QjtBQUVBLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsd0RBQUQ7QUFDRSxjQUFRLEVBQUMsT0FEWDtBQUVFLFdBQUssRUFBQyxTQUZSO0FBR0UsZUFBUyxFQUFFLENBSGI7QUFJRSxlQUFTLEVBQUVzQixPQUFPLENBQUNsQixNQUpyQjtBQUFBLDZCQU1FLHFFQUFDLDJEQUFEO0FBQVcsZ0JBQVEsRUFBQyxJQUFwQjtBQUF5QixpQkFBUyxFQUFFa0IsT0FBTyxDQUFDVixTQUE1QztBQUFBLCtCQUNFLHFFQUFDLHlEQUFEO0FBQVMsbUJBQVMsRUFBRVUsT0FBTyxDQUFDSCxPQUE1QjtBQUFBLGlDQUNFLHFFQUFDLDREQUFEO0FBQ0UsbUJBQU8sRUFBQyxPQURWO0FBRUUsaUJBQUssRUFBQyxRQUZSO0FBR0UscUJBQVMsRUFBRUcsT0FBTyxDQUFDUCxTQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBc0JEOztHQXpCdUJNLE07VUFDTnJCLFM7OztLQURNcUIsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NWU5YWI2M2NmNDcyNTRjOWYwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwQmFyLCBDb250YWluZXIsIFRvb2xiYXIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IFRoZW1lLCBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICBhcHBCYXI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgICAvLyBib3JkZXJUb3A6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXG4gICAgICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkIHdoaXRlXCIsXG4gICAgICBib3R0b206IDAsXG4gICAgICB0b3A6IFwiYXV0b1wiLFxuICAgIH0sXG4gICAgY29udGFpbmVyOiB7XG4gICAgICBwYWRkaW5nTGVmdDogMCxcbiAgICAgIHBhZGRpbmdSaWdodDogMCxcbiAgICB9LFxuICAgIGNvcHlyaWdodDoge1xuICAgICAgZm9udFNpemU6IDEwLjUsXG4gICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICB9LFxuICAgIHRvb2xiYXI6IHtcbiAgICAgIG1pbkhlaWdodDogMzIsXG4gICAgfSxcbiAgfSlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxBcHBCYXJcbiAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAgIGNvbG9yPVwiZGVmYXVsdFwiXG4gICAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29weXJpZ2h0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDb3B5cmlnaHQg4pOSIFRBSUwgMjAyMS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9BcHBCYXI+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9