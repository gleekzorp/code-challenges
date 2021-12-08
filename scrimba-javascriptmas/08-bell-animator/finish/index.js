const bell = document.getElementById("bell");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");
const audio = new Audio(
  "zapsplat_musical_large_sleigh_bells_med_shake_001_15366.mp3"
);
playBtn.addEventListener("click", play);
pauseBtn.addEventListener("click", pause);
stopBtn.addEventListener("click", stop);
audio.addEventListener("ended", () => {
  stop();
});

function play() {
  audio.play();
  animateBell();
}

function pause() {
  audio.pause();
  bell.classList.add("paused");
}

function stop() {
  audio.pause();
  audio.currentTime = 0;
  bell.classList.remove("animate", "paused");
}

function animateBell() {
  if (bell.classList.contains("paused")) {
    bell.classList.remove("paused");
  }
  bell.classList.add("animate");
}

// Task:
// - Animate the bell so that it looks like it is ringing when the music is playing, and stops when the music is paused or stopped.

//NB: You'll need to make changes in the CSS too 😉

// Stretch goal:
// - Make sure the animation doesn't reset when paused.
