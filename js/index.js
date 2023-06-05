import refs from './utils/refs.js';

const dropDownList = refs.dropDown.querySelectorAll('li');

for (let i = 8; i <= 11; i++) {
  dropDownList[i].style.marginLeft = 140 + 'px';
}

refs.dropDownHeaders[0].style.left = 60 + 'px';
refs.dropDownHeaders[0].style.top = 130 + 'px';
refs.dropDownHeaders[1].style.left = 660 + 70 + 'px';
refs.dropDownHeaders[1].style.top = 130 + 'px';

const { height } = refs.bottomHeader.getBoundingClientRect();
refs.dropDown.style.top = height + 'px';

const onHover = () => {
  console.log('hover');

  for (let el of refs.dropDownHeaders) {
    el.style.display = 'block';
  }
  gsap.to(refs.dropDown, {
    opacity: 1,
    onStart: () => (refs.dropDown.style.display = 'flex'),
  });
};
const onLeave = () => {
  console.log('leave');
  for (let el of refs.dropDownHeaders) {
    el.style.display = 'none';
  }
  gsap.to(refs.dropDown, {
    opacity: 0,
    onComplete: () => {
      refs.dropDown.style.display = 'none';
      refs.link.addEventListener('mouseenter', onHover, { once: true });
    },
  });
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
refs.link.addEventListener('mouseenter', onHover, { once: true });
refs.dropDown.addEventListener('mouseleave', onLeave);
refs.backButton.addEventListener('click', onClickBackButton);
refs.routeRout.addEventListener('click', onClickRouteRout);
