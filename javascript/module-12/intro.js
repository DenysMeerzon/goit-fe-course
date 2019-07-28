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
