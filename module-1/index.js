/* eslint-disable for-direction */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable strict */
/* eslint-disable prefer-template */
// eslint-disable-next-line no-plusplus

'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms === '' || numberOfFilms === null || numberOfFilms === 0 || typeof numberOfFilms !== 'number') {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {
  },
  actors: {
  },
  genres: [],
  privat: false,
};

function isHidden(status) {
  if (status === false) {
    console.log(personalMovieDB);
  }
}

isHidden(personalMovieDB.privat);

function getRatingOfFilms() {
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
}

getRatingOfFilms();

function checkKinomanLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
  } else {
    alert('ошибка вышла');
  }
}

checkKinomanLevel();

function writeYourGenres () {
  for (let i = 1; i <= 3; i++) {
    const lovelyGenre = prompt(`Ваш любимый жанр под номером ${i}`, '');

    if (lovelyGenre === '' || lovelyGenre === null || lovelyGenre.length > 50) {
      alert('error');
    } else {
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
      console.log(personalMovieDB);
    }
  }
}

writeYourGenres();

function getMathResult(num, count) {
  let str = '';
  let numb = 0;

  if (typeof count !== 'number' || count <= 0) {
    return num;
  }

  for (let i = 1; i <= count; i++) {
    numb += num;
    if (i < count) {
      str += `${numb}---`;
    } else {
      str += `${numb}`;
    }
  }

  return str;
}

const lines = 5;
let result = '';

for (let i = 0; i < lines; i++) {
  for (let j = lines; j - i; j--) {
    result += '!';
  }

  for (let k = 0; k < 2 * i + 1; k++) {
    result += '*';
  }

  result += '\n';
}
