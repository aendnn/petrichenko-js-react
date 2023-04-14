document.addEventListener('DOMContentLoaded', () => {
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
});
