// Mobile nav toggle
const menuBtn = document.querySelector('.nav__menu-btn');
const navLinks = document.querySelector('.nav__links');

menuBtn?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', isOpen);
});

// Close nav on link click
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Scroll-based header shadow
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });
