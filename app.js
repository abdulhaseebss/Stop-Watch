const hoursBox = document.querySelector("#hours");
const minutesBox = document.querySelector("#minutes");
const secondsBox = document.querySelector("#seconds");
const milliSecBox = document.querySelector("#milli-sec");

const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const split = document.querySelector("#split");
const reset = document.querySelector("#reset");

const splitRecord = document.querySelector("#split-record");

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliSec = 0;

let hoursInterval;
let minutesInterval;
let secondsInterval;
let milliSecInterval;

reset.disabled = true;

// ===>> PLAY BUTTON
pause.style.display = "none";
split.disabled = "true";

play.addEventListener("click", () => {
  if (play.innerHTML === "Play") {
    pause.style.display = "block";
    play.style.display = "none";
    reset.disabled = false;
    split.disabled = false;
  }

  milliSecInterval = setInterval(() => {
    if (milliSec === 99) {
      milliSec = 1;
    } else {
      milliSec += 1;
    }

    if (milliSec < 10) {
      milliSecBox.innerHTML = `0${milliSec}`;
    } else {
      milliSecBox.innerHTML = milliSec;
    }
  }, 1);

  secondsInterval = setInterval(() => {
    if (seconds === 59) {
      seconds = 1;
    } else {
      seconds += 1;
    }

    if (seconds < 10) {
      secondsBox.innerHTML = `0${seconds}`;
    } else {
      secondsBox.innerHTML = seconds;
    }
  }, 1000);

  minutesInterval = setInterval(() => {
    if (minutes === 59) {
      minutes = 1;
    } else {
      minutes += 1;
    }

    if (minutes < 10) {
      minutesBox.innerHTML = `0${minutes}`;
    } else {
      minutesBox.innerHTML = minutes;
    }
  }, 60000);

  hoursInterval = setInterval(() => {
    if (hours === 59) {
      hours = 1;
    } else {
      hours += 1;
    }

    if (hours < 10) {
      hoursBox.innerHTML = `0${hours}`;
    } else {
      hoursBox.innerHTML = hours;
    }
  }, 3600000);
});

// ===>> PAUSE BUTTON

pause.addEventListener("click", () => {
  clearInterval(milliSecInterval);
  clearInterval(secondsInterval);
  clearInterval(minutesInterval);
  clearInterval(hoursInterval);
  if (pause) {
    pause.style.display = "none";
    play.style.display = "block";
  }
});

// ===>> RESET BUTTON

reset.addEventListener("click", () => {
  clearInterval(milliSecInterval);
  clearInterval(secondsInterval);
  clearInterval(minutesInterval);
  clearInterval(hoursInterval);

  hours = 0;
  minutes = 0;
  seconds = 0;
  milliSec = 0;

  milliSecBox.innerHTML = `0${milliSec}`;
  secondsBox.innerHTML = `0${seconds}`;
  minutesBox.innerHTML = `0${minutes}`;
  hoursBox.innerHTML = `0${hours}`;

  splitRecord.innerHTML = " ";

  reset.disabled = true;
  split.disabled = true;
  play.style.display = "block";
  pause.style.display = "none";
});

// ===>> SPLIT BUTTON

let count = 0;
split.addEventListener("click", () => {
  count += 1;
  splitRecord.innerHTML += `<span id="count"> ${count}: </span> &nbsp; &nbsp; &nbsp; &nbsp; ${hours}:${minutes}:${seconds}:${milliSec} </br>`;
});
