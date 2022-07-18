(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-modal-pink-open]'),
    closeMenuBtn: document.querySelector('[data-modal-pink-close]'),
    menu: document.querySelector('[data-modal-pink]'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-modal-coffee-open]'),
    closeMenuBtn: document.querySelector('[data-modal-coffee-close]'),
    menu: document.querySelector('[data-modal-coffee]'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-modal-green-open]'),
    closeMenuBtn: document.querySelector('[data-modal-green-close]'),
    menu: document.querySelector('[data-modal-green]'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
