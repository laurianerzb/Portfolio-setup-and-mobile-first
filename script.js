const mobileMenu = document.querySelector('.mobile-menu-container');
const navigationMenu = document.querySelectorAll('.mobile-menu-item');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close-menu-icon');
const blurBg = document.querySelector('.blur-bg');

hamburgerMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('menu-hide');
  blurBg.style.filter = 'blur(4px)';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.add('menu-hide');
  blurBg.style.filter = 'blur(0)';
});

navigationMenu.forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.classList.add('menu-hide');
  });
});
