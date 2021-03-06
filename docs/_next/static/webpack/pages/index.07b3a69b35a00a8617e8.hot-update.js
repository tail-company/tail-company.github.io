webpackHotUpdate_N_E("pages/index",{

/***/ "./components/People.tsx":
/*!*******************************!*\
  !*** ./components/People.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return People; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_hojonglee_Documents_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_FullPageSlide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/FullPageSlide */ \"./components/FullPageSlide.tsx\");\n/* harmony import */ var components_PeopleMember__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/PeopleMember */ \"./components/PeopleMember.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/hojonglee/Documents/workspace/tail-company.github.io/components/People.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(function (theme) {\n  var _h2, _title;\n\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"createStyles\"])({\n    content: {\n      position: \"relative\"\n    },\n    desc: {\n      bottom: 0,\n      left: 0,\n      position: \"absolute\",\n      zIndex: -1\n    },\n    h1: Object(_Users_hojonglee_Documents_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      fontSize: 19 * 0.75\n    }, theme.breakpoints.up(\"sm\"), {\n      fontSize: 19\n    }),\n    h2: (_h2 = {\n      fontSize: 72 * 0.75 * 0.65\n    }, Object(_Users_hojonglee_Documents_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_h2, theme.breakpoints.up(\"sm\"), {\n      fontSize: 72 * 0.75\n    }), Object(_Users_hojonglee_Documents_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_h2, theme.breakpoints.up(\"md\"), {\n      fontSize: 72\n    }), _h2),\n    root: {\n      position: \"relative\"\n    },\n    title: (_title = {\n      position: \"absolute\",\n      top: theme.spacing(2 * 0.6),\n      right: 0\n    }, Object(_Users_hojonglee_Documents_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_title, theme.breakpoints.up(\"sm\"), {\n      top: theme.spacing(2 * 0.8)\n    }), Object(_Users_hojonglee_Documents_workspace_tail_company_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_title, theme.breakpoints.up(\"md\"), {\n      top: theme.spacing(2)\n    }), _title)\n  });\n});\nvar memberList = [{\n  name: \"이호종\",\n  position: \"Managing Partner\",\n  career: \"(현)맥스웰피부과 원장\\n(현)서울대 의료빅데이터센터\\n(전)라임소사이어티 Founder\\n(전)무브 CTO\\n서울대 의학과 및 대학원\",\n  imageSrc: \"/photo-hojong.jpg\"\n}, {\n  name: \"지승범\",\n  position: \"Managing Partner\",\n  career: \"(전)화이브라더스코리아 CEO\\n(전)화이인베스트먼트 CEO\\n(전)KTB Investment\\n(전)KPMG FAS\",\n  imageSrc: \"/photo-jayji.png\"\n}, {\n  name: \"배영진\",\n  position: \"Venture Partner\",\n  career: \"(현)LINE Games CSO\\n(전)NextFloor CFO\\n(LINE Games 인수)\\n(전)MobilFactory Founder\\n(NextFloor 인수)\",\n  imageSrc: \"/photo-bae.jpg\"\n}, {\n  name: \"이용수\",\n  position: \"Advisor\",\n  career: \"Korea/NY Lawyer\",\n  imageSrc: \"/photo-jjyslee.png\"\n}, {\n  name: \"박준성\",\n  position: \"Advisor\",\n  career: \"Legend Capital MD\",\n  imageSrc: \"/photo-parkjs.jpg\"\n}];\nfunction People() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(0),\n      memberIndex = _useState[0],\n      setMemberIndex = _useState[1];\n\n  var onPrevClick = function onPrevClick(e) {\n    e.preventDefault();\n    e.stopPropagation();\n    setMemberIndex((memberIndex - 1 + memberList.length) % memberList.length);\n  };\n\n  var onNextClick = function onNextClick(e) {\n    e.preventDefault();\n    e.stopPropagation();\n    setMemberIndex((memberIndex + 1) % memberList.length);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_FullPageSlide__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n      display: \"flex\",\n      flexDirection: \"column\",\n      height: \"100%\",\n      className: classes.root,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        className: classes.title,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n          variant: \"h2\",\n          component: \"h1\",\n          align: \"right\",\n          className: classes.h1,\n          children: \"People\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        flexGrow: 1,\n        height: 0,\n        alignItems: \"center\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n          width: \"100%\",\n          height: \"100%\",\n          display: \"flex\",\n          alignItems: \"center\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Hidden\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n              width: \"100%\",\n              display: \"flex\",\n              justifyContent: \"flex-end\",\n              className: classes.content,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n                className: classes.desc,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n                  variant: \"h2\",\n                  className: classes.h2,\n                  children: [\"Medical\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 135,\n                    columnNumber: 21\n                  }, this), \"Doctors\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 137,\n                    columnNumber: 21\n                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n                    children: [\"Entrepreneurship\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                      className: \"yellow\",\n                      children: \".\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 139,\n                      columnNumber: 39\n                    }, this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 138,\n                    columnNumber: 21\n                  }, this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 133,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 132,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n                alignSelf: \"center\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_PeopleMember__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                  name: memberList[memberIndex].name,\n                  position: memberList[memberIndex].position,\n                  career: memberList[memberIndex].career,\n                  imageSrc: memberList[memberIndex].imageSrc,\n                  onPrevClick: onPrevClick,\n                  onNextClick: onNextClick\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 144,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 143,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 126,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 125,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 106,\n    columnNumber: 5\n  }, this);\n}\n\n_s(People, \"169cuQgUaKwWrtKf/G3GuudrzJ8=\", false, function () {\n  return [useStyles];\n});\n\n_c = People;\n\nvar _c;\n\n$RefreshReg$(_c, \"People\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QZW9wbGUudHN4P2VhNDIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwiY29udGVudCIsInBvc2l0aW9uIiwiZGVzYyIsImJvdHRvbSIsImxlZnQiLCJ6SW5kZXgiLCJoMSIsImZvbnRTaXplIiwiYnJlYWtwb2ludHMiLCJ1cCIsImgyIiwicm9vdCIsInRpdGxlIiwidG9wIiwic3BhY2luZyIsInJpZ2h0IiwibWVtYmVyTGlzdCIsIm5hbWUiLCJjYXJlZXIiLCJpbWFnZVNyYyIsIlBlb3BsZSIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsIm1lbWJlckluZGV4Iiwic2V0TWVtYmVySW5kZXgiLCJvblByZXZDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImxlbmd0aCIsIm9uTmV4dENsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFdBQU8sRUFBRTtBQUNQQyxjQUFRLEVBQUU7QUFESCxLQURFO0FBSVhDLFFBQUksRUFBRTtBQUNKQyxZQUFNLEVBQUUsQ0FESjtBQUVKQyxVQUFJLEVBQUUsQ0FGRjtBQUdKSCxjQUFRLEVBQUUsVUFITjtBQUlKSSxZQUFNLEVBQUUsQ0FBQztBQUpMLEtBSks7QUFVWEMsTUFBRSxFQUFFO0FBQ0ZDLGNBQVEsRUFBRSxLQUFLO0FBRGYsT0FFQ1QsS0FBSyxDQUFDVSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUZELEVBRThCO0FBQzVCRixjQUFRLEVBQUU7QUFEa0IsS0FGOUIsQ0FWUztBQWdCWEcsTUFBRTtBQUNBSCxjQUFRLEVBQUUsS0FBSyxJQUFMLEdBQVk7QUFEdEIs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QUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFORixlQWlCRSxxRUFBQyxxREFBRDtBQUFLLHlCQUFTLEVBQUMsUUFBZjtBQUFBLHVDQUNFLHFFQUFDLCtEQUFEO0FBQ0Usc0JBQUksRUFBRU0sVUFBVSxDQUFDTyxXQUFELENBQVYsQ0FBd0JOLElBRGhDO0FBRUUsMEJBQVEsRUFBRUQsVUFBVSxDQUFDTyxXQUFELENBQVYsQ0FBd0J0QixRQUZwQztBQUdFLHdCQUFNLEVBQUVlLFVBQVUsQ0FBQ08sV0FBRCxDQUFWLENBQXdCTCxNQUhsQztBQUlFLDBCQUFRLEVBQUVGLFVBQVUsQ0FBQ08sV0FBRCxDQUFWLENBQXdCSixRQUpwQztBQUtFLDZCQUFXLEVBQUVNLFdBTGY7QUFNRSw2QkFBVyxFQUFFSztBQU5mO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUREOztHQXpFdUJWLE07VUFDTnhCLFM7OztLQURNd0IsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvUGVvcGxlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSGlkZGVuLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBUaGVtZSwgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBGdWxsUGFnZVNsaWRlIGZyb20gXCJjb21wb25lbnRzL0Z1bGxQYWdlU2xpZGVcIjtcbmltcG9ydCBQZW9wbGVNZW1iZXIgZnJvbSBcImNvbXBvbmVudHMvUGVvcGxlTWVtYmVyXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICBjb250ZW50OiB7XG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIH0sXG4gICAgZGVzYzoge1xuICAgICAgYm90dG9tOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICB6SW5kZXg6IC0xLFxuICAgIH0sXG4gICAgaDE6IHtcbiAgICAgIGZvbnRTaXplOiAxOSAqIDAuNzUsXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcbiAgICAgICAgZm9udFNpemU6IDE5LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICBmb250U2l6ZTogNzIgKiAwLjc1ICogMC42NSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xuICAgICAgICBmb250U2l6ZTogNzIgKiAwLjc1LFxuICAgICAgfSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xuICAgICAgICBmb250U2l6ZTogNzIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgdG9wOiB0aGVtZS5zcGFjaW5nKDIgKiAwLjYpLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcbiAgICAgICAgdG9wOiB0aGVtZS5zcGFjaW5nKDIgKiAwLjgpLFxuICAgICAgfSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xuICAgICAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCBtZW1iZXJMaXN0ID0gW1xuICB7XG4gICAgbmFtZTogXCLsnbTtmLjsooVcIixcbiAgICBwb3NpdGlvbjogXCJNYW5hZ2luZyBQYXJ0bmVyXCIsXG4gICAgY2FyZWVyOlxuICAgICAgXCIo7ZiEKeunpeyKpOybsO2UvOu2gOqzvCDsm5DsnqVcXG4o7ZiEKeyEnOyauOuMgCDsnZjro4zruYXrjbDsnbTthLDshLzthLBcXG4o7KCEKeudvOyehOyGjOyCrOydtOyWtO2LsCBGb3VuZGVyXFxuKOyghCnrrLTruIwgQ1RPXFxu7ISc7Jq464yAIOydmO2VmeqzvCDrsI8g64yA7ZWZ7JuQXCIsXG4gICAgaW1hZ2VTcmM6IFwiL3Bob3RvLWhvam9uZy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi7KeA7Iq567KUXCIsXG4gICAgcG9zaXRpb246IFwiTWFuYWdpbmcgUGFydG5lclwiLFxuICAgIGNhcmVlcjpcbiAgICAgIFwiKOyghCntmZTsnbTruIzrnbzrjZTsiqTsvZTrpqzslYQgQ0VPXFxuKOyghCntmZTsnbTsnbjrsqDsiqTtirjrqLztirggQ0VPXFxuKOyghClLVEIgSW52ZXN0bWVudFxcbijsoIQpS1BNRyBGQVNcIixcbiAgICBpbWFnZVNyYzogXCIvcGhvdG8tamF5amkucG5nXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIuuwsOyYgeynhFwiLFxuICAgIHBvc2l0aW9uOiBcIlZlbnR1cmUgUGFydG5lclwiLFxuICAgIGNhcmVlcjpcbiAgICAgIFwiKO2YhClMSU5FIEdhbWVzIENTT1xcbijsoIQpTmV4dEZsb29yIENGT1xcbihMSU5FIEdhbWVzIOyduOyImClcXG4o7KCEKU1vYmlsRmFjdG9yeSBGb3VuZGVyXFxuKE5leHRGbG9vciDsnbjsiJgpXCIsXG4gICAgaW1hZ2VTcmM6IFwiL3Bob3RvLWJhZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi7J207Jqp7IiYXCIsXG4gICAgcG9zaXRpb246IFwiQWR2aXNvclwiLFxuICAgIGNhcmVlcjogXCJLb3JlYS9OWSBMYXd5ZXJcIixcbiAgICBpbWFnZVNyYzogXCIvcGhvdG8tamp5c2xlZS5wbmdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi67CV7KSA7ISxXCIsXG4gICAgcG9zaXRpb246IFwiQWR2aXNvclwiLFxuICAgIGNhcmVlcjogXCJMZWdlbmQgQ2FwaXRhbCBNRFwiLFxuICAgIGltYWdlU3JjOiBcIi9waG90by1wYXJranMuanBnXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZW9wbGUoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW21lbWJlckluZGV4LCBzZXRNZW1iZXJJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBvblByZXZDbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgc2V0TWVtYmVySW5kZXgoKG1lbWJlckluZGV4IC0gMSArIG1lbWJlckxpc3QubGVuZ3RoKSAlIG1lbWJlckxpc3QubGVuZ3RoKTtcbiAgfTtcblxuICBjb25zdCBvbk5leHRDbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgc2V0TWVtYmVySW5kZXgoKG1lbWJlckluZGV4ICsgMSkgJSBtZW1iZXJMaXN0Lmxlbmd0aCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RnVsbFBhZ2VTbGlkZT5cbiAgICAgIDxCb3hcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxuICAgICAgPlxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoMlwiXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXG4gICAgICAgICAgICBhbGlnbj1cInJpZ2h0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5oMX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBQZW9wbGVcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IGZsZXhHcm93PXsxfSBoZWlnaHQ9ezB9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxIaWRkZW4+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2N9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmgyfT5cbiAgICAgICAgICAgICAgICAgICAgTWVkaWNhbFxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgRG9jdG9yc1xuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICBFbnRyZXByZW5ldXJzaGlwPHNwYW4gY2xhc3NOYW1lPVwieWVsbG93XCI+Ljwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCBhbGlnblNlbGY9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxQZW9wbGVNZW1iZXJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17bWVtYmVyTGlzdFttZW1iZXJJbmRleF0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249e21lbWJlckxpc3RbbWVtYmVySW5kZXhdLnBvc2l0aW9ufVxuICAgICAgICAgICAgICAgICAgICBjYXJlZXI9e21lbWJlckxpc3RbbWVtYmVySW5kZXhdLmNhcmVlcn1cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM9e21lbWJlckxpc3RbbWVtYmVySW5kZXhdLmltYWdlU3JjfVxuICAgICAgICAgICAgICAgICAgICBvblByZXZDbGljaz17b25QcmV2Q2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIG9uTmV4dENsaWNrPXtvbk5leHRDbGlja31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9GdWxsUGFnZVNsaWRlPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/People.tsx\n");

/***/ })

})