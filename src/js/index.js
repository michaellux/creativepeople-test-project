/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-new */
import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import Swiper from 'swiper';
import device from 'current-device';
import About from './components/About.vue';
import Advantages from './components/Advantages';
import News from './components/News.vue';

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

const swiper = new Swiper('.advantages__slider', {
  speed: 600,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

Vue.use(VueScrollTo);

new Vue({
  el: '#navigation',
  data() {
    return {
      items: [
        {
          name: 'Основная информация',
          link: '#about',
          class: 'menu__about',
        },
        {
          name: 'Новости',
          link: '#news-title',
          class: 'menu__news',
        },
      ],
    };
  },
});

new Vue({
  el: '#slider-about',
  components: { About },
  render: (a) => a(About),
});

new Vue({
  el: '#news',
  components: { News },
  render: (n) => n(News),
});

new Vue({
  el: '#footer',
});
