    const link = (document.getElementsByClassName('menu__link'));
    const menu = document.getElementsByClassName('menu menu_sub');

    
    for (let i = 0; i < link.length; i++) {
    link[i].onclick = () => {
    if (link[i]) {
        menu[i].classList.toggle('menu_active');
        menu[i].closest("ul").onclick = function(){
                return false  
               } 
               return false;  
    }

    }
    }

