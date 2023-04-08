let cookieClick = document.getElementById("cookie");
let clickerCounter = 0;

cookieClick.addEventListener("click", function a(){
    document.getElementById("clicker__counter").innerHTML = 
        clickerCounter++;
        if(clickerCounter % 2 === 0){
            cookieClick.width = 230;
        } 
        else {
            cookieClick.width = 200;
        } 


        let start = Date.now();

        setTimeout(function a() {
         delay = (Date.now() - start); 
            let speed = parseFloat(1 / delay).toFixed(2);
            document.getElementById("speed__counter").innerHTML = speed;
            
},);
});










