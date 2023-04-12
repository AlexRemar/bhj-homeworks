const btnMenu = document.querySelectorAll('.tab');
const textContent = document.querySelectorAll('.tab__content');


for(let tab of btnMenu){
    tab.addEventListener("click", btnClick);
}
function btnClick(e){
    for(let tab of btnMenu){
        tab.className = 'tab';
    }
    e.currentTarget.className = 'tab tab_active';
    for(let text of textContent){
        text.className = 'tab__content';
    } 

    const index = Array.from(btnMenu).indexOf(e.currentTarget);
    textContent[index].className = 'tab__content tab__content_active';
}

