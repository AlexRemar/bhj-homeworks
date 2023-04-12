  /*Посмотрел уже после сдачи дз вебинар по разбору дз, там как раз разбирали эту задачу. Взял код оттуда, но в некоторых 
  моментах изменил реализацию на альтернативную, чтобы Вы понимали, что я понимаю код и я сам понимал, что я понимаю))
  Ниже оригинал кода Владимира из вебинара*/

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
        menuSub.closest("ul").onclick = function(){
        return false
      }
    }
    menuLinks.forEach(link => link.addEventListener('click', btnClick));


/*const menuLinks = [...document.querySelectorAll('.menu__link')];
const onClick = e => {
  const link = e.target;
  const item = link.closest('.menu__item');
  const menu = item.querySelector('.menu_sub');
  if (!menu) {
    return;
  }
  menu.classList.toggle('menu_active');
  
  const mainMenu = item.closest('.menu_main');
  const restMenus = [...mainMenu.querySelectorAll('.menu')]
    .filter(m => m !== menu)
    .forEach(m => m.classList.remove('menu_active'));
  
  
  
  e.preventDefault();
};

menuLinks.forEach(link => link.addEventListener('click', onClick));*/