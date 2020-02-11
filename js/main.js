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

var rellax = new Rellax('.intro__bg-trees', {
  speed: -3,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});

var rellax = new Rellax('.intro__bg-birds', {
  speed: +1,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});

var rellax = new Rellax('.intro__title', {
  speed: +4,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});