"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var a = 5;
console.log(a + 10); // Если кастомный скрипт, тогда npm start, npm test. В противном случае, для запуска - npm run "название файла"
// Для использования пакетов в нод прописывается команда: const shortid = require('shortid'), абсолютный путь
// const shortid = require('shortid');
// console.log(shortid);
// console.log(shortid.generate());
// Транспиляция - процесс форматирования кода в более старый формат (надежный, поддерживаемый всеми браузерами). Используется Babel

var add = function add(a, b) {
  return a + b;
};

console.log(add(2, 3));

var Car =
/*#__PURE__*/
function () {
  function Car() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

    _classCallCheck(this, Car);

    this.value = value;
  }

  _createClass(Car, [{
    key: "showValue",
    value: function showValue() {
      console.log(this.value);
    }
  }]);

  return Car;
}();

var mustand = new Car(10000); // Импорт для ноды
// const { getMessage } = require('./message');
// console.log(getMessage());
//Синтаксис дефолтного импорта, при работе с браузером
// import getMessage from './message.js';
// console.log(getMessage());
// Именованный импорт
// import { fetchArticles, authUser } from './api.js';
// fetchArticles();
// authUser();
// Именованный импорт всех свойств и методов одним объектом
// import * as API from './api.js';
// console.log(API);
// package-lock закрывает версии пакетов и не позволяет разработчикам использовать разные версии пакетов