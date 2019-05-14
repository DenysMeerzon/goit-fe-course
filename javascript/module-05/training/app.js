'use strict';
// Прием для защиты от падения скрипта "Guard clause"
// if (!product) {
//   return;
// }
// В методах объекта справа от равно или в аргументах - это операция spread(распыление), слева или в параметрах - это операция rest(сбор)
// const getProperties = function() {
//   console.log(this);
//   console.log(this.name);
// };
// const object = {
//   name: 'Mango',
// };
// object.getProperties = getProperties;
// object.getProperties();

// const printLabel = function(callback) {
//   const label = callback();
//   console.log(`Product label: ${label}`);
// };
// printLabel(object.getProperties);
// Если функция вызывается не в строгом режиме, this ссылается на глобальный объект window, если в строгом - undefined
// const fn = function() {
//   console.log(this);
// };
// fn();
// При вызове метода объекта, ссылка на объект создается в момент вызова функции
// При передаче функции из одного объекта в другой, теряется контекст, поэтому результатом вызова переданной функции в строгом режиме будет undefined, а в обычном - ссылка на глобальный объект window
// Стрелочные функции ссылаются не на контекст, а на лексическое окружение, в котором была создана
// Стрелочные функции в строгом режиме ссылаются на глобальный объект Window
// const fn = () => {
//   console.log(this);
// };
// fn();
// Стрелочная функция использует родительский контекст
// const product = {
//   label: 'Adidas',
//   showLabel() {
//     console.log(this);
//     console.log(this.label);
//     const fn = () => {
//       console.log(this);
//     };
//     fn();
//   },
// };
// product.showLabel();
// Методы функции "call"
// const sell = function(product) {
//   console.log(`Manager ${this.name} sold ${product}`);
//   this.sales += 1;
// };
// const mango = {
//   name: 'Mango',
//   sales: 10,
// };
// const poly = {
//   name: 'Poly',
//   sales: 20,
// };
// sell.call(mango, 'TV');
// sell.call(poly, 'GPU');
// Метод "apply" аналогичный "call", отличие в том, что в аргументах при вызове функции передается массив
// const sell = function(product) {
//   console.log(`Manager ${this.name} sold ${product}`);
//   this.sales += 1;
// };
// const mango = {
//   name: 'Mango',
//   sales: 10,
// };
// const poly = {
//   name: 'Poly',
//   sales: 20,
// };
// sell.apply(mango, ['TV']);
// sell.apply(poly, ['GPU']);
// Метод "bind" - навсегда привязывает контекст к функции

// const product = {
//   label: 'Adidas',
//   showLabel() {
//     console.log(this);
//     console.log(this.label);
//     return this.label;
//   },
// };

// const printLabel = function(callback) {
//   const label = callback();
//   console.log(`Product label: ${label}`);
// };
// const boundShowLabel = product.showLabel.bind(product);
// printLabel(boundShowLabel);

// Функция - конструктор (создает динамические объекты). Когда методы записываются в [[Call]], [[Construct]], значит в них есть скрытые свойства

// const Manager = function(name, sales = 0) {
//   this.name = name;
//   this.sales = sales;
// };
// const mango = new Manager('Mango', 10);
// console.log(mango);

// const Counter = function({ initialValue = 0, step = 1 }) {
//   this.value = initialValue;
//   this.step = step;
// this.increment = function() {
//   this.value += this.step;
// };
// };
// Counter.prototype.increment = function() {
//   this.value += this.step;
// };
// const counterA = new Counter({ initialValue: 10, step: 5 });
// console.log(counterA);
// counterA.increment();
// console.log(counterA);
// const counterB = new Counter({ initialValue: 100, step: 10 });
// console.log(counterB);
// counterB.increment();
// console.log(counterB);
// console.log(counterA, counterB);

// Когда мы что-то делаем по конструктору - это экземпляр
