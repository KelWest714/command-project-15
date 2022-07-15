
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
