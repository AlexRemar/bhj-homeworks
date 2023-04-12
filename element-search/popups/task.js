const popup = document.querySelector('#modal_main');
let xBtn = document.querySelectorAll('div.modal__close');
const successBtn = document.querySelector('.show-success');
const success = document.querySelector('#modal_success');

popup.className = 'modal modal_active';

for (let x of xBtn){
  x.onclick = () => {
      popup.className = 'modal';
      success.className = 'modal';
  }
}

successBtn.onclick = function () {
  success.className = 'modal modal_active';
  popup.className = 'modal';
};
 

