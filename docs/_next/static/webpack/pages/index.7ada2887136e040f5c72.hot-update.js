webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PortfolioCompany.tsx":
/*!*****************************************!*\
  !*** ./components/PortfolioCompany.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PortfolioCompany; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/home/hojonglee/tail-company.github.io/components/PortfolioCompany.tsx",
    _s = $RefreshSig$();





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    body2: {
      fontFamily: "Noto Serif KR",
      fontSize: 12,
      whiteSpace: "pre-line"
    },
    button: {
      backgroundColor: "#f8e00e",
      borderRadius: 0,
      color: theme.palette.common.black,
      fontSize: 12,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    },
    logo: {
      height: "100%",
      objectFit: "scale-down",
      width: "100%"
    }
  });
});
function PortfolioCompany(_ref) {
  _s();

  var desc = _ref.desc,
      imageSrc = _ref.imageSrc,
      name = _ref.name,
      urlSrc = _ref.urlSrc;
  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: "100%",
      height: 150,
      display: "flex",
      justifyContent: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        alignSelf: "center",
        width: "100%",
        height: "100%",
        position: "relative",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: imageSrc,
          alt: name,
          className: classes.logo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: "100%",
      display: "flex",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        alignSelf: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
          variant: "body2",
          align: "center",
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])("ko", classes.body2),
          children: desc
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "contained",
        color: "default",
        disableElevation: true,
        className: classes.button,
        href: urlSrc,
        target: "_blank",
        children: "Download"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

_s(PortfolioCompany, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = PortfolioCompany;

var _c;

$RefreshReg$(_c, "PortfolioCompany");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3J0Zm9saW9Db21wYW55LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJib2R5MiIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsIndoaXRlU3BhY2UiLCJidXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJibGFjayIsInBhZGRpbmdUb3AiLCJzcGFjaW5nIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwibG9nbyIsImhlaWdodCIsIm9iamVjdEZpdCIsIndpZHRoIiwiUG9ydGZvbGlvQ29tcGFueSIsImRlc2MiLCJpbWFnZVNyYyIsIm5hbWUiLCJ1cmxTcmMiLCJjbGFzc2VzIiwiY2xzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFTQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFNBQUssRUFBRTtBQUNMQyxnQkFBVSxFQUFFLGVBRFA7QUFFTEMsY0FBUSxFQUFFLEVBRkw7QUFHTEMsZ0JBQVUsRUFBRTtBQUhQLEtBREk7QUFNWEMsVUFBTSxFQUFFO0FBQ05DLHFCQUFlLEVBQUUsU0FEWDtBQUVOQyxrQkFBWSxFQUFFLENBRlI7QUFHTkMsV0FBSyxFQUFFVCxLQUFLLENBQUNVLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsS0FIdEI7QUFJTlIsY0FBUSxFQUFFLEVBSko7QUFLTlMsZ0JBQVUsRUFBRWIsS0FBSyxDQUFDYyxPQUFOLENBQWMsQ0FBZCxDQUxOO0FBTU5DLG1CQUFhLEVBQUVmLEtBQUssQ0FBQ2MsT0FBTixDQUFjLENBQWQsQ0FOVDtBQU9ORSxpQkFBVyxFQUFFaEIsS0FBSyxDQUFDYyxPQUFOLENBQWMsQ0FBZCxDQVBQO0FBUU5HLGtCQUFZLEVBQUVqQixLQUFLLENBQUNjLE9BQU4sQ0FBYyxDQUFkO0FBUlIsS0FORztBQWdCWEksUUFBSSxFQUFFO0FBQ0pDLFlBQU0sRUFBRSxNQURKO0FBRUpDLGVBQVMsRUFBRSxZQUZQO0FBR0pDLFdBQUssRUFBRTtBQUhIO0FBaEJLLEdBQUQsQ0FEZTtBQUFBLENBQUQsQ0FBNUI7QUF5QmUsU0FBU0MsZ0JBQVQsT0FLVztBQUFBOztBQUFBLE1BSnhCQyxJQUl3QixRQUp4QkEsSUFJd0I7QUFBQSxNQUh4QkMsUUFHd0IsUUFIeEJBLFFBR3dCO0FBQUEsTUFGeEJDLElBRXdCLFFBRnhCQSxJQUV3QjtBQUFBLE1BRHhCQyxNQUN3QixRQUR4QkEsTUFDd0I7QUFDeEIsTUFBTUMsT0FBTyxHQUFHN0IsU0FBUyxFQUF6QjtBQUVBLHNCQUNFLHFFQUFDLHFEQUFEO0FBQUEsNEJBQ0UscUVBQUMscURBQUQ7QUFBSyxXQUFLLEVBQUMsTUFBWDtBQUFrQixZQUFNLEVBQUUsR0FBMUI7QUFBK0IsYUFBTyxFQUFDLE1BQXZDO0FBQThDLG9CQUFjLEVBQUMsUUFBN0Q7QUFBQSw2QkFDRSxxRUFBQyxxREFBRDtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUF3QixhQUFLLEVBQUMsTUFBOUI7QUFBcUMsY0FBTSxFQUFDLE1BQTVDO0FBQW1ELGdCQUFRLEVBQUMsVUFBNUQ7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFBRTBCLFFBQVY7QUFBb0IsYUFBRyxFQUFFQyxJQUF6QjtBQUErQixtQkFBUyxFQUFFRSxPQUFPLENBQUNUO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUUscUVBQUMscURBQUQ7QUFBSyxXQUFLLEVBQUMsTUFBWDtBQUFrQixhQUFPLEVBQUMsTUFBMUI7QUFBQSw2QkFDRSxxRUFBQyxxREFBRDtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLCtCQUNFLHFFQUFDLDREQUFEO0FBQ0UsaUJBQU8sRUFBQyxPQURWO0FBRUUsZUFBSyxFQUFDLFFBRlI7QUFHRSxtQkFBUyxFQUFFVSxvREFBSSxDQUFDLElBQUQsRUFBT0QsT0FBTyxDQUFDekIsS0FBZixDQUhqQjtBQUFBLG9CQUtHcUI7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQWlCRSxxRUFBQyxxREFBRDtBQUFLLFdBQUssRUFBQyxNQUFYO0FBQWtCLGFBQU8sRUFBQyxNQUExQjtBQUFpQyxvQkFBYyxFQUFDLFFBQWhEO0FBQUEsNkJBQ0UscUVBQUMsd0RBQUQ7QUFDRSxlQUFPLEVBQUMsV0FEVjtBQUVFLGFBQUssRUFBQyxTQUZSO0FBR0Usd0JBQWdCLE1BSGxCO0FBSUUsaUJBQVMsRUFBRUksT0FBTyxDQUFDckIsTUFKckI7QUFLRSxZQUFJLEVBQUVvQixNQUxSO0FBTUUsY0FBTSxFQUFDLFFBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0NEOztHQXhDdUJKLGdCO1VBTU54QixTOzs7S0FOTXdCLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdhZGEyODg3MTM2ZTA0MGY1YzcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgVGhlbWUsIGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBQb3J0Zm9saW9Db21wYW55UHJvcHMge1xuICBkZXNjPzogc3RyaW5nO1xuICBpbWFnZVNyYz86IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB1cmxTcmM/OiBzdHJpbmc7XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICBib2R5Mjoge1xuICAgICAgZm9udEZhbWlseTogXCJOb3RvIFNlcmlmIEtSXCIsXG4gICAgICBmb250U2l6ZTogMTIsXG4gICAgICB3aGl0ZVNwYWNlOiBcInByZS1saW5lXCIsXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjhlMDBlXCIsXG4gICAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXG4gICAgICBmb250U2l6ZTogMTIsXG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIH0sXG4gICAgbG9nbzoge1xuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIG9iamVjdEZpdDogXCJzY2FsZS1kb3duXCIsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgfSxcbiAgfSlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcnRmb2xpb0NvbXBhbnkoe1xuICBkZXNjLFxuICBpbWFnZVNyYyxcbiAgbmFtZSxcbiAgdXJsU3JjLFxufTogUG9ydGZvbGlvQ29tcGFueVByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8Qm94IHdpZHRoPVwiMTAwJVwiIGhlaWdodD17MTUwfSBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgIDxCb3ggYWxpZ25TZWxmPVwiY2VudGVyXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VTcmN9IGFsdD17bmFtZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299IC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IHdpZHRoPVwiMTAwJVwiIGRpc3BsYXk9XCJmbGV4XCI+XG4gICAgICAgIDxCb3ggYWxpZ25TZWxmPVwiY2VudGVyXCI+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXCJrb1wiLCBjbGFzc2VzLmJvZHkyKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZGVzY31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IHdpZHRoPVwiMTAwJVwiIGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIGNvbG9yPVwiZGVmYXVsdFwiXG4gICAgICAgICAgZGlzYWJsZUVsZXZhdGlvblxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgaHJlZj17dXJsU3JjfVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgID5cbiAgICAgICAgICBEb3dubG9hZFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==