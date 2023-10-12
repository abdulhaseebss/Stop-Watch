const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const div1 = document.querySelector("#display1");
const div2 = document.querySelector("#display2");
const div3 = document.querySelector("#display3");

let interval;
let second = 0;

stop.style.display = "none";
reset.disabled = true;

start.addEventListener("click", () => {
  if (start) {
    start.style.display = "none";
    stop.style.display = "block";
  }
  interval = setInterval(() => {
    second += 1;
    div1.innerHTML = second < 10 ? "0" + second : second;
    if (div1.innerHTML === "61") {
      div1.innerHTML = "00";
      clearInterval(interval);
      stop.style.display = "none";
      start.style.display = "block";
      reset.disabled = true;
      second = 0
    }
  }, 100);
  reset.disabled = false;
});

stop.addEventListener("click", () => {
  if (stop) {
    stop.style.display = "none";
    start.style.display = "block";
    clearInterval(interval);
  }
});

reset.addEventListener("click", () => {
  if (stop) {
    stop.style.display = "none";
    start.style.display = "block";
    clearInterval(interval);
  }
  clearInterval(interval);
  second = 0;
  div1.innerHTML = "00";
  reset.disabled = true;
});
