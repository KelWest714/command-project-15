(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mobile-menu-open'),
    closeMenuBtn: document.querySelector('.mobile-menu-close'),
    menu: document.querySelector('.menu'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    refs.body.classList.toggle('hidden');
    refs.openMenuBtn.classList.toggle('opacity');
  }
})();
