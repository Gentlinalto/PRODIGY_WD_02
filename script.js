let startTime, updatedTime, difference, tInterval;
let running = false;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const laps = document.getElementById("laps");

startStopBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", lap);

function startStop() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 1);
        startStopBtn.innerHTML = "Pause";
        running = true;
    } else {
        clearInterval(tInterval);
        startStopBtn.innerHTML = "Start";
        running = false;
    }
}

function reset() {
    clearInterval(tInterval);
    display.innerHTML = "00:00:00";
    startStopBtn.innerHTML = "Start";
    running = false;
    laps.innerHTML = "";
}

function lap() {
    if (running) {
        const lapTime = display.innerHTML;
        const lapElement = document.createElement("li");
        lapElement.innerText = lapTime;
        laps.appendChild(lapElement);
    }
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    display.innerHTML = ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds};
}
