import items from './menu.json';
import moduleItem from './templates/menu-item.hbs';
import './css/styles.css';

const refs = {
  menu: document.querySelector('.menu'),
};

function buildItemFeed(items) {
  const markup = items.map(item => moduleItem(item)).join('');
  refs.menu.insertAdjacentHTML('beforeend', markup);
}

const createMarkup = buildItemFeed(items);

const switchLabel = document.querySelector('#theme-switch-control');
const body = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const defaultTheme = body.classList.add(Theme.LIGHT);

switchLabel.addEventListener('change', changeTheme);

function changeTheme(event) {
  if (body.classList.contains(Theme.LIGHT)) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const persistedTheme = localStorage.getItem('theme');

if (persistedTheme && persistedTheme === Theme.DARK) {
  switchLabel.checked = true;
  body.classList.replace(Theme.LIGHT, Theme.DARK);
}
