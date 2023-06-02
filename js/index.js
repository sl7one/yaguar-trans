const ref = {
  link: document.querySelector("[data = 'route']"),
  dropDown: document.querySelector('.dropdown'),
  burgerBtn: document.querySelector('.burger-btn'),
  burgerMenu: document.querySelector('.header-mobile__menu'),
  bottomHeader: document.querySelector('.header__bottom'),
};

const { bottom } = ref.bottomHeader.getBoundingClientRect();
ref.dropDown.style.top = bottom + 'px';

const onHover = () => {
  ref.dropDown.style.opacity = 1;
};
const onLeave = () => {
  ref.dropDown.style.opacity = 0;
};
const onClickBurger = () => {
  if (ref.burgerBtn.classList.contains('opened')) {
    gsap.to('.--top', { rotate: 0, y: -1 });
    gsap.to('.--mid', { opacity: 1 });
    gsap.to('.--bot', { rotate: 0, y: 1 });
    gsap.to(ref.burgerMenu, { opacity: 0, y: -1000 });
    ref.burgerBtn.classList.remove('opened');
    return;
  }

  gsap.to('.--top', { rotate: 45, y: 7.8 });
  gsap.to('.--mid', { opacity: 0 });
  gsap.to('.--bot', { rotate: -45, y: -7.8 });
  gsap.to(ref.burgerMenu, { opacity: 1, y: 0 + 58 });
  ref.burgerBtn.classList.add('opened');
};

ref.link.addEventListener('mouseenter', onHover);
ref.dropDown.addEventListener('mouseleave', onLeave);
ref.burgerBtn.addEventListener('click', onClickBurger);
