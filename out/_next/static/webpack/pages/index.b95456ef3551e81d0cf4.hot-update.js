webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_thomastang_Documents_fullstack_notebook_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_thomastang_Documents_fullstack_notebook_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_thomastang_Documents_fullstack_notebook_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_thomastang_Documents_fullstack_notebook_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dexie */ \"./node_modules/dexie/dist/dexie.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/thomastang/Documents/fullstack/notebook/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Index() {\n  _s();\n\n  var _this = this;\n\n  var db = new dexie__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"notebook\");\n  db.version(1).stores({\n    notes: \"title,note,createdAt,updatedAt\"\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      navOpen = _useState[0],\n      setNavOpen = _useState[1]; //@ts-ignore\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([]),\n      notes = _useState2[0],\n      setNotes = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    Object(_Users_thomastang_Documents_fullstack_notebook_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_thomastang_Documents_fullstack_notebook_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      return _Users_thomastang_Documents_fullstack_notebook_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.t0 = setNotes;\n              _context.next = 3;\n              return db.notes.toArray();\n\n            case 3:\n              _context.t1 = _context.sent;\n              (0, _context.t0)(_context.t1);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }, []);\n  console.log(notes);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"notebook\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"hidden lg:flex flex-col h-screen\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n        className: \"bg-light z-10 shadow-md p-4 h-16 flex items-center justify-between\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          className: \"text-2xl font-light select-none\",\n          children: \"notebook\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: \"cursor-pointer fill-current text-gray-800 hover:text-gray-900 transition-colors\",\n          onClick: function onClick() {\n            return setNavOpen(true);\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            xmlns: \"http://www.w3.org/2000/svg\",\n            width: \"24\",\n            height: \"24\",\n            viewBox: \"0 0 24 24\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              d: \"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex flex-row flex-1\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"aside\", {\n          className: \"sidebar flex-row bg-light z-30 border-r border-gray-200 w-96 px-4 pb-4 overflow-scroll text-sm sm:text-base lg:text-lg shadow-md\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: notes.map(function (_ref2) {\n              var title = _ref2.title,\n                  note = _ref2.note,\n                  createdAt = _ref2.createdAt,\n                  updatedAt = _ref2.updatedAt;\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"note cursor-pointer border border-gray-100 w-full h-28 shadow-sm hover:shadow-md transition-shadow flex flex-col px-4 py-3 select-none mt-4\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n                  className: \"flex-1 text-xl flex items-center\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                    children: title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 55,\n                    columnNumber: 41\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 54,\n                  columnNumber: 37\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"flex justify-between\",\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-gray-400 text-sm\",\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                      className: \"block text-xs text-gray-300\",\n                      children: \"updated at\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 59,\n                      columnNumber: 45\n                    }, _this), updatedAt.toLocaleDateString()]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 58,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-gray-400 text-sm\",\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                      className: \"block text-xs text-gray-300\",\n                      children: \"created at\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 63,\n                      columnNumber: 45\n                    }, _this), createdAt.toLocaleDateString()]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 62,\n                    columnNumber: 41\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 57,\n                  columnNumber: 37\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 33\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex flex-col flex-1 note-container\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"grid lg:hidden place-items-center h-screen\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text-center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"text-5xl\",\n          children: \"Your screen is too small.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"text-lg\",\n          children: \"Get a bigger screen.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"\".concat(navOpen ? \"\" : \"opacity-0 pointer-events-none\", \" absolute top-0 left-0 bottom-0 right-0 bg-white z-50 transition-opacity grid place-items-center\"),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: \"absolute top-4 right-5 text-lg select-none block cursor-pointer\",\n        onClick: function onClick() {\n          return setNavOpen(false);\n        },\n        children: \"\\u2715\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Index, \"EfucRFgWJkU9Yy5Js8hyvY0F+T4=\");\n\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkluZGV4IiwiZGIiLCJEZXhpZSIsInZlcnNpb24iLCJzdG9yZXMiLCJub3RlcyIsInVzZVN0YXRlIiwibmF2T3BlbiIsInNldE5hdk9wZW4iLCJzZXROb3RlcyIsInVzZUVmZmVjdCIsInRvQXJyYXkiLCJjb25zb2xlIiwibG9nIiwibWFwIiwidGl0bGUiLCJub3RlIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwidG9Mb2NhbGVEYXRlU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFDNUIsTUFBTUMsRUFBRSxHQUFHLElBQUlDLDZDQUFKLENBQVUsVUFBVixDQUFYO0FBRUFELElBQUUsQ0FBQ0UsT0FBSCxDQUFXLENBQVgsRUFBY0MsTUFBZCxDQUFxQjtBQUNqQkMsU0FBSztBQURZLEdBQXJCOztBQUg0QixrQkFPRUMsc0RBQVEsQ0FBQyxLQUFELENBUFY7QUFBQSxNQU9yQkMsT0FQcUI7QUFBQSxNQU9aQyxVQVBZLGlCQVE1Qjs7O0FBUjRCLG1CQVNGRixzREFBUSxDQU9oQyxFQVBnQyxDQVROO0FBQUEsTUFTckJELEtBVHFCO0FBQUEsTUFTZEksUUFUYzs7QUFrQjVCQyx5REFBUyxDQUFDLFlBQU07QUFDWiwyU0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRUdELFFBRkg7QUFBQTtBQUFBLHFCQUVrQlIsRUFBRSxDQUFDSSxLQUFILENBQVNNLE9BQVQsRUFGbEI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQ7QUFJSCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUixLQUFaO0FBRUEsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtB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UyxFQUFDLGlFQURkO0FBRUksZUFBTyxFQUFFO0FBQUEsaUJBQU1DLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUEsU0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLGVBV0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9DSjtBQUFBLGtCQURKO0FBK0RIOztHQTFGdUJSLEs7O0tBQUFBLEsiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERleGllIGZyb20gXCJkZXhpZVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgICBjb25zdCBkYiA9IG5ldyBEZXhpZShcIm5vdGVib29rXCIpO1xuXG4gICAgZGIudmVyc2lvbigxKS5zdG9yZXMoe1xuICAgICAgICBub3RlczogYHRpdGxlLG5vdGUsY3JlYXRlZEF0LHVwZGF0ZWRBdGAsXG4gICAgfSk7XG5cbiAgICBjb25zdCBbbmF2T3Blbiwgc2V0TmF2T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgY29uc3QgW25vdGVzLCBzZXROb3Rlc10gPSB1c2VTdGF0ZTxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IHN0cmluZztcbiAgICAgICAgICAgIG5vdGU6IHN0cmluZztcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogRGF0ZTtcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogRGF0ZTtcbiAgICAgICAgfVtdXG4gICAgPihbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBzZXROb3Rlcyhhd2FpdCBkYi5ub3Rlcy50b0FycmF5KCkpO1xuICAgICAgICB9KSgpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnNvbGUubG9nKG5vdGVzKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+bm90ZWJvb2s8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBmbGV4LWNvbCBoLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctbGlnaHQgei0xMCBzaGFkb3ctbWQgcC00IGgtMTYgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWxpZ2h0IHNlbGVjdC1ub25lXCI+bm90ZWJvb2s8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmlsbC1jdXJyZW50IHRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1ncmF5LTkwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROYXZPcGVuKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNCAxMy42MTZ2LTMuMjMyYy0xLjY1MS0uNTg3LTIuNjk0LS43NTItMy4yMTktMi4wMTl2LS4wMDFjLS41MjctMS4yNzEuMS0yLjEzNC44NDctMy43MDdsLTIuMjg1LTIuMjg1Yy0xLjU2MS43NDItMi40MzMgMS4zNzUtMy43MDcuODQ3aC0uMDAxYy0xLjI2OS0uNTI2LTEuNDM1LTEuNTc2LTIuMDE5LTMuMjE5aC0zLjIzMmMtLjU4MiAxLjYzNS0uNzQ5IDIuNjkyLTIuMDE5IDMuMjE5aC0uMDAxYy0xLjI3MS41MjgtMi4xMzItLjA5OC0zLjcwNy0uODQ3bC0yLjI4NSAyLjI4NWMuNzQ1IDEuNTY4IDEuMzc1IDIuNDM0Ljg0NyAzLjcwNy0uNTI3IDEuMjcxLTEuNTg0IDEuNDM4LTMuMjE5IDIuMDJ2My4yMzJjMS42MzIuNTggMi42OTIuNzQ5IDMuMjE5IDIuMDE5LjUzIDEuMjgyLS4xMTQgMi4xNjYtLjg0NyAzLjcwN2wyLjI4NSAyLjI4NmMxLjU2Mi0uNzQzIDIuNDM0LTEuMzc1IDMuNzA3LS44NDdoLjAwMWMxLjI3LjUyNiAxLjQzNiAxLjU3OSAyLjAxOSAzLjIxOWgzLjIzMmMuNTgyLTEuNjM2Ljc1LTIuNjkgMi4wMjctMy4yMjJoLjAwMWMxLjI2Mi0uNTI0IDIuMTIuMTAxIDMuNjk4Ljg1MWwyLjI4NS0yLjI4NmMtLjc0NC0xLjU2My0xLjM3NS0yLjQzMy0uODQ4LTMuNzA2LjUyNy0xLjI3MSAxLjU4OC0xLjQ0IDMuMjIxLTIuMDIxem0tMTIgMi4zODRjLTIuMjA5IDAtNC0xLjc5MS00LTRzMS43OTEtNCA0LTQgNCAxLjc5MSA0IDQtMS43OTEgNC00IDR6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZsZXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwic2lkZWJhciBmbGV4LXJvdyBiZy1saWdodCB6LTMwIGJvcmRlci1yIGJvcmRlci1ncmF5LTIwMCB3LTk2IHB4LTQgcGItNCBvdmVyZmxvdy1zY3JvbGwgdGV4dC1zbSBzbTp0ZXh0LWJhc2UgbGc6dGV4dC1sZyBzaGFkb3ctbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25vdGVzLm1hcCgoeyB0aXRsZSwgbm90ZSwgY3JlYXRlZEF0LCB1cGRhdGVkQXQgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGUgY3Vyc29yLXBvaW50ZXIgYm9yZGVyIGJvcmRlci1ncmF5LTEwMCB3LWZ1bGwgaC0yOCBzaGFkb3ctc20gaG92ZXI6c2hhZG93LW1kIHRyYW5zaXRpb24tc2hhZG93IGZsZXggZmxleC1jb2wgcHgtNCBweS0zIHNlbGVjdC1ub25lIG10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmbGV4LTEgdGV4dC14bCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgdGV4dC1ncmF5LTMwMFwiPnVwZGF0ZWQgYXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1cGRhdGVkQXQudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyB0ZXh0LWdyYXktMzAwXCI+Y3JlYXRlZCBhdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NyZWF0ZWRBdC50b0xvY2FsZURhdGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZmxleC0xIG5vdGUtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBsZzpoaWRkZW4gcGxhY2UtaXRlbXMtY2VudGVyIGgtc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGxcIj5Zb3VyIHNjcmVlbiBpcyB0b28gc21hbGwuPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPkdldCBhIGJpZ2dlciBzY3JlZW4uPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgbmF2T3BlbiA/IFwiXCIgOiBcIm9wYWNpdHktMCBwb2ludGVyLWV2ZW50cy1ub25lXCJcbiAgICAgICAgICAgICAgICB9IGFic29sdXRlIHRvcC0wIGxlZnQtMCBib3R0b20tMCByaWdodC0wIGJnLXdoaXRlIHotNTAgdHJhbnNpdGlvbi1vcGFjaXR5IGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCByaWdodC01IHRleHQtbGcgc2VsZWN0LW5vbmUgYmxvY2sgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROYXZPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIOKclVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})