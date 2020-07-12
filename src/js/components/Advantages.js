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
          subtitle: 'Простор для идей',
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
function toggleOpen() {
  if (this.classList.contains('collapsed')) {
    $(this).removeClass('collapsed');
    $(this).removeClass('collapse');

    $(this).addClass('open');
    $(this).addClass('open-active');

    $(this).siblings('.expanded').removeClass('open');
    $(this).siblings('.expanded').removeClass('open-active');
    $(this).siblings('.expanded').addClass('collapse');
    $(this).siblings('.expanded').addClass('collapsed');
    $(this).siblings('.expanded').removeClass('expanded');
  } else {
    this.classList.toggle('open');
  }

  $(this).siblings().not('.open').not('.collapsed')
    .addClass('collapse');
}
panels.forEach((panel) => panel.addEventListener('click', toggleOpen));

// После того как анимация для .open заканчивается срабатывает событие 'transitionend'
function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    // Остальные блоки "сворачиваются"
    $(this).siblings().not('.open-active').toggleClass('collapsed');

    // То есть есть два типа блоков свёрнутые и открытые активные
    this.classList.toggle('open-active');

    if (this.classList.contains('expanded')) {
      this.classList.toggle('open-active');
    }
  }
}

panels.forEach((panel) => panel.addEventListener('transitionend', toggleActive));

panels.forEach((panel) => panel
  .addEventListener('animationend', () => {
    if (panel.classList.contains('open')) {
      panel.classList.add('expanded');
    }
  }));

export default advantages;
