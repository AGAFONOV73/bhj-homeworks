const timerElement = document.getElementById("timer");

let secondsback = parseInt(timerElement.textContent);

const countdown = setInterval(() => {
  secondsback--;
  if (secondsback >= 0) {
    timerElement.textContent = secondsback;
  }
  if (secondsback === 0) {
    clearInterval(countdown);
    alert("Вы победили");
  }
}, 1000);
