'use strict';

(function () {

  var menuButton = document.querySelector('.menu-button');
  var mainMenu = document.querySelector('.hero__nav');


  menuButton.addEventListener('click', function () {
    toggleMenu();
  });


  var resetMenu = function () {
    menuButton.classList.remove('menu-button--close');
    mainMenu.classList.add('hero__nav--hidden');
  }


  var toggleMenu = function () {
    menuButton.classList.toggle('menu-button--close');
    mainMenu.classList.toggle('hero__nav--hidden');
  }


  resetMenu();

})();