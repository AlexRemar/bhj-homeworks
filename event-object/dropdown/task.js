const btnMenu = document.querySelector('.dropdown__value');
const dropMenu = document.querySelector('.dropdown__list');
const links = document.querySelectorAll('a');


btnMenu.addEventListener("click", btnClick);
function btnClick(e){
        e.preventDefault();
        dropMenu.classList.toggle("dropdown__list_active");
      }
      
      for (let link of links) {
        link.addEventListener('click', rename);
    }
    
    function rename(e) {
        e.preventDefault();
        btnMenu.textContent = e.target.textContent;
        dropMenu.className = 'dropdown__list'; 
    }







