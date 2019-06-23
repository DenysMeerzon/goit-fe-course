'use strict';
/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

const movieItem = [
  {
    src: 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
    alt: 'movie image',
    movieTitle: 'The Godfather',
    movieDescription:
      'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers,launching a campaign of bloody revenge.',
    movieDate: '1972-03-14',
    movieRating: '8.6',
  },
];

const newMovieItems = document.querySelector('body');

function getMovieCard(movieItems) {
  return movieItems.map(item => createMovieCard(item));
}

function createMovieCard(newItem) {
  const movie = document.createElement('div');
  movie.classList.add('movie');

  const theImg = document.createElement('img');
  theImg.classList.add('movie__image');
  theImg.setAttribute('src', newItem.src);
  theImg.setAttribute('alt', newItem.alt);

  const movieBody = document.createElement('div');
  movieBody.classList.add('movie__body');

  const movieTitle = document.createElement('h2');
  movieTitle.classList.add('movie__title');
  movieTitle.textContent = newItem.movieTitle;

  const movieDescription = document.createElement('p');
  movieDescription.classList.add('movie__description');
  movieDescription.textContent = newItem.movieDescription;

  const movieDate = document.createElement('p');
  movieDate.classList.add('movie__date');
  movieDate.textContent = `Released: ${newItem.movieDate}`;

  const movieRating = document.createElement('p');
  movieRating.classList.add('movie__rating');
  movieRating.textContent = `Rating: ${newItem.movieRating}`;

  movieBody.append(movieTitle, movieDescription, movieDate, movieRating);

  movie.append(theImg, movieBody);

  return movie;

  // newMovieItems.insertAdjacentElement('afterbegin', movie);
}
const newMovieCard = getMovieCard(movieItem);

newMovieItems.insertAdjacentHTML('afterbegin', newMovieCard);
