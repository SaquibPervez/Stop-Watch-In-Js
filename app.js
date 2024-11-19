var minheading = document.getElementById("minheading")
var secheading = document.getElementById("secheading")
var msecheading = document.getElementById("msecheading")


var startbtn = document.getElementById("startbtn")


var min = 0;
var sec = 0;
var msec = 0;
var interval;

function start(){
    interval = setInterval(timer, 10)
    startbtn.disabled = true;
}

function timer(){
    msec++
    msecheading.innerHTML = msec;
    if(msec === 100){
        msec= 0
        sec++
        secheading.innerHTML= sec;
        if(sec=== 60){
            sec = 0
            min++
            minheading.innerHTML = min;
        }
    }
}

function stop(){
    clearInterval(interval)
    startbtn.disabled = false;
}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    msecheading.innerHTML = "00";
    secheading.innerHTML = "00";
    minheading.innerHTML = "00";
    startbtn.disabled = false;

}