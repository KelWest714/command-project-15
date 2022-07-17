const prev = document.getElementById('btn-prev'),
  next = document.getElementById('btn-next'),
  slides = document.querySelectorAll('.slide'),
  dots = document.querySelectorAll('.dot'),
  feedbacks = document.querySelectorAll('.feedback');

let index = 0;

const activeSlide = n => {
  console.log(n);
  for (slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
};

const activeDot = n => {
  console.log(n);
  for (dot of dots) {
    dot.classList.remove('active_dot');
  }
  dots[n].classList.add('active_dot');
};

const activeFeedback = n => {
  console.log(n);
  for (feedback of feedbacks) {
    feedback.classList.remove('active');
  }
  feedbacks[n].classList.add('active');
};

const prepareCurrentSlide = ind => {
  activeSlide(ind);
  activeDot(ind);
  activeFeedback(ind);
};

const activeDot = n => {
  console.log(n);
  for (dot of dots) {
    dot.classList.remove('active_dot');
  }
  dots[n].classList.add('active_dot');
};

const prepareCurrentSlide = ind => {
  activeSlide(ind);
  activeDot(ind);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    prepareCurrentSliden(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

if (index == slides.length - 1) {
  index = 0;
  activeSlide(index);
} else {
  index++;
  activeSlide(index);
}

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
