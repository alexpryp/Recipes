"use strict";

window.onload = function () {
  // Gamburger menu animation
  function displayMenu(event) {
    $(".nav-menu").toggleClass("nav-menu-hide");
    $(".first").toggleClass("first-active");
    $(".second").toggleClass("second-active");
    $(".third").toggleClass("third-active");
    $(".fourth").toggleClass("fourth-active");
  }

  $(".gamburger-menu-wrapper").on('click', displayMenu);
  $(".nav-menu").on('click', displayMenu); //---------------------------------------------------------------------------
  //Page component animation
};