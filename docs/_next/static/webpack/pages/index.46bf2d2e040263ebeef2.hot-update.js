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
  name: "안상진",
  position: "Advisor",
  career: "인제대학교 의학과 약리학교실 조교수\n서울대 의과학과 약리학 박사\n서울대 의학과",
  imageSrc: "/photo-mahler83.jpg"
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
          lineNumber: 138,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
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
                      lineNumber: 155,
                      columnNumber: 39
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
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
                  lineNumber: 158,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
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
                    lineNumber: 179,
                    columnNumber: 21
                  }, this), "Doctors", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: ["Entrepreneurship", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "yellow",
                      children: "."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 39
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 182,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
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
                  lineNumber: 188,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 130,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QZW9wbGUudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsImNvbnRlbnQiLCJwb3NpdGlvbiIsImRlc2MiLCJib3R0b20iLCJsZWZ0IiwiekluZGV4IiwiaDEiLCJmb250U2l6ZSIsImJyZWFrcG9pbnRzIiwidXAiLCJoMiIsIm9ubHkiLCJtYXJnaW5Cb3R0b20iLCJzcGFjaW5nIiwicm9vdCIsInRpdGxlIiwidG9wIiwicmlnaHQiLCJtZW1iZXJMaXN0IiwibmFtZSIsImNhcmVlciIsImltYWdlU3JjIiwiUGVvcGxlIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwibWVtYmVySW5kZXgiLCJzZXRNZW1iZXJJbmRleCIsIm9uUHJldkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwibGVuZ3RoIiwib25OZXh0Q2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFdBQU8sRUFBRTtBQUNQQyxjQUFRLEVBQUU7QUFESCxLQURFO0FBSVhDLFFBQUksRUFBRTtBQUNKQyxZQUFNLEVBQUUsQ0FESjtBQUVKQyxVQUFJLEVBQUUsQ0FGRjtBQUdKSCxjQUFRLEVBQUUsVUFITjtBQUlKSSxZQUFNLEVBQUUsQ0FBQztBQUpMLEtBSks7QUFVWEMsTUFBRSxFQUFFO0FBQ0ZDLGNBQVEsRUFBRSxLQUFLO0FBRGYsT0FFQ1QsS0FBSyxDQUFDVSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUZELEVBRThCO0FBQzVCRixjQUFRLEVBQUU7QUFEa0IsS0FGOUIsQ0FWUztBQWdCWEcsTUFBRTtBQUNBSCxjQUFR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O0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkVEOztHQTdGdUJWLE07VUFDTjFCLFM7OztLQURNMEIsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NmJmMmQyZTA0MDI2M2ViZWVmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBIaWRkZW4sIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IFRoZW1lLCBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEZ1bGxQYWdlU2xpZGUgZnJvbSBcImNvbXBvbmVudHMvRnVsbFBhZ2VTbGlkZVwiO1xuaW1wb3J0IFBlb3BsZU1lbWJlciBmcm9tIFwiY29tcG9uZW50cy9QZW9wbGVNZW1iZXJcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgfSxcbiAgICBkZXNjOiB7XG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIHpJbmRleDogLTEsXG4gICAgfSxcbiAgICBoMToge1xuICAgICAgZm9udFNpemU6IDE5ICogMC43NSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xuICAgICAgICBmb250U2l6ZTogMTksXG4gICAgICB9LFxuICAgIH0sXG4gICAgaDI6IHtcbiAgICAgIGZvbnRTaXplOiA3MiAqIDAuNSAqIDAuNSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5vbmx5KFwieHNcIildOiB7XG4gICAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcbiAgICAgIH0sXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcbiAgICAgICAgZm9udFNpemU6IDcyICogMC41LFxuICAgICAgfSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xuICAgICAgICBmb250U2l6ZTogNzIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgdG9wOiB0aGVtZS5zcGFjaW5nKDIgKiAwLjYpLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcbiAgICAgICAgdG9wOiB0aGVtZS5zcGFjaW5nKDIgKiAwLjgpLFxuICAgICAgfSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xuICAgICAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCBtZW1iZXJMaXN0ID0gW1xuICB7XG4gICAgbmFtZTogXCLsnbTtmLjsooVcIixcbiAgICBwb3NpdGlvbjogXCJNYW5hZ2luZyBQYXJ0bmVyXCIsXG4gICAgY2FyZWVyOlxuICAgICAgXCIo7ZiEKeunpeyKpOybsO2UvOu2gOqzvCDsm5DsnqVcXG4o7ZiEKeyEnOyauOuMgCDsnZjro4zruYXrjbDsnbTthLDshLzthLBcXG4o7KCEKeudvOyehOyGjOyCrOydtOyWtO2LsCBGb3VuZGVyXFxuKOyghCnrrLTruIwgQ1RPXFxu7ISc7Jq464yAIOydmO2VmeqzvCDrsI8g64yA7ZWZ7JuQXCIsXG4gICAgaW1hZ2VTcmM6IFwiL3Bob3RvLWhvam9uZy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi7KeA7Iq567KUXCIsXG4gICAgcG9zaXRpb246IFwiTWFuYWdpbmcgUGFydG5lclwiLFxuICAgIGNhcmVlcjpcbiAgICAgIFwiKOyghCntmZTsnbTruIzrnbzrjZTsiqTsvZTrpqzslYQgQ0VPXFxuKOyghCntmZTsnbTsnbjrsqDsiqTtirjrqLztirggQ0VPXFxuKOyghClLVEIgSW52ZXN0bWVudFxcbijsoIQpS1BNRyBGQVNcIixcbiAgICBpbWFnZVNyYzogXCIvcGhvdG8tamF5amkucG5nXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIuuwsOyYgeynhFwiLFxuICAgIC8qcG9zaXRpb246IFwiVmVudHVyZSBQYXJ0bmVyXCIsXG4gICAgY2FyZWVyOlxuICAgICAgXCIo7ZiEKUxJTkUgR2FtZXMgQ1NPXFxuKOyghClOZXh0Rmxvb3IgQ0ZPXFxuKExJTkUgR2FtZXMg7J247IiYKVxcbijsoIQpTW9iaWxGYWN0b3J5IEZvdW5kZXJcXG4oTmV4dEZsb29yIOyduOyImClcIiwqL1xuICAgIHBvc2l0aW9uOiBcIkFkdmlzb3JcIixcbiAgICBjYXJlZXI6IFwiTElORSBHYW1lcyBDU08v67aA64yA7ZGcXCIsXG4gICAgaW1hZ2VTcmM6IFwiL3Bob3RvLWJhZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi7J207Jqp7IiYXCIsXG4gICAgcG9zaXRpb246IFwiQWR2aXNvclwiLFxuICAgIGNhcmVlcjogXCJLb3JlYS9OWSBMYXd5ZXJcIixcbiAgICBpbWFnZVNyYzogXCIvcGhvdG8tamp5c2xlZS5wbmdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi67CV7KSA7ISxXCIsXG4gICAgcG9zaXRpb246IFwiQWR2aXNvclwiLFxuICAgIGNhcmVlcjogXCJMZWdlbmQgQ2FwaXRhbCBNRFwiLFxuICAgIGltYWdlU3JjOiBcIi9waG90by1wYXJranMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIuyViOyDgeynhFwiLFxuICAgIHBvc2l0aW9uOiBcIkFkdmlzb3JcIixcbiAgICBjYXJlZXI6XG4gICAgICBcIuyduOygnOuMgO2Vmeq1kCDsnZjtlZnqs7wg7JW966as7ZWZ6rWQ7IukIOyhsOq1kOyImFxcbuyEnOyauOuMgCDsnZjqs7ztlZnqs7wg7JW966as7ZWZIOuwleyCrFxcbuyEnOyauOuMgCDsnZjtlZnqs7xcIixcbiAgICBpbWFnZVNyYzogXCIvcGhvdG8tbWFobGVyODMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIuqwleuzke2drFwiLFxuICAgIHBvc2l0aW9uOiBcIkFkdmlzb3JcIixcbiAgICBjYXJlZXI6IFwi7ISc7Jq464yAIOydmOqzvO2VmeqzvCDsg53tmZTtlZnqtZDsi6Qg67CV7IKsXFxu7ISc7Jq464yAIOydmO2VmeyghOusuOuMgO2VmeybkFwiLFxuICAgIGltYWdlU3JjOiBcIi9waG90by1iaC5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi7J207Iq567O1XCIsXG4gICAgcG9zaXRpb246IFwiQWR2aXNvclwiLFxuICAgIGNhcmVlcjogXCLshJzsmrjrjIAg7J2Y6rO87ZWZ6rO8IOyDne2ZlO2Vmeq1kOyLpCDrsJXsgqxcXG7shJzsmrjrjIAg7J2Y7ZWZ6rO8XCIsXG4gICAgaW1hZ2VTcmM6IFwiL3Bob3RvLXNiLnBuZ1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVvcGxlKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFttZW1iZXJJbmRleCwgc2V0TWVtYmVySW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3Qgb25QcmV2Q2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHNldE1lbWJlckluZGV4KChtZW1iZXJJbmRleCAtIDEgKyBtZW1iZXJMaXN0Lmxlbmd0aCkgJSBtZW1iZXJMaXN0Lmxlbmd0aCk7XG4gIH07XG5cbiAgY29uc3Qgb25OZXh0Q2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHNldE1lbWJlckluZGV4KChtZW1iZXJJbmRleCArIDEpICUgbWVtYmVyTGlzdC5sZW5ndGgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZ1bGxQYWdlU2xpZGU+XG4gICAgICA8Qm94XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cbiAgICAgID5cbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwiaDJcIlxuICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxuICAgICAgICAgICAgYWxpZ249XCJyaWdodFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaDF9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUGVvcGxlXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBmbGV4R3Jvdz17MX0gaGVpZ2h0PXswfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgPEJveCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8SGlkZGVuIHNtVXA+XG4gICAgICAgICAgICAgIDxCb3ggd2lkdGg9XCIxMDAlXCIgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICAgICAgPEJveCBhbGlnblNlbGY9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGFsaWduPVwicmlnaHRcIiBjbGFzc05hbWU9e2NsYXNzZXMuaDJ9PlxuICAgICAgICAgICAgICAgICAgICBNZWRpY2FsIERvY3RvcnN7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgRW50cmVwcmVuZXVyc2hpcDxzcGFuIGNsYXNzTmFtZT1cInllbGxvd1wiPi48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFBlb3BsZU1lbWJlclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXttZW1iZXJMaXN0W21lbWJlckluZGV4XS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17bWVtYmVyTGlzdFttZW1iZXJJbmRleF0ucG9zaXRpb259XG4gICAgICAgICAgICAgICAgICAgIGNhcmVlcj17bWVtYmVyTGlzdFttZW1iZXJJbmRleF0uY2FyZWVyfVxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNyYz17bWVtYmVyTGlzdFttZW1iZXJJbmRleF0uaW1hZ2VTcmN9XG4gICAgICAgICAgICAgICAgICAgIG9uUHJldkNsaWNrPXtvblByZXZDbGlja31cbiAgICAgICAgICAgICAgICAgICAgb25OZXh0Q2xpY2s9e29uTmV4dENsaWNrfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgICAgIDxIaWRkZW4geHNEb3duPlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5oMn0+XG4gICAgICAgICAgICAgICAgICAgIE1lZGljYWxcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIERvY3RvcnNcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgRW50cmVwcmVuZXVyc2hpcDxzcGFuIGNsYXNzTmFtZT1cInllbGxvd1wiPi48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3ggYWxpZ25TZWxmPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8UGVvcGxlTWVtYmVyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e21lbWJlckxpc3RbbWVtYmVySW5kZXhdLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXttZW1iZXJMaXN0W21lbWJlckluZGV4XS5wb3NpdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgY2FyZWVyPXttZW1iZXJMaXN0W21lbWJlckluZGV4XS5jYXJlZXJ9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3JjPXttZW1iZXJMaXN0W21lbWJlckluZGV4XS5pbWFnZVNyY31cbiAgICAgICAgICAgICAgICAgICAgb25QcmV2Q2xpY2s9e29uUHJldkNsaWNrfVxuICAgICAgICAgICAgICAgICAgICBvbk5leHRDbGljaz17b25OZXh0Q2xpY2t9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvRnVsbFBhZ2VTbGlkZT5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=