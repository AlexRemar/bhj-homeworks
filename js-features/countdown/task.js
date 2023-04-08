

function myTimer() {
    let hour = "00"; 
    let minute = "00"; 
    let second = 59;  
    const realizationTimer = setInterval(function() {
        if (second < 10) {
            second  = "0" + second;
        };
        document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + second;
        if (second == 0) {
            clearInterval(realizationTimer);
            alert("Вы победили в конкурсе!");
            location.assign("C:\Users\Remar\bhj-homeworks\js-features\countdown");
        }
        second = second - 1;  
    }, 1000);
}
myTimer();
