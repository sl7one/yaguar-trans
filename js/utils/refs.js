export const ref = {
  link: document.querySelector("[data = 'route']"),
  dropDown: document.querySelector('.dropdown'),
  burgerBtn: document.querySelector('.burger-btn'),
  burgerMenu: document.querySelector('.header-mobile__menu'),
  bottomHeader: document.querySelector('.header__bottom'),
  dropDownHeaders: document.querySelectorAll('.dropdown__header'),
  routesMobile: document.querySelector('.routes-mobile'),
  backButton: document.querySelector('.back-button'),
  routesListFirst: document.querySelector('.routes-mobile__first').querySelectorAll('li'),
  routesListSecond: document.querySelector('.routes-mobile__second').querySelectorAll('li'),
  routeRout: document.querySelector('[data-route="mobile"]'),
};

export default ref;
