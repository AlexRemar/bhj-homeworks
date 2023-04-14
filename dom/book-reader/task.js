let book = document.querySelector(".book");
let text = [...document.querySelectorAll(".font-size")];
function click(e){
    e.preventDefault();
    let index = text.findIndex((tex) => (tex.classList.contains("font-size_active")));
        text[index].classList.remove("font-size_active");
        if(e.target.dataset.size === 'big'){
            text.className = "font-size font-size_active";
            book.className = "book book_fs-big";
        } else if(e.target.dataset.size === 'small'){
            text.className = "font-size font-size_active";
            book.className = "book book_fs-small";
        } else {
            text.className = "font-size font-size_active";
            book.className = "book";
        }
        e.target.classList.add('font-size_active');
}
document.addEventListener('click', click);
