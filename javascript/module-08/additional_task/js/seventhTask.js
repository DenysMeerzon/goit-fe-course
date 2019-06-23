'use strict';
/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/
const container = document.createElement('div');
container.classList.add('container');

function createBoxes(num) {
  let parameter = 30;
  for (let i = 0; num > i; i += 1) {
    const newBox = document.createElement('div');
    newBox.setAttribute(
      'style',
      `width: ${parameter}px; height: ${parameter}px; background-color: ${generateColor()}`,
    );

    container.insertAdjacentElement('beforeend', newBox);
    parameter += 10;
  }
  return container;
}

const root = document.querySelector('#root');

const createBoxesResult = createBoxes(7);

root.appendChild(createBoxesResult);

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
