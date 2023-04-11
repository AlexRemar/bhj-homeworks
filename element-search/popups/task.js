let x = document.getElementsByClassName('modal__close modal__close_times');
let btn = document.getElementsByClassName('btn btn_danger modal__close show-success');


 Array.from(x)[0].addEventListener('click', function() {  
    let pop_up = document.querySelector('#modal_main').classList;  
    pop_up.toggle('modal_active');                                
    pop_up.toggle('modal__close');                                
  });

  Array.from(btn)[0].addEventListener('click', function() {                            
    let pop_up = document.querySelector('#modal_success').classList;   
    pop_up.toggle('modal_active');                                   
   });
 
   Array.from(x)[1].addEventListener('click', function() {                            
    let pop_up = document.querySelector('#modal_success').classList;   
    pop_up.toggle('modal_active');
    pop_up.toggle('modal__close');                                   
   });