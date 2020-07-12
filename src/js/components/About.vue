<template>
  <div
    v-swiper:aboutswiper="swiperOptions"
    class="about-slider swiper-container"
    @slide-change="handleSwiperSlideChange"
  >
    <div class="about-slider__wrapper swiper-wrapper">
      <div
        v-for="aboutItem in aboutList"
        class="about-slider__slide slide swiper-slide"
      >
        <img
          class="slide__image"
          :src="aboutItem.image"
          alt=""
        >
      </div>
    </div>
    <div class="about-slider__dashboard dashboard">
      <span class="dashboard__position">{{ activeslide }} / {{ aboutList.length }}</span>
      <p class="dashboard__slidecaption">
        {{ aboutList[activeslide - 1].caption }}
      </p>
      <div class="dashboard_navbuttons">
        <button
          v-show="activeslide !== 1"
          class="swiper-button-prev dashboard__prevbutton prevbutton button"
        >
          <span class="button__iconwrapper">
            <object
              class="prevbutton__icon icon"
              type="image/svg+xml"
              data="img/arrow-slider-left.svg"
            />
          </span>
        </button>
        <button
          v-show="activeslide !== aboutList.length"
          class="swiper-button-next dashboard__nextbutton nextbutton button">
          <span class="button__iconwrapper">
            <object
              class="nextbutton__icon icon"
              type="image/svg+xml"
              data="img/arrow-slider-right.svg"
            />
          </span>
        </button>
      </div>
    </div>
    <div class="about-slider__pagination swiper-pagination" />
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';

// TODO: починить навигацию

export default {
  /* eslint-disable vue/no-unused-components */
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      activeslide: 1,
      aboutList: [
        {
          id: '0',
          image: 'uploads/sean-pollock-PhYq704ffdA-unsplash 1.jpg',
          caption: 'Подпись к блоку может быть опциональной. Можно вводить различные сноски и ссылки для блоков с фотографиями и видео',
        },
        {
          id: '1',
          image: 'https://source.unsplash.com/1600x900/?architecture,buildings',
          caption: 'architecture,buildings',
        },
        {
          id: '2',
          image: 'https://source.unsplash.com/1600x900/?architecture,city',
          caption: 'architecture,city',
        },
        {
          id: '3',
          image: 'https://source.unsplash.com/1600x900/?architecture,town',
          caption: 'architecture,town',
        },
        {
          id: '4',
          image: 'https://source.unsplash.com/1600x900/?architecture,village',
          caption: 'architecture,village',
        },
        {
          id: '5',
          image: 'https://source.unsplash.com/1600x900/?architecture,history',
          caption: 'architecture,history',
        },
        {
          id: '6',
          image: 'https://source.unsplash.com/1600x900/?architecture,elements',
          caption: 'architecture,elements',
        },
        {
          id: '7',
          image: 'https://source.unsplash.com/1600x900/?architecture,skyscrapers',
          caption: 'architecture,skyscraper',
        },
        {
          id: '8',
          image: 'https://source.unsplash.com/1600x900/?architecture,windows',
          caption: 'architecture,windows',
        },
        {
          id: '9',
          image: 'https://source.unsplash.com/1600x900/?architecture,modern',
          caption: 'architecture,modern',
        },
        {
          id: '10',
          image: 'https://source.unsplash.com/1600x900/?architecture,house',
          caption: 'architecture,house',
        },
        {
          id: '11',
          image: 'https://source.unsplash.com/1600x900/?architecture,tower',
          caption: 'architecture,tower',
        },
        {
          id: '12',
          image: 'https://source.unsplash.com/1600x900/?architecture,construction',
          caption: 'architecture,construction',
        },
        {
          id: '13',
          image: 'https://source.unsplash.com/1600x900/?architecture,abstract',
          caption: 'architecture,abstract',
        },
        {
          id: '14',
          image: 'https://source.unsplash.com/1600x900/?architecture,urban',
          caption: 'architecture,urban',
        },
      ],
      swiperOptions: {
        direction: 'horizontal',
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.about-slider__pagination',
          clickable: true,
        },
      },
    };
  },
  methods: {
    handleSwiperSlideChange(event) {
      this.activeslide = this.aboutswiper.activeIndex + 1;
    },
  },
};
</script>
