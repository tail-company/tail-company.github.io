webpackHotUpdate_N_E("pages/index",{

/***/ "./components/People.tsx":
/*!*******************************!*\
  !*** ./components/People.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return People; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_FullPageSlide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/FullPageSlide */ "./components/FullPageSlide.tsx");
/* harmony import */ var components_PeopleMember__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/PeopleMember */ "./components/PeopleMember.tsx");



var _jsxFileName = "C:\\workspace\\tail-company.github.io\\components\\People.tsx",
    _s = $RefreshSig$();






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  var _h2, _title;

  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
    content: {
      position: "relative"
    },
    desc: {
      bottom: 0,
      left: 0,
      position: "absolute",
      zIndex: -1
    },
    h1: Object(C_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      fontSize: 19 * 0.75
    }, theme.breakpoints.up("sm"), {
      fontSize: 19
    }),
    h2: (_h2 = {
      fontSize: 72 * 0.5 * 0.5
    }, Object(C_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_h2, theme.breakpoints.only("xs"), {
      marginBottom: theme.spacing(3)
    }), Object(C_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_h2, theme.breakpoints.up("sm"), {
      fontSize: 72 * 0.5
    }), Object(C_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_h2, theme.breakpoints.up("md"), {
      fontSize: 72
    }), _h2),
    root: {
      position: "relative"
    },
    title: (_title = {
      position: "absolute",
      top: theme.spacing(2 * 0.6),
      right: 0
    }, Object(C_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_title, theme.breakpoints.up("sm"), {
      top: theme.spacing(2 * 0.8)
    }), Object(C_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_title, theme.breakpoints.up("md"), {
      top: theme.spacing(2)
    }), _title)
  });
});
var memberList = [{
  name: "이호종",
  position: "Managing Partner",
  career: "(현)맥스웰피부과 원장\n(현)서울대 의료빅데이터센터\n(전)라임소사이어티 Founder\n(전)무브 CTO\n서울대 의학과 및 대학원",
  imageSrc: "/photo-hojong.jpg"
}, {
  name: "지승범",
  position: "Managing Partner",
  career: "(전)화이브라더스코리아 CEO\n(전)화이인베스트먼트 CEO\n(전)KTB Investment\n(전)KPMG FAS",
  imageSrc: "/photo-jayji.png"
}, {
  name: "배영진",

  /*position: "Venture Partner",
  career:
    "(현)LINE Games CSO\n(전)NextFloor CFO\n(LINE Games 인수)\n(전)MobilFactory Founder\n(NextFloor 인수)",*/
  position: "Advisor",
  career: "LINE Games CSO/부대표",
  imageSrc: "/photo-bae.jpg"
}, {
  name: "이용수",
  position: "Advisor",
  career: "Korea/NY Lawyer",
  imageSrc: "/photo-jjyslee.png"
}, {
  name: "박준성",
  position: "Advisor",
  career: "Legend Capital MD",
  imageSrc: "/photo-parkjs.jpg"
}, {
  name: "강병희",
  position: "Advisor",
  career: "서울대 의학전문대학원\n서울대 의학과 생화학교실 박사",
  imageSrc: "/photo-bh.jpg"
}];
function People() {
  _s();

  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      memberIndex = _useState[0],
      setMemberIndex = _useState[1];

  var onPrevClick = function onPrevClick(e) {
    e.preventDefault();
    e.stopPropagation();
    setMemberIndex((memberIndex - 1 + memberList.length) % memberList.length);
  };

  var onNextClick = function onNextClick(e) {
    e.preventDefault();
    e.stopPropagation();
    setMemberIndex((memberIndex + 1) % memberList.length);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_FullPageSlide__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      className: classes.root,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        className: classes.title,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
          variant: "h2",
          component: "h1",
          align: "right",
          className: classes.h1,
          children: "People"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        flexGrow: 1,
        height: 0,
        alignItems: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
            smUp: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
                alignSelf: "center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  variant: "h2",
                  align: "right",
                  className: classes.h2,
                  children: ["Medical Doctors", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: ["Entrepreneurship", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "yellow",
                      children: "."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 142,
                      columnNumber: 39
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_PeopleMember__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  name: memberList[memberIndex].name,
                  position: memberList[memberIndex].position,
                  career: memberList[memberIndex].career,
                  imageSrc: memberList[memberIndex].imageSrc,
                  onPrevClick: onPrevClick,
                  onNextClick: onNextClick
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
            xsDown: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              className: classes.content,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
                className: classes.desc,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  variant: "h2",
                  className: classes.h2,
                  children: ["Medical", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 21
                  }, this), "Doctors", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 168,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: ["Entrepreneurship", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "yellow",
                      children: "."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 170,
                      columnNumber: 39
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 169,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
                alignSelf: "center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_PeopleMember__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  name: memberList[memberIndex].name,
                  position: memberList[memberIndex].position,
                  career: memberList[memberIndex].career,
                  imageSrc: memberList[memberIndex].imageSrc,
                  onPrevClick: onPrevClick,
                  onNextClick: onNextClick
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 5
  }, this);
}

_s(People, "169cuQgUaKwWrtKf/G3GuudrzJ8=", false, function () {
  return [useStyles];
});

_c = People;

var _c;

$RefreshReg$(_c, "People");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QZW9wbGUudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsImNvbnRlbnQiLCJwb3NpdGlvbiIsImRlc2MiLCJib3R0b20iLCJsZWZ0IiwiekluZGV4IiwiaDEiLCJmb250U2l6ZSIsImJyZWFrcG9pbnRzIiwidXAiLCJoMiIsIm9ubHkiLCJtYXJnaW5Cb3R0b20iLCJzcGFjaW5nIiwicm9vdCIsInRpdGxlIiwidG9wIiwicmlnaHQiLCJtZW1iZXJMaXN0IiwibmFtZSIsImNhcmVlciIsImltYWdlU3JjIiwiUGVvcGxlIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwibWVtYmVySW5kZXgiLCJzZXRNZW1iZXJJbmRleCIsIm9uUHJldkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwibGVuZ3RoIiwib25OZXh0Q2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFdBQU8sRUFBRTtBQUNQQyxjQUFRLEVBQUU7QUFESCxLQURFO0FBSVhDLFFBQUksRUFBRTtBQUNKQyxZQUFNLEVBQUUsQ0FESjtBQUVKQyxVQUFJLEVBQUUsQ0FGRjtBQUdKSCxjQUFRLEVBQUUsVUFITjtBQUlKSSxZQUFNLEVBQUUsQ0FBQztBQUpMLEtBSks7QUFVWEMsTUFBRSxFQUFFO0FBQ0ZDLGNBQVEsRUFBRSxLQUFLO0FBRGYsT0FFQ1QsS0FBSyxDQUFDVSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUZELEVBRThCO0FBQzVCRixjQUFRLEVBQUU7QUFEa0IsS0FGOUIsQ0FWUztBQWdCWEcsTUFBRTtBQUNBSCxjQUFR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O0FBQUE7QUFBQSwwQkFGRiwwQkFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUpGLGVBS0U7QUFBQSxnRUFDa0I7QUFBTSwrQkFBUyxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFORixlQWlCRSxxRUFBQyxxREFBRDtBQUFLLHlCQUFTLEVBQUMsUUFBZjtBQUFBLHVDQUNFLHFFQUFDLCtEQUFEO0FBQ0Usc0JBQUksRUFBRVEsVUFBVSxDQUFDTyxXQUFELENBQVYsQ0FBd0JOLElBRGhDO0FBRUUsMEJBQVEsRUFBRUQsVUFBVSxDQUFDTyxXQUFELENBQVYsQ0FBd0J4QixRQUZwQztBQUdFLHdCQUFNLEVBQUVpQixVQUFVLENBQUNPLFdBQUQsQ0FBVixDQUF3QkwsTUFIbEM7QUFJRSwwQkFBUSxFQUFFRixVQUFVLENBQUNPLFdBQUQsQ0FBVixDQUF3QkosUUFKcEM7QUFLRSw2QkFBVyxFQUFFTSxXQUxmO0FBTUUsNkJBQVcsRUFBRUs7QUFOZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyRUQ7O0dBN0Z1QlYsTTtVQUNOMUIsUzs7O0tBRE0wQixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFkMTJjNmUyZDY2MTQwYTAxYTNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEhpZGRlbiwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBUaGVtZSwgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBGdWxsUGFnZVNsaWRlIGZyb20gXCJjb21wb25lbnRzL0Z1bGxQYWdlU2xpZGVcIjtcclxuaW1wb3J0IFBlb3BsZU1lbWJlciBmcm9tIFwiY29tcG9uZW50cy9QZW9wbGVNZW1iZXJcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgY29udGVudDoge1xyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgfSxcclxuICAgIGRlc2M6IHtcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICB6SW5kZXg6IC0xLFxyXG4gICAgfSxcclxuICAgIGgxOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxOSAqIDAuNzUsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICAgIGZvbnRTaXplOiAxOSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBoMjoge1xyXG4gICAgICBmb250U2l6ZTogNzIgKiAwLjUgKiAwLjUsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5vbmx5KFwieHNcIildOiB7XHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICB9LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgICBmb250U2l6ZTogNzIgKiAwLjUsXHJcbiAgICAgIH0sXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICAgIGZvbnRTaXplOiA3MixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICByb290OiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgdG9wOiB0aGVtZS5zcGFjaW5nKDIgKiAwLjYpLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgICAgdG9wOiB0aGVtZS5zcGFjaW5nKDIgKiAwLjgpLFxyXG4gICAgICB9LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pXHJcbik7XHJcblxyXG5jb25zdCBtZW1iZXJMaXN0ID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwi7J207Zi47KKFXCIsXHJcbiAgICBwb3NpdGlvbjogXCJNYW5hZ2luZyBQYXJ0bmVyXCIsXHJcbiAgICBjYXJlZXI6XHJcbiAgICAgIFwiKO2YhCnrp6XsiqTsm7DtlLzrtoDqs7wg7JuQ7J6lXFxuKO2YhCnshJzsmrjrjIAg7J2Y66OM67mF642w7J207YSw7IS87YSwXFxuKOyghCnrnbzsnoTshozsgqzsnbTslrTti7AgRm91bmRlclxcbijsoIQp66y067iMIENUT1xcbuyEnOyauOuMgCDsnZjtlZnqs7wg67CPIOuMgO2VmeybkFwiLFxyXG4gICAgaW1hZ2VTcmM6IFwiL3Bob3RvLWhvam9uZy5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwi7KeA7Iq567KUXCIsXHJcbiAgICBwb3NpdGlvbjogXCJNYW5hZ2luZyBQYXJ0bmVyXCIsXHJcbiAgICBjYXJlZXI6XHJcbiAgICAgIFwiKOyghCntmZTsnbTruIzrnbzrjZTsiqTsvZTrpqzslYQgQ0VPXFxuKOyghCntmZTsnbTsnbjrsqDsiqTtirjrqLztirggQ0VPXFxuKOyghClLVEIgSW52ZXN0bWVudFxcbijsoIQpS1BNRyBGQVNcIixcclxuICAgIGltYWdlU3JjOiBcIi9waG90by1qYXlqaS5wbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwi67Cw7JiB7KeEXCIsXHJcbiAgICAvKnBvc2l0aW9uOiBcIlZlbnR1cmUgUGFydG5lclwiLFxyXG4gICAgY2FyZWVyOlxyXG4gICAgICBcIijtmIQpTElORSBHYW1lcyBDU09cXG4o7KCEKU5leHRGbG9vciBDRk9cXG4oTElORSBHYW1lcyDsnbjsiJgpXFxuKOyghClNb2JpbEZhY3RvcnkgRm91bmRlclxcbihOZXh0Rmxvb3Ig7J247IiYKVwiLCovXHJcbiAgICBwb3NpdGlvbjogXCJBZHZpc29yXCIsXHJcbiAgICBjYXJlZXI6IFwiTElORSBHYW1lcyBDU08v67aA64yA7ZGcXCIsXHJcbiAgICBpbWFnZVNyYzogXCIvcGhvdG8tYmFlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCLsnbTsmqnsiJhcIixcclxuICAgIHBvc2l0aW9uOiBcIkFkdmlzb3JcIixcclxuICAgIGNhcmVlcjogXCJLb3JlYS9OWSBMYXd5ZXJcIixcclxuICAgIGltYWdlU3JjOiBcIi9waG90by1qanlzbGVlLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCLrsJXspIDshLFcIixcclxuICAgIHBvc2l0aW9uOiBcIkFkdmlzb3JcIixcclxuICAgIGNhcmVlcjogXCJMZWdlbmQgQ2FwaXRhbCBNRFwiLFxyXG4gICAgaW1hZ2VTcmM6IFwiL3Bob3RvLXBhcmtqcy5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwi6rCV67OR7Z2sXCIsXHJcbiAgICBwb3NpdGlvbjogXCJBZHZpc29yXCIsXHJcbiAgICBjYXJlZXI6IFwi7ISc7Jq464yAIOydmO2VmeyghOusuOuMgO2VmeybkFxcbuyEnOyauOuMgCDsnZjtlZnqs7wg7IOd7ZmU7ZWZ6rWQ7IukIOuwleyCrFwiLFxyXG4gICAgaW1hZ2VTcmM6IFwiL3Bob3RvLWJoLmpwZ1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZW9wbGUoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFttZW1iZXJJbmRleCwgc2V0TWVtYmVySW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IG9uUHJldkNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIHNldE1lbWJlckluZGV4KChtZW1iZXJJbmRleCAtIDEgKyBtZW1iZXJMaXN0Lmxlbmd0aCkgJSBtZW1iZXJMaXN0Lmxlbmd0aCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25OZXh0Q2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgc2V0TWVtYmVySW5kZXgoKG1lbWJlckluZGV4ICsgMSkgJSBtZW1iZXJMaXN0Lmxlbmd0aCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGdWxsUGFnZVNsaWRlPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD1cImgyXCJcclxuICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICBhbGlnbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmgxfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBQZW9wbGVcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IGZsZXhHcm93PXsxfSBoZWlnaHQ9ezB9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxCb3ggd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8SGlkZGVuIHNtVXA+XHJcbiAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjEwMCVcIiBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgICAgIDxCb3ggYWxpZ25TZWxmPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGFsaWduPVwicmlnaHRcIiBjbGFzc05hbWU9e2NsYXNzZXMuaDJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIE1lZGljYWwgRG9jdG9yc3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRW50cmVwcmVuZXVyc2hpcDxzcGFuIGNsYXNzTmFtZT1cInllbGxvd1wiPi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFBlb3BsZU1lbWJlclxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e21lbWJlckxpc3RbbWVtYmVySW5kZXhdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249e21lbWJlckxpc3RbbWVtYmVySW5kZXhdLnBvc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmVlcj17bWVtYmVyTGlzdFttZW1iZXJJbmRleF0uY2FyZWVyfVxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3JjPXttZW1iZXJMaXN0W21lbWJlckluZGV4XS5pbWFnZVNyY31cclxuICAgICAgICAgICAgICAgICAgICBvblByZXZDbGljaz17b25QcmV2Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgb25OZXh0Q2xpY2s9e29uTmV4dENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICA8SGlkZGVuIHhzRG93bj5cclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjfT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmgyfT5cclxuICAgICAgICAgICAgICAgICAgICBNZWRpY2FsXHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgRG9jdG9yc1xyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICBFbnRyZXByZW5ldXJzaGlwPHNwYW4gY2xhc3NOYW1lPVwieWVsbG93XCI+Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGFsaWduU2VsZj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8UGVvcGxlTWVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17bWVtYmVyTGlzdFttZW1iZXJJbmRleF0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17bWVtYmVyTGlzdFttZW1iZXJJbmRleF0ucG9zaXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZWVyPXttZW1iZXJMaXN0W21lbWJlckluZGV4XS5jYXJlZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM9e21lbWJlckxpc3RbbWVtYmVySW5kZXhdLmltYWdlU3JjfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uUHJldkNsaWNrPXtvblByZXZDbGlja31cclxuICAgICAgICAgICAgICAgICAgICBvbk5leHRDbGljaz17b25OZXh0Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0Z1bGxQYWdlU2xpZGU+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9