// Task:
// - Write a function to update the Santa Stop Here sign with the user's own text.

const textInput = document.getElementById("text-input");

textInput.addEventListener("keyup", () => {
  const text = textInput.value;
  const sign = document.getElementById("sign");
  sign.innerHTML = `🎅 ${text} ☃️`;
});

// Stretch goals
// - Add a min and max length to the message.
// - Add interchangeable emojis.
// - Allow the user to customize the colors and other styling elements, too.
