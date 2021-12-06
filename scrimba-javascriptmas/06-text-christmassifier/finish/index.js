const greeting = document.getElementById("greeting");
const christmassifierBtn = document.getElementById("christmassifierBtn");
christmassifierBtn.addEventListener("click", christmassifyName);

function christmassifyName() {
  // Task:
  // - Check if you need to add or remove christmassified class to greeting, update the text.

  if (greeting.classList.contains("christmassified")) {
    greeting.classList.remove("christmassified");
    christmassifierBtn.innerText = "Christmassify";
  } else {
    greeting.classList.add("christmassified");
    christmassifierBtn.innerText = "De-christmassify";
  }
}

// Stretch goals:
// - Play Christmas music when Christmas class is added.
// - Remove the Christmas class after a given time.
