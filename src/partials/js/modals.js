(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openGeoBtn: document.querySelector('[data-geo-open]'),
    openFranchBtn: document.querySelector('.franchise-open'),
    openAboutBtn: document.querySelector('.about-modal-open'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    closeGeoBtn: document.querySelector('[data-geo-close]'),
    closeFranchBtn: document.querySelector('.franchise-close'),
    closeAboutBtn: document.querySelector('[data-about-close]'),
    modal: document.querySelector('[data-modal]'),
    geo: document.querySelector('.geo-modal'),
    franch: document.querySelector('.backdrop-franchise'),
    about: document.querySelector('.backdrop-about'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openGeoBtn.addEventListener('click', toggleGeo);
  refs.closeGeoBtn.addEventListener('click', toggleGeo);
  refs.openFranchBtn.addEventListener('click', toggleFranch);
  refs.openAboutBtn.addEventListener('click', toggleAbout);
  refs.closeFranchBtn.addEventListener('click', toggleFranch);
  refs.closeAboutBtn.addEventListener('click', toggleAbout);

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

  function toggleAbout() {
    refs.about.classList.toggle('is-hidden');
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

  refs.modal.onmousedown = function (e) {
    let target = e.target;
    let content = document.querySelector('.modal');
    if (e.target.closest('.' + content.className) === null) {
      toggleModal();
    }
  };

  refs.geo.onmousedown = function (e) {
    let target = e.target;
    let content = document.querySelector('.modal-geo');
    if (e.target.closest('.' + content.className) === null) {
      toggleGeo();
    }
  };

  refs.franch.onmousedown = function (e) {
    let target = e.target;
    let franchContent = document.querySelector('.modal-franchise');
    if (e.target.closest('.' + franchContent.className) === null) {
      toggleFranch();
    }
  };

    refs.about.onmousedown = function (e) {
    let target = e.target;
    let content = document.querySelector('.modal-about');
    if (e.target.closest('.' + content.className) === null) {
      toggleAbout();
    }
  };
})();
