const crew = document.getElementById("crew");
const btn = document.getElementById("btn");

// slide-out-elliptic-top-bck

// Task:
// - Write a function to launch the sleigh!
// - See CSS for more tasks.

btn.addEventListener("click", () => {
  crew.classList.add("slide-out-elliptic-top-bck");
});

// Stretch goals:
// - Add a cheering sound when the sleigh takes off.
// - Add a countdown to the launch time.
