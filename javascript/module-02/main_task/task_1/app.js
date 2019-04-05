'use strict';
let input;
const numbers = [];
let total = 0;
let message;

do {
  input = prompt('Введите число');
  input = Number(input);
  const inputIsNaN = Number.isNaN(input);
  if (inputIsNaN === false) {
    numbers.push(input);
  } else {
    message = alert('Было введено не число, попробуйте еще раз');
  }
} while (input !== 0);
numbers.pop();
if (numbers.length > 0) {
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  console.log(`Общая сумма чисел равна: ${total}`);
} else {
  message = alert('Вы ничего не ввели!');
}
