

    
    const links = document.querySelectorAll('.menu_sub');  //Меню которые должны открываться
    for (let link of links){
        link.onclick = function (){         //Обработчик события для нужных ссылок
        link.closest('.menu__link');   //Находим внешний элемент
        link.querySelectorAll('a');    //Находим ссылку
        links.className.add('menu_active')   //открываем меню
        if(links.querySelector('.menu_sub').className === 'menu menu_sub menu_active'){   //Если открыто меню
            links.querySelector('.menu_sub').className = 'menu menu_sub';           // То закрываем
        } 
        return false   // Не даем обновиться странице
        }
        
    }

  
  
  
    //  const link = (document.getElementsByClassName('menu__link'));
   // const menu = document.getElementsByClassName('menu menu_sub');

    //for (let i = 0; i < link.length; i++) {
    //link[i].onclick = () => {
    //if (link[i]) {
     //   menu[i].classList.toggle('menu_active');
     //   menu[i].closest("ul").onclick = function(){
    //            return false  
    //           } 
    //           return false;  
   // }

   // }
  //  }





