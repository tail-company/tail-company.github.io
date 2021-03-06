webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "/home/hojonglee/tail-company.github.io/components/Header.tsx",
    _s = $RefreshSig$();






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    appBar: {
      //backgroundColor: fade(theme.palette.common.white, 0.1),
      backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_3__["fade"])(theme.palette.common.white, 1)
    },
    container: {
      paddingLeft: 0,
      paddingRight: 0
    },
    mark: {
      color: "transparent"
    },
    menu: {
      fontSize: 15,
      fontWeight: "bold",
      textTransform: "none"
    },
    selected: {
      color: "#f8e00e"
    },
    title: {
      cursor: "pointer",
      flexGrow: 1,
      fontSize: 30
    },
    toolbar: {
      minHeight: 75
    }
  });
});
function Header(_ref) {
  _s();

  var onButtonClick = _ref.onButtonClick,
      page = _ref.page;
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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
            variant: "h6",
            className: classes.title,
            onClick: function onClick() {
              return onButtonClick(0);
            },
            children: "TAIL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            color: "inherit",
            onClick: function onClick() {
              return onButtonClick(0);
            },
            className: classes.menu,
            children: ["Home", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.mark, !page && classes.selected),
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            color: "inherit",
            onClick: function onClick() {
              return onButtonClick(1);
            },
            className: classes.menu,
            children: ["About", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.mark, page === 1 && classes.selected),
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            color: "inherit",
            onClick: function onClick() {
              return onButtonClick(2);
            },
            className: classes.menu,
            children: ["Portfolio", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.mark, page === 2 && classes.selected),
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            color: "inherit",
            onClick: function onClick() {
              return onButtonClick(3);
            },
            className: classes.menu,
            children: ["People", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.mark, page === 3 && classes.selected),
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(Header, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsImFwcEJhciIsImJhY2tncm91bmRDb2xvciIsImZhZGUiLCJwYWxldHRlIiwiY29tbW9uIiwid2hpdGUiLCJjb250YWluZXIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIm1hcmsiLCJjb2xvciIsIm1lbnUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwic2VsZWN0ZWQiLCJ0aXRsZSIsImN1cnNvciIsImZsZXhHcm93IiwidG9vbGJhciIsIm1pbkhlaWdodCIsIkhlYWRlciIsIm9uQnV0dG9uQ2xpY2siLCJwYWdlIiwiY2xhc3NlcyIsImNsc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFPQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFVBQU0sRUFBRTtBQUNOO0FBQ0FDLHFCQUFlLEVBQUVDLHNGQUFJLENBQUNKLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxNQUFkLENBQXFCQyxLQUF0QixFQUE2QixDQUE3QjtBQUZmLEtBREc7QUFLWEMsYUFBUyxFQUFFO0FBQ1RDLGlCQUFXLEVBQUUsQ0FESjtBQUVUQyxrQkFBWSxFQUFFO0FBRkwsS0FMQTtBQVNYQyxRQUFJLEVBQUU7QUFDSkMsV0FBSyxFQUFFO0FBREgsS0FUSztBQVlYQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLEVBRE47QUFFSkMsZ0JBQVUsRUFBRSxNQUZSO0FBR0pDLG1CQUFhLEVBQUU7QUFIWCxLQVpLO0FBaUJYQyxZQUFRLEVBQUU7QUFDUkwsV0FBSyxFQUFFO0FBREMsS0FqQkM7QUFvQlhNLFNBQUssRUFBRTtBQUNM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RSx1QkFBUyxFQUFFYyxvREFBSSxDQUFDRCxPQUFPLENBQUNmLElBQVQsRUFBZWMsSUFBSSxLQUFLLENBQVQsSUFBY0MsT0FBTyxDQUFDVCxRQUFyQyxDQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBMUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFvRUQ7O0dBdkV1Qk0sTTtVQUNOekIsUzs7O0tBRE15QixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI4ZTVjNGIwYTNkZTNmZGFiZDEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBcHBCYXIsXG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBUb29sYmFyLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IFRoZW1lLCBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgeyBmYWRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgSGVhZGVyUHJvcHMge1xuICBvbkJ1dHRvbkNsaWNrOiAocGFnZTogbnVtYmVyKSA9PiB2b2lkO1xuICBwYWdlOiBudW1iZXI7XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICBhcHBCYXI6IHtcbiAgICAgIC8vYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjEpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAxKSxcbiAgICB9LFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgcGFkZGluZ0xlZnQ6IDAsXG4gICAgICBwYWRkaW5nUmlnaHQ6IDAsXG4gICAgfSxcbiAgICBtYXJrOiB7XG4gICAgICBjb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIH0sXG4gICAgbWVudToge1xuICAgICAgZm9udFNpemU6IDE1LFxuICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcbiAgICB9LFxuICAgIHNlbGVjdGVkOiB7XG4gICAgICBjb2xvcjogXCIjZjhlMDBlXCIsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgZm9udFNpemU6IDMwLFxuICAgIH0sXG4gICAgdG9vbGJhcjoge1xuICAgICAgbWluSGVpZ2h0OiA3NSxcbiAgICB9LFxuICB9KVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgb25CdXR0b25DbGljaywgcGFnZSB9OiBIZWFkZXJQcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEFwcEJhclxuICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcbiAgICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfVxuICAgICAgPlxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQnV0dG9uQ2xpY2soMCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFRBSUxcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25CdXR0b25DbGljaygwKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEhvbWV7XCIgXCJ9XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLm1hcmssICFwYWdlICYmIGNsYXNzZXMuc2VsZWN0ZWQpfT5cbiAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkJ1dHRvbkNsaWNrKDEpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWJvdXR7XCIgXCJ9XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubWFyaywgcGFnZSA9PT0gMSAmJiBjbGFzc2VzLnNlbGVjdGVkKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQnV0dG9uQ2xpY2soMil9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQb3J0Zm9saW97XCIgXCJ9XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubWFyaywgcGFnZSA9PT0gMiAmJiBjbGFzc2VzLnNlbGVjdGVkKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQnV0dG9uQ2xpY2soMyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQZW9wbGV7XCIgXCJ9XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubWFyaywgcGFnZSA9PT0gMyAmJiBjbGFzc2VzLnNlbGVjdGVkKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==