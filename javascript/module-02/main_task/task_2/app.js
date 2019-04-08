'use strict';
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
do {
  const userPassword = prompt('Введите свой пароль');
  if (userPassword === null) {
    alert('Вы ничего не ввели!');
  } else if (passwords.includes(userPassword) === true) {
    alert('Добро пожаловать!');
    break;
  } else if (passwords.includes(userPassword) === false && attemptsLeft > 1) {
    alert(`Неверный пароль, у вас осталось ${attemptsLeft - 1} попыток`);
  } else if (passwords.includes(userPassword) === false && attemptsLeft === 1) {
    alert('У вас закончились попытки, аккаунт заблокирован!');
  }
  if (userPassword !== null) {
    attemptsLeft -= 1;
  }
} while (attemptsLeft !== 0);
