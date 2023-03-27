/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', documentHandler);
function documentHandler () {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adsImg = document.querySelectorAll('.promo__adv img');
    const genre = document.querySelector('.promo__genre');
    const banner = document.querySelector('.promo__bg');
    const list = document.querySelector('.promo__interactive-list');
    const form = document.querySelector('.add');

    function removeAds(ads) {
        ads.forEach(ad => ad.remove());
    }

    function editGenre(name) {
        name.textContent = 'драма';
    }

    function editBannerBg(element) {
        element.style.cssText = 'background-image: url("../img/bg.jpg");';
    }

    function setFilmsList(obj, wrapper) {
        wrapper.innerHTML = '';

        obj.sort();

        obj.forEach((film, index) => {
            wrapper.innerHTML += `<li class="promo__interactive-item">${index + 1}. ${trimName(film)}
                            <div class="delete"></div>
                        </li>`;
        })

        let items = document.querySelectorAll('.promo__interactive-item');

        items.forEach((item, i) => {
            item.addEventListener('click', deleteClickHandler);
        });
    }

    form.addEventListener('submit', formHandler);

    function formHandler(evt) {
        evt.preventDefault();

        if (this.film.value) {
            movieDB.movies.push(this.film.value);

            if (this.favorite.checked) {
                console.log('Добавляем любимый фильм');
            }

            setFilmsList(movieDB.movies, list);

            this.reset();
        }
    }

    function trimName(str) {
        let newStr = '';

        if (str.length > 21) {
            for (let i = 0; i <= 21; i++) {
                newStr += str[i];
            }

            newStr += '...';
        }
        else {
            return str;
        }

        return newStr;
    }

    removeAds(adsImg);
    editGenre(genre);
    editBannerBg(banner);
    setFilmsList(movieDB.movies, list);

    function deleteClickHandler(evt) {
        const index = evt.target.parentElement.textContent[0];
    
        if (evt.target === this.lastElementChild) {
            movieDB.movies.splice(index - 1, 1);
            this.remove();
            setFilmsList(movieDB.movies, list);
        }
    }
}
