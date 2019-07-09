const a = 5;
console.log(a + 10);
// Если кастомный скрипт, тогда npm start, npm test. В противном случае, для запуска - npm run "название файла"
// Для использования пакетов в нод прописывается команда: const shortid = require('shortid'), абсолютный путь
// const shortid = require('shortid');
// console.log(shortid);
// console.log(shortid.generate());
// Транспиляция - процесс форматирования кода в более старый формат (надежный, поддерживаемый всеми браузерами). Используется Babel
const add = (a, b) => a + b;
console.log(add(2, 3));

class Car {
  constructor(value = 100) {
    this.value = value;
  }
  showValue() {
    console.log(this.value);
  }
}
const mustand = new Car(10000);

// Импорт для ноды
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
