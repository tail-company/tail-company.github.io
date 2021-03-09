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
/* harmony import */ var C_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "C:\\workspace\\tail-company.github.io\\components\\PortfolioCompany.tsx",
    _s = $RefreshSig$();





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
    body2: {
      // NOTE ko 따로 줘도 안되서 추가함
      fontFamily: "Noto Serif KR, serif",
      fontSize: 12,
      height: 70,
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
    },
    logoBox: Object(C_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      height: 150,
      marginBottom: theme.spacing(2)
    }, theme.breakpoints.only("xs"), {
      height: 100,
      marginBottom: theme.spacing(1)
    })
  });
});
function PortfolioCompany(_ref) {
  _s();

  var desc = _ref.desc,
      imageSrc = _ref.imageSrc,
      name = _ref.name,
      urlSrc = _ref.urlSrc;
  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      className: classes.logoBox,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        alignSelf: "center",
        width: "100%",
        height: "100%",
        position: "relative",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          href: urlSrc,
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: imageSrc,
            alt: name,
            className: classes.logo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
      xsDown: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        width: "100%",
        mb: 1.5,
        display: "flex",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          alignSelf: "center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
            variant: "body2",
            align: "center",
            className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])("ko", classes.body2),
            children: desc
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          variant: "contained",
          color: "default",
          disableElevation: true,
          className: classes.button,
          href: urlSrc,
          target: "_blank",
          children: "Homepage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3J0Zm9saW9Db21wYW55LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJib2R5MiIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImhlaWdodCIsIndoaXRlU3BhY2UiLCJidXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJibGFjayIsInBhZGRpbmdUb3AiLCJzcGFjaW5nIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwibG9nbyIsIm9iamVjdEZpdCIsIndpZHRoIiwibG9nb0JveCIsIm1hcmdpbkJvdHRvbSIsImJyZWFrcG9pbnRzIiwib25seSIsIlBvcnRmb2xpb0NvbXBhbnkiLCJkZXNjIiwiaW1hZ2VTcmMiLCJuYW1lIiwidXJsU3JjIiwiY2xhc3NlcyIsImNsc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFTQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFNBQUssRUFBRTtBQUNMO0FBQ0FDLGdCQUFVLEVBQUUsc0JBRlA7QUFHTEMsY0FBUSxFQUFFLEVBSEw7QUFJTEMsWUFBTSxFQUFFLEVBSkg7QUFLTEMsZ0JBQVUsRUFBRTtBQUxQLEtBREk7QUFRWEMsVUFBTSxFQUFFO0FBQ05DLHFCQUFlLEVBQUUsU0FEWDtBQUVOQyxrQkFBWSxFQUFFLENBRlI7QUFHTkMsV0FBSyxFQUFFVixLQUFLLENBQUNXLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsS0FIdEI7QUFJTlQsY0FBUSxFQUFFLEVBSko7QUFLTlUsZ0JBQVUsRUFBRWQsS0FBSyxDQUFDZSxPQUFOLENBQWMsQ0FBZCxDQUxO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dUIsTUFMUjtBQU1FLGdCQUFNLEVBQUMsUUFOVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlDRDs7R0FqRHVCSixnQjtVQU1ONUIsUzs7O0tBTk00QixnQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jOTY4ZWNmZTEzN2ZiZGFkNWM0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIEhpZGRlbiwgTGluaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBUaGVtZSwgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgUG9ydGZvbGlvQ29tcGFueVByb3BzIHtcclxuICBkZXNjPzogc3RyaW5nO1xyXG4gIGltYWdlU3JjPzogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB1cmxTcmM/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgYm9keTI6IHtcclxuICAgICAgLy8gTk9URSBrbyDrlLDroZwg7KSY64+EIOyViOuQmOyEnCDstpTqsIDtlahcclxuICAgICAgZm9udEZhbWlseTogXCJOb3RvIFNlcmlmIEtSLCBzZXJpZlwiLFxyXG4gICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgIGhlaWdodDogNzAsXHJcbiAgICAgIHdoaXRlU3BhY2U6IFwicHJlLWxpbmVcIixcclxuICAgIH0sXHJcbiAgICBidXR0b246IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmOGUwMGVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIH0sXHJcbiAgICBsb2dvOiB7XHJcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgIG9iamVjdEZpdDogXCJzY2FsZS1kb3duXCIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIH0sXHJcbiAgICBsb2dvQm94OiB7XHJcbiAgICAgIGhlaWdodDogMTUwLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5vbmx5KFwieHNcIildOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ydGZvbGlvQ29tcGFueSh7XHJcbiAgZGVzYyxcclxuICBpbWFnZVNyYyxcclxuICBuYW1lLFxyXG4gIHVybFNyYyxcclxufTogUG9ydGZvbGlvQ29tcGFueVByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0JveH1cclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggYWxpZ25TZWxmPVwiY2VudGVyXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e3VybFNyY30gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZVNyY30gYWx0PXtuYW1lfSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30gLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxIaWRkZW4geHNEb3duPlxyXG4gICAgICAgIDxCb3ggd2lkdGg9XCIxMDAlXCIgbWI9ezEuNX0gZGlzcGxheT1cImZsZXhcIj5cclxuICAgICAgICAgIDxCb3ggYWxpZ25TZWxmPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcclxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFwia29cIiwgY2xhc3Nlcy5ib2R5Mil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZGVzY31cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCB3aWR0aD1cIjEwMCVcIiBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICBkaXNhYmxlRWxldmF0aW9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgIGhyZWY9e3VybFNyY31cclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgSG9tZXBhZ2VcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0hpZGRlbj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==