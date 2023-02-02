self["webpackHotUpdate_N_E"]("pages/article/[slug]",{

/***/ "./pages/article/[slug].js":
/*!*********************************!*\
  !*** ./pages/article/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var _home_theo_Development_code_projects_crud_a_day_theo_portfolio_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_theo_Development_code_projects_crud_a_day_theo_portfolio_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_theo_Development_code_projects_crud_a_day_theo_portfolio_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_theo_Development_code_projects_crud_a_day_theo_portfolio_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_theo_Development_code_projects_crud_a_day_theo_portfolio_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/image */ "./components/image.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/seo */ "./components/seo.js");
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/media */ "./lib/media.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "/home/theo/Development/code/projects/crud-a-day/theo-portfolio/frontend/pages/article/[slug].js",
    _this = undefined;









var Article = function Article(_ref) {
  var article = _ref.article,
      categories = _ref.categories;
  var imageUrl = (0,_lib_media__WEBPACK_IMPORTED_MODULE_10__.getStrapiMedia)(article.attributes.image);
  var seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true
  };

  function getAuthorDetails() {
    return _getAuthorDetails.apply(this, arguments);
  }

  function _getAuthorDetails() {
    _getAuthorDetails = (0,_home_theo_Development_code_projects_crud_a_day_theo_portfolio_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_theo_Development_code_projects_crud_a_day_theo_portfolio_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var _yield$Promise$all, _yield$Promise$all2, authorRes;

      return _home_theo_Development_code_projects_crud_a_day_theo_portfolio_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.all([(0,_lib_api__WEBPACK_IMPORTED_MODULE_6__.fetchAPI)("/authors/".concat(article.attributes.author.data.id), {
                populate: "*"
              })]);

            case 2:
              _yield$Promise$all = _context.sent;
              _yield$Promise$all2 = (0,_home_theo_Development_code_projects_crud_a_day_theo_portfolio_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_yield$Promise$all, 1);
              authorRes = _yield$Promise$all2[0];
              console.log(authorRes);
              return _context.abrupt("return", {
                props: {
                  author: authorRes.data
                }
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getAuthorDetails.apply(this, arguments);
  }

  getAuthorDetails();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_7__.default, {
    categories: categories.data,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_9__.default, {
      seo: seo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      id: "banner",
      className: "uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin",
      "data-src": imageUrl,
      "data-srcset": imageUrl,
      "data-uk-img": true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
        children: article.attributes.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "uk-section",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "uk-container uk-container-small",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_4___default()), {
          source: article.attributes.content,
          escapeHtml: false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {
          className: "uk-divider-small"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "uk-grid-small uk-flex-left",
          "data-uk-grid": "true",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            children: article.attributes.author.data.attributes.picture && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_image__WEBPACK_IMPORTED_MODULE_8__.default, {
              image: article.attributes.author.data.attributes.picture
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "uk-width-expand",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              className: "uk-margin-remove-bottom",
              children: ["By ", article.attributes.author.data.attributes.name]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              className: "uk-text-meta uk-margin-remove-top",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_5___default()), {
                format: "MMM Do YYYY",
                children: article.attributes.published_at
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, _this);
};

_c = Article;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Article);

var _c;

$RefreshReg$(_c, "Article");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS9bc2x1Z10uanMiXSwibmFtZXMiOlsiQXJ0aWNsZSIsImFydGljbGUiLCJjYXRlZ29yaWVzIiwiaW1hZ2VVcmwiLCJnZXRTdHJhcGlNZWRpYSIsImF0dHJpYnV0ZXMiLCJpbWFnZSIsInNlbyIsIm1ldGFUaXRsZSIsInRpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJzaGFyZUltYWdlIiwiZ2V0QXV0aG9yRGV0YWlscyIsIlByb21pc2UiLCJhbGwiLCJmZXRjaEFQSSIsImF1dGhvciIsImRhdGEiLCJpZCIsInBvcHVsYXRlIiwiYXV0aG9yUmVzIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiY29udGVudCIsInBpY3R1cmUiLCJuYW1lIiwicHVibGlzaGVkX2F0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBNkI7QUFBQSxNQUExQkMsT0FBMEIsUUFBMUJBLE9BQTBCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUMzQyxNQUFNQyxRQUFRLEdBQUdDLDJEQUFjLENBQUNILE9BQU8sQ0FBQ0ksVUFBUixDQUFtQkMsS0FBcEIsQ0FBL0I7QUFFQSxNQUFNQyxHQUFHLEdBQUc7QUFDVkMsYUFBUyxFQUFFUCxPQUFPLENBQUNJLFVBQVIsQ0FBbUJJLEtBRHBCO0FBRVZDLG1CQUFlLEVBQUVULE9BQU8sQ0FBQ0ksVUFBUixDQUFtQk0sV0FGMUI7QUFHVkMsY0FBVSxFQUFFWCxPQUFPLENBQUNJLFVBQVIsQ0FBbUJDLEtBSHJCO0FBSVZMLFdBQU8sRUFBRTtBQUpDLEdBQVo7O0FBSDJDLFdBVTVCWSxnQkFWNEI7QUFBQTtBQUFBOztBQUFBO0FBQUEsMFdBVTNDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FB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MzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiXG5pbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIlxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ltYWdlXCJcbmltcG9ydCBTZW8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VvXCJcbmltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcIi4uLy4uL2xpYi9tZWRpYVwiXG5cbmNvbnN0IEFydGljbGUgPSAoeyBhcnRpY2xlLCBjYXRlZ29yaWVzIH0pID0+IHtcbiAgY29uc3QgaW1hZ2VVcmwgPSBnZXRTdHJhcGlNZWRpYShhcnRpY2xlLmF0dHJpYnV0ZXMuaW1hZ2UpXG5cbiAgY29uc3Qgc2VvID0ge1xuICAgIG1ldGFUaXRsZTogYXJ0aWNsZS5hdHRyaWJ1dGVzLnRpdGxlLFxuICAgIG1ldGFEZXNjcmlwdGlvbjogYXJ0aWNsZS5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9uLFxuICAgIHNoYXJlSW1hZ2U6IGFydGljbGUuYXR0cmlidXRlcy5pbWFnZSxcbiAgICBhcnRpY2xlOiB0cnVlLFxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0QXV0aG9yRGV0YWlscygpIHtcbiAgICBjb25zdCBbYXV0aG9yUmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGZldGNoQVBJKGAvYXV0aG9ycy8ke2FydGljbGUuYXR0cmlidXRlcy5hdXRob3IuZGF0YS5pZH1gLCB7IHBvcHVsYXRlOiBcIipcIiB9KSxcbiAgICBdKVxuXG4gICAgY29uc29sZS5sb2coYXV0aG9yUmVzKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGF1dGhvcjogYXV0aG9yUmVzLmRhdGFcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRBdXRob3JEZXRhaWxzKClcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2F0ZWdvcmllcz17Y2F0ZWdvcmllcy5kYXRhfT5cbiAgICAgIDxTZW8gc2VvPXtzZW99IC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGlkPVwiYmFubmVyXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidWstaGVpZ2h0LW1lZGl1bSB1ay1mbGV4IHVrLWZsZXgtY2VudGVyIHVrLWZsZXgtbWlkZGxlIHVrLWJhY2tncm91bmQtY292ZXIgdWstbGlnaHQgdWstcGFkZGluZyB1ay1tYXJnaW5cIlxuICAgICAgICBkYXRhLXNyYz17aW1hZ2VVcmx9XG4gICAgICAgIGRhdGEtc3Jjc2V0PXtpbWFnZVVybH1cbiAgICAgICAgZGF0YS11ay1pbWdcbiAgICAgID5cbiAgICAgICAgPGgxPnthcnRpY2xlLmF0dHJpYnV0ZXMudGl0bGV9PC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1zZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1zbWFsbFwiPlxuICAgICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgICBzb3VyY2U9e2FydGljbGUuYXR0cmlidXRlcy5jb250ZW50fVxuICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidWstZGl2aWRlci1zbWFsbFwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1ncmlkLXNtYWxsIHVrLWZsZXgtbGVmdFwiIGRhdGEtdWstZ3JpZD1cInRydWVcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHthcnRpY2xlLmF0dHJpYnV0ZXMuYXV0aG9yLmRhdGEuYXR0cmlidXRlcy5waWN0dXJlICYmIChcbiAgICAgICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXthcnRpY2xlLmF0dHJpYnV0ZXMuYXV0aG9yLmRhdGEuYXR0cmlidXRlcy5waWN0dXJlfSAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXdpZHRoLWV4cGFuZFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1ay1tYXJnaW4tcmVtb3ZlLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgIEJ5IHthcnRpY2xlLmF0dHJpYnV0ZXMuYXV0aG9yLmRhdGEuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVrLXRleHQtbWV0YSB1ay1tYXJnaW4tcmVtb3ZlLXRvcFwiPlxuICAgICAgICAgICAgICAgIDxNb21lbnQgZm9ybWF0PVwiTU1NIERvIFlZWVlcIj5cbiAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmF0dHJpYnV0ZXMucHVibGlzaGVkX2F0fVxuICAgICAgICAgICAgICAgIDwvTW9tZW50PlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGFydGljbGVzUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvYXJ0aWNsZXNcIiwgeyBmaWVsZHM6IFtcInNsdWdcIl0gfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBhcnRpY2xlc1Jlcy5kYXRhLm1hcCgoYXJ0aWNsZSkgPT4gKHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzbHVnOiBhcnRpY2xlLmF0dHJpYnV0ZXMuc2x1ZyxcbiAgICAgIH0sXG4gICAgfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBhcnRpY2xlc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2FydGljbGVzXCIsIHtcbiAgICBmaWx0ZXJzOiB7XG4gICAgICBzbHVnOiBwYXJhbXMuc2x1ZyxcbiAgICB9LFxuICAgIHBvcHVsYXRlOiBcIipcIixcbiAgfSlcbiAgY29uc3QgY2F0ZWdvcmllc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIilcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGFydGljbGU6IGFydGljbGVzUmVzLmRhdGFbMF0sIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXNSZXMgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVcbiJdLCJzb3VyY2VSb290IjoiIn0=