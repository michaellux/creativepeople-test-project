/* eslint-disable no-undef */
import Vue from 'vue';

const advantages = new Vue({
  el: '#advantages',
  data() {
    return {
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
});

const panels = document.querySelectorAll('.advantage__items');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    if (this.classList.contains('collapsed')) {
      this.classList.toggle('collapsed-active');
    } else {
      this.classList.toggle('open-active');
    }
    $(this).siblings().not('.open-active').toggleClass('collapsed');
  }
}

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
panels.forEach((panel) => panel.addEventListener('transitionend', toggleActive));

export default advantages;
