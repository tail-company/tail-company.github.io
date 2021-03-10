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
/* harmony import */ var _home_hojonglee_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_FullPageSlide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/FullPageSlide */ "./components/FullPageSlide.tsx");
/* harmony import */ var components_PeopleMember__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/PeopleMember */ "./components/PeopleMember.tsx");



var _jsxFileName = "/home/hojonglee/tail-company.github.io/components/People.tsx",
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
    h1: Object(_home_hojonglee_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      fontSize: 19 * 0.75
    }, theme.breakpoints.up("sm"), {
      fontSize: 19
    }),
    h2: (_h2 = {
      fontSize: 72 * 0.5 * 0.5
    }, Object(_home_hojonglee_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_h2, theme.breakpoints.only("xs"), {
      marginBottom: theme.spacing(3)
    }), Object(_home_hojonglee_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_h2, theme.breakpoints.up("sm"), {
      fontSize: 72 * 0.5
    }), Object(_home_hojonglee_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_h2, theme.breakpoints.up("md"), {
      fontSize: 72
    }), _h2),
    root: {
      position: "relative"
    },
    title: (_title = {
      position: "absolute",
      top: theme.spacing(2 * 0.6),
      right: 0
    }, Object(_home_hojonglee_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_title, theme.breakpoints.up("sm"), {
      top: theme.spacing(2 * 0.8)
    }), Object(_home_hojonglee_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_title, theme.breakpoints.up("md"), {
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
  name: "이형철",
  position: "Advisor",
  career: "서울대 마취통증의학과 조교수\n서울대 의과학과 마취통증의학 박사\n서울대 의학과\n서울대 공과대학\nVital Recorder 개발",
  imageSrc: "/photo-lucid80.jpg"
}, {
  name: "안상진",
  position: "Advisor",
  career: "인제대 의학과 약리학교실 조교수\n서울대 의과학과 약리학 박사\n서울대 의학과",
  imageSrc: "/photo-mahler83.jpg"
}, {
  name: "강병희",
  position: "Advisor",
  career: "서울대 의과학과 생화학 박사\n서울대 의학전문대학원",
  imageSrc: "/photo-bh.jpg"
}, {
  name: "이승복",
  position: "Advisor",
  career: "서울대 의과학과 생화학 박사\n서울대 의학과",
  imageSrc: "/photo-sb.png"
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
          lineNumber: 145,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
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
                      lineNumber: 162,
                      columnNumber: 39
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 161,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
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
                  lineNumber: 165,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
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
                    lineNumber: 186,
                    columnNumber: 21
                  }, this), "Doctors", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: ["Entrepreneurship", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "yellow",
                      children: "."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 190,
                      columnNumber: 39
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
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
                  lineNumber: 195,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 137,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QZW9wbGUudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsImNvbnRlbnQiLCJwb3NpdGlvbiIsImRlc2MiLCJib3R0b20iLCJsZWZ0IiwiekluZGV4IiwiaDEiLCJmb250U2l6ZSIsImJyZWFrcG9pbnRzIiwidXAiLCJoMiIsIm9ubHkiLCJtYXJnaW5Cb3R0b20iLCJzcGFjaW5nIiwicm9vdCIsInRpdGxlIiwidG9wIiwicmlnaHQiLCJtZW1iZXJMaXN0IiwibmFtZSIsImNhcmVlciIsImltYWdlU3JjIiwiUGVvcGxlIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwibWVtYmVySW5kZXgiLCJzZXRNZW1iZXJJbmRleCIsIm9uUHJldkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwibGVuZ3RoIiwib25OZXh0Q2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFdBQU8sRUFBRTtBQUNQQyxjQUFRLEVBQUU7QUFESCxLQURFO0FBSVhDLFFBQUksRUFBRTtBQUNKQyxZQUFNLEVBQUUsQ0FESjtBQUVKQyxVQUFJLEVBQUUsQ0FGRjtBQUdKSCxjQUFRLEVBQUUsVUFITjtBQUlKSSxZQUFNLEVBQUUsQ0FBQztBQUpMLEtBSks7QUFVWEMsTUFBRSxFQUFFO0FBQ0ZDLGNBQVEsRUFBRSxLQUFLO0FBRGYsT0FFQ1QsS0FBSyxDQUFDVSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUZELEVBRThCO0FBQzVCRixjQUFRLEVBQUU7QUFEa0IsS0FGOUIsQ0FWUztBQWdCWEcsTUFBRTtBQUNBSCxjQUFR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QUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyRUQ7O0dBN0Z1QlYsTTtVQUNOMUIsUzs7O0tBRE0wQixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjEzOGNlNTFiYWVhZTcwY2EwZjQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEhpZGRlbiwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgVGhlbWUsIGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgRnVsbFBhZ2VTbGlkZSBmcm9tIFwiY29tcG9uZW50cy9GdWxsUGFnZVNsaWRlXCI7XG5pbXBvcnQgUGVvcGxlTWVtYmVyIGZyb20gXCJjb21wb25lbnRzL1Blb3BsZU1lbWJlclwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgY29udGVudDoge1xuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB9LFxuICAgIGRlc2M6IHtcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgekluZGV4OiAtMSxcbiAgICB9LFxuICAgIGgxOiB7XG4gICAgICBmb250U2l6ZTogMTkgKiAwLjc1LFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XG4gICAgICAgIGZvbnRTaXplOiAxOSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBoMjoge1xuICAgICAgZm9udFNpemU6IDcyICogMC41ICogMC41LFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLm9ubHkoXCJ4c1wiKV06IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgfSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xuICAgICAgICBmb250U2l6ZTogNzIgKiAwLjUsXG4gICAgICB9LFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XG4gICAgICAgIGZvbnRTaXplOiA3MixcbiAgICAgIH0sXG4gICAgfSxcbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMiAqIDAuNiksXG4gICAgICByaWdodDogMCxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xuICAgICAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMiAqIDAuOCksXG4gICAgICB9LFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XG4gICAgICAgIHRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmNvbnN0IG1lbWJlckxpc3QgPSBbXG4gIHtcbiAgICBuYW1lOiBcIuydtO2YuOyihVwiLFxuICAgIHBvc2l0aW9uOiBcIk1hbmFnaW5nIFBhcnRuZXJcIixcbiAgICBjYXJlZXI6XG4gICAgICBcIijtmIQp66el7Iqk7Juw7ZS867aA6rO8IOybkOyepVxcbijtmIQp7ISc7Jq464yAIOydmOujjOu5heuNsOydtO2EsOyEvO2EsFxcbijsoIQp65287J6E7IaM7IKs7J207Ja07YuwIEZvdW5kZXJcXG4o7KCEKeustOu4jCBDVE9cXG7shJzsmrjrjIAg7J2Y7ZWZ6rO8IOuwjyDrjIDtlZnsm5BcIixcbiAgICBpbWFnZVNyYzogXCIvcGhvdG8taG9qb25nLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCLsp4DsirnrspRcIixcbiAgICBwb3NpdGlvbjogXCJNYW5hZ2luZyBQYXJ0bmVyXCIsXG4gICAgY2FyZWVyOlxuICAgICAgXCIo7KCEKe2ZlOydtOu4jOudvOuNlOyKpOy9lOumrOyVhCBDRU9cXG4o7KCEKe2ZlOydtOyduOuyoOyKpO2KuOuovO2KuCBDRU9cXG4o7KCEKUtUQiBJbnZlc3RtZW50XFxuKOyghClLUE1HIEZBU1wiLFxuICAgIGltYWdlU3JjOiBcIi9waG90by1qYXlqaS5wbmdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi67Cw7JiB7KeEXCIsXG4gICAgLypwb3NpdGlvbjogXCJWZW50dXJlIFBhcnRuZXJcIixcbiAgICBjYXJlZXI6XG4gICAgICBcIijtmIQpTElORSBHYW1lcyBDU09cXG4o7KCEKU5leHRGbG9vciBDRk9cXG4oTElORSBHYW1lcyDsnbjsiJgpXFxuKOyghClNb2JpbEZhY3RvcnkgRm91bmRlclxcbihOZXh0Rmxvb3Ig7J247IiYKVwiLCovXG4gICAgcG9zaXRpb246IFwiQWR2aXNvclwiLFxuICAgIGNhcmVlcjogXCJMSU5FIEdhbWVzIENTTy/rtoDrjIDtkZxcIixcbiAgICBpbWFnZVNyYzogXCIvcGhvdG8tYmFlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCLsnbTsmqnsiJhcIixcbiAgICBwb3NpdGlvbjogXCJBZHZpc29yXCIsXG4gICAgY2FyZWVyOiBcIktvcmVhL05ZIExhd3llclwiLFxuICAgIGltYWdlU3JjOiBcIi9waG90by1qanlzbGVlLnBuZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCLrsJXspIDshLFcIixcbiAgICBwb3NpdGlvbjogXCJBZHZpc29yXCIsXG4gICAgY2FyZWVyOiBcIkxlZ2VuZCBDYXBpdGFsIE1EXCIsXG4gICAgaW1hZ2VTcmM6IFwiL3Bob3RvLXBhcmtqcy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi7J207ZiV7LKgXCIsXG4gICAgcG9zaXRpb246IFwiQWR2aXNvclwiLFxuICAgIGNhcmVlcjpcbiAgICAgIFwi7ISc7Jq464yAIOuniOy3qO2GteymneydmO2VmeqzvCDsobDqtZDsiJhcXG7shJzsmrjrjIAg7J2Y6rO87ZWZ6rO8IOuniOy3qO2GteymneydmO2VmSDrsJXsgqxcXG7shJzsmrjrjIAg7J2Y7ZWZ6rO8XFxu7ISc7Jq464yAIOqzteqzvOuMgO2VmVxcblZpdGFsIFJlY29yZGVyIOqwnOuwnFwiLFxuICAgIGltYWdlU3JjOiBcIi9waG90by1sdWNpZDgwLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCLslYjsg4Hsp4RcIixcbiAgICBwb3NpdGlvbjogXCJBZHZpc29yXCIsXG4gICAgY2FyZWVyOlxuICAgICAgXCLsnbjsoJzrjIAg7J2Y7ZWZ6rO8IOyVveumrO2Vmeq1kOyLpCDsobDqtZDsiJhcXG7shJzsmrjrjIAg7J2Y6rO87ZWZ6rO8IOyVveumrO2VmSDrsJXsgqxcXG7shJzsmrjrjIAg7J2Y7ZWZ6rO8XCIsXG4gICAgaW1hZ2VTcmM6IFwiL3Bob3RvLW1haGxlcjgzLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCLqsJXrs5HtnaxcIixcbiAgICBwb3NpdGlvbjogXCJBZHZpc29yXCIsXG4gICAgY2FyZWVyOiBcIuyEnOyauOuMgCDsnZjqs7ztlZnqs7wg7IOd7ZmU7ZWZIOuwleyCrFxcbuyEnOyauOuMgCDsnZjtlZnsoITrrLjrjIDtlZnsm5BcIixcbiAgICBpbWFnZVNyYzogXCIvcGhvdG8tYmguanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIuydtOyKueuztVwiLFxuICAgIHBvc2l0aW9uOiBcIkFkdmlzb3JcIixcbiAgICBjYXJlZXI6IFwi7ISc7Jq464yAIOydmOqzvO2VmeqzvCDsg53tmZTtlZkg67CV7IKsXFxu7ISc7Jq464yAIOydmO2VmeqzvFwiLFxuICAgIGltYWdlU3JjOiBcIi9waG90by1zYi5wbmdcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlb3BsZSgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbbWVtYmVySW5kZXgsIHNldE1lbWJlckluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IG9uUHJldkNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBzZXRNZW1iZXJJbmRleCgobWVtYmVySW5kZXggLSAxICsgbWVtYmVyTGlzdC5sZW5ndGgpICUgbWVtYmVyTGlzdC5sZW5ndGgpO1xuICB9O1xuXG4gIGNvbnN0IG9uTmV4dENsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBzZXRNZW1iZXJJbmRleCgobWVtYmVySW5kZXggKyAxKSAlIG1lbWJlckxpc3QubGVuZ3RoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGdWxsUGFnZVNsaWRlPlxuICAgICAgPEJveFxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9XG4gICAgICA+XG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cImgyXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcbiAgICAgICAgICAgIGFsaWduPVwicmlnaHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmgxfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFBlb3BsZVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggZmxleEdyb3c9ezF9IGhlaWdodD17MH0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgIDxCb3ggd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPEhpZGRlbiBzbVVwPlxuICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwJVwiIGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgICAgIDxCb3ggYWxpZ25TZWxmPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIiBhbGlnbj1cInJpZ2h0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmgyfT5cbiAgICAgICAgICAgICAgICAgICAgTWVkaWNhbCBEb2N0b3Jze1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgIEVudHJlcHJlbmV1cnNoaXA8c3BhbiBjbGFzc05hbWU9XCJ5ZWxsb3dcIj4uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxQZW9wbGVNZW1iZXJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17bWVtYmVyTGlzdFttZW1iZXJJbmRleF0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249e21lbWJlckxpc3RbbWVtYmVySW5kZXhdLnBvc2l0aW9ufVxuICAgICAgICAgICAgICAgICAgICBjYXJlZXI9e21lbWJlckxpc3RbbWVtYmVySW5kZXhdLmNhcmVlcn1cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM9e21lbWJlckxpc3RbbWVtYmVySW5kZXhdLmltYWdlU3JjfVxuICAgICAgICAgICAgICAgICAgICBvblByZXZDbGljaz17b25QcmV2Q2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIG9uTmV4dENsaWNrPXtvbk5leHRDbGlja31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgICAgICA8SGlkZGVuIHhzRG93bj5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY30+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIiBjbGFzc05hbWU9e2NsYXNzZXMuaDJ9PlxuICAgICAgICAgICAgICAgICAgICBNZWRpY2FsXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICBEb2N0b3JzXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgIEVudHJlcHJlbmV1cnNoaXA8c3BhbiBjbGFzc05hbWU9XCJ5ZWxsb3dcIj4uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94IGFsaWduU2VsZj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPFBlb3BsZU1lbWJlclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXttZW1iZXJMaXN0W21lbWJlckluZGV4XS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17bWVtYmVyTGlzdFttZW1iZXJJbmRleF0ucG9zaXRpb259XG4gICAgICAgICAgICAgICAgICAgIGNhcmVlcj17bWVtYmVyTGlzdFttZW1iZXJJbmRleF0uY2FyZWVyfVxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNyYz17bWVtYmVyTGlzdFttZW1iZXJJbmRleF0uaW1hZ2VTcmN9XG4gICAgICAgICAgICAgICAgICAgIG9uUHJldkNsaWNrPXtvblByZXZDbGlja31cbiAgICAgICAgICAgICAgICAgICAgb25OZXh0Q2xpY2s9e29uTmV4dENsaWNrfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0Z1bGxQYWdlU2xpZGU+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9