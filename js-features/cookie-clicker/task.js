let cookieClick = document.getElementById("cookie");
let clickerCounter = 0;

cookieClick.addEventListener("click", function(){
    document.getElementById("clicker__counter").innerHTML = 
        clickerCounter++;
        if(clickerCounter % 2 === 0){
            cookieClick.width = 230;
        } 
        else {
            cookieClick.width = 200;
        } 
});










