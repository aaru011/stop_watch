let minute = 0;
let seconds = 0;
let tens = 0;
let interval;

let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let getMinute = document.querySelector('.minute');
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');


btnStart.addEventListener('click',() => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})
btnStop.addEventListener('click',() => {
    clearInterval(interval);
})
btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    minute = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    getMinute.innerHTML = minute;
})

function startTimer(){
    tens++;
    if(tens <= 9){
        getTens.innerHTML = '0' + tens;
    }
    if(tens > 9){
        getTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        minute++;
        getMinute.innerHTML = '0' + minute;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if(minute > 9){
        getMinute.innerHTML = minute;
    }
}





























