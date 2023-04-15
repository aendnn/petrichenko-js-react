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
