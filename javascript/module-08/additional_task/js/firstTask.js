'use strict';
/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
const animals = document.createElement('ul');
animals.classList.add('list');
animals.textContent = 'Animals';

const cat = document.createElement('li');
cat.classList.add('list-item');
cat.textContent = 'Cat';

const hamster = document.createElement('li');
hamster.classList.add('list-item');
hamster.textContent = 'Hamster';

const horse = document.createElement('li');
horse.classList.add('list-item');
horse.textContent = 'Horse';

const parrot = document.createElement('li');
parrot.classList.add('list-item');
parrot.textContent = 'Parrot';

animals.append(cat, hamster, horse, parrot);
const firstList = document.querySelector('.categories');
firstList.appendChild(animals);
console.log(
  `Категория: ${animals.firstChild.textContent}, Кол-во вложенных li: ${
    animals.children.length
  }`,
);
// Животные
// Кот
// Хомяк
// Лошадь
// Попугай
const products = document.createElement('ul');
products.classList.add('list');
products.textContent = 'Products';

const bread = document.createElement('li');
bread.classList.add('list-item');
bread.textContent = 'Bread';

const greenery = document.createElement('li');
greenery.classList.add('list-item');
greenery.textContent = 'Greenery';

const cottageCheese = document.createElement('li');
cottageCheese.classList.add('list-item');
cottageCheese.textContent = 'Cottage Cheese';

products.append(bread, greenery, cottageCheese);
const secondList = document.querySelector('.categories');
secondList.appendChild(products);
console.log(
  `Категория: ${products.firstChild.textContent}, Кол-во вложенных li: ${
    products.children.length
  }`,
);
// Продукты
// Хлеб
// Зелень
// Творог

const technology = document.createElement('ul');
technology.classList.add('list');
technology.textContent = 'Technology';

const html = document.createElement('li');
html.classList.add('list-item');
html.textContent = 'html';

const css = document.createElement('li');
css.classList.add('list-item');
css.textContent = 'css';

const js = document.createElement('li');
js.classList.add('list-item');
js.textContent = 'js';

const react = document.createElement('li');
react.classList.add('list-item');
react.textContent = 'react';

const node = document.createElement('li');
node.classList.add('list-item');
node.textContent = 'node';

technology.append(html, css, js, react, node);
const thirdList = document.querySelector('.categories');
thirdList.appendChild(technology);
console.log(
  `Категория: ${technology.firstChild.textContent}, Кол-во вложенных li: ${
    technology.children.length
  }`,
);
// Технологии
// html
// css
// js
// react
// node
