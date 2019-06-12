'use strict';
/*
  Дан ul с классом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

const list = document.createElement('ul');
list.classList.add('list');

function getElement(dataArray) {
  dataArray.map(element => createElement(element));
}
function createElement(element) {
  const newElement = document.createElement('li');
  newElement.textContent = `${element}`;
  list.appendChild(newElement);
}
getElement(elements);

const newList = document.querySelector('.theList');

newList.appendChild(list);
