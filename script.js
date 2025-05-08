// script.js

const toggleIcon = document.querySelector('.toggle-icon');
toggleIcon.addEventListener('click', () => {
  toggleIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});
