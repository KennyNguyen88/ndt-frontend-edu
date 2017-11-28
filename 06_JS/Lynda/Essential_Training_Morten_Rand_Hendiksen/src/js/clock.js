var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = hr*(360/12) + (min*(360/60)/12);
let minPosition = min*(360/60) + (sec*(360/60)/60);
let secPosition = sec*(360/60);

const HOURHAND_TRANSITION = document.querySelector(".clockbox.transition .hour");
const MINUTEHAND_TRANSITION = document.querySelector(".clockbox.transition .minute");
const SECONDHAND_TRANSITION = document.querySelector(".clockbox.transition .second");

const HOURHAND_NOTRANSITION = document.querySelector(".clockbox.notransition .hour");
const MINUTEHAND_NOTRANSITION = document.querySelector(".clockbox.notransition .minute");
const SECONDHAND_NOTRANSITION = document.querySelector(".clockbox.notransition .second");

const HOURHAND_TURNBACK = document.querySelector(".clockbox.turnback .hour");
const MINUTEHAND_TURNBACK = document.querySelector(".clockbox.turnback .minute");
const SECONDHAND_TURNBACK = document.querySelector(".clockbox.turnback .second");

function runTheClock_Normal(){
    hrPosition = hrPosition + (3/360); // (1/3600: ) * (360/12: 1step) 
    minPosition = minPosition + (6/60);   // (1/60:) * (360/60: 1step)
    secPosition = secPosition + (360/60); //(360 degree / 60s : 1step)

    hourhand(hrPosition);
    minutehand(minPosition);
    secondhand(secPosition);
}

function hourhand(hrPosition){
    HOURHAND_TRANSITION.style.transform = "rotate(" + hrPosition + "deg)";
    HOURHAND_NOTRANSITION.style.transform = "rotate(" + hrPosition + "deg)";
}

function minutehand(minPosition){
    MINUTEHAND_TRANSITION.style.transform = "rotate(" + minPosition + "deg)";
    MINUTEHAND_NOTRANSITION.style.transform = "rotate(" + minPosition + "deg)";
}
function secondhand(secPosition){
    SECONDHAND_TRANSITION.style.transform = "rotate(" + secPosition + "deg)";
    SECONDHAND_NOTRANSITION.style.transform = "rotate(" + secPosition + "deg)";
}

function runTheclock_TurnBack(){
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrPosition = hr*(360/12) + (min*(360/60)/12);
    let minPosition = min*(360/60) + (sec*(360/60)/60);
    let secPosition = sec*(360/60);

    HOURHAND_TURNBACK.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND_TURNBACK.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND_TURNBACK.style.transform = "rotate(" + secPosition + "deg)";
}

let runTheClock = () => {
    runTheClock_Normal();
    runTheclock_TurnBack();
}

let interval = setInterval(runTheClock,1000);