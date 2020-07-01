import Swiper from 'swiper';

// eslint-disable-next-line no-unused-vars
const mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.figure-about__nextbutton',
    prevEl: '.figure-about__prevbutton',
  },
});
