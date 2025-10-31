document.addEventListener('DOMContentLoaded', () => {
  /* =======================
     MENU HAMBURGUER LATERAL
  ======================= */
  const hamburger = document.querySelector('.hamburger');
  const nav = document.getElementById('main-nav');

  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
    nav.classList.toggle('open');
  });



  /* =======================
     MODAIS
  ======================= */
  const modalRoot = document.getElementById('modal-root');
  const modalCloseButtons = modalRoot.querySelectorAll('.modal-close');
  const modalTriggers = document.querySelectorAll('[data-modal]');

  modalTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      modalRoot.setAttribute('data-open', 'true');
      modalRoot.setAttribute('aria-hidden', 'false');
    });
  });

  modalCloseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modalRoot.setAttribute('data-open', 'false');
      modalRoot.setAttribute('aria-hidden', 'true');
    });
  });

  /* =======================
     TOASTS
  ======================= */
  const toastContainer = document.getElementById('toasts');
  const toastTriggers = document.querySelectorAll('[data-toast]');

  toastTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.textContent = 'Ação realizada com sucesso!';
      toastContainer.appendChild(toast);
      setTimeout(() => { toast.remove(); }, 3000);
    });
  });
});
