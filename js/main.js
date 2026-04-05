// Drawer nav
const menuBtn = document.querySelector('.nav__menu-btn');
const drawer = document.getElementById('nav-drawer');
const overlay = document.getElementById('drawer-overlay');
const closeBtn = drawer?.querySelector('.drawer__close');

function openDrawer() {
  drawer.classList.add('is-open');
  overlay.classList.add('is-open');
  drawer.setAttribute('aria-hidden', 'false');
  overlay.setAttribute('aria-hidden', 'false');
  menuBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  drawer.classList.remove('is-open');
  overlay.classList.remove('is-open');
  drawer.setAttribute('aria-hidden', 'true');
  overlay.setAttribute('aria-hidden', 'true');
  menuBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

menuBtn?.addEventListener('click', () => {
  drawer.classList.contains('is-open') ? closeDrawer() : openDrawer();
});

closeBtn?.addEventListener('click', closeDrawer);
overlay?.addEventListener('click', closeDrawer);

// Close on link click
drawer?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeDrawer);
});

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && drawer?.classList.contains('is-open')) closeDrawer();
});

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Scroll-based header shadow
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });
