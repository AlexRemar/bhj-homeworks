const popup = document.querySelector('#subscribe-modal');
let xBtn = document.querySelector('.modal__close');

function getCookie(name){                                                 
    const cookieArr = document.cookie.split('; ');                        
    const cookie = cookieArr.find(c => c.startsWith(name + '='));         
    return cookie;                                                        

}

  xBtn.addEventListener('click', () => {                                  
    popup.className = 'modal';                                            
    document.cookie = 'modal=close';                         
  });
  
  if (getCookie('modal') !== "modal=close"){                                    
  }






