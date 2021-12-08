const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");
const audio = new Audio(
  "zapsplat_musical_large_sleigh_bells_med_shake_001_15366.mp3"
);

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).

playBtn.addEventListener("click", () => {
  audio.play();
});

pauseBtn.addEventListener("click", () => {
  audio.pause();
});

stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
});

// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.
