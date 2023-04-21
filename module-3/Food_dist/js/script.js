document.addEventListener('DOMContentLoaded', () => {
  // tabs

  const list = document.querySelector('.tabheader__items');
  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsContent = document.querySelectorAll('.tabcontent');

  list.addEventListener('click', clickTabHandler);

  function disableTabs() {
    tabsContent.forEach((content) => {
      if (content.classList.contains('tabcontent_active')) {
        content.classList.remove('tabcontent_active');
      }
    });

    tabs.forEach((tab) => {
      if (tab.classList.contains('tabheader__item_active')) {
        tab.classList.remove('tabheader__item_active');
      }
    });
  }

  function clickTabHandler(evt) {
    const target = evt.target;

    tabs.forEach((tab, i) => {
      if (target && target === tab) {
        if (tabsContent[i]) {
          disableTabs();

          tab.classList.add('tabheader__item_active');
          tabsContent[i].classList.add('tabcontent_active');
        }
      }
    });
  }

  // timer

  const deadline = '2023-04-14T22:09';

  function getTimeRemaining(endtime) {
    const timestamp = new Date(deadline).getTime() - new Date().getTime();
    const days = Math.floor(timestamp / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timestamp / (1000 * 60 * 60) % 4));
    const minutes = Math.floor((timestamp / 1000 / 60) % 60);
    const seconds = Math.floor((timestamp / 1000) % 60);

    const user = {
      total: timestamp,
      days,
      hours,
      minutes,
      seconds,
    };

    return user;
  }

  function setZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    }

    return num;
  }

  function setDays(num) {
    const day = document.querySelector('#days-note');
    let str = 'дней';

    if (num === 1) {
      str = 'день';
    } else if (num <= 4 && num > 0) {
      str = 'дня';
    }

    day.innerHTML = str;
  }

  function setTimer(selector, end) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    const interval = setInterval(updateTimer, 1000);

    updateTimer();

    function updateTimer() {
      const time = getTimeRemaining(end);

      days.innerHTML = setZero(time.days);
      hours.innerHTML = setZero(time.hours);
      minutes.innerHTML = setZero(time.minutes);
      seconds.innerHTML = setZero(time.seconds);

      setDays(time.days);

      if (time.total <= 0) {
        clearInterval(interval);
        clearTimer();
      }
    }

    function clearTimer() {
      days.innerHTML = '00';
      hours.innerHTML = '00';
      minutes.innerHTML = '00';
      seconds.innerHTML = '00';
    }
  }

  setTimer('.timer', deadline);
});

// modal

const btns = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal');
const closeBtns = document.querySelectorAll('.modal__close');
// const modalTimeout = setTimeout(showModal, 3000);

btns.forEach((btn) => {
  btn.addEventListener('click', btnClickHandler);
});

function btnClickHandler() {
  showModal();
}

function closeBtnClickHandler() {
  closeModal();
}

function clickOutsideHandler(evt) {
  const target = evt.target;

  if (target && target === modal) {
    closeModal();
  }
}

function keyDownHandler(evt) {
  if (evt.code === 'Escape') {
    closeModal();
  }
}

window.addEventListener('scroll', verticalScrollHandler);

function verticalScrollHandler() {
  if (window.pageYOffset
     + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    showModal();
  }
}

function showModal() {
  modal.classList.toggle('modal__active');
  document.body.style.overflow = 'hidden';

  closeBtns.forEach((btn) => {
    btn.addEventListener('click', closeBtnClickHandler);
  });

  modal.addEventListener('click', clickOutsideHandler);

  document.addEventListener('keydown', keyDownHandler);
}

function closeModal() {
  modal.classList.remove('modal__active');
  document.body.style.overflow = 'auto';
  clearInterval(modalTimeout);

  closeBtns.forEach(btn => {
    btn.removeEventListener('click', closeBtnClickHandler);
  });

  modal.removeEventListener('click', clickOutsideHandler);
  document.removeEventListener('keydown', keyDownHandler);
}

// menu

class Menu {
  constructor(photo, alt, title, descr, price, wrapper, ...classes) {
    this.photo = photo;
    this.alt = alt;
    this.title = title;
    this.descr = descr;
    this.price = price;
    this.classes = classes.length === 0 ? ['menu__item'] : classes;
    this.wrapper = wrapper;
  }

  createCard() {
    const card = document.createElement('div');
    this.classes.forEach(className => card.classList.add(className));

    const img = document.createElement('img');
    img.src = this.photo;
    img.alt = this.alt;

    const title = document.createElement('h3');
    title.className = 'menu__item-subtitle';
    title.innerText = this.title;

    const descr = document.createElement('div');
    descr.className = 'menu__item-descr';
    descr.textContent = this.descr;

    const divider = document.createElement('div');
    divider.className = 'menu__item-divider';

    const priceWrap = document.createElement('div');
    priceWrap.className = 'menu__item-price';

    const priceText = document.createElement('div');
    priceText.className = 'menu__item-cost';
    priceText.innerText = 'Цена: ';

    const priceCount = document.createElement('div');
    priceCount.className = 'menu__item-total';
    priceCount.innerText = ' грн/день';

    const priceTotal = document.createElement('span');
    priceTotal.innerText = this.price;
    priceCount.prepend(priceTotal);

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(descr);
    card.appendChild(divider);
    priceWrap.appendChild(priceText);
    priceWrap.appendChild(priceCount);
    card.appendChild(priceWrap);

    const menu = document.querySelector(this.wrapper);

    menu.appendChild(card);
  }
}

new Menu(
  'img/tabs/vegy.jpg',
  'vegy',
  'Меню "Фитнес"',
  'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
  229,
  '.menu__field .container',
).createCard();

new Menu(
  'img/tabs/elite.jpg',
  'elite',
  'Меню “Премиум”',
  'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
  550,
  '.menu__field .container',
).createCard();

new Menu(
  'img/tabs/post.jpg',
  'post',
  'Меню "Постное"',
  'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
  430,
  '.menu__field .container',
).createCard();
