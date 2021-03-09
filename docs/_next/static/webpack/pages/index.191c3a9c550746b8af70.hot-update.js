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
  imageSrc: "/photo-hojong.png"
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
  career: "서울대 의과학과 생화학교실 박사\n서울대 의학전문대학원",
  imageSrc: "/photo-bh.jpg"
}, {
  name: "이승복",
  position: "Advisor",
  career: "서울대 의과학과 생화학교실 박사\n서울대 의학과",
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
          lineNumber: 131,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
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
                      lineNumber: 148,
                      columnNumber: 39
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
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
                  lineNumber: 151,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
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
                    lineNumber: 172,
                    columnNumber: 21
                  }, this), "Doctors", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: ["Entrepreneurship", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "yellow",
                      children: "."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 176,
                      columnNumber: 39
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
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
                  lineNumber: 181,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 123,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QZW9wbGUudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsImNvbnRlbnQiLCJwb3NpdGlvbiIsImRlc2MiLCJib3R0b20iLCJsZWZ0IiwiekluZGV4IiwiaDEiLCJmb250U2l6ZSIsImJyZWFrcG9pbnRzIiwidXAiLCJoMiIsIm9ubHkiLCJtYXJnaW5Cb3R0b20iLCJzcGFjaW5nIiwicm9vdCIsInRpdGxlIiwidG9wIiwicmlnaHQiLCJtZW1iZXJMaXN0IiwibmFtZSIsImNhcmVlciIsImltYWdlU3JjIiwiUGVvcGxlIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwibWVtYmVySW5kZXgiLCJzZXRNZW1iZXJJbmRleCIsIm9uUHJldkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwibGVuZ3RoIiwib25OZXh0Q2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFdBQU8sRUFBRTtBQUNQQyxjQUFRLEVBQUU7QUFESCxLQURFO0FBSVhDLFFBQUksRUFBRTtBQUNKQyxZQUFNLEVBQUUsQ0FESjtBQUVKQyxVQUFJLEVBQUUsQ0FGRjtBQUdKSCxjQUFRLEVBQUUsVUFITjtBQUlKSSxZQUFNLEVBQUUsQ0FBQztBQUpMLEtBSks7QUFVWEMsTUFBRSxFQUFFO0FBQ0ZDLGNBQVEsRUFBRSxLQUFLO0FBRGYsT0FFQ1QsS0FBSyxDQUFDVSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUZELEVBRThCO0FBQzVCRixjQUFRLEVBQUU7QUFEa0IsS0FGOUIsQ0FWUztBQWdCWEcsTUFBRTtBQUNBSCxjQUFR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YnBhY2svcGFnZXMvaW5kZXguMTkxYzNhOWM1NTA3NDZiOGFmNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSGlkZGVuLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IFRoZW1lLCBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEZ1bGxQYWdlU2xpZGUgZnJvbSBcImNvbXBvbmVudHMvRnVsbFBhZ2VTbGlkZVwiO1xyXG5pbXBvcnQgUGVvcGxlTWVtYmVyIGZyb20gXCJjb21wb25lbnRzL1Blb3BsZU1lbWJlclwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICBjb250ZW50OiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB9LFxyXG4gICAgZGVzYzoge1xyXG4gICAgICBib3R0b206IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIHpJbmRleDogLTEsXHJcbiAgICB9LFxyXG4gICAgaDE6IHtcclxuICAgICAgZm9udFNpemU6IDE5ICogMC43NSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDE5LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGgyOiB7XHJcbiAgICAgIGZvbnRTaXplOiA3MiAqIDAuNSAqIDAuNSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLm9ubHkoXCJ4c1wiKV06IHtcclxuICAgICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgIH0sXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICAgIGZvbnRTaXplOiA3MiAqIDAuNSxcclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDcyLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHJvb3Q6IHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMiAqIDAuNiksXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMiAqIDAuOCksXHJcbiAgICAgIH0sXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICAgIHRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuXHJcbmNvbnN0IG1lbWJlckxpc3QgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCLsnbTtmLjsooVcIixcclxuICAgIHBvc2l0aW9uOiBcIk1hbmFnaW5nIFBhcnRuZXJcIixcclxuICAgIGNhcmVlcjpcclxuICAgICAgXCIo7ZiEKeunpeyKpOybsO2UvOu2gOqzvCDsm5DsnqVcXG4o7ZiEKeyEnOyauOuMgCDsnZjro4zruYXrjbDsnbTthLDshLzthLBcXG4o7KCEKeudvOyehOyGjOyCrOydtOyWtO2LsCBGb3VuZGVyXFxuKOyghCnrrLTruIwgQ1RPXFxu7ISc7Jq464yAIOydmO2VmeqzvCDrsI8g64yA7ZWZ7JuQXCIsXHJcbiAgICBpbWFnZVNyYzogXCIvcGhvdG8taG9qb25nLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCLsp4DsirnrspRcIixcclxuICAgIHBvc2l0aW9uOiBcIk1hbmFnaW5nIFBhcnRuZXJcIixcclxuICAgIGNhcmVlcjpcclxuICAgICAgXCIo7KCEKe2ZlOydtOu4jOudvOuNlOyKpOy9lOumrOyVhCBDRU9cXG4o7KCEKe2ZlOydtOyduOuyoOyKpO2KuOuovO2KuCBDRU9cXG4o7KCEKUtUQiBJbnZlc3RtZW50XFxuKOyghClLUE1HIEZBU1wiLFxyXG4gICAgaW1hZ2VTcmM6IFwiL3Bob3RvLWpheWppLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCLrsLDsmIHsp4RcIixcclxuICAgIC8qcG9zaXRpb246IFwiVmVudHVyZSBQYXJ0bmVyXCIsXHJcbiAgICBjYXJlZXI6XHJcbiAgICAgIFwiKO2YhClMSU5FIEdhbWVzIENTT1xcbijsoIQpTmV4dEZsb29yIENGT1xcbihMSU5FIEdhbWVzIOyduOyImClcXG4o7KCEKU1vYmlsRmFjdG9yeSBGb3VuZGVyXFxuKE5leHRGbG9vciDsnbjsiJgpXCIsKi9cclxuICAgIHBvc2l0aW9uOiBcIkFkdmlzb3JcIixcclxuICAgIGNhcmVlcjogXCJMSU5FIEdhbWVzIENTTy/rtoDrjIDtkZxcIixcclxuICAgIGltYWdlU3JjOiBcIi9waG90by1iYWUuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIuydtOyaqeyImFwiLFxyXG4gICAgcG9zaXRpb246IFwiQWR2aXNvclwiLFxyXG4gICAgY2FyZWVyOiBcIktvcmVhL05ZIExhd3llclwiLFxyXG4gICAgaW1hZ2VTcmM6IFwiL3Bob3RvLWpqeXNsZWUucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIuuwleykgOyEsVwiLFxyXG4gICAgcG9zaXRpb246IFwiQWR2aXNvclwiLFxyXG4gICAgY2FyZWVyOiBcIkxlZ2VuZCBDYXBpdGFsIE1EXCIsXHJcbiAgICBpbWFnZVNyYzogXCIvcGhvdG8tcGFya2pzLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCLqsJXrs5HtnaxcIixcclxuICAgIHBvc2l0aW9uOiBcIkFkdmlzb3JcIixcclxuICAgIGNhcmVlcjogXCLshJzsmrjrjIAg7J2Y6rO87ZWZ6rO8IOyDne2ZlO2Vmeq1kOyLpCDrsJXsgqxcXG7shJzsmrjrjIAg7J2Y7ZWZ7KCE66y464yA7ZWZ7JuQXCIsXHJcbiAgICBpbWFnZVNyYzogXCIvcGhvdG8tYmguanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIuydtOyKueuztVwiLFxyXG4gICAgcG9zaXRpb246IFwiQWR2aXNvclwiLFxyXG4gICAgY2FyZWVyOiBcIuyEnOyauOuMgCDsnZjqs7ztlZnqs7wg7IOd7ZmU7ZWZ6rWQ7IukIOuwleyCrFxcbuyEnOyauOuMgCDsnZjtlZnqs7xcIixcclxuICAgIGltYWdlU3JjOiBcIi9waG90by1zYi5wbmdcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVvcGxlKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbbWVtYmVySW5kZXgsIHNldE1lbWJlckluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBvblByZXZDbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBzZXRNZW1iZXJJbmRleCgobWVtYmVySW5kZXggLSAxICsgbWVtYmVyTGlzdC5sZW5ndGgpICUgbWVtYmVyTGlzdC5sZW5ndGgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uTmV4dENsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIHNldE1lbWJlckluZGV4KChtZW1iZXJJbmRleCArIDEpICUgbWVtYmVyTGlzdC5sZW5ndGgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnVsbFBhZ2VTbGlkZT5cclxuICAgICAgPEJveFxyXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcclxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoMlwiXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgYWxpZ249XCJyaWdodFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5oMX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUGVvcGxlXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCBmbGV4R3Jvdz17MX0gaGVpZ2h0PXswfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPEhpZGRlbiBzbVVwPlxyXG4gICAgICAgICAgICAgIDxCb3ggd2lkdGg9XCIxMDAlXCIgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGFsaWduU2VsZj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIiBhbGlnbj1cInJpZ2h0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmgyfT5cclxuICAgICAgICAgICAgICAgICAgICBNZWRpY2FsIERvY3RvcnN7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgIEVudHJlcHJlbmV1cnNoaXA8c3BhbiBjbGFzc05hbWU9XCJ5ZWxsb3dcIj4uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDxQZW9wbGVNZW1iZXJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXttZW1iZXJMaXN0W21lbWJlckluZGV4XS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXttZW1iZXJMaXN0W21lbWJlckluZGV4XS5wb3NpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBjYXJlZXI9e21lbWJlckxpc3RbbWVtYmVySW5kZXhdLmNhcmVlcn1cclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNyYz17bWVtYmVyTGlzdFttZW1iZXJJbmRleF0uaW1hZ2VTcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25QcmV2Q2xpY2s9e29uUHJldkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTmV4dENsaWNrPXtvbk5leHRDbGlja31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgPEhpZGRlbiB4c0Rvd24+XHJcbiAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY30+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5oMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgTWVkaWNhbFxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIERvY3RvcnNcclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRW50cmVwcmVuZXVyc2hpcDxzcGFuIGNsYXNzTmFtZT1cInllbGxvd1wiPi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPEJveCBhbGlnblNlbGY9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPFBlb3BsZU1lbWJlclxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e21lbWJlckxpc3RbbWVtYmVySW5kZXhdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249e21lbWJlckxpc3RbbWVtYmVySW5kZXhdLnBvc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmVlcj17bWVtYmVyTGlzdFttZW1iZXJJbmRleF0uY2FyZWVyfVxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3JjPXttZW1iZXJMaXN0W21lbWJlckluZGV4XS5pbWFnZVNyY31cclxuICAgICAgICAgICAgICAgICAgICBvblByZXZDbGljaz17b25QcmV2Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgb25OZXh0Q2xpY2s9e29uTmV4dENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9GdWxsUGFnZVNsaWRlPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==