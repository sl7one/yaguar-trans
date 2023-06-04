import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  speed: 400,
  autoplay: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
