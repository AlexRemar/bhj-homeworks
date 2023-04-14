const rotators = document.querySelectorAll('.rotator');
let slideIndex = 0;

    for (let rotator of rotators) {
        function index(n){
            if(n >= rotator.children.length){
                slideIndex = 0;
            }
            if(n < 1){
                slideIndex = rotator.children.length;
            }
        for (let element of rotator.children) {
            element.classList.remove('rotator__case_active');
            rotator.children[n - 1].classList.add('rotator__case_active');
        }
    }
    }
    setInterval(function () {
        slideIndex++
        index(slideIndex)
    }, 1000);
