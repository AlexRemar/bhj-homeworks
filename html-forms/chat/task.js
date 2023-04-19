const redChat = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

const botList = [
    'Ответим через 2 дня. Не скучайте',
    'В масштабах вселенной это не важно',
    'Скучно. Проявите свое воображение',
    'Вы нас отвлекаете',
    'Может споем вместе?',
    'Как говаривал Толстой: "Идите в баню!"',
    'Отвечу, если больше не будете нам писать'
]

input.oninput = () => {
    if(input.value === ' '){
        input.value = '';
    }
  }

    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();

input.addEventListener('keyup', function(e){
    if(e.key !== 'Enter') {
        return;
    }
    if(input.value.trim()){
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${hours}:${minutes}</div>
                <div class="message__text">
                ${input.value.trim()}
                </div>
                </div>
             `;
             input.value = '';
             botAnswer();
    } 
    
 })

function botAnswer(){
    let random = Math.floor(Math.random() * botList.length)
        messages.innerHTML += `
          <div class="message">
            <div class="message__time">${hours}:${minutes}</div>
            <div class="message__text">
              ${botList[random]}
            </div>
          </div>
        `;
 };

redChat.addEventListener('click', function(e){
    e.preventDefault();
    redChat.className = 'chat-widget chat-widget_active';
})


