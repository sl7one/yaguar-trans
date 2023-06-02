const ref = {
  backButton: document.querySelector('.back-button'),
  routesListFirst: document.querySelector('.routes-mobile__first').querySelectorAll('li'),
  routesListSecond: document.querySelector('.routes-mobile__second').querySelectorAll('li'),
};

const onClickBackButton = () => {
  window.history.back();
};

const t = gsap.timeline({ defaults: { duration: 0.3, ease: 'back.out()', stagger: 0.05 } });

window.addEventListener('load', () => {
  t.fromTo(ref.routesListFirst, { x: 50, opacity: 0 }, { x: 0, opacity: 1 }).fromTo(
    ref.routesListSecond,
    { x: 50, opacity: 0 },
    { x: 0, opacity: 1 }
  );
});

ref.backButton.addEventListener('click', onClickBackButton);
