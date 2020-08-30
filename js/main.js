

document.querySelector(".burger").addEventListener("click", function () {
    document.querySelector(".burger").classList.toggle("burger--active");
    document.querySelector(".header__menu").classList.toggle("header__menu-mobi");
   });