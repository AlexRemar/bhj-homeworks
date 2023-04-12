const slides = Array.from(document.querySelectorAll('.slider__item'));
const activeSlide = document.querySelector('.slider__item_active')
const back = document.querySelector('.slider__arrow_prev');
const forward = document.querySelector('.slider__arrow_next');



forward.onclick = function (){
    let index = slides.findIndex((slide) => slide === activeSlide);
    slides[index].className = 'slider__item';
    let activeIndex = index<slides.length ? index++ : index = slides.length;
    console.log(index)
    slides[activeIndex].classList.add('slider__item_active');
}


back.onclick = function (){
    let index = slides.findIndex((slide) => slide === activeSlide);
    slides[index].className = 'slider__item';
    let activeIndex = index > 0 ? index-- : index = slides.length;
    console.log(index)
    slides[activeIndex].classList.add('slider__item_active');
}











/*let slideNumber = 0;

forward.onclick = function () {
    slideNumber++;
    for (let slide of Array.from(slides)) {
        slide.className = 'slider__item';
    }
    if (slideNumber >= slides.length) {
        slideNumber = 0;
    }
    slides[slideNumber].className = 'slider__item slider__item_active';
};

back.onclick = function () {
    slideNumber--;
    for (let slide of Array.from(slides)) {
        slide.className = 'slider__item';
    }
    if (slideNumber < 0) {
        slideNumber = slides.length - 1;
    }
    slides[slideNumber].className = 'slider__item slider__item_active';
};*/
