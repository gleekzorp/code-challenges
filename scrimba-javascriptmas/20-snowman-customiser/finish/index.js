const inputs = document.querySelectorAll(".controls input");
const eyeColorInput = document.querySelector("#eyeColorInput");
const buttonColorInput = document.querySelector("#buttonColorInput");
const noseColorInput = document.querySelector("#noseColorInput");

const eyes = document.querySelectorAll(".eye");
const buttons = document.querySelectorAll(".button");
const nose = document.querySelector(".nose");

// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.

eyeColorInput.addEventListener("input", updateColor);
buttonColorInput.addEventListener("input", updateColor);
noseColorInput.addEventListener("input", updateColor);

function updateColor(e) {
  const value = e.target.value;
  // console.log(value);
  // console.log(e.target.id);
  // console.log("input id: ", e.target.id);
  // console.log("input value: ", e.target.value);
  // console.log("input type: ", e.target.type);
  switch (e.target.id) {
    case "eyeColorInput":
      eyes.forEach((eye) => {
        eye.style.backgroundColor = value;
      });
      break;
    case "buttonColorInput":
      buttons.forEach((button) => {
        button.style.backgroundColor = value;
      });
      break;
    case "noseColorInput":
      nose.style.borderColor = `transparent transparent transparent ${value}`;
      break;
    default:
      break;
  }
}

// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.
