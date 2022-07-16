//  ------------------------- Modals scripts ---------------------------

document.addEventListener('DOMContentLoaded', () => {
  let formButton = document.querySelector('[data-form-open]');
  let geoButton = document.querySelector('[data-geo-open]');

  let form = document.querySelector('[data-form]');
  let geo = document.querySelector('[data-geo]');

  let closeForm = document.getElementsByClassName('modal-close-form')[0];
  let closeGeo = document.getElementsByClassName('modal-close-geo')[0];

  let tagBody = document.querySelector('body');

  formButton.onclick = function (e) {
    e.preventDefault();
    form.classList.remove('is-hidden');
    tagBody.classList.add('no-scroll');
  };

  geoButton.onclick = function (e) {
    e.preventDefault();
    geo.classList.remove('is-hidden');
    tagBody.classList.add('no-scroll');
  };

  closeForm.onclick = function (e) {
    e.preventDefault();
    form.classList.add('is-hidden');
    tagBody.classList.remove('no-scroll');
  };

  closeGeo.onclick = function (e) {
    e.preventDefault();
    geo.classList.add('is-hidden');
    tagBody.classList.remove('no-scroll');
  };

  form.onmousedown = function (e) {
    let target = e.target;
    let modalContent = document.getElementsByClassName('backdrop-form');
    if (target.closest('.' + modalContent.className) === null) {
      form.classList.add('is-hidden');
      tagBody.classList.remove('no-scroll');
    }
  };

  geo.onmousedown = function (e) {
    let target = e.target;
    let modalContent = document.getElementsByClassName('backdrop-geo');
    if (target.closest('.' + modalContent.className) === null) {
      geo.classList.add('is-hidden');
      tagBody.classList.remove('no-scroll');
    }
  };

  let openModals = document.getElementsByClassName('form');

  for (let button of openModals) {
    button.onclick = function (e) {
      e.preventDefault();
      form.classList.remove('is-hidden');
      tagBody.classList.add('no-scroll');
    };
  }
});

// ----------------------- Slider scripts-------------------------

const prev = document.getElementById('btn-prev'),
  next = document.getElementById('btn-next'),
  slides = document.querySelectorAll('.slide'),
  dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
  console.log(n);
  for (slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    activeSlide(index);
  } else {
    index++;
    activeSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    activeSlide(index);
  } else {
    index--;
    activeSlide(index);
  }

})();

// next.addEventListener('click', nextSlide);
// prev.addEventListener('click', prevSlide);

