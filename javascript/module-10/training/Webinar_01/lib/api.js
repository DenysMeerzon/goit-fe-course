"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authUser = exports.fetchArticles = void 0;

// Именованый экспорт
var fetchArticles = function fetchArticles() {
  console.log('Fetching articles!');
};

exports.fetchArticles = fetchArticles;

var authUser = function authUser() {
  console.log('Auth is on!');
};

exports.authUser = authUser;