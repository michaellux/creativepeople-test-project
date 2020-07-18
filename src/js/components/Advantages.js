/* eslint-disable no-undef */
import Vue from 'vue';

const advantages = new Vue({
  el: '#advantages',
  data() {
    return {
      windowWidth: 0,
      advantagesList: [
        {
          id: 0,
          title: 'уникальные виды',
          subtitle: 'Прекрасный вид',
          text: 'Высота восточного крыла достигает рекордных 374 метров. На высоту жителей и гостей комплекса «Федерация» доставляют 67 самых современных лифтов.',
          class: 'advantage__views',
        },
        {
          id: 1,
          title: 'панорамные окна',
          subtitle: 'Настоящие панорамы',
          text: 'Высота восточного крыла достигает рекордных 374 метров. На высоту жителей и гостей комплекса «Федерация» доставляют 67 самых современных лифтов.',
          class: 'advantage__panorama',
        },
        {
          id: 2,
          title: 'высокие потолки',
          subtitle: 'Простор для\u00A0идей',
          text: 'Высота восточного крыла достигает рекордных 374 метров. На высоту жителей и гостей комплекса «Федерация» доставляют 67 самых современных лифтов.',
          class: 'advantage__ceil',
        },
        {
          id: 3,
          title: 'приватность',
          subtitle: 'VIP-безопасность',
          text: 'Высота восточного крыла достигает рекордных 374 метров. На высоту жителей и гостей комплекса «Федерация» доставляют 67 самых современных лифтов.',
          class: 'advantage__privacy',
        },
      ],
    };
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
});

/* * Анимация панелей * */

// Берём все панели
const panels = document.querySelectorAll('.advantage__items');

// По умолчанию они закрыты

// Как только мы кликаем на одну из них она становится открытой;
// если она уже открыта, то закрытой
function toggleOpen(e) {
  if (this.classList.contains('collapsed')) {
    $(this).removeClass('collapsed');
    $(this).removeClass('collapse');

    $(this).addClass('open');

    $(this).addClass('open-active');
    $('.advantages__foreground').addClass('opened');

    $(this).siblings('.expanded').removeClass('open');
    $(this).siblings('.expanded').removeClass('open-active');
    $(this).siblings('.expanded').addClass('collapse');
    $(this).siblings('.expanded').addClass('collapsed');
    $(this).siblings('.expanded').removeClass('expanded');
  } else if (this.classList.contains('expanded')) {
    $(this).addClass('close-active');
    $(this).removeClass('open');
    $(this).siblings('.collapse').addClass('collapsed-off');
    $(this).siblings('.collapsed').removeClass('collapsed');
    $(this).siblings('.collapse').removeClass('collapse');
    setTimeout(() => {
      $(this).removeClass('open-active');
      $('.advantages__foreground').removeClass('opened');
      $(this).removeClass('expanded');
      $(this).removeClass('close-active');
    }, 5000);
  } else {
    console.log(`toggleopen ${e.target.classList}`);
    this.classList.toggle('open');
    this.classList.toggle('open-active');
    $('.advantages__foreground').toggleClass('opened');
    $(this).siblings().addClass('collapse');
    $(this).siblings().not('.open-active').toggleClass('collapsed');
  }
}
panels.forEach((panel) => panel.addEventListener('click', toggleOpen));

panels.forEach((panel) => panel
  .addEventListener('animationstart', () => {
    $('.advantage__items').addClass('animated');
  }));

panels.forEach((panel) => panel
  .addEventListener('animationend', () => {
    $('.advantage__items').removeClass('animated');

    if (panel.classList.contains('open')) {
      panel.classList.add('expanded');
    }

    if (panel.classList.contains('collapsed-off')) {
      setTimeout(() => {
        panel.classList.remove('collapsed-off');
      }, 3000);
    }
  }));

export default advantages;
