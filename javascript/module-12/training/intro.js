'use strict';
// const logger = (a, b) => console.log(a, b);

// Callback, delay, arg1, arg2
// const timerId = setTimeout(logger, 2000, 5, 10);
// console.log(timerId);

// Если callback - метод объекта, тогда при вызове - привязываем контекст с помощью .bind()

// Если функцию setTimeout присвоить переменной, тогда при вызове переменной, вернется индекс таймаута (Начинается с 1, далее 2 и т.д.)

// const shouldCancelTimer = Math.random() > 0.3;

// console.log(shouldCancelTimer);

// Если выполняется - отменяет timeout
// if (shouldCancelTimer) {
//   clearTimeout(timerId);
// }

// Интервал - выполняет функцию каждые n кол-во секунд
// const itervalId = setInterval(
//   () => console.log('HelloMoto' + Date.now()),
//   1000,
// );

// Promise - обещания
// resolve и reject - это две функции, resolve - это когда промис выполнился успешно, а reject - выполнился, но с ошибкой
// const promise = new Promise((resolve, reject) => {
//   const success = Math.random() > 0.3;
//   if (success) {
//     setTimeout(() => {
//       resolve('Promise resolved');
//     }, 2000);
//   } else {
//     reject('Promise rejected!');
//   }
// });
// console.log('before');

// const onSuccess = message => {
//   console.log(message);
// };
// const onError = error => {
//   console.error(error);
// };
// catch - устанавливается в конце для отлавливания ошибок
// promise.then(onSuccess).catch(onError);
// console.log('after');
