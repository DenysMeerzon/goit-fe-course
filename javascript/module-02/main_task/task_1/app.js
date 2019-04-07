'use strict';
let input;
const numbers = [];
let total = 0;
let message;

do {
  input = prompt('Введите число');
  if (Number.isNaN(+input) === false && input !== null) {
    numbers.push(+input);
  } else if (Number.isNaN(+input) === true) {
    message = alert('Было введено не число, попробуйте еще раз');
  }
} while (input !== null);
if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  console.log(`Общая сумма чисел равна: ${total}`);
} else {
  message = alert('Вы ничего не ввели!');
}
