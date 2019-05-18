'use strict';
// Объектно ориентированное программирование - это когда какая-либо сущность представляется в виде объекта
// Прототип объекта задается следующим образом:
// const animal = { eats: true };
// const dog = Object.create(animal);
// console.log(dog);
// Свойства объекта бывают собственные или унаследованные, метод для проверки - .hasOwnProperty()
// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// console.log(dog);
// console.log(animal.hasOwnProperty('eats'));
// Метод for...in перебирает собственные и унаследованные свойства
// Единственный случай, при котором объекты могут быть равны - это ссылка на один и тот же объект
// const Hero = function(name, xp) {
//   this.name = name;
//   this.xp = xp;
// };
// Hero.prototype.ganeXp = function(amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };
// const Warrior = function(name, xp, weapon) {
//   Hero.call(this, name, xp);
//   this.weapon = weapon;
// };
// Warrior.prototype = Object.create(Hero.prototype);
// Делает новый объект с ссылкой на Hero

// Warrior.prototype.constructor = Warrior;
// Добавляем в новый объект конструктор

// Warrior.prototype.attack = function() {
//   console.log(`${this.name} attack with ${this.weapon}`);
// };
// Добавляем в новый объект, метод
// const mango = new Warrior('Mango', 1000, 'halberd');
// console.log(mango);

// mango.ganeXp(500);
// Синтаксис ES6
// class Hero {
//   static randomProp = 'Random prop value';
//   constructor(name, xp) {
//     this.name = name;
//     this.xp = xp;
//   }
// Публичные свойства класса (this.gainXp)
//   gainXp = amount => {
//     this.xp += amount;
//   };
//   set qwe(newName) {
//     this.name = newName;
//   }
//   //   changeName(name) {
//     this.name = name;
//   }
//   get qwe() {
//     return this.name;
//   }
//   getName() {
//     return this.name;
//   }
// }
// const mango = new Hero('Mango', 2000);
// console.log(mango);
// mango.qwe = 'Poly';
// console.log(mango.qwe);
// const fn = function(callback) {
//   callback(1000);
// };

// Статические свойства доступны только для конструктора и не идут на свойство prototype, обычно пишутся до метода конструктор
// static randomProp = 'Random prop value'; static () {} - пример статического свойства и метода
// Имя геттера и сеттера не может совпадать с именем свойств будущих экземпляров
// set - записывает get - получает
// Публичные методы присваиваются не на прототип, а на экземпляр и записываются в виде стрелочных функций внутри класса
// Наследование
// class Hero {
//   constructor(name, xp) {
//     this.name = name;
//     this.xp = xp;
//   }
//   gainXp(amount) {
//     console.log(`${this.name} gained ${amount} experience points`);
//     this.xp += amount;
//   }
// }
// class Warrior extends Hero {
//   constructor(name, xp, weapon) {
//     super(name, xp);
//     this.weapon = weapon;
//   }
// }
// const mango = new Warrior('Mango', 1000, 'Arcana mace');
// console.log(mango);
// mango.gainXp(1000);
