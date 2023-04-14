const slides = [...document.querySelectorAll('.slider__item')];
const back = document.querySelector('.slider__arrow_prev');
const forward = document.querySelector('.slider__arrow_next');


forward.onclick = function (){
    let index = slides.findIndex((slide) => (slide.classList.contains('slider__item_active')));
    slides[index].className = 'slider__item';                                       
    let activeIndex = index >= slides.length -1 ? 0 : index = index + 1;    
    slides[activeIndex].classList.add('slider__item_active');  
    }

back.onclick = function (){
    let index = slides.findIndex((slide) => (slide.classList.contains('slider__item_active')));
    slides[index].className = 'slider__item';
    let activeIndex = index <= 0 ? index = slides.length - 1 : index = index - 1;
    slides[activeIndex].classList.add('slider__item_active');
}
