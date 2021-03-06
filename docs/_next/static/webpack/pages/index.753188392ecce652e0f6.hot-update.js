webpackHotUpdate_N_E("pages/index",{

/***/ "./components/People.tsx":
/*!*******************************!*\
  !*** ./components/People.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return People; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_hojonglee_Documents_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_FullPageSlide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/FullPageSlide */ \"./components/FullPageSlide.tsx\");\n/* harmony import */ var components_PeopleMember__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/PeopleMember */ \"./components/PeopleMember.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/hojonglee/Documents/workspace/tail-company.github.io/components/People.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(function (theme) {\n  var _h2, _title;\n\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"createStyles\"])({\n    content: {\n      position: \"relative\"\n    },\n    desc: {\n      bottom: 0,\n      left: 0,\n      position: \"absolute\",\n      zIndex: -1\n    },\n    h1: Object(_Users_hojonglee_Documents_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      fontSize: 19 * 0.75\n    }, theme.breakpoints.up(\"sm\"), {\n      fontSize: 19\n    }),\n    h2: (_h2 = {\n      fontSize: 72 * 0.75 * 0.65\n    }, Object(_Users_hojonglee_Documents_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_h2, theme.breakpoints.up(\"sm\"), {\n      fontSize: 36\n    }), Object(_Users_hojonglee_Documents_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_h2, theme.breakpoints.up(\"md\"), {\n      fontSize: 72\n    }), _h2),\n    root: {\n      position: \"relative\"\n    },\n    title: (_title = {\n      position: \"absolute\",\n      top: theme.spacing(2 * 0.6),\n      right: 0\n    }, Object(_Users_hojonglee_Documents_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_title, theme.breakpoints.up(\"sm\"), {\n      top: theme.spacing(2 * 0.8)\n    }), Object(_Users_hojonglee_Documents_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_title, theme.breakpoints.up(\"md\"), {\n      top: theme.spacing(2)\n    }), _title)\n  });\n});\nvar memberList = [{\n  name: \"이호종\",\n  position: \"Managing Partner\",\n  career: \"(현)맥스웰피부과 원장\\n(현)서울대 의료빅데이터센터\\n(전)라임소사이어티 Founder\\n(전)무브 CTO\\n서울대 의학과 및 대학원\",\n  imageSrc: \"/photo-hojong.jpg\"\n}, {\n  name: \"지승범\",\n  position: \"Managing Partner\",\n  career: \"(전)화이브라더스코리아 CEO\\n(전)화이인베스트먼트 CEO\\n(전)KTB Investment\\n(전)KPMG FAS\",\n  imageSrc: \"/photo-jayji.png\"\n}, {\n  name: \"배영진\",\n  position: \"Venture Partner\",\n  career: \"(현)LINE Games CSO\\n(전)NextFloor CFO\\n(LINE Games 인수)\\n(전)MobilFactory Founder\\n(NextFloor 인수)\",\n  imageSrc: \"/photo-bae.jpg\"\n}, {\n  name: \"이용수\",\n  position: \"Advisor\",\n  career: \"Korea/NY Lawyer\",\n  imageSrc: \"/photo-jjyslee.png\"\n}, {\n  name: \"박준성\",\n  position: \"Advisor\",\n  career: \"Legend Capital MD\",\n  imageSrc: \"/photo-parkjs.jpg\"\n}];\nfunction People() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(0),\n      memberIndex = _useState[0],\n      setMemberIndex = _useState[1];\n\n  var onPrevClick = function onPrevClick(e) {\n    e.preventDefault();\n    e.stopPropagation();\n    setMemberIndex((memberIndex - 1 + memberList.length) % memberList.length);\n  };\n\n  var onNextClick = function onNextClick(e) {\n    e.preventDefault();\n    e.stopPropagation();\n    setMemberIndex((memberIndex + 1) % memberList.length);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_FullPageSlide__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n      display: \"flex\",\n      flexDirection: \"column\",\n      height: \"100%\",\n      className: classes.root,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        className: classes.title,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n          variant: \"h2\",\n          component: \"h1\",\n          align: \"right\",\n          className: classes.h1,\n          children: \"People\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        flexGrow: 1,\n        height: 0,\n        alignItems: \"center\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n          width: \"100%\",\n          height: \"100%\",\n          display: \"flex\",\n          alignItems: \"center\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Hidden\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n              width: \"100%\",\n              display: \"flex\",\n              justifyContent: \"flex-end\",\n              className: classes.content,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n                className: classes.desc,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n                  variant: \"h2\",\n                  className: classes.h2,\n                  children: [\"Medical\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 135,\n                    columnNumber: 21\n                  }, this), \"Doctors\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 137,\n                    columnNumber: 21\n                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n                    children: [\"Entrepreneurship\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                      className: \"yellow\",\n                      children: \".\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 139,\n                      columnNumber: 39\n                    }, this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 138,\n                    columnNumber: 21\n                  }, this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 133,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 132,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n                alignSelf: \"center\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_PeopleMember__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                  name: memberList[memberIndex].name,\n                  position: memberList[memberIndex].position,\n                  career: memberList[memberIndex].career,\n                  imageSrc: memberList[memberIndex].imageSrc,\n                  onPrevClick: onPrevClick,\n                  onNextClick: onNextClick\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 144,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 143,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 126,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 125,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 106,\n    columnNumber: 5\n  }, this);\n}\n\n_s(People, \"169cuQgUaKwWrtKf/G3GuudrzJ8=\", false, function () {\n  return [useStyles];\n});\n\n_c = People;\n\nvar _c;\n\n$RefreshReg$(_c, \"People\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QZW9wbGUudHN4P2VhNDIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwiY29udGVudCIsInBvc2l0aW9uIiwiZGVzYyIsImJvdHRvbSIsImxlZnQiLCJ6SW5kZXgiLCJoMSIsImZvbnRTaXplIiwiYnJlYWtwb2ludHMiLCJ1cCIsImgyIiwicm9vdCIsInRpdGxlIiwidG9wIiwic3BhY2luZyIsInJpZ2h0IiwibWVtYmVyTGlzdCIsIm5hbWUiLCJjYXJlZXIiLCJpbWFnZVNyYyIsIlBlb3BsZSIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsIm1lbWJlckluZGV4Iiwic2V0TWVtYmVySW5kZXgiLCJvblByZXZDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImxlbmd0aCIsIm9uTmV4dENsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFdBQU8sRUFBRTtBQUNQQyxjQUFRLEVBQUU7QUFESCxLQURFO0FBSVhDLFFBQUksRUFBRTtBQUNKQyxZQUFNLEVBQUUsQ0FESjtBQUVKQyxVQUFJLEVBQUUsQ0FGRjtBQUdKSCxjQUFRLEVBQUUsVUFITjtBQUlKSSxZQUFNLEVBQUUsQ0FBQztBQUpMLEtBSks7QUFVWEMsTUFBRSxFQUFFO0FBQ0ZDLGNBQVEsRUFBRSxLQUFLO0FBRGYsT0FFQ1QsS0FBSyxDQUFDVSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUZELEVBRThCO0FBQzVCRixjQUFRLEVBQUU7QUFEa0IsS0FGOUIsQ0FWUztBQWdCWEcsTUFBRTtBQUNBSCxjQUFRLEVBQUUsS0FBSyxJQUFMLEdBQVk7QUFEdEIs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QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5GLGVBaUJFLHFFQUFDLHFEQUFEO0FBQUsseUJBQVMsRUFBQyxRQUFmO0FBQUEsdUNBQ0UscUVBQUMsK0RBQUQ7QUFDRSxzQkFBSSxFQUFFTSxVQUFVLENBQUNPLFdBQUQsQ0FBVixDQUF3Qk4sSUFEaEM7QUFFRSwwQkFBUSxFQUFFRCxVQUFVLENBQUNPLFdBQUQsQ0FBVixDQUF3QnRCLFFBRnBDO0FBR0Usd0JBQU0sRUFBRWUsVUFBVSxDQUFDTyxXQUFELENBQVYsQ0FBd0JMLE1BSGxDO0FBSUUsMEJBQVEsRUFBRUYsVUFBVSxDQUFDTyxXQUFELENBQVYsQ0FBd0JKLFFBSnBDO0FBS0UsNkJBQVcsRUFBRU0sV0FMZjtBQU1FLDZCQUFXLEVBQUVLO0FBTmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1REQ7O0dBekV1QlYsTTtVQUNOeEIsUzs7O0tBRE13QixNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QZW9wbGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBIaWRkZW4sIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IFRoZW1lLCBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEZ1bGxQYWdlU2xpZGUgZnJvbSBcImNvbXBvbmVudHMvRnVsbFBhZ2VTbGlkZVwiO1xuaW1wb3J0IFBlb3BsZU1lbWJlciBmcm9tIFwiY29tcG9uZW50cy9QZW9wbGVNZW1iZXJcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgfSxcbiAgICBkZXNjOiB7XG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIHpJbmRleDogLTEsXG4gICAgfSxcbiAgICBoMToge1xuICAgICAgZm9udFNpemU6IDE5ICogMC43NSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xuICAgICAgICBmb250U2l6ZTogMTksXG4gICAgICB9LFxuICAgIH0sXG4gICAgaDI6IHtcbiAgICAgIGZvbnRTaXplOiA3MiAqIDAuNzUgKiAwLjY1LFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XG4gICAgICAgIGZvbnRTaXplOiAzNixcbiAgICAgIH0sXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcbiAgICAgICAgZm9udFNpemU6IDcyLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHJvb3Q6IHtcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIHRvcDogdGhlbWUuc3BhY2luZygyICogMC42KSxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XG4gICAgICAgIHRvcDogdGhlbWUuc3BhY2luZygyICogMC44KSxcbiAgICAgIH0sXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcbiAgICAgICAgdG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgbWVtYmVyTGlzdCA9IFtcbiAge1xuICAgIG5hbWU6IFwi7J207Zi47KKFXCIsXG4gICAgcG9zaXRpb246IFwiTWFuYWdpbmcgUGFydG5lclwiLFxuICAgIGNhcmVlcjpcbiAgICAgIFwiKO2YhCnrp6XsiqTsm7DtlLzrtoDqs7wg7JuQ7J6lXFxuKO2YhCnshJzsmrjrjIAg7J2Y66OM67mF642w7J207YSw7IS87YSwXFxuKOyghCnrnbzsnoTshozsgqzsnbTslrTti7AgRm91bmRlclxcbijsoIQp66y067iMIENUT1xcbuyEnOyauOuMgCDsnZjtlZnqs7wg67CPIOuMgO2VmeybkFwiLFxuICAgIGltYWdlU3JjOiBcIi9waG90by1ob2pvbmcuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIuyngOyKueuylFwiLFxuICAgIHBvc2l0aW9uOiBcIk1hbmFnaW5nIFBhcnRuZXJcIixcbiAgICBjYXJlZXI6XG4gICAgICBcIijsoIQp7ZmU7J2067iM6528642U7Iqk7L2U66as7JWEIENFT1xcbijsoIQp7ZmU7J207J2467Kg7Iqk7Yq466i87Yq4IENFT1xcbijsoIQpS1RCIEludmVzdG1lbnRcXG4o7KCEKUtQTUcgRkFTXCIsXG4gICAgaW1hZ2VTcmM6IFwiL3Bob3RvLWpheWppLnBuZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCLrsLDsmIHsp4RcIixcbiAgICBwb3NpdGlvbjogXCJWZW50dXJlIFBhcnRuZXJcIixcbiAgICBjYXJlZXI6XG4gICAgICBcIijtmIQpTElORSBHYW1lcyBDU09cXG4o7KCEKU5leHRGbG9vciBDRk9cXG4oTElORSBHYW1lcyDsnbjsiJgpXFxuKOyghClNb2JpbEZhY3RvcnkgRm91bmRlclxcbihOZXh0Rmxvb3Ig7J247IiYKVwiLFxuICAgIGltYWdlU3JjOiBcIi9waG90by1iYWUuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIuydtOyaqeyImFwiLFxuICAgIHBvc2l0aW9uOiBcIkFkdmlzb3JcIixcbiAgICBjYXJlZXI6IFwiS29yZWEvTlkgTGF3eWVyXCIsXG4gICAgaW1hZ2VTcmM6IFwiL3Bob3RvLWpqeXNsZWUucG5nXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIuuwleykgOyEsVwiLFxuICAgIHBvc2l0aW9uOiBcIkFkdmlzb3JcIixcbiAgICBjYXJlZXI6IFwiTGVnZW5kIENhcGl0YWwgTURcIixcbiAgICBpbWFnZVNyYzogXCIvcGhvdG8tcGFya2pzLmpwZ1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVvcGxlKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFttZW1iZXJJbmRleCwgc2V0TWVtYmVySW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3Qgb25QcmV2Q2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHNldE1lbWJlckluZGV4KChtZW1iZXJJbmRleCAtIDEgKyBtZW1iZXJMaXN0Lmxlbmd0aCkgJSBtZW1iZXJMaXN0Lmxlbmd0aCk7XG4gIH07XG5cbiAgY29uc3Qgb25OZXh0Q2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHNldE1lbWJlckluZGV4KChtZW1iZXJJbmRleCArIDEpICUgbWVtYmVyTGlzdC5sZW5ndGgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZ1bGxQYWdlU2xpZGU+XG4gICAgICA8Qm94XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cbiAgICAgID5cbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwiaDJcIlxuICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxuICAgICAgICAgICAgYWxpZ249XCJyaWdodFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaDF9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUGVvcGxlXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBmbGV4R3Jvdz17MX0gaGVpZ2h0PXswfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgPEJveCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8SGlkZGVuPlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5oMn0+XG4gICAgICAgICAgICAgICAgICAgIE1lZGljYWxcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIERvY3RvcnNcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgRW50cmVwcmVuZXVyc2hpcDxzcGFuIGNsYXNzTmFtZT1cInllbGxvd1wiPi48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3ggYWxpZ25TZWxmPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8UGVvcGxlTWVtYmVyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e21lbWJlckxpc3RbbWVtYmVySW5kZXhdLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXttZW1iZXJMaXN0W21lbWJlckluZGV4XS5wb3NpdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgY2FyZWVyPXttZW1iZXJMaXN0W21lbWJlckluZGV4XS5jYXJlZXJ9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3JjPXttZW1iZXJMaXN0W21lbWJlckluZGV4XS5pbWFnZVNyY31cbiAgICAgICAgICAgICAgICAgICAgb25QcmV2Q2xpY2s9e29uUHJldkNsaWNrfVxuICAgICAgICAgICAgICAgICAgICBvbk5leHRDbGljaz17b25OZXh0Q2xpY2t9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvRnVsbFBhZ2VTbGlkZT5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/People.tsx\n");

/***/ })

})