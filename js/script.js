'use strict';

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const listItems = document.querySelectorAll('.list-item');
console.log(toggleButton, navbarLinks, listItems);

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

listItems.forEach((item) => {
  // console.log(item);
  item.addEventListener('click', function () {
    navbarLinks.classList.remove('active');
  });
});
