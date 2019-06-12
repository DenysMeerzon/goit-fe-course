'use strict';
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
const list = document.createElement('ul');
list.classList.add('list');

const html = document.createElement('li');
html.classList.add('list-item');
html.textContent = 'HTML';

const css = document.createElement('li');
css.classList.add('list-item');
css.textContent = 'CSS';

const javaScript = document.createElement('li');
javaScript.classList.add('list-item');
javaScript.textContent = 'JavaScript';

const react = document.createElement('li');
react.classList.add('list-item');
react.textContent = 'React';

const nodeJS = document.createElement('li');
nodeJS.classList.add('list-item');
nodeJS.textContent = 'NodeJS';

list.append(html, css, javaScript, react, nodeJS);
const newList = document.querySelector('.theList');
newList.appendChild(list);

list.firstChild.style.color = 'red';
list.lastChild.style.color = 'blue';
// HTML
// CSS
// JavaScript
// React
// NodeJS
