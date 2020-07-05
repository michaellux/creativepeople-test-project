/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Swiper from 'swiper';
import About from './components/About';
import Advantages from './components/Advantages';
import News from './components/News';

const nav = new Vue({
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

const foryear = new Vue({
  el: '#footer',
});

const mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.dashboard__nextbutton',
    prevEl: '.dashboard__prevbutton',
  },
});
