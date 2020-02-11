const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.intro__list');
  const navLinks = document.querySelectorAll('.intro__item');

  burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('list-active');
    burger.classList.toggle('burger-active');

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
      }
    });
  });
}

navSlide();

//colcade.js=====================
document.addEventListener('DOMContentLoaded', function () {
  var colc = new Colcade('.grid', {
    columns: '.grid-col',
    items: '.grid-item'
  });
}, false);