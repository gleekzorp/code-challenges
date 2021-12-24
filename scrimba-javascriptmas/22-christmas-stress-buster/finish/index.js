const btn = document.getElementById("btn");
let timer = document.getElementById("timer");
let affirmation = document.getElementById("affirmation");
let timeout;

// Task:
// - Write a function to start the countdown timer on the button click and display it in the DOM. Stop the timer when it reaches 0.

function startTimer() {
  let time = 15 * 60;
  let interval = setInterval(() => {
    time--;
    timer.innerHTML = showTime(time);
    if (time === 0) {
      clearInterval(interval);
      timer.innerHTML = `<p>Time's up!</p>`;
      affirmation.innerHTML = `<p>You are a good reindeer!</p>`;
    }
  }, 1000);
}

function showTime(allowedTime) {
  let minutes = pad(Math.floor(allowedTime / 60));
  let seconds = pad(allowedTime % 60);
  return `${minutes}:${seconds}`;
}

function pad(number) {
  return number < 10 ? `0${number.toString()}` : number;
}

btn.addEventListener("click", startTimer);

// Stretch goals:
// - Show a relaxing image in the background while the timer is running.
// - Play relaxing music.
