const body = document.getElementById("body");
const greeting = document.getElementById("greeting");
const christmasBtn = document.getElementById("christmas");
const snowBtn = document.getElementById("snow");

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.

function switchTheme(theme) {
  body.className = theme;

  if (theme == "christmas") {
    greeting.innerText = "🎅 Merry Christmas!";
  } else {
    greeting.innerText = "It's snowing! ☃️";
  }
}

christmasBtn.addEventListener("click", () => {
  switchTheme("christmas");
});

snowBtn.addEventListener("click", () => {
  switchTheme("snow");
});

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.
