let timerDisplay = document.querySelector('.timerDisplay');

let Stopbtn = document.getElementById('Stopbtn');
let Startbtn = document.getElementById('Startbtn');
let Resetbtn = document.getElementById('Resetbtn');

let msec = 00;
let secs = 00;
let mins = 00;

let timerId = null;

Startbtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

Stopbtn.addEventListener('click', function () {
    clearInterval(timerId);
});

Resetbtn.addEventListener('click', function () {
    clearInterval(timerId);
    msec = 0;
    secs = 0;
    mins = 0;
    timerDisplay.innerHTML = '00 : 00 : 00';
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}

