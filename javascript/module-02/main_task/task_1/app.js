'use strict';
let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');
  if (Number.isNaN(+input)) {
    alert('Было введено не число, попробуйте еще раз');
  } else if (input !== null) {
    numbers.push(+input);
  }
} while (input !== null);
if (numbers.length) {
  for (const number of numbers) {
    total += number;
  }
  console.log(`Общая сумма чисел равна: ${total}`);
}
