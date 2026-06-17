const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
const modal = document.querySelector('[data-modal]');
const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalClose = document.querySelector('[data-modal-close]');

function updateHeader() {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 8);
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

menuButton?.addEventListener('click', () => {
  menu?.classList.toggle('is-open');
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => menu.classList.remove('is-open'));
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

document.querySelectorAll('[data-modal-image]').forEach((button) => {
  button.addEventListener('click', () => {
    const src = button.getAttribute('data-modal-image');
    const title = button.getAttribute('data-modal-title') || 'Preview';
    if (!modal || !modalImg || !modalTitle || !src) return;
    modalImg.src = src;
    modalImg.alt = title;
    modalTitle.textContent = title;
    modal.showModal();
  });
});

modalClose?.addEventListener('click', () => modal?.close());
modal?.addEventListener('click', (event) => {
  const rect = modal.getBoundingClientRect();
  const clickedOutside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (clickedOutside) modal.close();
});
