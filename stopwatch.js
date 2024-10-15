const stopwatch = document.getElementById("stopwatch");
let timer = null;
let starttimer = 0;
let elapsedtimer = 0;
let isrunning = false;

function start() {
    if (!isrunning) {
        starttimer = Date.now() - elapsedtimer;
        timer = setInterval(update, 10);
        isrunning = true;
    }
}

function stop() {
    if (isrunning) {
        clearInterval(timer);
        elapsedtimer = Date.now() - starttimer;
        isrunning = false;
    }
}

function reset() {
    clearInterval(timer);
    starttimer = 0;
    elapsedtimer = 0;
    isrunning = false;
    stopwatch.textContent = "00:00:00:00";
}

function update() {
    const currentTime = Date.now();
    elapsedtimer = currentTime - starttimer;
    let hours = Math.floor(elapsedtimer / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedtimer / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedtimer / 1000) % 60);
    let milliseconds = Math.floor((elapsedtimer % 1000) / 10);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    milliseconds = String(milliseconds).padStart(2, '0');

    stopwatch.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}


