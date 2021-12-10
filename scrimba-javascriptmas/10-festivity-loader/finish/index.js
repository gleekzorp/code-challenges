const meter = document.getElementById("meter");

// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!

// TODO: This won't work unless you are in the month of December.  I will need to look into how to make this work for any month.
function festivityLoader() {
  const today = new Date();

  const interval = setInterval(() => {
    meter.value = meter.value + 0.25;
    if (meter.value == today.getDate()) {
      clearInterval(interval);
    }
  }, 10);
}

festivityLoader();

// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.
