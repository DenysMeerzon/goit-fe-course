'use strict';
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let message;
let userPassword;
do {
  for (attemptsLeft; attemptsLeft >= 1; attemptsLeft -= 1) {
    userPassword = prompt('Введите свой пароль');
    if (passwords.includes(userPassword) === true) {
      message = alert('Добро пожаловать!');
      break;
    } else if (userPassword === null) {
      message = alert('Вы ничего не ввели!');
      break;
    } else if (passwords.includes(userPassword) !== true && attemptsLeft > 1) {
      message = alert(
        `Неверный пароль, у вас осталось ${attemptsLeft - 1} попыток`,
      );
      continue;
    } else if (
      passwords.includes(userPassword) !== true &&
      attemptsLeft === 1
    ) {
      message = alert('У вас закончились попытки, аккаунт заблокирован!');
    }
  }
} while (
  passwords.includes(userPassword) !== true &&
  userPassword !== null &&
  attemptsLeft > 1
);
