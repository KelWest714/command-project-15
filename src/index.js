(() => {
  const refs = {
    openFormBtn: document.querySelector('[data-form-open]'),
    closeFormBtn: document.querySelector('[data-form-close]'),
    form: document.querySelector('[data-form]'),
    body: document.querySelector('body'),

    openGeoBtn: document.querySelector('[data-geo-open]'),
    closeGeoBtn: document.querySelector('[data-geo-close]'),
    geo: document.querySelector('[data-geo]'),
  };

  refs.openFormBtn.addEventListener('click', toggleForm);
  refs.closeFormBtn.addEventListener('click', toggleForm);

  refs.openGeoBtn.addEventListener('click', toggleGeo);
  refs.closeGeoBtn.addEventListener('click', toggleGeo);

  function toggleGeo() {
    refs.geo.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function toggleForm() {
    refs.form.classList.toggle('is-hidden');

    refs.body.classList.toggle('no-scroll');
  }
})();
// mobile js
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
    refs.body.classList.toggle('no-scroll');
  }
})();