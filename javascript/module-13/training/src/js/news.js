import newsService from './services/news-service';
import articleListItemsTemplate from '../templates/article-list-item.hbs';

const refs = {
  searchForm: document.querySelector('#search-form'),
  articleList: document.querySelector('#article-list'),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
};

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

function searchFormSubmitHandler(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const input = form.elements.query;

  clearListItems();

  newsService.resetPage();

  newsService.searchQuery = input.value;

  newsService.fetchArticles().then(insertListItems);

  input.value = '';
}

function loadMoreBtnHandler() {
  newsService.fetchArticles().then(insertListItems);
}

function insertListItems(items) {
  const markup = articleListItemsTemplate(items);
  refs.articleList.insertAdjacentHTML('beforeend', markup);
}

function clearListItems() {
  refs.articleList.innerHTML = '';
}
