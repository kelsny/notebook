webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_thomastang_Documents_fullstack_notebook_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_thomastang_Documents_fullstack_notebook_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_thomastang_Documents_fullstack_notebook_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_thomastang_Documents_fullstack_notebook_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dexie */ \"./node_modules/dexie/dist/dexie.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/thomastang/Documents/fullstack/notebook/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Index() {\n  _s();\n\n  var _this = this;\n\n  var db = new dexie__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"notebook\");\n  db.version(1).stores({\n    notes: \"title,note,createdAt,updatedAt\"\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      navOpen = _useState[0],\n      setNavOpen = _useState[1]; //@ts-ignore\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([]),\n      notes = _useState2[0],\n      setNotes = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(undefined),\n      note = _useState3[0],\n      setNote = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    Object(_Users_thomastang_Documents_fullstack_notebook_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_thomastang_Documents_fullstack_notebook_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      return _Users_thomastang_Documents_fullstack_notebook_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.t0 = setNotes;\n              _context.next = 3;\n              return db.notes.toArray();\n\n            case 3:\n              _context.t1 = _context.sent;\n              (0, _context.t0)(_context.t1);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }, []);\n  console.log(notes);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"notebook\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"hidden lg:flex flex-col h-screen\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n        className: \"bg-light z-10 shadow-md p-4 h-16 flex items-center justify-between\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          className: \"text-2xl font-light select-none\",\n          children: \"notebook\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: \"cursor-pointer fill-current text-gray-800 hover:text-gray-900 transition-colors\",\n          onClick: function onClick() {\n            return setNavOpen(true);\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            xmlns: \"http://www.w3.org/2000/svg\",\n            width: \"24\",\n            height: \"24\",\n            viewBox: \"0 0 24 24\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              d: \"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex flex-row flex-1\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"aside\", {\n          className: \"sidebar flex-row bg-light z-30 border-r border-gray-200 w-96 px-4 pb-4 overflow-scroll text-sm sm:text-base lg:text-lg shadow-md\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: notes.map(function (_ref2, i) {\n              var title = _ref2.title,\n                  note = _ref2.note,\n                  createdAt = _ref2.createdAt,\n                  updatedAt = _ref2.updatedAt;\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"note cursor-pointer border border-gray-100 w-full h-28 shadow-sm hover:shadow-md transition-shadow flex flex-col px-4 py-3 select-none mt-4\",\n                onClick: function onClick() {\n                  return setNote({\n                    title: title,\n                    note: note,\n                    createdAt: createdAt,\n                    updatedAt: updatedAt\n                  });\n                },\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n                  className: \"flex-1 text-xl flex items-center\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                    children: title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 77,\n                    columnNumber: 41\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 76,\n                  columnNumber: 37\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"flex justify-between\",\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-gray-400 text-sm\",\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                      className: \"block text-xs text-gray-300\",\n                      children: \"updated at\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 81,\n                      columnNumber: 45\n                    }, _this), updatedAt.toLocaleDateString()]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 80,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-gray-400 text-sm\",\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                      className: \"block text-xs text-gray-300\",\n                      children: \"created at\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 85,\n                      columnNumber: 45\n                    }, _this), createdAt.toLocaleDateString()]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 84,\n                    columnNumber: 41\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 79,\n                  columnNumber: 37\n                }, _this)]\n              }, i, true, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 33\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex-1 flex-col items-center\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"grid lg:hidden place-items-center h-screen\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text-center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"text-5xl\",\n          children: \"Your screen is too small.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"text-lg\",\n          children: \"Get a bigger screen.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"\".concat(navOpen ? \"\" : \"opacity-0 pointer-events-none\", \" absolute top-0 left-0 bottom-0 right-0 bg-white z-50 transition-opacity grid place-items-center\"),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: \"absolute top-4 right-5 text-lg select-none block cursor-pointer\",\n        onClick: function onClick() {\n          return setNavOpen(false);\n        },\n        children: \"\\u2715\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Index, \"t2c4AsHpPe1IeYgKYgE5Tdmk1fU=\");\n\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkluZGV4IiwiZGIiLCJEZXhpZSIsInZlcnNpb24iLCJzdG9yZXMiLCJub3RlcyIsInVzZVN0YXRlIiwibmF2T3BlbiIsInNldE5hdk9wZW4iLCJzZXROb3RlcyIsInVuZGVmaW5lZCIsIm5vdGUiLCJzZXROb3RlIiwidXNlRWZmZWN0IiwidG9BcnJheSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpIiwidGl0bGUiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUM1QixNQUFNQyxFQUFFLEdBQUcsSUFBSUMsNkNBQUosQ0FBVSxVQUFWLENBQVg7QUFFQUQsSUFBRSxDQUFDRSxPQUFILENBQVcsQ0FBWCxFQUFjQyxNQUFkLENBQXFCO0FBQ2pCQyxTQUFLO0FBRFksR0FBckI7O0FBSDRCLGtCQU9FQyxzREFBUSxDQUFDLEtBQUQsQ0FQVjtBQUFBLE1BT3JCQyxPQVBxQjtBQUFBLE1BT1pDLFVBUFksaUJBUzVCOzs7QUFUNEIsbUJBVUZGLHNEQUFRLENBT2hDLEVBUGdDLENBVk47QUFBQSxNQVVyQkQsS0FWcUI7QUFBQSxNQVVkSSxRQVZjOztBQUFBLG1CQW1CSkgsc0RBQVEsQ0FROUJJLFNBUjhCLENBbkJKO0FBQUEsTUFtQnJCQyxJQW5CcUI7QUFBQSxNQW1CZkMsT0FuQmU7O0FBNkI1QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osMlNBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUVHSixRQUZIO0FBQUE7QUFBQSxxQkFFa0JSLEVBQUUsQ0FBQ0ksS0FBSCxDQUFTUyxPQUFULEVBRmxCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFEO0FBSUgsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVgsS0FBWjtBQUVBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJO0FBQUssZUFBUyxFQUFDLGtDQUFmO0FBQUEsOEJBQ0k7QUFBUSxpQkFBUyxFQUFDLG9FQUFsQjtBQUFBLGdDQUNJO0FBQUksbUJBQVMsRUFBQyxpQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQ0ksbUJBQVMsRUFBQyxpRkFEZDtBQUVJLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUcsVUFBVSxDQUFDLElBQUQsQ0FBaEI7QUFBQSxXQUZiO0FBQUEsaUNBSUk7QUFBSyxpQkFBSyxFQUFDLDRCQUFYO0FBQXdDLGlCQUFLLEVBQUMsSUFBOUM7QUFBbUQsa0JBQU0sRUFBQyxJQUExRDtBQUErRCxtQkFBTyxFQUFDLFdBQXZFO0FBQUEsbUNBQ0k7QUFBTSxlQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFZSTtBQUFLLGlCQUFTLEVBQUMsc0JBQWY7QUFBQSxnQ0FDSTtBQUFPLG1CQUFTLEVBQUMsa0lBQWpCO0FBQUEsaUNBQ0k7QUFBQSxzQkFDS0gsS0FBSyxDQUFDWSxHQUFOLENBQVUsaUJBQXdDQyxDQUF4QztBQUFBLGtCQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxrQkFBVVIsSUFBVixTQUFVQSxJQUFWO0FBQUEsa0JBQWdCUyxTQUFoQixTQUFnQkEsU0FBaEI7QUFBQSxrQkFBMkJDLFNBQTNCLFNBQTJCQSxTQUEzQjtBQUFBLGtDQUNQO0FBQ0kseUJBQVMsRUFBQyw2SUFEZDtBQUdJLHVCQUFPLEVBQUU7QUFBQSx5QkFDTFQsT0FBTyxDQUFDO0FBQ0pPLHlCQUFLLEVBQUxBLEtBREk7QUFFSlIsd0JBQUksRUFBSkEsSUFGSTtBQUdKUyw2QkFBUyxFQUFUQSxTQUhJO0FBSUpDLDZCQUFTLEVBQVRBO0FBSkksbUJBQUQsQ0FERjtBQUFBLGlCQUhiO0FBQUEsd0NBWUk7QUFBSSwyQkFBUyxFQUFDLGtDQUFkO0FBQUEseUNBQ0k7QUFBQSw4QkFBT0Y7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFaSixlQWVJO0FBQUssMkJBQVMsRUFBQyxzQkFBZjtBQUFBLDBDQUNJO0FBQUssNkJBQVMsRUFBQyx1QkFBZjtBQUFBLDRDQUNJO0FBQU0sK0JBQVMsRUFBQyw2QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREosRUFFS0UsU0FBUyxDQUFDQyxrQkFBVixFQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUtJO0FBQUssNkJBQVMsRUFBQyx1QkFBZjtBQUFBLDRDQUNJO0FBQU0sK0JBQVMsRUFBQyw2QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREosRUFFS0YsU0FBUyxDQUFDRSxrQkFBVixFQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBZko7QUFBQSxpQkFFU0osQ0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURPO0FBQUEsYUFBVjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBaUNJO0FBQUssbUJBQVMsRUFBQyw4QkFBZjtBQUFBLGlDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQXNESTtBQUFLLGVBQVMsRUFBQyw0Q0FBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUEsZ0NBQ0k7QUFBSSxtQkFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFHLG1CQUFTLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdERKLGVBNERJO0FBQ0ksZUFBUyxZQUNMWCxPQUFPLEdBQUcsRUFBSCxHQUFRLCtCQURWLHFHQURiO0FBQUEsOEJBS0k7QUFDSSxpQkFBUyxFQUFDLGlFQURkO0FBRUksZUFBTyxFQUFFO0FBQUEsaUJBQU1DLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUEsU0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLGVBV0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVESjtBQUFBLGtCQURKO0FBNEVIOztHQWxIdUJSLEs7O0tBQUFBLEsiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERleGllIGZyb20gXCJkZXhpZVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgICBjb25zdCBkYiA9IG5ldyBEZXhpZShcIm5vdGVib29rXCIpO1xuXG4gICAgZGIudmVyc2lvbigxKS5zdG9yZXMoe1xuICAgICAgICBub3RlczogYHRpdGxlLG5vdGUsY3JlYXRlZEF0LHVwZGF0ZWRBdGAsXG4gICAgfSk7XG5cbiAgICBjb25zdCBbbmF2T3Blbiwgc2V0TmF2T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvL0B0cy1pZ25vcmVcbiAgICBjb25zdCBbbm90ZXMsIHNldE5vdGVzXSA9IHVzZVN0YXRlPFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgICAgICAgbm90ZTogc3RyaW5nO1xuICAgICAgICAgICAgY3JlYXRlZEF0OiBEYXRlO1xuICAgICAgICAgICAgdXBkYXRlZEF0OiBEYXRlO1xuICAgICAgICB9W11cbiAgICA+KFtdKTtcblxuICAgIGNvbnN0IFtub3RlLCBzZXROb3RlXSA9IHVzZVN0YXRlPFxuICAgICAgICB8IHtcbiAgICAgICAgICAgICAgdGl0bGU6IHN0cmluZztcbiAgICAgICAgICAgICAgbm90ZTogc3RyaW5nO1xuICAgICAgICAgICAgICBjcmVhdGVkQXQ6IERhdGU7XG4gICAgICAgICAgICAgIHVwZGF0ZWRBdDogRGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIHwgdW5kZWZpbmVkXG4gICAgPih1bmRlZmluZWQpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgc2V0Tm90ZXMoYXdhaXQgZGIubm90ZXMudG9BcnJheSgpKTtcbiAgICAgICAgfSkoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zb2xlLmxvZyhub3Rlcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPm5vdGVib29rPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggZmxleC1jb2wgaC1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJnLWxpZ2h0IHotMTAgc2hhZG93LW1kIHAtNCBoLTE2IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1saWdodCBzZWxlY3Qtbm9uZVwiPm5vdGVib29rPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZpbGwtY3VycmVudCB0ZXh0LWdyYXktODAwIGhvdmVyOnRleHQtZ3JheS05MDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TmF2T3Blbih0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjQgMTMuNjE2di0zLjIzMmMtMS42NTEtLjU4Ny0yLjY5NC0uNzUyLTMuMjE5LTIuMDE5di0uMDAxYy0uNTI3LTEuMjcxLjEtMi4xMzQuODQ3LTMuNzA3bC0yLjI4NS0yLjI4NWMtMS41NjEuNzQyLTIuNDMzIDEuMzc1LTMuNzA3Ljg0N2gtLjAwMWMtMS4yNjktLjUyNi0xLjQzNS0xLjU3Ni0yLjAxOS0zLjIxOWgtMy4yMzJjLS41ODIgMS42MzUtLjc0OSAyLjY5Mi0yLjAxOSAzLjIxOWgtLjAwMWMtMS4yNzEuNTI4LTIuMTMyLS4wOTgtMy43MDctLjg0N2wtMi4yODUgMi4yODVjLjc0NSAxLjU2OCAxLjM3NSAyLjQzNC44NDcgMy43MDctLjUyNyAxLjI3MS0xLjU4NCAxLjQzOC0zLjIxOSAyLjAydjMuMjMyYzEuNjMyLjU4IDIuNjkyLjc0OSAzLjIxOSAyLjAxOS41MyAxLjI4Mi0uMTE0IDIuMTY2LS44NDcgMy43MDdsMi4yODUgMi4yODZjMS41NjItLjc0MyAyLjQzNC0xLjM3NSAzLjcwNy0uODQ3aC4wMDFjMS4yNy41MjYgMS40MzYgMS41NzkgMi4wMTkgMy4yMTloMy4yMzJjLjU4Mi0xLjYzNi43NS0yLjY5IDIuMDI3LTMuMjIyaC4wMDFjMS4yNjItLjUyNCAyLjEyLjEwMSAzLjY5OC44NTFsMi4yODUtMi4yODZjLS43NDQtMS41NjMtMS4zNzUtMi40MzMtLjg0OC0zLjcwNi41MjctMS4yNzEgMS41ODgtMS40NCAzLjIyMS0yLjAyMXptLTEyIDIuMzg0Yy0yLjIwOSAwLTQtMS43OTEtNC00czEuNzkxLTQgNC00IDQgMS43OTEgNCA0LTEuNzkxIDQtNCA0elwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cInNpZGViYXIgZmxleC1yb3cgYmctbGlnaHQgei0zMCBib3JkZXItciBib3JkZXItZ3JheS0yMDAgdy05NiBweC00IHBiLTQgb3ZlcmZsb3ctc2Nyb2xsIHRleHQtc20gc206dGV4dC1iYXNlIGxnOnRleHQtbGcgc2hhZG93LW1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub3Rlcy5tYXAoKHsgdGl0bGUsIG5vdGUsIGNyZWF0ZWRBdCwgdXBkYXRlZEF0IH0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm90ZSBjdXJzb3ItcG9pbnRlciBib3JkZXIgYm9yZGVyLWdyYXktMTAwIHctZnVsbCBoLTI4IHNoYWRvdy1zbSBob3ZlcjpzaGFkb3ctbWQgdHJhbnNpdGlvbi1zaGFkb3cgZmxleCBmbGV4LWNvbCBweC00IHB5LTMgc2VsZWN0LW5vbmUgbXQtNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5vdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkQXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZsZXgtMSB0ZXh0LXhsIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyB0ZXh0LWdyYXktMzAwXCI+dXBkYXRlZCBhdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VwZGF0ZWRBdC50b0xvY2FsZURhdGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIHRleHQtZ3JheS0zMDBcIj5jcmVhdGVkIGF0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3JlYXRlZEF0LnRvTG9jYWxlRGF0ZVN0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBsZzpoaWRkZW4gcGxhY2UtaXRlbXMtY2VudGVyIGgtc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGxcIj5Zb3VyIHNjcmVlbiBpcyB0b28gc21hbGwuPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPkdldCBhIGJpZ2dlciBzY3JlZW4uPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgbmF2T3BlbiA/IFwiXCIgOiBcIm9wYWNpdHktMCBwb2ludGVyLWV2ZW50cy1ub25lXCJcbiAgICAgICAgICAgICAgICB9IGFic29sdXRlIHRvcC0wIGxlZnQtMCBib3R0b20tMCByaWdodC0wIGJnLXdoaXRlIHotNTAgdHJhbnNpdGlvbi1vcGFjaXR5IGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCByaWdodC01IHRleHQtbGcgc2VsZWN0LW5vbmUgYmxvY2sgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROYXZPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIOKclVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})