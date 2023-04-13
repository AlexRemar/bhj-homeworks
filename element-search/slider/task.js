const slides = [...document.querySelectorAll('.slider__item')];
let ActiveSlide = document.querySelector('.slider__item_active');
const back = document.querySelector('.slider__arrow_prev');
const forward = document.querySelector('.slider__arrow_next');


forward.onclick = function (){
    let index = slides.findIndex((slide) => (slide.contains(ActiveSlide)));    //Получаем индекс активного элемента
    console.log(index)
    slides[index].className = ('slider__item');     //Снимаем активность с него
    console.log(index)
    index++                                           //Увеличиваем индекс
    let activeIndex = index >= slides.length ? 0 : index;    //Присваиваем индекс следующему элементу
    console.log(activeIndex)
    slides[activeIndex].classList.add('slider__item_active');  //Активируем элемент
    }



back.onclick = function (){
    let index = slides.findIndex((slide) => (slide.contains(ActiveSlide)));
    slides[index].className = 'slider__item';
    index--
    let activeIndex = index < 0 ? slides.length : index;
    console.log(index)
    slides[activeIndex].classList.add('slider__item_active');
}
