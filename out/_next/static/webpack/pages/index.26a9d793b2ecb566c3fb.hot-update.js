webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_thomastang_Documents_fullstack_notebook_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_thomastang_Documents_fullstack_notebook_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_thomastang_Documents_fullstack_notebook_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_thomastang_Documents_fullstack_notebook_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dexie */ \"./node_modules/dexie/dist/dexie.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/thomastang/Documents/fullstack/notebook/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Index() {\n  _s();\n\n  var _this = this;\n\n  var db = new dexie__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"notebook\");\n  db.version(1).stores({\n    notes: \"title,note,createdAt,updatedAt\"\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      navOpen = _useState[0],\n      setNavOpen = _useState[1]; //@ts-ignore\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([]),\n      notes = _useState2[0],\n      setNotes = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(undefined),\n      note = _useState3[0],\n      setNote = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    Object(_Users_thomastang_Documents_fullstack_notebook_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_thomastang_Documents_fullstack_notebook_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      return _Users_thomastang_Documents_fullstack_notebook_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.t0 = setNotes;\n              _context.next = 3;\n              return db.notes.toArray();\n\n            case 3:\n              _context.t1 = _context.sent;\n              (0, _context.t0)(_context.t1);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"notebook\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"hidden lg:flex flex-col h-screen\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n        className: \"bg-light z-10 shadow-md p-4 h-16 flex items-center justify-between\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          className: \"text-2xl font-light select-none\",\n          children: \"notebook\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: \"cursor-pointer fill-current text-gray-800 hover:text-gray-900 transition-colors\",\n          onClick: function onClick() {\n            return setNavOpen(true);\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            xmlns: \"http://www.w3.org/2000/svg\",\n            width: \"24\",\n            height: \"24\",\n            viewBox: \"0 0 24 24\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              d: \"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex flex-row flex-1\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"aside\", {\n          className: \"sidebar flex-row bg-light z-30 border-r border-gray-200 w-96 px-4 pb-4 overflow-scroll text-sm sm:text-base lg:text-lg shadow-md\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: notes.map(function (_ref2, i) {\n              var title = _ref2.title,\n                  note = _ref2.note,\n                  createdAt = _ref2.createdAt,\n                  updatedAt = _ref2.updatedAt;\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"note cursor-pointer border border-gray-100 w-full h-28 shadow-sm hover:shadow-md transition-shadow flex flex-col px-4 py-3 select-none mt-4\",\n                onClick: function onClick() {\n                  return setNote({\n                    title: title,\n                    note: note,\n                    createdAt: createdAt,\n                    updatedAt: updatedAt\n                  });\n                },\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n                  className: \"flex-1 text-xl flex items-center\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                    children: title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 75,\n                    columnNumber: 41\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 37\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"flex justify-between\",\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-gray-400 text-sm\",\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                      className: \"block text-xs text-gray-300\",\n                      children: \"updated at\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 79,\n                      columnNumber: 45\n                    }, _this), updatedAt.toLocaleDateString()]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 78,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-gray-400 text-sm\",\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                      className: \"block text-xs text-gray-300\",\n                      children: \"created at\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 83,\n                      columnNumber: 45\n                    }, _this), createdAt.toLocaleDateString()]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 82,\n                    columnNumber: 41\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 77,\n                  columnNumber: 37\n                }, _this)]\n              }, i, true, {\n                fileName: _jsxFileName,\n                lineNumber: 62,\n                columnNumber: 33\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex-1 flex-col items-center\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"grid lg:hidden place-items-center h-screen\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text-center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"text-5xl\",\n          children: \"Your screen is too small.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"text-lg\",\n          children: \"Get a bigger screen.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"\".concat(navOpen ? \"\" : \"opacity-0 pointer-events-none\", \" absolute top-0 left-0 bottom-0 right-0 bg-white z-50 transition-opacity grid place-items-center\"),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: \"absolute top-4 right-5 text-lg select-none block cursor-pointer\",\n        onClick: function onClick() {\n          return setNavOpen(false);\n        },\n        children: \"\\u2715\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Index, \"t2c4AsHpPe1IeYgKYgE5Tdmk1fU=\");\n\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkluZGV4IiwiZGIiLCJEZXhpZSIsInZlcnNpb24iLCJzdG9yZXMiLCJub3RlcyIsInVzZVN0YXRlIiwibmF2T3BlbiIsInNldE5hdk9wZW4iLCJzZXROb3RlcyIsInVuZGVmaW5lZCIsIm5vdGUiLCJzZXROb3RlIiwidXNlRWZmZWN0IiwidG9BcnJheSIsIm1hcCIsImkiLCJ0aXRsZSIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInRvTG9jYWxlRGF0ZVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQzVCLE1BQU1DLEVBQUUsR0FBRyxJQUFJQyw2Q0FBSixDQUFVLFVBQVYsQ0FBWDtBQUVBRCxJQUFFLENBQUNFLE9BQUgsQ0FBVyxDQUFYLEVBQWNDLE1BQWQsQ0FBcUI7QUFDakJDLFNBQUs7QUFEWSxHQUFyQjs7QUFINEIsa0JBT0VDLHNEQUFRLENBQUMsS0FBRCxDQVBWO0FBQUEsTUFPckJDLE9BUHFCO0FBQUEsTUFPWkMsVUFQWSxpQkFTNUI7OztBQVQ0QixtQkFVRkYsc0RBQVEsQ0FPaEMsRUFQZ0MsQ0FWTjtBQUFBLE1BVXJCRCxLQVZxQjtBQUFBLE1BVWRJLFFBVmM7O0FBQUEsbUJBbUJKSCxzREFBUSxDQVE5QkksU0FSOEIsQ0FuQko7QUFBQSxNQW1CckJDLElBbkJxQjtBQUFBLE1BbUJmQyxPQW5CZTs7QUE2QjVCQyx5REFBUyxDQUFDLFlBQU07QUFDWiwyU0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRUdKLFFBRkg7QUFBQTtBQUFBLHFCQUVrQlIsRUFBRSxDQUFDSSxLQUFILENBQVNTLE9BQVQsRUFGbEI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQ7QUFJSCxH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QUFDLGFBQWY7QUFBQSxnQ0FDSTtBQUFJLG1CQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUcsbUJBQVMsRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0REosZUE0REk7QUFDSSxlQUFTLFlBQ0xULE9BQU8sR0FBRyxFQUFILEdBQVEsK0JBRFYscUdBRGI7QUFBQSw4QkFLSTtBQUNJLGlCQUFTLEVBQUMsaUVBRGQ7QUFFSSxlQUFPLEVBQUU7QUFBQSxpQkFBTUMsVUFBVSxDQUFDLEtBQUQsQ0FBaEI7QUFBQSxTQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosZUFXSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNURKO0FBQUEsa0JBREo7QUE0RUg7O0dBaEh1QlIsSzs7S0FBQUEsSyIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGV4aWUgZnJvbSBcImRleGllXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICAgIGNvbnN0IGRiID0gbmV3IERleGllKFwibm90ZWJvb2tcIik7XG5cbiAgICBkYi52ZXJzaW9uKDEpLnN0b3Jlcyh7XG4gICAgICAgIG5vdGVzOiBgdGl0bGUsbm90ZSxjcmVhdGVkQXQsdXBkYXRlZEF0YCxcbiAgICB9KTtcblxuICAgIGNvbnN0IFtuYXZPcGVuLCBzZXROYXZPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8vQHRzLWlnbm9yZVxuICAgIGNvbnN0IFtub3Rlcywgc2V0Tm90ZXNdID0gdXNlU3RhdGU8XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgICAgICBub3RlOiBzdHJpbmc7XG4gICAgICAgICAgICBjcmVhdGVkQXQ6IERhdGU7XG4gICAgICAgICAgICB1cGRhdGVkQXQ6IERhdGU7XG4gICAgICAgIH1bXVxuICAgID4oW10pO1xuXG4gICAgY29uc3QgW25vdGUsIHNldE5vdGVdID0gdXNlU3RhdGU8XG4gICAgICAgIHwge1xuICAgICAgICAgICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgICAgICAgICBub3RlOiBzdHJpbmc7XG4gICAgICAgICAgICAgIGNyZWF0ZWRBdDogRGF0ZTtcbiAgICAgICAgICAgICAgdXBkYXRlZEF0OiBEYXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfCB1bmRlZmluZWRcbiAgICA+KHVuZGVmaW5lZCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBzZXROb3Rlcyhhd2FpdCBkYi5ub3Rlcy50b0FycmF5KCkpO1xuICAgICAgICB9KSgpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+bm90ZWJvb2s8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBmbGV4LWNvbCBoLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctbGlnaHQgei0xMCBzaGFkb3ctbWQgcC00IGgtMTYgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWxpZ2h0IHNlbGVjdC1ub25lXCI+bm90ZWJvb2s8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmlsbC1jdXJyZW50IHRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1ncmF5LTkwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROYXZPcGVuKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNCAxMy42MTZ2LTMuMjMyYy0xLjY1MS0uNTg3LTIuNjk0LS43NTItMy4yMTktMi4wMTl2LS4wMDFjLS41MjctMS4yNzEuMS0yLjEzNC44NDctMy43MDdsLTIuMjg1LTIuMjg1Yy0xLjU2MS43NDItMi40MzMgMS4zNzUtMy43MDcuODQ3aC0uMDAxYy0xLjI2OS0uNTI2LTEuNDM1LTEuNTc2LTIuMDE5LTMuMjE5aC0zLjIzMmMtLjU4MiAxLjYzNS0uNzQ5IDIuNjkyLTIuMDE5IDMuMjE5aC0uMDAxYy0xLjI3MS41MjgtMi4xMzItLjA5OC0zLjcwNy0uODQ3bC0yLjI4NSAyLjI4NWMuNzQ1IDEuNTY4IDEuMzc1IDIuNDM0Ljg0NyAzLjcwNy0uNTI3IDEuMjcxLTEuNTg0IDEuNDM4LTMuMjE5IDIuMDJ2My4yMzJjMS42MzIuNTggMi42OTIuNzQ5IDMuMjE5IDIuMDE5LjUzIDEuMjgyLS4xMTQgMi4xNjYtLjg0NyAzLjcwN2wyLjI4NSAyLjI4NmMxLjU2Mi0uNzQzIDIuNDM0LTEuMzc1IDMuNzA3LS44NDdoLjAwMWMxLjI3LjUyNiAxLjQzNiAxLjU3OSAyLjAxOSAzLjIxOWgzLjIzMmMuNTgyLTEuNjM2Ljc1LTIuNjkgMi4wMjctMy4yMjJoLjAwMWMxLjI2Mi0uNTI0IDIuMTIuMTAxIDMuNjk4Ljg1MWwyLjI4NS0yLjI4NmMtLjc0NC0xLjU2My0xLjM3NS0yLjQzMy0uODQ4LTMuNzA2LjUyNy0xLjI3MSAxLjU4OC0xLjQ0IDMuMjIxLTIuMDIxem0tMTIgMi4zODRjLTIuMjA5IDAtNC0xLjc5MS00LTRzMS43OTEtNCA0LTQgNCAxLjc5MSA0IDQtMS43OTEgNC00IDR6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZsZXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwic2lkZWJhciBmbGV4LXJvdyBiZy1saWdodCB6LTMwIGJvcmRlci1yIGJvcmRlci1ncmF5LTIwMCB3LTk2IHB4LTQgcGItNCBvdmVyZmxvdy1zY3JvbGwgdGV4dC1zbSBzbTp0ZXh0LWJhc2UgbGc6dGV4dC1sZyBzaGFkb3ctbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25vdGVzLm1hcCgoeyB0aXRsZSwgbm90ZSwgY3JlYXRlZEF0LCB1cGRhdGVkQXQgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJub3RlIGN1cnNvci1wb2ludGVyIGJvcmRlciBib3JkZXItZ3JheS0xMDAgdy1mdWxsIGgtMjggc2hhZG93LXNtIGhvdmVyOnNoYWRvdy1tZCB0cmFuc2l0aW9uLXNoYWRvdyBmbGV4IGZsZXgtY29sIHB4LTQgcHktMyBzZWxlY3Qtbm9uZSBtdC00XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Tm90ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRBdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZmxleC0xIHRleHQteGwgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIHRleHQtZ3JheS0zMDBcIj51cGRhdGVkIGF0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXBkYXRlZEF0LnRvTG9jYWxlRGF0ZVN0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgdGV4dC1ncmF5LTMwMFwiPmNyZWF0ZWQgYXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjcmVhdGVkQXQudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmhpZGRlbiBwbGFjZS1pdGVtcy1jZW50ZXIgaC1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bFwiPllvdXIgc2NyZWVuIGlzIHRvbyBzbWFsbC48L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+R2V0IGEgYmlnZ2VyIHNjcmVlbi48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgICBuYXZPcGVuID8gXCJcIiA6IFwib3BhY2l0eS0wIHBvaW50ZXItZXZlbnRzLW5vbmVcIlxuICAgICAgICAgICAgICAgIH0gYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGJvdHRvbS0wIHJpZ2h0LTAgYmctd2hpdGUgei01MCB0cmFuc2l0aW9uLW9wYWNpdHkgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXJgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IHJpZ2h0LTUgdGV4dC1sZyBzZWxlY3Qtbm9uZSBibG9jayBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE5hdk9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg4pyVXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})