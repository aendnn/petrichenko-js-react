/* eslint-disable strict */
/* eslint-disable prefer-template */
// eslint-disable-next-line no-plusplus

'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
const lastViewedFilm = prompt('Один из последних просмотренных фильмов?', '');
const lastViewedFilmRating = prompt('На сколько оцените его?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {
  },
  actors: {
  },
  genres: [],
  privat: false,
};

personalMovieDB.movies[lastViewedFilm] = lastViewedFilmRating;

console.log(personalMovieDB);
