const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-nav');

function closeMobileMenu() {
  if (!menuButton || !mobileMenu) return;
  mobileMenu.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
}

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  mobileMenu.hidden = isOpen;
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMobileMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileMenu && !mobileMenu.hidden) {
    closeMobileMenu();
    menuButton.focus();
  }
});

document.addEventListener('click', (event) => {
  if (mobileMenu && !mobileMenu.hidden && !event.target.closest('.site-header')) closeMobileMenu();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 700) closeMobileMenu();
});

document.querySelector('#year').textContent = new Date().getFullYear();
