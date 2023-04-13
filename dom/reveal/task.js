const bloks = document.getElementsByClassName('reveal');


window.addEventListener('scroll', function() {
    for(let blok of bloks){
        const position = blok.getBoundingClientRect();
        if(position.top < window.innerHeight && position.bottom > 0) {
            blok.classList.toggle('reveal_active')
        }
        if(position.top > 0 && position.bottom < window.innerHeight) {
            return false;
        }
    }
})


// Работет, но как будто сломанный телевизор, будто
//getBoundingClientRect порой врет с координатами

