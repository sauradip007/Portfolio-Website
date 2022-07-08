// add class navbarDark on navbar scroll
const topper = document.querySelector(".navbar");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    topper.classList.add("navbar-dark");
  } else {
    topper.classList.remove("navbar-dark");
  }
};
