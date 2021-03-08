webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PeopleMember.tsx":
/*!*************************************!*\
  !*** ./components/PeopleMember.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PeopleMember; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_hojonglee_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_TrendingFlat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/TrendingFlat */ "./node_modules/@material-ui/icons/TrendingFlat.js");
/* harmony import */ var _material_ui_icons_TrendingFlat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_TrendingFlat__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "/home/hojonglee/tail-company.github.io/components/PeopleMember.tsx",
    _s = $RefreshSig$();






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  var _body, _body2, _h, _h2, _photoBox;

  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
    body1: (_body = {
      fontSize: 10.5,
      height: 95 * 10.5 / 12,
      marginBottom: theme.spacing(4),
      whiteSpace: "pre-line"
    }, Object(_home_hojonglee_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_body, theme.breakpoints.up("sm"), {
      fontSize: 12,
      height: 95,
      marginBottom: theme.spacing(5)
    }), Object(_home_hojonglee_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_body, theme.breakpoints.up("md"), {
      marginBottom: theme.spacing(6)
    }), _body),
    body2: (_body2 = {
      fontSize: 16 * 0.75,
      fontWeight: "bold"
    }, Object(_home_hojonglee_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_body2, theme.breakpoints.only("xs"), {
      paddingLeft: theme.spacing(2)
    }), Object(_home_hojonglee_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_body2, theme.breakpoints.up("sm"), {
      fontSize: 16
    }), _body2),
    h3: (_h = {
      fontSize: 18 * 0.75,
      fontWeight: "bold",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(0.5)
    }, Object(_home_hojonglee_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_h, theme.breakpoints.up("sm"), {
      fontSize: 18,
      marginTop: theme.spacing(3)
    }), Object(_home_hojonglee_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_h, theme.breakpoints.up("md"), {
      marginTop: theme.spacing(4)
    }), _h),
    h4: (_h2 = {
      fontSize: 18 * 0.75,
      fontWeight: "bold",
      marginBottom: theme.spacing(2)
    }, Object(_home_hojonglee_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_h2, theme.breakpoints.up("sm"), {
      fontSize: 18,
      marginBottom: theme.spacing(3)
    }), Object(_home_hojonglee_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_h2, theme.breakpoints.up("md"), {
      marginBottom: theme.spacing(4)
    }), _h2),
    icon: {
      verticalAlign: "middle"
    },
    iconPrev: {
      transform: "scaleX(-1)"
    },
    next: {
      paddingLeft: theme.spacing(1.5)
    },
    prev: {
      paddingRight: theme.spacing(1.5)
    },
    photo: {
      borderRadius: 5,
      height: "100%",
      objectFit: "cover",
      width: "100%"
    },
    photoBox: (_photoBox = {
      height: 450 * 0.75 * 0.65,
      marginBottom: theme.spacing(2 * 0.5 * 1),
      marginLeft: theme.spacing(3),
      width: 300 * 0.75 * 0.65
    }, Object(_home_hojonglee_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_photoBox, theme.breakpoints.up("sm"), {
      height: 450 * 0.75,
      marginBottom: theme.spacing(2 * 0.5),
      marginLeft: theme.spacing(4),
      width: 300 * 0.75
    }), Object(_home_hojonglee_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_photoBox, theme.breakpoints.up("md"), {
      height: 450,
      marginBottom: theme.spacing(2),
      width: 300
    }), _photoBox)
  });
});
function PeopleMember(_ref) {
  _s();

  var career = _ref.career,
      imageSrc = _ref.imageSrc,
      name = _ref.name,
      onNextClick = _ref.onNextClick,
      onPrevClick = _ref.onPrevClick,
      position = _ref.position;
  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        variant: "h3",
        align: "right",
        className: classes.h3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "ko",
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        variant: "h4",
        align: "right",
        className: classes.h4,
        children: position
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        variant: "body1",
        align: "right",
        className: classes.body1,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "ko",
          children: career
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        variant: "body2",
        align: "right",
        className: classes.body2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          href: "#",
          color: "inherit",
          className: classes.prev,
          onClick: onPrevClick,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_TrendingFlat__WEBPACK_IMPORTED_MODULE_4___default.a, {
            fontSize: "inherit",
            className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.icon, classes.iconPrev)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, this), " ", "Prev"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, this), " / ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          href: "#",
          color: "inherit",
          className: classes.next,
          onClick: onNextClick,
          children: ["Next", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_TrendingFlat__WEBPACK_IMPORTED_MODULE_4___default.a, {
            fontSize: "inherit",
            className: classes.icon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: classes.photoBox,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: imageSrc,
        alt: name,
        className: classes.photo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 5
  }, this);
}

