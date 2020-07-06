/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-new */
import Vue from 'vue';
import Swiper from 'swiper';
import About from './components/About';
import Advantages from './components/Advantages';
import News from './components/News';

let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $('.header').css('top', 0);
  } else {
    $('.header').css('top', '-140px');
  }
  prevScrollpos = currentScrollPos;
};

new Vue({
  el: '#navigation',
  data() {
    return {
      items: [
        {
          name: 'Основная информация',
          link: '#about',
        },
        {
          name: 'Новости',
          link: '#news',
        },
      ],
    };
  },
  methods: {
    goToBlock(event) {
      event.preventDefault();
      const link = event.target.getAttribute('href');
      document.querySelector(link).scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
  },
});

new Vue({
  el: '#footer',
});

new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.dashboard__nextbutton',
    prevEl: '.dashboard__prevbutton',
  },
});
