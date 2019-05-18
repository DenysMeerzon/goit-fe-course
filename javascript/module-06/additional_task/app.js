'use strict';

// TASK#1
/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, выведи их в консоль.
*/
// const Account = function(login, email) {
//   this.login = login;
//   this.email = email;
// };
// Account.prototype.getInfo = function() {
//   console.log(`Login: ${this.login}, Email: ${this.email}`);
// };
// const account = new Account('Mangozedog', 'mango@dog.woof');

// console.log(Account.prototype.getInfo); // function
// account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const goodAccount = new Account('GoodMan', 'GoodMan@gmail.com');

// console.log(goodAccount);
// console.log(account);

// TASK#2
/*
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
  
    - геттер value - возвращает текущее значение поля _value
  
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

// class StringBuilder {
//   constructor(value) {
//     this._value = value;
//   }
//   get value() {
//     return this._value;
//   }
//   append(str) {
//     this._value = this._value + str;
//   }
//   prepend(str) {
//     this._value = str + this._value;
//   }
//   pad(str) {
//     this._value = str + this._value + str;
//   }
// }
// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

// TASK#3
/*
 * Напиши класс Car с указанными свойствами и методами
 */
// class Car {
//   static getSpecs(car) {
//     console.log(car);
//   }
//   constructor({
//     maxSpeed = 0,
//     speed = 0,
//     running = false,
//     distance = 0,
//     price,
//   }) {
//     this.price = price;
//     this.maxSpeed = maxSpeed;
//     this.speed = speed;
//     this.running = running;
//     this.distance = distance;
/*
        Добавь свойства:
          - speed - для отслеживания текущей скорости, изначально 0.
          - maxSpeed - для хранения максимальной скорости
          - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
          - distance - содержит общий киллометраж, изначально с 0
      */
//   }

//   turnOn() {
//     this.running = true;
// Добавь код для того чтобы завести автомобиль
// Просто записывает в свойство running значание true
//   }

//   turnOff() {
//     this.running = false;
// Добавь код для того чтобы заглушить автомобиль
// Просто записывает в свойство running значание false
//   }

//   accelerate(spd) {
//     if (spd < this.maxSpeed) {
//       this.speed = spd;
//     }
// Записывает в поле speed полученное значение, при условии что
// оно не больше чем значение свойства maxSpeed
//   }

//   decelerate(spd) {
//     if (spd < this.maxSpeed && spd > 0) {
//       this.speed = spd;
//     }
// Записывает в поле speed полученное значение, при условии что
// оно не больше чем значение свойства maxSpeed и не меньше нуля
//   }

//   drive(hours) {
//     this.turnOn();
//     if (this.running) {
//       this.distance = hours * this.speed;
//     }
//   }
//   set value(value) {
//     this.price = value;
//   }
//   get value() {
//     return this.price;
//   }
// Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
// но только в том случае если машина заведена!
// }

// const car = new Car({ maxSpeed: 100 });
// console.log(car);
// car.accelerate(40);
// console.log(car);
// car.decelerate(70);
// console.log(car);
// car.drive(5);
// console.log(car);

// TASK#4
/*
 * Добавь к классу Car из предыдущего задания статический
 * метод getSpecs, который принимает объект-машину как параметр
 * и выводит в консоль значения полей maxSpeed, speed, running и distance.
 */

// const car = new Car({ maxSpeed: 100 });
// car.turnOn();
// car.accelerate(50);
// car.drive(2);

// Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100

//TASK#5
/*
 * Добавь классу Car свойство цены автомобиля, назови его сам.
 * Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
 */

// const car = new Car({ maxSpeed: 50, price: 2000 });
// console.log(car.value); // 2000

// car.value = 4000;
// console.log(car.value); // 4000