_s(PeopleMember, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = PeopleMember;

var _c;

$RefreshReg$(_c, "PeopleMember");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QZW9wbGVNZW1iZXIudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsImJvZHkxIiwiZm9udFNpemUiLCJoZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJzcGFjaW5nIiwid2hpdGVTcGFjZSIsImJyZWFrcG9pbnRzIiwidXAiLCJib2R5MiIsImZvbnRXZWlnaHQiLCJvbmx5IiwicGFkZGluZ0xlZnQiLCJoMyIsIm1hcmdpblRvcCIsImg0IiwiaWNvbiIsInZlcnRpY2FsQWxpZ24iLCJpY29uUHJldiIsInRyYW5zZm9ybSIsIm5leHQiLCJwcmV2IiwicGFkZGluZ1JpZ2h0IiwicGhvdG8iLCJib3JkZXJSYWRpdXMiLCJvYmplY3RGaXQiLCJ3aWR0aCIsInBob3RvQm94IiwibWFyZ2luTGVmdCIsIlBlb3BsZU1lbWJlciIsImNhcmVlciIsImltYWdlU3JjIiwibmFtZSIsIm9uTmV4dENsaWNrIiwib25QcmV2Q2xpY2siLCJwb3NpdGlvbiIsImNsYXNzZXMiLCJjbHN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7O0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsU0FBSztBQUNIQyxjQUFRLEVBQUUsSUFEUDtBQUVIQyxZQUFNLEVBQUcsS0FBSyxJQUFOLEdBQWMsRUFGbkI7QUFHSEMsa0JBQVksRUFBRUwsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZCxDQUhYO0FBSUhDLGdCQUFVLEVBQUU7QUFKVCw2S0FLRlAsS0FBSyxDQUFDUSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUxFLEVBSzJCO0FBQzVCTixjQUFRLEVBQUUsRUFEa0I7QUFFNUJDLFlBQU0sRUFBRSxFQUZv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TyxHQU5QLGVBT0UscUVBQUMsc0VBQUQ7QUFBa0Isb0JBQVEsRUFBQyxTQUEzQjtBQUFxQyxxQkFBUyxFQUFFRyxPQUFPLENBQUNwQjtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQW9DRSxxRUFBQyxxREFBRDtBQUFLLGVBQVMsRUFBRW9CLE9BQU8sQ0FBQ1QsUUFBeEI7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBRUksUUFBVjtBQUFvQixXQUFHLEVBQUVDLElBQXpCO0FBQStCLGlCQUFTLEVBQUVJLE9BQU8sQ0FBQ2I7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQ0Q7O0dBcER1Qk0sWTtVQVFOaEMsUzs7O0tBUk1nQyxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjEyYmY3OWQzYmE3YWFkMWI3NWNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIExpbmssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IFRoZW1lLCBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgVHJlbmRpbmdGbGF0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1RyZW5kaW5nRmxhdFwiO1xuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFBlb3BsZU1lbWJlclByb3BzIHtcbiAgY2FyZWVyPzogc3RyaW5nO1xuICBpbWFnZVNyYz86IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBvbk5leHRDbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB2b2lkO1xuICBvblByZXZDbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB2b2lkO1xuICBwb3NpdGlvbjogc3RyaW5nO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgYm9keTE6IHtcbiAgICAgIGZvbnRTaXplOiAxMC41LFxuICAgICAgaGVpZ2h0OiAoOTUgKiAxMC41KSAvIDEyLFxuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgICAgd2hpdGVTcGFjZTogXCJwcmUtbGluZVwiLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgaGVpZ2h0OiA5NSxcbiAgICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDUpLFxuICAgICAgfSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xuICAgICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNiksXG4gICAgICB9LFxuICAgIH0sXG4gICAgYm9keTI6IHtcbiAgICAgIGZvbnRTaXplOiAxNiAqIDAuNzUsXG4gICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5vbmx5KFwieHNcIildOiB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgfSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xuICAgICAgICBmb250U2l6ZTogMTYsXG4gICAgICB9LFxuICAgIH0sXG4gICAgaDM6IHtcbiAgICAgIGZvbnRTaXplOiAxOCAqIDAuNzUsXG4gICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygwLjUpLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XG4gICAgICAgIGZvbnRTaXplOiAxOCxcbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgfSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgICB9LFxuICAgIH0sXG4gICAgaDQ6IHtcbiAgICAgIGZvbnRTaXplOiAxOCAqIDAuNzUsXG4gICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xuICAgICAgICBmb250U2l6ZTogMTgsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcbiAgICAgIH0sXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG4gICAgfSxcbiAgICBpY29uUHJldjoge1xuICAgICAgdHJhbnNmb3JtOiBcInNjYWxlWCgtMSlcIixcbiAgICB9LFxuICAgIG5leHQ6IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDEuNSksXG4gICAgfSxcbiAgICBwcmV2OiB7XG4gICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMS41KSxcbiAgICB9LFxuICAgIHBob3RvOiB7XG4gICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgfSxcbiAgICBwaG90b0JveDoge1xuICAgICAgaGVpZ2h0OiA0NTAgKiAwLjc1ICogMC42NSxcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyICogMC41ICogMSksXG4gICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgd2lkdGg6IDMwMCAqIDAuNzUgKiAwLjY1LFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XG4gICAgICAgIGhlaWdodDogNDUwICogMC43NSxcbiAgICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIgKiAwLjUpLFxuICAgICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgICAgICB3aWR0aDogMzAwICogMC43NSxcbiAgICAgIH0sXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcbiAgICAgICAgaGVpZ2h0OiA0NTAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlb3BsZU1lbWJlcih7XG4gIGNhcmVlcixcbiAgaW1hZ2VTcmMsXG4gIG5hbWUsXG4gIG9uTmV4dENsaWNrLFxuICBvblByZXZDbGljayxcbiAgcG9zaXRpb24sXG59OiBQZW9wbGVNZW1iZXJQcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCI+XG4gICAgICA8Qm94PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBhbGlnbj1cInJpZ2h0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmgzfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJrb1wiPntuYW1lfTwvc3Bhbj5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBhbGlnbj1cInJpZ2h0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmg0fT5cbiAgICAgICAgICB7cG9zaXRpb259XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgYWxpZ249XCJyaWdodFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5MX0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwia29cIj57Y2FyZWVyfTwvc3Bhbj5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBhbGlnbj1cInJpZ2h0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJvZHkyfT5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcmV2fVxuICAgICAgICAgICAgb25DbGljaz17b25QcmV2Q2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRyZW5kaW5nRmxhdEljb25cbiAgICAgICAgICAgICAgZm9udFNpemU9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuaWNvbiwgY2xhc3Nlcy5pY29uUHJldil9XG4gICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgIFByZXZcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAge1wiIC8gXCJ9XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmV4dH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uTmV4dENsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE5leHR7XCIgXCJ9XG4gICAgICAgICAgICA8VHJlbmRpbmdGbGF0SWNvbiBmb250U2l6ZT1cImluaGVyaXRcIiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucGhvdG9Cb3h9PlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2VTcmN9IGFsdD17bmFtZX0gY2xhc3NOYW1lPXtjbGFzc2VzLnBob3RvfSAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9