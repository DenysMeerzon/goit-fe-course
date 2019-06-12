// Дефолтный импорт
import transactionHistory from './transaction-history.js';
// console.log(transactionHistory);
// document.querySelector('.menu').innerHTML = '';
// console.log(document.querySelector('.menu').innerHTML);

// innerHTML на практике используется только для удаления содержимого
// document.querySelector('.menu').innerHTML = '';

// Создание элементов с помощью шаблонной строки и innerHTML - не очень хорошая практика
// const markUp = `
// <div class="user-profile">
// <ul class="info">
//   <li><b>Name:</b>Deonte Fail</li>
//   <li><b>Phone:</b>994-982-5660</li>
//   <li><b>Email:</b>Deonte.Feil@hotmail.com</li>
//   <li><b>Location:</b>USA,South Maximoville</li>
// </ul>
// </div>`;
// document.querySelector('.profile-container').innerHTML = markUp;

//
// const menu = document.querySelector('.menu');
// const newItem = `<li class="menu-item"><a href="/news">news</a></li>`;
// menu.insertAdjacentHTML('beforeend', newItem);
console.log(createTableRows(transactionHistory));

const table = document.querySelector('.transaction-table');

const markup = createTableRows(transactionHistory);

table.insertAdjacentHTML('beforeend', markup);

function createTableRows(transactions) {
  return transactions
    .map(transaction => createTableRowMarkup(transaction))
    .join('');
}

function createTableRowMarkup({ type, amount, date, business }) {
  const row = `
    <tr>
    <td>${type}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${business}</td>
    </tr>`;
  return row;
}
