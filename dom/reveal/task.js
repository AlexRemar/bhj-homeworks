const bloks = document.getElementsByClassName('reveal');

window.addEventListener('scroll', function() {
    for(let blok of bloks){
        const position = blok.getBoundingClientRect();
        let height = blok.offsetHeight 
        if(position.top > 0 - height && position.bottom < window.innerHeight + height) {
            blok.classList.add('reveal_active')
        }
        else {
            blok.classList.remove('reveal_active')
        }
        
    }
})



