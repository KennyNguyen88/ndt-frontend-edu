let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('button');

function timer(seconds){
    clearInterval(countdown);
     const now = Date.now();
     const then = now + seconds * 1000;
     displayTimeLeft(seconds);
     displayEndTime(then);
     countdown = setInterval(() => {
        const secondsLeft = Math.floor((then - Date.now()) / 1000);
        
        //when to stop
        if (secondsLeft < 0){
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
     },1000);
}
function leadingZero(time){
    if (time < 10){
        return `0${time}`;
    }
    return time;
}
function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${leadingZero(minutes)}:${leadingZero(remainderSeconds)}`;
    timerDisplay.textContent = display;
    document.title = display;
}
function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${leadingZero(adjustedHour)}:${leadingZero(minutes)}`;
}

function startTimer(){
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click',startTimer));

document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
})