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

const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5
    },
    {
      width: 15,
      length: 7
    },
    {
      width: 20,
      length: 5
    },
    {
      width: 8,
      length: 10
    }
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000
}

function isBudgetEnough(data) {
  let stores = 0;
  let str = '';

  data.shops.forEach(shop => stores += shop.length * shop.width);

  const mall = stores * data.height;
  const costs = data.moneyPer1m3 * mall;

  if (costs > data.budget) {
    str = 'Бюджета недостаточно';
  }
  else {
    str = 'Бюджета достаточно';
  }

  return str;
}

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Zaya', 'Alice'];

function sortStudentsByGroups(arr) {
  const studentsByAlphabet = arr.sort();
  const newArr = [];
  const firstCommand = [];
  const secondCommand = [];
  const thirdCommand = [];
  let str = 'Оставшиеся студенты: ';
 
  for (let i = 0; i < studentsByAlphabet.length; i++) {
    if (i <= 8) {
      if (i <= 2) {
        firstCommand.push(studentsByAlphabet[i]);
      }
      else if (i > 2 && i <= 5) {
        secondCommand.push(studentsByAlphabet[i]);
      }
      else {
        thirdCommand.push(studentsByAlphabet[i]);
      }
    }
    else {
      if (i === studentsByAlphabet.length - 1) {
        str += `${studentsByAlphabet[i]}`;
      }
      else {
        str += `${studentsByAlphabet[i]}, `;
      }
    }
  }

  if (studentsByAlphabet.length <= 9) {
    str += `-`;
  }

  newArr.push(firstCommand, secondCommand, thirdCommand);
  newArr.push(str);

  return newArr;
}
let x = 5;
console.log(x++); // 5 

 console.log([] + false - null + true); // 2

let y = 1; 
let x = y = 2; 
console.log(x); // 2

console.log([] + 1 + 2); // 4

console.log("1"[0]) // error

console.log(2 && 1 && null && 0 && undefined); // undefined

console.log(!!(1 && 2) === (true && false)); // no

console.log(null || 2 && 3 || 4); // 3

a = [1, 2, 3]; 
b = [1, 2, 3];

console.log(a === b);

console.log(+"Infinity"); // Infinity;

console.log("Ёжик" > "яблоко");

console.log(0 || "" || 2 || undefined || true || falsе); // true

const restorantData = {
  menu: [
    {
      name: 'Salad Caesar',
      price: '14$'
    },
    {
      name: 'Pizza Diavola',
      price: '9$'
    },
    {
      name: 'Beefsteak',
      price: '17$'
    },
    {
      name: 'Napoleon',
      price: '7$'
    }
  ],
  waitors: [
    { name: 'Alice', age: 22 }, { name: 'John', age: 24 }
  ],
  averageLunchPrice: '20$',
  openNow: true
};

function isAverageLunchPriceTrue(fDish, sDish, average) {
  if ((+fDish.price + +sDish.price) < average) {
    return 'Цена ниже средней';
  } else {
    return 'Цена выше средней';
  }
}

function transferWaitors(data) {
  const copy = Object.assign({}, data);

  copy.waitors = [{ name: 'Mike', age: 32 }];
  return copy;
}

console.log(transferWaitors(restorantData));

function isPangram(string) {
  const aplhabet = 'abcdefghijklmnopqrstuvwxyz';
  let isTrue;

  for (let i = 0; i < aplhabet.length; i++) {
    if (!string.includes(aplhabet[i])) {
      isTrue = false;
    }
    else {
     isTrue = true;
    }
  }

  return isTrue;
}
console.log(isPangram('The quick brown fox jumps over the lazy dog'));

function deepCount(a) {
  let length = a.length;

  for (let element of a) {
    if (Array.isArray(element)) {
       length += deepCount(element);
    }
  }

  return length;
}

console.log(deepCount([[[[[[[[[]]]]]]]]]));