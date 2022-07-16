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
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
        }  
}

const prevSlide = () => {
    if (index == 0){
        index = slides.length - 1
        activeSlide(index);
    }
        else {
        index--;
        activeSlide(index);
        }
    
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
