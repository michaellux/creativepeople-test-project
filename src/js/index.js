/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Swiper from 'swiper';
import About from './components/About';
import Advantages from './components/Advantages';
import News from './components/News';

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
