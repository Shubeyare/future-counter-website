const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYears = "8 jan 2024";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) & 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    if (time < 10) {
        return `0${time}`;
    } else {
        return time;
    }
}

countdown();
setInterval(countdown, 1000);

// second timer
const daysEl2 = document.getElementById("days-el");
const hoursEl2 = document.getElementById("hours-el");
const minutesEl2 = document.getElementById("minutes-el");
const secondsEl2 = document.getElementById("seconds-el");

const newYears2 = "21 july 2034";

function countdown2() {
    const newYearsDate2 = new Date(newYears2);
    const currentDate2 = new Date();

    const totalSeconds2 = (newYearsDate2 - currentDate2) / 1000;

    const days2 = Math.floor(totalSeconds2 / 3600 / 24);
    const hours2 = Math.floor(totalSeconds2 / 3600) & 24;
    const minutes2 = Math.floor(totalSeconds2 / 60) % 60;
    const seconds2 = Math.floor(totalSeconds2 % 60);

    daysEl2.innerHTML = days2;
    hoursEl2.innerHTML = formatTime(hours2);
    minutesEl2.innerHTML = formatTime(minutes2);
    secondsEl2.innerHTML = formatTime(seconds2);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown2();
setInterval(countdown2, 1000);
