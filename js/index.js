const ref = {
  link: document.querySelector("[data = 'route']"),
  dropDown: document.querySelector('.dropdown'),
};

const onHover = () => {
  ref.dropDown.style.opacity = 1;
};
const onLeave = () => {
  ref.dropDown.style.opacity = 0;
};
ref.link.addEventListener('mouseenter', onHover);
ref.dropDown.addEventListener('mouseleave', onLeave);
