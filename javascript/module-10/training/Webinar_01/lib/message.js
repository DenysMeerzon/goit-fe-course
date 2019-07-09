"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// const getMessage = () => 'Hello Node.js';
// Экспорт для ноды
// module.exports = {
//   getMessage,
// };
// Синтаксис дефолтного экспорта при работе с браузером
var getMessage = function getMessage() {
  return 'Hello ESM';
};

var _default = getMessage;
exports["default"] = _default;