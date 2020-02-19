let navSlide = () => {
  let burger = document.querySelector('.burger');
  let nav = document.querySelector('.intro__list');
  let navLinks = document.querySelectorAll('.intro__item');

  burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('list-active');
    burger.classList.toggle('burger-active');
    document.body.classList.toggle('body-lock');

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

//colcade.js========================================
document.addEventListener('DOMContentLoaded', function () {
  var colc = new Colcade('.grid', {
    columns: '.grid-col',
    items: '.grid-item'
  });
}, false);

//rellax.js===============================================
var rellax = new Rellax('.intro__bg-trees', {
  speed: -3,
});

var rellax = new Rellax('.intro__bg-birds', {
  speed: +1,
});

var rellax = new Rellax('.intro__title', {
  speed: +4,
});

//ScrollBar==&==Appear===========================================
function doScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
    scrolled = (winScroll / docHeight) * 100;

    document.getElementById('porgressBar').style.width = scrolled + '%';
}

function scrollAppear(classAppear, screenPos) {
  let blockAppear = document.querySelector(classAppear);
  let introPosition = blockAppear.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / screenPos;

  if(introPosition < screenPosition) {
    blockAppear.classList.add('appear');
  }
}

window.onscroll = function() {
  doScroll();
  scrollAppear('.appear__story-title', 1.3);
  scrollAppear('.appear__story-wall', 1.5);
}

//Preloader====================================
// let spinnerWrapper = document.querySelector('.spinner-wrapper');
// window.addEventListener('load', function() {
//   spinnerWrapper.classList.add('fadeout')
// }, setTimeout(function() {
//   spinnerWrapper.parentElement.removeChild(spinnerWrapper);
// }, 300));
