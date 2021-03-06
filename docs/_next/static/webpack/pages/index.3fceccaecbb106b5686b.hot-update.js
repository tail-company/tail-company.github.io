webpackHotUpdate_N_E("pages/index",{

/***/ "./components/People.tsx":
/*!*******************************!*\
  !*** ./components/People.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return People; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_hojonglee_Documents_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_FullPageSlide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/FullPageSlide */ \"./components/FullPageSlide.tsx\");\n/* harmony import */ var components_PeopleMember__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/PeopleMember */ \"./components/PeopleMember.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/hojonglee/Documents/workspace/tail-company.github.io/components/People.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(function (theme) {\n  var _h2, _title;\n\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"createStyles\"])({\n    content: {\n      position: \"relative\"\n    },\n    desc: {\n      bottom: 0,\n      left: 0,\n      position: \"absolute\",\n      zIndex: -1\n    },\n    h1: Object(_Users_hojonglee_Documents_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      fontSize: 19 * 0.75\n    }, theme.breakpoints.up(\"sm\"), {\n      fontSize: 19\n    }),\n    h2: (_h2 = {\n      fontSize: 72 * 0.25\n    }, Object(_Users_hojonglee_Documents_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_h2, theme.breakpoints.up(\"sm\"), {\n      fontSize: 72 * 0.5\n    }), Object(_Users_hojonglee_Documents_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_h2, theme.breakpoints.up(\"md\"), {\n      fontSize: 72\n    }), _h2),\n    root: {\n      position: \"relative\"\n    },\n    title: (_title = {\n      position: \"absolute\",\n      top: theme.spacing(2 * 0.6),\n      right: 0\n    }, Object(_Users_hojonglee_Documents_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_title, theme.breakpoints.up(\"sm\"), {\n      top: theme.spacing(2 * 0.8)\n    }), Object(_Users_hojonglee_Documents_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_title, theme.breakpoints.up(\"md\"), {\n      top: theme.spacing(2)\n    }), _title)\n  });\n});\nvar memberList = [{\n  name: \"이호종\",\n  position: \"Managing Partner\",\n  career: \"(현)맥스웰피부과 원장\\n(현)서울대 의료빅데이터센터\\n(전)라임소사이어티 Founder\\n(전)무브 CTO\\n서울대 의학과 및 대학원\",\n  imageSrc: \"/photo-hojong.jpg\"\n}, {\n  name: \"지승범\",\n  position: \"Managing Partner\",\n  career: \"(전)화이브라더스코리아 CEO\\n(전)화이인베스트먼트 CEO\\n(전)KTB Investment\\n(전)KPMG FAS\",\n  imageSrc: \"/photo-jayji.png\"\n}, {\n  name: \"배영진\",\n  position: \"Venture Partner\",\n  career: \"(현)LINE Games CSO\\n(전)NextFloor CFO\\n(LINE Games 인수)\\n(전)MobilFactory Founder\\n(NextFloor 인수)\",\n  imageSrc: \"/photo-bae.jpg\"\n}, {\n  name: \"이용수\",\n  position: \"Advisor\",\n  career: \"Korea/NY Lawyer\",\n  imageSrc: \"/photo-jjyslee.png\"\n}, {\n  name: \"박준성\",\n  position: \"Advisor\",\n  career: \"Legend Capital MD\",\n  imageSrc: \"/photo-parkjs.jpg\"\n}];\nfunction People() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(0),\n      memberIndex = _useState[0],\n      setMemberIndex = _useState[1];\n\n  var onPrevClick = function onPrevClick(e) {\n    e.preventDefault();\n    e.stopPropagation();\n    setMemberIndex((memberIndex - 1 + memberList.length) % memberList.length);\n  };\n\n  var onNextClick = function onNextClick(e) {\n    e.preventDefault();\n    e.stopPropagation();\n    setMemberIndex((memberIndex + 1) % memberList.length);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_FullPageSlide__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n      display: \"flex\",\n      flexDirection: \"column\",\n      height: \"100%\",\n      className: classes.root,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        className: classes.title,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n          variant: \"h2\",\n          component: \"h1\",\n          align: \"right\",\n          className: classes.h1,\n          children: \"People\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        flexGrow: 1,\n        height: 0,\n        alignItems: \"center\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n          width: \"100%\",\n          height: \"100%\",\n          display: \"flex\",\n          alignItems: \"center\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Hidden\"], {\n            smUp: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n              width: \"100%\",\n              display: \"flex\",\n              justifyContent: \"flex-end\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n                alignSelf: \"center\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n                  variant: \"h2\",\n                  align: \"right\",\n                  className: classes.h2,\n                  children: [\"Medical\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 130,\n                    columnNumber: 21\n                  }, this), \"Doctors\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 132,\n                    columnNumber: 21\n                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n                    children: [\"Entrepreneurship\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                      className: \"yellow\",\n                      children: \".\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 134,\n                      columnNumber: 39\n                    }, this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 133,\n                    columnNumber: 21\n                  }, this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 128,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_PeopleMember__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                  name: memberList[memberIndex].name,\n                  position: memberList[memberIndex].position,\n                  career: memberList[memberIndex].career,\n                  imageSrc: memberList[memberIndex].imageSrc,\n                  onPrevClick: onPrevClick,\n                  onNextClick: onNextClick\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 137,\n                  columnNumber: 19\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 127,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 126,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 125,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Hidden\"], {\n            xsDown: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n              width: \"100%\",\n              display: \"flex\",\n              justifyContent: \"flex-end\",\n              className: classes.content,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n                className: classes.desc,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n                  variant: \"h2\",\n                  className: classes.h2,\n                  children: [\"Medical\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 158,\n                    columnNumber: 21\n                  }, this), \"Doctors\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 160,\n                    columnNumber: 21\n                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n                    children: [\"Entrepreneurship\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                      className: \"yellow\",\n                      children: \".\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 162,\n                      columnNumber: 39\n                    }, this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 161,\n                    columnNumber: 21\n                  }, this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 156,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 155,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n                alignSelf: \"center\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_PeopleMember__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                  name: memberList[memberIndex].name,\n                  position: memberList[memberIndex].position,\n                  career: memberList[memberIndex].career,\n                  imageSrc: memberList[memberIndex].imageSrc,\n                  onPrevClick: onPrevClick,\n                  onNextClick: onNextClick\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 167,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 166,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 149,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 148,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 106,\n    columnNumber: 5\n  }, this);\n}\n\n_s(People, \"169cuQgUaKwWrtKf/G3GuudrzJ8=\", false, function () {\n  return [useStyles];\n});\n\n_c = People;\n\nvar _c;\n\n$RefreshReg$(_c, \"People\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QZW9wbGUudHN4P2VhNDIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwiY29udGVudCIsInBvc2l0aW9uIiwiZGVzYyIsImJvdHRvbSIsImxlZnQiLCJ6SW5kZXgiLCJoMSIsImZvbnRTaXplIiwiYnJlYWtwb2ludHMiLCJ1cCIsImgyIiwicm9vdCIsInRpdGxlIiwidG9wIiwic3BhY2luZyIsInJpZ2h0IiwibWVtYmVyTGlzdCIsIm5hbWUiLCJjYXJlZXIiLCJpbWFnZVNyYyIsIlBlb3BsZSIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsIm1lbWJlckluZGV4Iiwic2V0TWVtYmVySW5kZXgiLCJvblByZXZDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImxlbmd0aCIsIm9uTmV4dENsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFdBQU8sRUFBRTtBQUNQQyxjQUFRLEVBQUU7QUFESCxLQURFO0FBSVhDLFFBQUksRUFBRTtBQUNKQyxZQUFNLEVBQUUsQ0FESjtBQUVKQyxVQUFJLEVBQUUsQ0FGRjtBQUdKSCxjQUFRLEVBQUUsVUFITjtBQUlKSSxZQUFNLEVBQUUsQ0FBQztBQUpMLEtBSks7QUFVWEMsTUFBRSxFQUFFO0FBQ0ZDLGNBQVEsRUFBRSxLQUFLO0FBRGYsT0FFQ1QsS0FBSyxDQUFDVSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUZELEVBRThCO0FBQzVCRixjQUFRLEVBQUU7QUFEa0IsS0FGOUIsQ0FWUztBQWdCWEcsTUFBRTtBQUNBSCxjQUFRLEVBQUUsS0FBSztBQURmLGdNQUVDVCxLQUFL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QUMscURBQUQ7QUFBSyx5QkFBUyxFQUFDLFFBQWY7QUFBQSx1Q0FDRSxxRUFBQywrREFBRDtBQUNFLHNCQUFJLEVBQUVNLFVBQVUsQ0FBQ08sV0FBRCxDQUFWLENBQXdCTixJQURoQztBQUVFLDBCQUFRLEVBQUVELFVBQVUsQ0FBQ08sV0FBRCxDQUFWLENBQXdCdEIsUUFGcEM7QUFHRSx3QkFBTSxFQUFFZSxVQUFVLENBQUNPLFdBQUQsQ0FBVixDQUF3QkwsTUFIbEM7QUFJRSwwQkFBUSxFQUFFRixVQUFVLENBQUNPLFdBQUQsQ0FBVixDQUF3QkosUUFKcEM7QUFLRSw2QkFBVyxFQUFFTSxXQUxmO0FBTUUsNkJBQVcsRUFBRUs7QUFOZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4RUQ7O0dBaEd1QlYsTTtVQUNOeEIsUzs7O0tBRE13QixNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QZW9wbGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBIaWRkZW4sIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IFRoZW1lLCBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEZ1bGxQYWdlU2xpZGUgZnJvbSBcImNvbXBvbmVudHMvRnVsbFBhZ2VTbGlkZVwiO1xuaW1wb3J0IFBlb3BsZU1lbWJlciBmcm9tIFwiY29tcG9uZW50cy9QZW9wbGVNZW1iZXJcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgfSxcbiAgICBkZXNjOiB7XG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIHpJbmRleDogLTEsXG4gICAgfSxcbiAgICBoMToge1xuICAgICAgZm9udFNpemU6IDE5ICogMC43NSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xuICAgICAgICBmb250U2l6ZTogMTksXG4gICAgICB9LFxuICAgIH0sXG4gICAgaDI6IHtcbiAgICAgIGZvbnRTaXplOiA3MiAqIDAuMjUsXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcbiAgICAgICAgZm9udFNpemU6IDcyICogMC41LFxuICAgICAgfSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xuICAgICAgICBmb250U2l6ZTogNzIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgdG9wOiB0aGVtZS5zcGFjaW5nKDIgKiAwLjYpLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcbiAgICAgICAgdG9wOiB0aGVtZS5zcGFjaW5nKDIgKiAwLjgpLFxuICAgICAgfSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xuICAgICAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCBtZW1iZXJMaXN0ID0gW1xuICB7XG4gICAgbmFtZTogXCLsnbTtmLjsooVcIixcbiAgICBwb3NpdGlvbjogXCJNYW5hZ2luZyBQYXJ0bmVyXCIsXG4gICAgY2FyZWVyOlxuICAgICAgXCIo7ZiEKeunpeyKpOybsO2UvOu2gOqzvCDsm5DsnqVcXG4o7ZiEKeyEnOyauOuMgCDsnZjro4zruYXrjbDsnbTthLDshLzthLBcXG4o7KCEKeudvOyehOyGjOyCrOydtOyWtO2LsCBGb3VuZGVyXFxuKOyghCnrrLTruIwgQ1RPXFxu7ISc7Jq464yAIOydmO2VmeqzvCDrsI8g64yA7ZWZ7JuQXCIsXG4gICAgaW1hZ2VTcmM6IFwiL3Bob3RvLWhvam9uZy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi7KeA7Iq567KUXCIsXG4gICAgcG9zaXRpb246IFwiTWFuYWdpbmcgUGFydG5lclwiLFxuICAgIGNhcmVlcjpcbiAgICAgIFwiKOyghCntmZTsnbTruIzrnbzrjZTsiqTsvZTrpqzslYQgQ0VPXFxuKOyghCntmZTsnbTsnbjrsqDsiqTtirjrqLztirggQ0VPXFxuKOyghClLVEIgSW52ZXN0bWVudFxcbijsoIQpS1BNRyBGQVNcIixcbiAgICBpbWFnZVNyYzogXCIvcGhvdG8tamF5amkucG5nXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIuuwsOyYgeynhFwiLFxuICAgIHBvc2l0aW9uOiBcIlZlbnR1cmUgUGFydG5lclwiLFxuICAgIGNhcmVlcjpcbiAgICAgIFwiKO2YhClMSU5FIEdhbWVzIENTT1xcbijsoIQpTmV4dEZsb29yIENGT1xcbihMSU5FIEdhbWVzIOyduOyImClcXG4o7KCEKU1vYmlsRmFjdG9yeSBGb3VuZGVyXFxuKE5leHRGbG9vciDsnbjsiJgpXCIsXG4gICAgaW1hZ2VTcmM6IFwiL3Bob3RvLWJhZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi7J207Jqp7IiYXCIsXG4gICAgcG9zaXRpb246IFwiQWR2aXNvclwiLFxuICAgIGNhcmVlcjogXCJLb3JlYS9OWSBMYXd5ZXJcIixcbiAgICBpbWFnZVNyYzogXCIvcGhvdG8tamp5c2xlZS5wbmdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi67CV7KSA7ISxXCIsXG4gICAgcG9zaXRpb246IFwiQWR2aXNvclwiLFxuICAgIGNhcmVlcjogXCJMZWdlbmQgQ2FwaXRhbCBNRFwiLFxuICAgIGltYWdlU3JjOiBcIi9waG90by1wYXJranMuanBnXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZW9wbGUoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW21lbWJlckluZGV4LCBzZXRNZW1iZXJJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBvblByZXZDbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgc2V0TWVtYmVySW5kZXgoKG1lbWJlckluZGV4IC0gMSArIG1lbWJlckxpc3QubGVuZ3RoKSAlIG1lbWJlckxpc3QubGVuZ3RoKTtcbiAgfTtcblxuICBjb25zdCBvbk5leHRDbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgc2V0TWVtYmVySW5kZXgoKG1lbWJlckluZGV4ICsgMSkgJSBtZW1iZXJMaXN0Lmxlbmd0aCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RnVsbFBhZ2VTbGlkZT5cbiAgICAgIDxCb3hcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxuICAgICAgPlxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoMlwiXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXG4gICAgICAgICAgICBhbGlnbj1cInJpZ2h0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5oMX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBQZW9wbGVcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IGZsZXhHcm93PXsxfSBoZWlnaHQ9ezB9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxIaWRkZW4gc21VcD5cbiAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjEwMCVcIiBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICAgICAgICA8Qm94IGFsaWduU2VsZj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCIgYWxpZ249XCJyaWdodFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5oMn0+XG4gICAgICAgICAgICAgICAgICAgIE1lZGljYWxcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIERvY3RvcnNcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgRW50cmVwcmVuZXVyc2hpcDxzcGFuIGNsYXNzTmFtZT1cInllbGxvd1wiPi48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFBlb3BsZU1lbWJlclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXttZW1iZXJMaXN0W21lbWJlckluZGV4XS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17bWVtYmVyTGlzdFttZW1iZXJJbmRleF0ucG9zaXRpb259XG4gICAgICAgICAgICAgICAgICAgIGNhcmVlcj17bWVtYmVyTGlzdFttZW1iZXJJbmRleF0uY2FyZWVyfVxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNyYz17bWVtYmVyTGlzdFttZW1iZXJJbmRleF0uaW1hZ2VTcmN9XG4gICAgICAgICAgICAgICAgICAgIG9uUHJldkNsaWNrPXtvblByZXZDbGlja31cbiAgICAgICAgICAgICAgICAgICAgb25OZXh0Q2xpY2s9e29uTmV4dENsaWNrfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgICAgIDxIaWRkZW4geHNEb3duPlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5oMn0+XG4gICAgICAgICAgICAgICAgICAgIE1lZGljYWxcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIERvY3RvcnNcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgRW50cmVwcmVuZXVyc2hpcDxzcGFuIGNsYXNzTmFtZT1cInllbGxvd1wiPi48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3ggYWxpZ25TZWxmPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8UGVvcGxlTWVtYmVyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e21lbWJlckxpc3RbbWVtYmVySW5kZXhdLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXttZW1iZXJMaXN0W21lbWJlckluZGV4XS5wb3NpdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgY2FyZWVyPXttZW1iZXJMaXN0W21lbWJlckluZGV4XS5jYXJlZXJ9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3JjPXttZW1iZXJMaXN0W21lbWJlckluZGV4XS5pbWFnZVNyY31cbiAgICAgICAgICAgICAgICAgICAgb25QcmV2Q2xpY2s9e29uUHJldkNsaWNrfVxuICAgICAgICAgICAgICAgICAgICBvbk5leHRDbGljaz17b25OZXh0Q2xpY2t9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvRnVsbFBhZ2VTbGlkZT5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/People.tsx\n");

/***/ })

})