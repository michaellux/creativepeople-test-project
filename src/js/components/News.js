import Vue from 'vue';
import moment from 'moment';

moment.locale('ru');
moment().format();

const news = new Vue({
  el: '#news',
  data() {
    return {
      selectedMonth: '',
      selectedYear: '',
      newsList: [
        {
          id: '0',
          title: 'Киберпреступники тратят на атаки до $50 000',
          text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
          date: '10.07.2019',
        },
        {
          id: '1',
          title: '«Хотите, чтобы дети сотрудничали и решали проблемы? Тогда игра необходима»',
          text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
          date: '25.06.2019',
        },
        {
          id: '2',
          title: 'Глобального среднего класса больше не становится',
          text: 'Замедление Китая и общая неопределенность заморозили активы населения',
          date: '31.05.2019',
        },
        {
          id: '3',
          title: 'Скорость доступа к запрещенным сайтам ограничит суд',
          text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии допуск «Газпрома» к мощностям Opal',
          date: '10.07.2019',
        },
        {
          id: '4',
          title: 'Самая читающая страна в мире',
          text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
          date: '25.06.2019',
        },
        {
          id: '5',
          title: 'Нуждаюсь в некоторой степени',
          text: 'Замедление Китая и общая неопределенность заморозили активы населения',
          date: '31.05.2019',
        },
        {
          id: '6',
          title: 'Следственный комитет ищет экс-главу Северстали',
          text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
          date: '10.07.2019',
        },
        {
          id: '7',
          title: '«ПИК» уходит с Лондонской фондовой биржи',
          text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
          date: '25.06.2019',
        },
        {
          id: '8',
          title: 'Самая читающая страна в мире',
          text: 'Замедление Китая и общая неопределенность заморозили активы населения',
          date: '31.05.2019',
        },
      ],
    };
  },
  computed: {
    years() {
      const year = new Date().getFullYear();
      return Array.from({ length: year - 2004 }, (value, index) => 2005 + index);
    },
    months() {
      const months = Array.from({ length: 12 }, (e, i) => new Date(null, i + 1, null).toLocaleDateString('ru', { month: 'long' }));
      return months;
    },
    filteredNewsList() {
      let filteredNews = this.newsList;

      if ((this.selectedYear !== '') || (this.selectedMonth !== '')) {
        filteredNews = this.newsList
          .filter((newsItem) => this.checkYear(newsItem.date), this.newsList)
          .filter((newsItem) => this.checkMonth(newsItem.date), this.newsList);
      }
      return filteredNews;
    },
  },
  methods: {
    getYear(dateString) {
      return Number(moment(dateString, 'DD.MM.YYYY').format('YYYY'));
    },
    getMonth(dateString) {
      return moment(dateString, 'DD.MM.YYYY').format('MMMM');
    },
    checkYear(dateString) {
      return ((this.getYear(dateString) === this.selectedYear) || (this.selectedYear === ''));
    },
    checkMonth(dateString) {
      return ((this.getMonth(dateString) === this.selectedMonth) || (this.selectedMonth === ''));
    },
  },
});

export default news;
