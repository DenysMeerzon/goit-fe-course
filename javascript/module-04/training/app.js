'use strict';
// =================================
// !Конспект лекции по теме "Объекты"
// Литерал объекта = {}, литерал массива [];
// Обьект объявляется через переменную, либо может передаваться через аргумент: const object = {}; console.log({});
// Объект состоит из ключа и значения: const product = {key(всегда строка): value(любой тип данных)};
// Обращение к значению ключа объекта через ключ: const object = {name: 'Mango'}; console.log(object.name); console.log(object['name']);
// Обращение к значению ключа объекта через переменную - const object = {name: 'Mango'} const key = 'name'; console.log(object[key]);
// Объект - сложный тип, передается по ссылке
// Удаление информации из объекта выполняется по ключу: delete object.name(название ключа);
// Shorthand properties - Если значение ключа объекта совпадает со значением параметра функции, указывается одно название: const greatObject = (name, email) => {return {name, object}}; console.log(greatObject('Mango', 'gmail'));
// Computed properties - Если необходимо в объекте инициализировать ключ и его значение с внешней переменной
// Объект может состоять из свойств и методов, методы объявляются - changePrice () {}
// Обращение к свойствам и методам внутри объекта осуществляется через контекст вызова "this", который хранит ссылку на объет в контексте которого вызывается;
// Работа с коллекцией
// const storage = {
//   items: [
//     { id: 'id-1', name: 'apples', price: 30 },
//     { id: 'id-2', name: 'grapes', price: 50 },
//   ],
//   getItems() {
//     return this.items;
//   },
//   addProduct(product) {
//     return this.items.push(product);
//   },
//   removeProduct(id) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const product = this.items[i];
//       if (product.id === id) {
//         this.items.splice(i, 1);
//       }
//     }
//   },
// };
// console.table(storage.getItems());
// storage.addProduct({ id: 'id-3', name: 'bananas', price: 100 });
// console.table(storage.getItems());
// storage.removeProduct('id-3');
// console.table(storage.getItems());
//=============Перебор объекта
const users = [
  { name: 'Poly', age: 7, mood: 'happy' },
  { name: 'Mango', age: 4, mood: 'blissful' },
  { name: 'Ajax', age: 3, mood: 'tired' },
];
const getAllPropValues = (users, key) => {
  const arrValue = [];
  for (const user of users) {
    const obj = Object.keys(user);
    if (obj.includes(key)) {
      arrValue.push(user[key]);
    }
  }
  return arrValue;
};
//Вызовы функции для проверки
console.log(getAllPropValues(users, 'name'));
console.log(getAllPropValues(users, 'mood'));
console.log(getAllPropValues(users, 'active'));
