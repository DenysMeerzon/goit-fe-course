'use strict';
/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
{
  /* <div class="movie">
      <img
        class="movie__image"
        src="http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg"
        alt="movie image"
      />

      <div class="movie__body">
        <h2 class="movie__title">The Godfather</h2>
        <p class="movie__description">
          Spanning the years 1945 to 1955, a chronicle of the fictional
          Italian-American Corleone crime family. When organized crime family
          patriarch, Vito Corleone barely survives an attempt on his life, his
          youngest son, Michael steps in to take care of the would-be killers,
          launching a campaign of bloody revenge.
        </p>

        <p class="movie__date">Released: 1972-03-14</p>
        <p class="movie__rating">Rating: 8.6</p>
      </div>
    </div> */
}
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
function createMovieCard(newItem) {
  const movie = document.createElement('div');
  movie.classList.add('movie');

  const theImg = document.createElement('img');
  theImg.classList.add('movie__image');
  theImg.setAttribute('src', newItem.src);
  theImg.setAttribute('alt', newItem.alt);

  movie.appendChild(theImg);
  return movie;
}
createMovieCard(movieItem);
