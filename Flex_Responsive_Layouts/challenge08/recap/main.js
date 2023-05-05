const nav = document.querySelector('.nav');
const nav__toggle = document.querySelector('.nav__toggle');

nav__toggle.addEventListener('click', () => {
  nav.classList.toggle('nav--visible');
});
