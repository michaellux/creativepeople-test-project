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
      showItemLimit: 9,
      newsList: [
        {
          id: '0',
          img: 'uploads/img1.jpg',
          title: 'Киберпреступники тратят на атаки до $50 000',
          text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
          date: '10.07.2019',
        },
        {
          id: '1',
          img: 'uploads/img2.jpg',
          title: '«Хотите, чтобы дети сотрудничали и решали проблемы? Тогда игра необходима»',
          text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
          date: '25.06.2019',
        },
        {
          id: '2',
          img: 'uploads/img3.jpg',
          title: 'Глобального среднего класса больше не становится',
          text: 'Замедление Китая и общая неопределенность заморозили активы населения',
          date: '31.05.2019',
        },
        {
          id: '3',
          img: 'uploads/img4.jpg',
          title: 'Скорость доступа к запрещенным сайтам ограничит суд',
          text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии допуск «Газпрома» к мощностям Opal',
          date: '10.07.2019',
        },
        {
          id: '4',
          img: 'uploads/img5.jpg',
          title: 'Самая читающая страна в мире',
          text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
          date: '25.06.2019',
        },
        {
          id: '5',
          img: 'uploads/img6.jpg',
          title: 'Нуждаюсь в некоторой степени',
          text: 'Замедление Китая и общая неопределенность заморозили активы населения',
          date: '31.05.2019',
        },
        {
          id: '6',
          img: 'uploads/img7.jpg',
          title: 'Следственный комитет ищет экс-главу Северстали',
          text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
          date: '10.07.2019',
        },
        {
          id: '7',
          img: 'uploads/img8.jpg',
          title: '«ПИК» уходит с Лондонской фондовой биржи',
          text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
          date: '25.06.2019',
        },
        {
          id: '8',
          img: 'uploads/img9.jpg',
          title: 'Самая читающая страна в мире',
          text: 'Замедление Китая и общая неопределенность заморозили активы населения',
          date: '31.05.2019',
        },
        {
          id: '9',
          img: 'uploads/img1.jpg',
          title: 'Киберпреступники тратят на атаки до $50 000',
          text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
          date: '10.07.2019',
        },
        {
          id: '10',
          img: 'uploads/img2.jpg',
          title: '«Хотите, чтобы дети сотрудничали и решали проблемы? Тогда игра необходима»',
          text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
          date: '25.06.2019',
        },
        {
          id: '11',
          img: 'uploads/img3.jpg',
          title: 'Глобального среднего класса больше не становится',
          text: 'Замедление Китая и общая неопределенность заморозили активы населения',
          date: '31.05.2019',
        },
        {
          id: '12',
          img: 'uploads/img4.jpg',
          title: 'Скорость доступа к запрещенным сайтам ограничит суд',
          text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии допуск «Газпрома» к мощностям Opal',
          date: '10.07.2019',
        },
        {
          id: '13',
          img: 'uploads/img5.jpg',
          title: 'Самая читающая страна в мире',
          text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
          date: '25.06.2019',
        },
        {
          id: '14',
          img: 'uploads/img6.jpg',
          title: 'Нуждаюсь в некоторой степени',
          text: 'Замедление Китая и общая неопределенность заморозили активы населения',
          date: '31.05.2019',
        },
        {
          id: '15',
          img: 'uploads/img7.jpg',
          title: 'Следственный комитет ищет экс-главу Северстали',
          text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
          date: '10.07.2019',
        },
        {
          id: '16',
          img: 'uploads/img8.jpg',
          title: '«ПИК» уходит с Лондонской фондовой биржи',
          text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
          date: '25.06.2019',
        },
        {
          id: '17',
          img: 'uploads/img9.jpg',
          title: 'Самая читающая страна в мире',
          text: 'Замедление Китая и общая неопределенность заморозили активы населения',
          date: '31.05.2019',
        },
        {
          id: '18',
          img: 'uploads/img1.jpg',
          title: 'Киберпреступники тратят на атаки до $50 000',
          text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
          date: '10.07.2019',
        },
        {
          id: '19',
          img: 'uploads/img2.jpg',
          title: '«Хотите, чтобы дети сотрудничали и решали проблемы? Тогда игра необходима»',
          text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
          date: '25.06.2019',
        },
        {
          id: '20',
          img: 'uploads/img3.jpg',
          title: 'Глобального среднего класса больше не становится',
          text: 'Замедление Китая и общая неопределенность заморозили активы населения',
          date: '31.05.2019',
        },
        {
          id: '21',
          img: 'uploads/img4.jpg',
          title: 'Скорость доступа к запрещенным сайтам ограничит суд',
          text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии допуск «Газпрома» к мощностям Opal',
          date: '10.07.2019',
        },
        {
          id: '22',
          img: 'uploads/img5.jpg',
          title: 'Самая читающая страна в мире',
          text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
          date: '25.06.2019',
        },
        {
          id: '23',
          img: 'uploads/img6.jpg',
          title: 'Нуждаюсь в некоторой степени',
          text: 'Замедление Китая и общая неопределенность заморозили активы населения',
          date: '31.05.2019',
        },
        {
          id: '24',
          img: 'uploads/img7.jpg',
          title: 'Следственный комитет ищет экс-главу Северстали',
          text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
          date: '10.07.2019',
        },
        {
          id: '25',
          img: 'uploads/img8.jpg',
          title: '«ПИК» уходит с Лондонской фондовой биржи',
          text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
          date: '25.06.2019',
        },
        {
          id: '26',
          img: 'uploads/img9.jpg',
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
    addItems() {
      this.showItemLimit += 9;
    },
  },
});

export default news;
