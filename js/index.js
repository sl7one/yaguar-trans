import refs from './utils/refs.js';

const dropDownList = refs.dropDown.querySelectorAll('li');
const { top: topPositionForFirstTitle } = dropDownList[0].getBoundingClientRect();
const { top: topPositionForSecondTitle } = dropDownList[8].getBoundingClientRect();

refs.dropDownHeaders[0].style.left = 60 + 'px';
refs.dropDownHeaders[0].style.top = topPositionForFirstTitle - 25 + 'px';
refs.dropDownHeaders[1].style.left = 660 + 'px';
refs.dropDownHeaders[1].style.top = topPositionForSecondTitle - 25 + 'px';

const { height } = refs.bottomHeader.getBoundingClientRect();
refs.dropDown.style.top = height + 'px';

const onHover = () => {
  refs.dropDown.style.opacity = 1;
  refs.dropDownHeaders[0].style.opacity = 1;
  refs.dropDownHeaders[1].style.opacity = 1;
};
const onLeave = () => {
  refs.dropDown.style.opacity = 0;
  refs.dropDownHeaders[0].style.opacity = 0;
  refs.dropDownHeaders[1].style.opacity = 0;
};
const onClickBurger = () => {
  if (refs.burgerBtn.classList.contains('opened')) {
    gsap.to('.--top', { rotate: 0, y: -1 });
    gsap.to('.--mid', { opacity: 1 });
    gsap.to('.--bot', { rotate: 0, y: 1 });
    gsap.to(refs.burgerMenu, {
      opacity: 0,
      y: -1000,
      onComplete: () => refs.burgerBtn.classList.remove('opened'),
    });
    refs.routesMobile.style.opacity = 0;
    refs.routesMobile.style.display = 'none';

    return;
  }

  gsap.to('.--top', { rotate: 45, y: 7.8 });
  gsap.to('.--mid', { opacity: 0 });
  gsap.to('.--bot', { rotate: -45, y: -7.8 });
  gsap.to(refs.burgerMenu, {
    opacity: 1,
    y: 0 + 58,
    onComplete: () => refs.burgerBtn.classList.add('opened'),
  });
};
const onClickBackButton = () => {
  gsap.to(refs.routesMobile, {
    opacity: 0,
    onComplete: () => (refs.routesMobile.style.display = 'none'),
  });
};
const onClickRouteRout = () => {
  gsap.to(refs.routesMobile, {
    opacity: 1,
    onStart: () => (refs.routesMobile.style.display = 'block'),
  });

  const t = gsap.timeline({ defaults: { duration: 0.3, ease: 'back.out()', stagger: 0.05 } });
  t.fromTo(refs.routesListFirst, { x: 50, opacity: 0 }, { x: 0, opacity: 1 }).fromTo(
    refs.routesListSecond,
    { x: 50, opacity: 0 },
    { x: 0, opacity: 1 }
  );
};

refs.burgerBtn.addEventListener('click', onClickBurger);
refs.link.addEventListener('mouseenter', onHover);
refs.dropDown.addEventListener('mouseleave', onLeave);
refs.backButton.addEventListener('click', onClickBackButton);
refs.routeRout.addEventListener('click', onClickRouteRout);
