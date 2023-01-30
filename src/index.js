import './sass/main.scss';
import Swiper, { Pagination } from 'swiper';
var swiper = new Swiper('.reviews-slider', {
  loop: true,
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
  },
});
