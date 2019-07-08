'use strict';
// Task#1
// let buttonCount = 0;
// const button = document.querySelector('.button');
// button.addEventListener('click', handleClick);
// function handleClick(event) {
//   buttonCount += 1;
//   event.target.textContent = buttonCount;
// }
// Task#2
// let resultValue = 0;
// const input = document.querySelectorAll('.expression > input');

// function handleChange(event) {
//   const inputValue = event.target.value;
//   return inputValue;
// }
// input[0].addEventListener('change', handleChange);
// input[1].addEventListener('change', handleChange);

// const button = document.querySelector('button[data-action="add"]');
// button.addEventListener('click', handleClick);

// const result = document.querySelector('.result');
// result.textContent = resultValue;

// function handleClick(event) {
//   resultValue = Number(input[0].value) + Number(input[1].value);
//   result.textContent = resultValue;
// }
// Task#3
/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1.

  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и уменьшения значения счетчика
  - Привяжите вызовы методов и значение счетчика к разметке
*/
// const buttonSub = document.querySelector('button[data-action="sub"]');
// const buttonAdd = document.querySelector('button[data-action="add"]');

// class Counter {
//   constructor(onChange) {
//     this.value = onChange(0);
//   }
//   increment() {
//     this.value += 1;
//     onChange(this.value);
//   }
//   decrement() {
//     this.value -= 1;
//     onChange(this.value);
//   }
// }

// const count = new Counter(onChange);

// buttonAdd.addEventListener('click', count.increment.bind(count));
// buttonSub.addEventListener('click', count.decrement.bind(count));

// function onChange(currentValue) {
//   const value = document.querySelector('.value');
//   value.textContent = currentValue;
//   const resultValue = Number(value.textContent);
//   return resultValue;
// }
// Task#4
/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа,
  после чего нажимает кнопку "Submit" и происходит отправка формы.

  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/
// const form = document.querySelector('.question-form');
// const result = document.querySelector('.result');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const { elements } = event.currentTarget;
//   const option = elements.option.value;
//   const itemText = document.createTextNode(option);
//   result.appendChild(itemText);
// }
// Task#5
/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/
// const images = document.querySelector('.images');

// images.addEventListener('click', handleClick);

// function handleClick(event) {
//   if (event.target.tagName !== 'IMG') {
//     return;
//   }

//   alert(event.target.src);
// }
// Task#6
/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой.
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/
// const list = document.querySelector('.js-list');
// list.addEventListener('click', handleClick);
// function handleClick(event) {
//   if (event.target.hasAttribute('data-action')) {
//     event.target.parentNode.remove();
//   }
// }
// Task#7
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/
// const inputList = document.querySelector('.input-list');
// inputList.addEventListener('change', handleChange);
// function handleChange(event) {
//   const element = event.target;
//   if (element.value.length === Number(element.getAttribute('data-length'))) {
//     element.classList.add('valid');
//     element.classList.remove('invalid');
//   } else if (
//     element.value.length !== Number(element.getAttribute('data-length'))
//   ) {
//     element.classList.add('invalid');
//     element.classList.remove('valid');
//   }
//   if (element.value.length === 0) {
//     element.classList.remove('invalid');
//     element.classList.remove('valid');
//   }
// }
// Task#8
/*
  Напишите скрипт который:

    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно
      отображаться в p.input-value
*/
// const input = document.querySelector('.input');
// const message = document.querySelector('.message');
// const inputValue = document.querySelector('.input-value');
// input.addEventListener('focus', handleFocus);
// input.addEventListener('blur', handleBlur);
// input.addEventListener('input', handleInput);
// function handleFocus(event) {
//   message.textContent = 'Input is in focus!';
// }
// function handleBlur(event) {
//   document.querySelector('.message').innerHTML = '';
// }
// function handleInput(event) {
//   inputValue.textContent = `Current input value: ${event.target.value}`;
// }
// Task#9
/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/
// const openModalBtn = document.querySelector('button[data-action="open-modal"]');
// const closeModalBtn = document.querySelector('div[data-action="close-modal"]');
// const backdrop = document.querySelector('.js-modal-backdrop');
// openModalBtn.addEventListener('click', openModal);
// closeModalBtn.addEventListener('click', closeModal);
// backdrop.addEventListener('click', handleBackdrop);
// function openModal(event) {
//   backdrop.classList.remove('modal-hidden');
//   window.addEventListener('keydown', handleKeyPress);
// }
// function closeModal(event) {
//   backdrop.classList.add('modal-hidden');
//   window.removeEventListener('keydown', handleKeyPress);
// }
// function handleKeyPress(event) {
//   if (event.code !== 'Escape') {
//     return;
//   }
//   closeModal();
// }
// function handleBackdrop(event) {
//   if (event.target !== event.currentTarget) {
//     return;
//   }
//   closeModal();
// }
// Task#10
/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/
// const menu = document.querySelector('.js-menu');
// menu.addEventListener('click', handleClick);
// function handleClick(event) {
//   event.preventDefault();
//   if (event.target === event.currentTarget) {
//     return;
//   }
//   const currentLink = event.target;
//   const activeLink = document.querySelector('.active');
//   if (activeLink) {
//     activeLink.classList.remove('active');
//   }
//   currentLink.classList.add('active');
// }
