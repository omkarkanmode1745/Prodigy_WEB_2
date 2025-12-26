let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

const display = document.getElementById('display');
const startStop = document.getElementById('startStop');
const reset = document.getElementById('reset');
const lap = document.getElementById('lap');
const laps = document.getElementById('laps');

function updateDisplay() {
    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    display.textContent = `${h}:${m}:${s}`;
}

function startTimer() {
    if (!running) {
        running = true;
        startStop.textContent = 'Pause';
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
    } else {
        running = false;
        startStop.textContent = 'Start';
        clearInterval(timer);
    }
}

function resetTimer() {
    clearInterval(timer);
    running = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    startStop.textContent = 'Start';
    laps.innerHTML = '';
}

function recordLap() {
    if (running) {
        const li = document.createElement('li');
        li.textContent = display.textContent;
        laps.appendChild(li);
    }
}

startStop.addEventListener('click', startTimer);
reset.addEventListener('click', resetTimer);
lap.addEventListener('click', recordLap);
