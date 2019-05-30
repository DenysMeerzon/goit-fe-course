'use strict';
// Исходные данные
const products = [
  { id: 'id-1', label: 'Apples', price: 100, quantity: 50 },
  { id: 'id-2', label: 'Bananas', price: 120, quantity: 70 },
  { id: 'id-3', label: 'Lemons', price: 70, quantity: 30 },
];
const users = [
  { id: 'id-1', name: 'Mango', isActive: true },
  { id: 'id-2', name: 'Poly', isActive: false },
  { id: 'id-3', name: 'Ajax', isActive: true },
  { id: 'id-4', name: 'Chealsey', isActive: false },
];
const numbers = [1, 3, 2, 4, 5];
const players = [
  { id: 'id-1', tag: 'Mango', isOnline: true, rank: 600 },
  { id: 'id-2', tag: 'Poly', isOnline: false, rank: 800 },
  { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
  { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
];
// лицевой счет 23202171 тел 0676119605 кухня 25кубов ванна 1куб
// Программирование бывает 2-х типов: императивное (пошаговый процесс с детализацией, менее читабельный для разработчика) и декларативное (процесс скрыт, абстрагирован, более читабельный для разработчика)
// Пример императивного программирования:
// const filter = array => {
//   const filtered = [];

//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] >= 2) {
//       filtered.push(array[i]);
//     }
//   }
//   return console.log(filtered);
// };
// filter([1, 2, 3, 4, 5, 6, 7]);
// Пример декларативного программирования
// const filtered = [1, 2, 3, 4, 5, 6, 7];
// console.log(filtered.filter(value => value >= 2));
// Любая мутация программного кода нежелательна, поэтому важно использовать методы, которые обеспечат иммутабельность
// const storage = {
//   _items: [{ label: 'item1' }, { label: 'item2' }, { label: 'item3' }],
//   get items() {
//     return this._items;
//   },
//   add(item) {
//     this._items = [...this._items, item];
//   },
// };
// console.log(storage.items);
// storage.add({ label: 'item4' });
// console.log(storage.items);
// storage.add({ label: 'item5' });
// console.log(storage.items);

// Method "map"

// const listNumbers = numbers.map(number => {
//   return number * 2;
// });
// console.log(numbers);
// console.log(listNumbers);
// const updatedPrice = products.map(product => {
//   return {
//     ...product,
//     price: product.price * 1.1,
//   };
// });
// console.table(products);
// console.table(updatedPrice);
// const updatedPrice = products.map(product => {
//   return {
//     ...product,
//     price: product.price * 2,
//   };
// });
// console.log(products);
// console.log(updatedPrice);
// Работа метода 'map' (императивно)
// const map = (array, callback) => {
//   const newArray = [];
//   for (let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const res = callback(element);
//     newArray.push(res);
//   }
//   return newArray;
// };
// const labels = map(products, product => {
//   return product.label;
// });
// console.log(labels);
// const doubled = map(numbers, number => {
//   return number * 5;
// });
// console.log(doubled);

// Method "filter" (создает новый массив, в который записывает элемент, если он вернул "true"), если ничего не найдет, возвращает пустой массив

// const filtered = numbers.filter(number => {
//   return number < 3;
// });
// console.log(filtered);
// const filtered = products.filter(product => {
//   return product.price < 120;
// });
// console.table(filtered);
// const filtererNew = products.filter(product => {
//   return product.quantity > 40;
// });
// console.table(filtererNew);
// const filtered = users.filter(user => {
//   return !user.isActive;
// });
// console.table(filtered);

// Method "find" - испульзуется для поиска уникальных элементов, т.к. при нахождении первого совпадения прекращает поиск и возвращает найденный элемент. Если ничего не найдет, возвращает undefined
// const finded = users.find(user => {
//   return user.id === 'id-1';
// });
// console.log(finded);

// Methods "every and some" для фильтрации по всему каталогу, либо частично, возвращает true либо false
// const isEveryActive = users.every(user => {
//   return user.isActive;
// });
// console.log(isEveryActive);

// const isSomeActive = users.some(user => {
//   return user.isActive;
// });
// console.log(isSomeActive);
// const fn = array => {
//   const newArray = array.filter(arrayEl => {
//     return arrayEl < 3;
//   });
//   return newArray;
// };

// Сокращенный синтаксис
// const fn = array => array.filter(arrayEl => arrayEl > 3);
// const result = fn(numbers);
// console.log(result);

// ? - yes , : - no
// const fn = (array, id, amount) =>
//   array.map(product =>
//     product.id === id
//       ? { ...product, quantity: product.quantity + amount }
//       : product,
//   );
// console.log(fn(products, 'id-3', 50));

// Method "reduce"
// const total = numbers.reduce((accumulator, number) => {
//   return accumulator + number;
// }, 0);
// console.log(total);

// const salary = {
//   Mango: 100,
//   Merry: 50,
//   Visy: 150,
// };
// const total = Object.values(salary).reduce((acc, value) => {
//   return acc + value;
// }, 0);
// console.log(total);

// const quantityAll = products.reduce((acc, product) => {
//   return acc + product.quantity;
// }, 0);
// console.log(quantityAll);
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const getTags = tweets =>
//   tweets.reduce((total, tweet) => {
//     total.push(...tweet.tags);
//     return total;
//   }, []);

// const total = getTags(tweets);

// console.log(total);

// Method "forEach"

// players.forEach(player => {
//   return console.log(player);
// });
// players.forEach(player => console.log(player));

// Method "sort" - работает с оригинальным массивом

// const copy = [...numbers].sort();
// console.log(numbers);
// console.log(copy);
// const sortedPlayers = [...players].sort((playerA, playerB) => {
//   return playerB.rank - playerA.rank;
// });
// console.log(sortedPlayers);

// Method "filter" в императивной реализации

// const filter = (array, callback) => {
//   const filteredArray = [];
//   for (let i = 0; i < array.length; i += 1) {
//     const passed = callback(array[i], i, array);
//     if (passed) {
//       filteredArray.push(array[i]);
//     }
//   }

//   return filteredArray;
// };
// console.log(filter(numbers, number => number > 2));
// console.log(filter(numbers, number => number > 3));

// Method "find" в императивной реализации

// const find = (array, callback) => {
//   for (let i = 0; i < array.length; i += 1) {
//     const passed = callback(array[i], i, array);
//     if (passed) {
//       return array[i];
//     }
//   }
// };
// console.log(find(numbers, number => number > 2));
// console.log(find(players, player => player.id === 'id-2'));

// Method "reduce" в императивной реализации

// const reduce = (array, callback, initialValue = array[0]) => {
//   let accumulator = initialValue;
//   for (let i = 0; i < array.length; i += 1) {
//     accumulator = callback(accumulator, array[i]);
//   }
//   return accumulator;
// };
// console.log(
//   reduce(
//     numbers,
//     (acc, number) => {
//       return acc + number;
//     },
//     0,
//   ),
// );
// console.log(reduce(products, (acc, product) => acc + product.quantity, 0));

// Цепочки вызовов - chaining
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];
// Формирует массив значений ключей объектов
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);
// Колл-бек функция, которая проверяет наличие свойства: в случае отсутствия - добавляет новое, в случае наличия - суммирует к старому
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };
// Суммирование повторяющихся значений
// const countTags = tags => tags.reduce(getTagStats, {});
// // Присвоение функции - переменной
// const tagCount = countTags(tags);
// // Вызов функции
// console.log(tagCount);
