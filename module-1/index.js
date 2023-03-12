/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable strict */
/* eslint-disable prefer-template */
// eslint-disable-next-line no-plusplus

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {
  },
  actors: {
  },
  genres: [],
  privat: false,
};

console.log(personalMovieDB);

for (let i = 0; i < 2; i++) {
  const lastViewedFilm = prompt('Один из последних просмотренных фильмов?', '');
  const lastViewedFilmRating = prompt('На сколько оцените его?', '');

  if (lastViewedFilm === '' || lastViewedFilm === null || lastViewedFilm.length > 50 || lastViewedFilmRating === '' || lastViewedFilmRating === null) {
    alert('error');
    i--;
  } else {
    personalMovieDB.movies[lastViewedFilm] = lastViewedFilmRating;
  }
}

// let i = 0;

// while (i < 2) {
//   const lastViewedFilm = prompt('Один из последних просмотренных фильмов?', '');
//   const lastViewedFilmRating = prompt('На сколько оцените его?', '');

//   if (lastViewedFilm === '' || lastViewedFilm === null || lastViewedFilm.length > 50 || lastViewedFilmRating === '' || lastViewedFilmRating === null) {
//     alert('error');
//     i--;
//   } else {
//     personalMovieDB.movies[lastViewedFilm] = lastViewedFilmRating;
//   }
//   i++;
// }

// let i = 0;

// do {
//   const lastViewedFilm = prompt('Один из последних просмотренных фильмов?', '');
//   const lastViewedFilmRating = prompt('На сколько оцените его?', '');

//   if (lastViewedFilm === '' || lastViewedFilm === null || lastViewedFilm.length > 50 || lastViewedFilmRating === '' || lastViewedFilmRating === null) {
//     alert('error');
//     i--;
//   } else {
//     personalMovieDB.movies[lastViewedFilm] = lastViewedFilmRating;
//   }
//   i++;
// } while (i < 2);

if (personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
  alert('Вы киноман');
} else {
  alert('Произошла ошибка');
}
