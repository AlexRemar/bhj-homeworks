    const menuLinks = [...document.querySelectorAll('.menu__link')];

    function btnClick(e){
        const item = e.target.closest('.menu__item');
        const menuSub = item.querySelector('.menu_sub');
        if (!menuSub) {
            return;
          }
          menuSub.classList.toggle('menu_active');

          const mainMenu = item.closest('.menu_main');
        const menus = [...mainMenu.querySelectorAll('.menu')];
          for(let menu of menus){
            if(menu !== menuSub){
                menu.classList.remove('menu_active')
            }
          }
        e.preventDefault();
    }
    menuLinks.forEach(link => link.addEventListener('click', btnClick));


