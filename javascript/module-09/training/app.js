'use strict';
// Вебинар №1
// const nav = document.querySelector('.js-nav');

// nav.addEventListener('click', handleClick);

// function handleClick(e) {
//   e.preventDefault();
//   console.log(e.target);
//   console.log(e.currentTarget);

//   if (e.target === e.currentTarget) {
//     return;
//   }

//   const currentLink = e.target;

//   const activeLink = document.querySelector('.nav__link--active');

//   if (activeLink) {
//     activeLink.classList.remove('nav__link--active');
//   }

//   currentLink.classList.add('nav__link--active');
// }

// const tagList = document.querySelector('.js-tags');

// tagList.addEventListener('click', handleClick);

// function handleClick(e) {
//   const element = e.target;
//   const parentElement = e.currentTarget;

//   if (element === parentElement) {
//     return;
//   }
//   console.log(element);

//   element.classList.toggle('tags__item--active');
// }

// const todos = {
//   items: [],
//   add(text) {
//     const todo = {
//       id: Date.now(),
//       text,
//     };
//     this.items.push(todo);
//     return todo;
//   },
//   delete(id) {
//     this.items = this.items.filter(item => item.id !== id);
//   },
// };

// const refs = {
//   editor: document.querySelector('.js-editor'),
//   todoList: document.querySelector('.js-todo-list'),
// };

// refs.editor.addEventListener('submit', handleEditorSubmit);
// refs.todoList.addEventListener('click', handleTodoListClick);

// function handleEditorSubmit(e) {
//   e.preventDefault();
//   const form = e.currentTarget;
//   const inputValue = form.elements.text.value;
//   const todo = todos.add(inputValue);
//   const todoMarkup = buildTodoItem(todo);
//   appendTodoItem(refs.todoList, todoMarkup);
//   form.reset();
// }

// function buildTodoItem(item) {
//   return `
//   <li class="todo-list__item" data-id="${item.id}">
//    <div class="todo">
//     <p class="todo__text">${item.text}</p>
//     <div class="todo__actions">
//       <button class="button" type="button">Удалить</button>
//     </div>
//    </div>
//   </li>`;
// }

// function appendTodoItem(parentRef, todoEl) {
//   parentRef.insertAdjacentHTML('beforeend', todoEl);
// }
// function handleTodoListClick(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   const button = e.target;
//   const parentLi = button.closest('li.todo-list__item');
//   const todoId = Number(parentLi.dataset.id);
//   todos.delete(todoId);
//   console.log(todos.items);
//   // refs.todoList.removeChild(parentLi);

//   // Альтернативный вариант удаления элемента
//   parentLi.remove();
// }

// Вебинар №2

// Метод throttle
// window.addEventListener('scroll', _.throttle(onScroll, 300));

// function onScroll() {
//   console.log('Hello!');
// }
// Метод debounce
// document
//   .querySelector('.input')
//   .addEventListener('input', _.debounce(onInput, 300));
// function onInput() {
//   console.log('input event!') + Date.now();
// }

// const nav = document.querySelector('.page-nav');

// const onEntry = entries => {
//   entries.forEach(entry => {
//     //из entry можем взять isIntersecting - пересекает ли и target
//     if (entry.isIntersecting) {
//       console.log(entry.target);
//       const sectionId = entry.target.getAttribute('id');
//       console.log(sectionId);
//       const currentActiveLink = nav.querySelector('.page-nav__link--active ');
//       if (currentActiveLink) {
//         currentActiveLink.classList.remove('page-nav__link--active ');
//       }
//       const nextActiveLink = nav.querySelector(`a[href="#${sectionId}"]`);
//       console.log(nextActiveLink);
//     }
//   });
// };
// const options = {
//   // Сколько % элемента должно войти во вьюпорт, чтобы тригернуть элемент
//   threshold: 0.6,
// };
// // Передается функция и опция
// const observer = new IntersectionObserver(onEntry, options);
// const sections = document.querySelectorAll('.section');

// sections.forEach(section => {
//   observer.observe(section);
// });

// // Полифил используется в случае, если в браузере нет современного функционала (костыль)
// // polyfill.io - для подключения, вставляется ссылка в самом начале js-скриптов

// // lazy load - используется для загрузки картинок в необходимый момент, а не сразу всех на странице (цель - оптимизация потребления трафика)

const lazyLoad = target => {
  const options = {
    // rootMargin - увеличивает, либо уменьшает границы intersection
    rootMargin: '50px 0px',
    threshold: 0.01,
  };
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const imageUrl = img.dataset.lazy;
        img.setAttribute('src', imageUrl);
        observer.disconnect();
      }
    });
  }, options);
  io.observe(target);
};

const images = document.querySelectorAll('section img');

images.forEach(image => lazyLoad(image));
