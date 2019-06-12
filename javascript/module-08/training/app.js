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
const magicButton = document.querySelector('button[data-action="magic"]');
// Желательно, действия указывать в data-action
const image = document.querySelector('.unsplash-image');
const homeMenuItem = document.querySelector('.menu-item');
magicButton.addEventListener('click', () => {
  updateImage();
  toggleActiveItem();
  image.setAttribute('src', './nature_2.jpg');
  console.log(image.getAttribute('src'));
  console.log(magicButton.dataset.action);
  console.log(magicButton.dataset.random);
  //   console.log(button.dataset) - выводит все data - атрибуты элемента;
});
function updateImage() {
  image.alt = 'nature';
}
function toggleActiveItem() {
  homeMenuItem.classList.toggle('active');
}

// Добавление инлайн стилей, как правило, используется при создании галереи или сложных анимаций
// button.style.backgroundColor = '#919191';
// Свойство classList - позволяет добавлять/удалять/заменять класс селектора для динамического изменения css свойств
// const homeMenuItem = document.querySelector('.menu-item');
// homeMenuItem.classList.add('active');
// Для создания кастомных атрибутов, необходимо использовать Data атрибуты
// <button class="button js-magic-button">Magic! data-action = "magic!" </button>, где action - новый атрибут со значением "magic!"
