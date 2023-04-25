const popup = document.querySelector('#subscribe-modal');
let xBtn = document.querySelector('.modal__close');

function getCookie(name){                                                 //Функция получения куки
    const cookieArr = document.cookie.split('; ');                        //Разделяем содержимое куки
    const cookie = cookieArr.find(c => c.startsWith(name + '='));         //Ищем нужный куки, Если он содержит имя + =
    return cookie;                                                        //Возвращаем его 

}

  xBtn.addEventListener('click', () => {                                  //Клик закрытия окна
    popup.className = 'modal';                                            //Убираем активный класс
    document.cookie = 'modal=close; Max-Age=600';                         //Добавляем нужные данные в файл куки при клике
  });
  
  if (getCookie('modal') !== 'close')                                     //Активируем окно, если в куки нет close
    popup.className = 'modal modal_active';






