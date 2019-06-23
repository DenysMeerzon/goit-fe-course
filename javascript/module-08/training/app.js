'use strict';
// Современный фронтенд пишется "модульно", для этого в теге подключение скрипта js, пишем type="module", таким образом, создаются отдельные области видимости и при подключении нескольких скриптов, мы исключаем возможные конфликты переменных и т.д.
// Каждый тег создает узел-элемент, а текст внутри тега - текстовые узлы, при этом, каждый тег в ДОМ-дереве имеет текстовый узел из-за переноса тега на следующую строку
// Существует 3 типа узлов в ДОМ-дереве: узлы-элементы, текстовые узлы, узлы-комментарии
// Обращение к объекту элемента (селектору), выбирает первое совпадение, используется для нахождения уникального элемента
// const button = document.querySelector('.js-magic-button');
// console.dir(image);
// console.dir(button);
// Изменение значения свойства объекта - кнопки
// console.log(button.textContent);
// button.textContent = 'Hello!';
// console.log(button.textContent);
// const menuItem = document.querySelector('.menu-item');
// console.dir(menuItem);
// Обращение к объекту элемента(селектору), возвращает массив всех найденных селекторов
// const menuItems = document.querySelectorAll('.menu-item');
// console.log(menuItems)
// Добавление свойств объекту селектора
// const image = document.querySelector('.unsplash-image');
// console.dir(image);
// image.alt = 'natural';
// Добавления слушателя, функции для динамического изменения значения атрибута alt
// const magicButton = document.querySelector('button[data-action="magic"]');
// Желательно, действия указывать в data-action
// const image = document.querySelector('.unsplash-image');
// const homeMenuItem = document.querySelector('.menu-item');
// magicButton.addEventListener('click', () => {
//   updateImage();
//   toggleActiveItem();
//   image.setAttribute('src', './nature_2.jpg');
//   console.log(image.getAttribute('src'));
//   console.log(magicButton.dataset.action);
//   console.log(magicButton.dataset.random);
//   console.log(button.dataset) - выводит все data - атрибуты элемента;
// });
// function updateImage() {
//   image.alt = 'nature';
// }
// function toggleActiveItem() {
//   homeMenuItem.classList.toggle('active');
// }

// Добавление инлайн стилей, как правило, используется при создании галереи или сложных анимаций
// button.style.backgroundColor = '#919191';
// Свойство classList - позволяет добавлять/удалять/заменять класс селектора для динамического изменения css свойств
// const homeMenuItem = document.querySelector('.menu-item');
// homeMenuItem.classList.add('active');
// Для создания кастомных атрибутов, необходимо использовать Data атрибуты
// <button class="button js-magic-button">Magic! data-action = "magic!" </button>, где action - новый атрибут со значением "magic!"

// Слушатели событий
// const loginButton = document.querySelector('button[data-action="login"]');
// Событие, в виде объекта, передается аргументом в callback функцию

// Элемент, на котором произошло событие
// console.log(event.target);
// Элемент, на котором мы это событие словили
// console.log(event.currentTarget);

// const obj = {
//   x: 5,
//   showX() {
//     console.log(this);
//     console.log(this.x);
//   },
// };

// loginButton.addEventListener('click', obj.showX.bind(obj));

// Для того, чтоб достучаться до слушателя событий, необходимо обращаться через свойство currentTarget

// function handleClick(event) {
//   console.log('this: ', this);
//   console.log('target: ', event.target);
//   console.log('currentTarget: ', event.currentTarget);
// }

// const input = document.querySelector('.inputs-events-example > input');
// const output = document.querySelector('.inputs-events-example > .output');
// input.addEventListener('input', hadleInputChange);
// function hadleInputChange(event) {
//   output.textContent = event.currentTarget.value;
// }
// let clickCount = 0;

// document.querySelector('.button').addEventListener('click', e => {
//   const element = e.currentTarget;
//   clickCount += 1;
//   element.textContent = clickCount;
// });

// const form = document.querySelector('.js-register-form');

// form.addEventListener('submit', handleSubmitWithFormData);

// function handleSubmit(event) {
//   event.preventDefault();
//   const { elements } = event.currentTarget;
//   console.dir(elements);

//   const nameInput = elements.name;
//   const emailInput = elements.email;
//   const passwordInput = elements.password;
//   const subscription = elements.subscription.value;

//   const data = {
//     [nameInput.name]: nameInput.value,
//     [emailInput.name]: emailInput.value,
//     [passwordInput.name]: passwordInput.value,
//     subscription,
//   };
//   console.log(data);
// }
// Конструктор FormData, который позволяет собрать информацию с форм
// function handleSubmitWithFormData(event) {
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   const data = {};
//   formData.forEach((value, name) => {
//     console.log(`Name: ${name}, Value: ${value}`);
//     data[name] = value;
//   });
//   console.log(data);
// }
const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector(
  'button[data-action="close-modal"]',
);
const backdrop = document.querySelector('.js-backdrop');
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', handleBackdropClick);

function openModal() {
  document.body.classList.add('show-modal');
  window.addEventListener('keydown', handleKeyPress);
}
function closeModal() {
  document.body.classList.remove('show-modal');
  window.removeEventListener('keydown', handleKeyPress);
}
function handleBackdropClick(event) {
  console.log(`Target: ${event.target}`);
  console.log(`CurrentTarget: ${event.currentTarget}`);
  if (event.target !== event.currentTarget) {
    return;
  }
  closeModal();
}
function handleKeyPress(event) {
  if (event.code !== 'Escape') {
    return;
  }
  closeModal();
}
