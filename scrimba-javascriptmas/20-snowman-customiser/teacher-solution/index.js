// Pretty cool because it updates the CSS variable
const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
}

inputs.forEach((input) => input.addEventListener("input", handleUpdate));
