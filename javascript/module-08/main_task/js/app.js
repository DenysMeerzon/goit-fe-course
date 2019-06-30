'use strict';

import quizData from './quiz-data.js';

let questionCount = 0;

// The array of true answers
const trueAnswers = quizData.questions.map(question => question.answer);

const form = document.querySelector('.js-test-form');

const button = document.querySelector('button[data-action="check"]');

createForm(quizData);

function createForm({ title, questions }) {
  const mainTitle = document.createElement('h2');
  mainTitle.classList.add('main-title');
  mainTitle.textContent = `${title}`;
  form.insertBefore(mainTitle, button);

  questions.forEach(question =>
    form.insertBefore(createSection(question), button),
  );
}
function createSection({ question, choices }) {
  const section = document.createElement('section');
  section.classList.add('form-section');

  questionCount += 1;
  const title = document.createElement('h3');
  title.classList.add('section-title');
  title.textContent = `${questionCount}. ${question}`;

  const list = document.createElement('ol');
  list.classList.add('section-list');

  section.append(title, list);

  choices.forEach((choice, idx) => list.appendChild(createItem(choice, idx)));

  return section;
}
function createItem(theChoice, idx) {
  const listItem = document.createElement('li');
  listItem.classList.add('listItem');

  const itemLabel = document.createElement('label');
  listItem.appendChild(itemLabel);

  const labelInput = document.createElement('input');

  labelInput.setAttribute('type', 'radio');
  labelInput.setAttribute('name', `input-group-${questionCount}`);
  labelInput.setAttribute('value', idx);

  const inputText = document.createTextNode(theChoice);
  itemLabel.append(labelInput, inputText);

  return listItem;
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const userAnswers = [];

  const formData = new FormData(event.currentTarget);

  for (const entry of formData.entries()) {
    userAnswers.push(entry[1]);
  }
  if (userAnswers.length !== trueAnswers.length) {
    alert('Вы не ответили на все вопросы, будьте внимательны!');
    return;
  }
  getTestResult(checkArrays(userAnswers, trueAnswers));
}

function checkArrays(userAnswers, trueAnswers) {
  let countTrueAnswers = 0;

  for (let i = 0; i < userAnswers.length; i += 1) {
    if (Number(userAnswers[i]) === Number(trueAnswers[i])) {
      countTrueAnswers += 1;
    }
  }
  return countTrueAnswers;
}

function getTestResult(quantityTrueAnswers) {
  const quantityQuestions = trueAnswers.length;

  const totalResult = Math.ceil(
    (quantityTrueAnswers / quantityQuestions) * 100,
  );

  if (totalResult >= 80) {
    alert(
      `Поздравляем, Вы успешно сдали тестирование! Результат - ${totalResult}%`,
    );
  } else {
    alert(
      `Хорошо изучите конспект и приходите снова! Результат - ${totalResult}%`,
    );
  }
}
