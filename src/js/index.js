/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-new */
import Vue from 'vue';
import About from './components/About.vue';
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
          class: 'menu__about',
        },
        {
          name: 'Новости',
          link: '#news',
          class: 'menu__news',
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
  el: '#slider-about',
  components: { About },
  render: (a) => a(About),
});

new Vue({
  el: '#footer',
});
