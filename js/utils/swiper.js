import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';
import refs from './refs.js';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  speed: 1500,
  autoplay: {
    delay: 8000,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const screenWidth = window.innerWidth;

swiper.on('slideChange', () => {
  if (screenWidth <= 480) {
    refs.heroBg.style.backgroundImage = `url(${swiper.slides[swiper.realIndex].dataset.imgMob})`;
    return;
  }
  refs.heroBg.style.backgroundImage = `url(${swiper.slides[swiper.realIndex].dataset.imgDesk})`;
});
