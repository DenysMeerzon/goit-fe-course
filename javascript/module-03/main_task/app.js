'use strict';
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  return login.length < 4 || login.length > 16;
};
const isLoginUnique = function(allLogins, login) {
  let theLoginUnique = true;
  if (allLogins.includes(login)) {
    theLoginUnique = false;
  }
  return theLoginUnique;
};
const addLogin = function(allLogins, login) {
  if (isLoginValid(login)) {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  } else if (isLoginUnique(allLogins, login)) {
    logins.push(login);
    console.log('Логин успешно добавлен!');
  } else {
    console.log('Такой логин уже используется!');
  }
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
