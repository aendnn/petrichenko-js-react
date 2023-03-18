/* eslint-disable for-direction */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable strict */
/* eslint-disable prefer-template */
// eslint-disable-next-line no-plusplus

'use strict';

const personalMovieDB = {
  count: 0,
  movies: {
  },
  actors: {
  },
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count === '' || personalMovieDB.count === null || personalMovieDB.count === 0 || typeof numberOfFilms !== 'number') {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  isHidden: (status) => {
    if (status === false) {
      console.log(personalMovieDB);
    }
  },
  getRatingOfFilms: () => {
    let i = 0;

    while (i < 2) {
      const lastViewedFilm = prompt('Один из последних просмотренных фильмов?', '');
      const lastViewedFilmRating = prompt('На сколько оцените его?', '');

      if (lastViewedFilm === '' || lastViewedFilm === null || lastViewedFilm.length > 50 || lastViewedFilmRating === '' || lastViewedFilmRating === null) {
        alert('error');
        i--;
      } else {
        personalMovieDB.movies[lastViewedFilm] = lastViewedFilmRating;
      }
      i++;
    }
  },
  checkKinomanLevel: () => {
    if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
      alert('Вы киноман');
    } else {
      alert('ошибка вышла');
    }
  },
  writeYourGenres: () => {
    for (let i = 1; i <= 3; i++) {
      const lovelyGenre = prompt(`Ваш любимый жанр под номером ${i}`, '');

      if (lovelyGenre === '' || lovelyGenre === null || lovelyGenre.length > 50) {
        i--;
      } else {
        personalMovieDB.genres[i - 1] = lovelyGenre;
        console.log(personalMovieDB);
      }
    }

    personalMovieDB.genres.forEach((genre, i) => console.log(`Любимый жанр #${i + 1} - это ${genre}`));
  },
  toggleVisibleMyDB: () => {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};

// personalMovieDB.start();
personalMovieDB.isHidden(personalMovieDB.privat);
// personalMovieDB.getRatingOfFilms();
// personalMovieDB.checkKinomanLevel();
// personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB();
