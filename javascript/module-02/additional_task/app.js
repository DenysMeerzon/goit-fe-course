'use strict';
// TASK#1
/*
 * Есть массив имен пользователей
 * Используя методы массива, последовательно выполнить указанные операции
 */

// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// Удалить первый элемент массива
// const deletedUsers = users.splice(0, 1);
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// Удалить последний элемент массива
// const deletedLastUser = users.pop();
// console.log(users); // ["Poly", "Ajax"]

// Добавить в начало массива пользователя "Lux"
// const addFirstUser = users.unshift('Lux');
// console.log(users); // ["Lux", "Poly", "Ajax"]

// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
// const addLastUsers = users.splice(3, 0, 'Jay', 'Kiwi');
// console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// Удалить из массива элемент хранящийся в переменной userToDelete
// const userToDelete = 'Ajax';
// const indexOfUser = users.indexOf(userToDelete);
// const deletedUser = users.splice(indexOfUser, 1);
// console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
// const userToInsertBefore = 'Jay';
// const indexOfUpUser = users.indexOf(userToInsertBefore);
// const addNewUser = users.splice(indexOfUpUser, 0, 'Kong');
// console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]

// TASK#2
/*
 * Есть массив имен пользователей users
 *
 * Напиши цикл, который для каждого пользователя будет выводить в консоль
 * сообщение в формате [номер элемента] - [значение элемента].
 *
 * Нумерация должна начинаться с 1. К примеру для первого элемента массива
 * с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'
 *
 * Цикл должен выводить сообщения до тех пор, пока не закончатся элементы массива
 */

// const users = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
// let i = 0;
// while (i < users.length) {
//   console.log(`${i + 1} - ${users[i]}`);
//   i += 1;
// }

// TASK#3
/*
 * Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
 * Гравировка одного слова стоит 10 кредитов.
 */

// В переменной message хранится произвольная строка
// const message = 'Proin sociis natoque et magnis parturient montes mus';
// let price = 0;
// const priceForOne = 10;

// Разбить строку в массив, разделитель - пробел, и записать в переменную words
// const words = message.split(' ');
// console.log(words);

// Выведи в консоли длину массива words
// console.log(words.length); // 8

// Используя цикл вычисли сколько будет стоить гравировка и запиши результат в переменную price
// const arrayLength = Number(words.length);

// while (0 < arrayLength) {
//   price = arrayLength * priceForOne;
//   console.log(price); // 80
//   break;
// }

// TASK#4
/*
  Напиши цикл, который просит, через prompt, ввести число больше 100. 
  
  Если посетитель нажал Cancel - завершить цикл.
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, 
  и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, 
  обрабатывать невалидный ввод вроде строк 'qwerty' не нужно.
  
  PS: используй бесконечный цикл с прерыванием
*/
// let input = 0;
// do {
//   input = prompt('Введите число больше 100');
// } while (Number(input) <= 100 && input !== null);

// TASK#5
/*
  Напиши скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив matched.
      
  В результате в массиве matched будут все подходяшие числа.
      
  PS: используй цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const matched = [];
// for (const number of numbers) {
//   if (num < number) {
//     matched.push(number);
//   }
// }
// console.log(matched);

// TASK#6
/*
  Напиши скрипт, который проверяет произвольную строку 
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// const message = 'May the force be with you';
// const arrayMessage = message.split(' ');
// let longestWord = arrayMessage[0];
// for (let i = 1; i < arrayMessage.length; i += 1) {
//   if (arrayMessage[i].length > longestWord.length) {
//     longestWord = arrayMessage[i];
//   }
// }
// console.log(longestWord); // 'force'

// TASK#7
/*
  Создай игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Предполагаем что пользователь вводит только числа, проверки на невалидный ввод не делать. 
  Проверить содержит ли в себе массив numbers введенное число.
  
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

// const numbers = [12, 15, 25, 37, 41, 62, 74, 83];
// const min = numbers[0];
// const max = numbers[numbers.length - 1];
// let input;
// let message;
// do {
//   input = prompt(`Введите число между ${min} и ${max}`);
//   if (input === null) {
//     message = alert('Вы ничего не ввели!');
//   } else if (numbers.includes(Number(input)) === false) {
//     message = alert('Сожалеем, Вы не угадали!');
//   }
// } while (numbers.includes(Number(input)) !== true && input !== null);
// if (numbers.includes(Number(input)) === true) {
//   message = alert('Поздравляем, Вы угадали!');
// }
