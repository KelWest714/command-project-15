
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openGeoBtn: document.querySelector('[data-geo-open]'),
    openFranchBtn: document.querySelector('[modal-franchise-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    closeGeoBtn: document.querySelector('[data-geo-close]'),
    closeFrenchBtn: document.querySelector('[modal-franchise-close]'),
    modal: document.querySelector('[data-modal]'),
    geo: document.querySelector('[geo-modal]'),
    franch: document.querySelector('[franchise-modal]'),
    body: document.querySelector('body'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openGeoBtn.addEventListener('click', toggleGeo);
  refs.closeGeoBtn.addEventListener('click', toggleGeo);
  refs.openFranchBtn.addEventListener('click', toggleFranch);
  refs.closeFrenchBtn.addEventListener('click', toggleFranch);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
  function toggleGeo() {
    refs.geo.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
  function toggleFranch() {
    refs.franch.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
  let openModal = document.querySelectorAll('[data-modal-open]');
  for (let button of openModal) {
    button.onclick = function (e) {
      e.preventDefault();
      refs.modal.classList.remove('is-hidden');
      refs.body.classList.add('no-scroll');
    };
  }
})();