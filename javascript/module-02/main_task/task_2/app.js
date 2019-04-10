'use strict';
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
do {
  const userPassword = prompt('Введите свой пароль');
  if (userPassword === null) {
    alert('Вы ничего не ввели!');
    break;
  }
  if (passwords.includes(userPassword) === true) {
    alert('Добро пожаловать!');
    break;
  }
  attemptsLeft -= 1;
  console.log(attemptsLeft);
  if (attemptsLeft) {
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
  } else {
    alert('У вас закончились попытки, аккаунт заблокирован!');
  }
  if (userPassword !== null) {
  }
} while (attemptsLeft !== 0);
