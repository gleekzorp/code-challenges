const languageSelector = document.getElementById("language-selector");
const greetingDisplay = document.getElementById("greeting-text");
languageSelector.addEventListener("change", translate);

const greetingsArr = [
  {
    language: "English",
    greeting: "Merry Christmas!",
  },
  {
    language: "Spanish",
    greeting: "Feliz Navidad!",
  },
  {
    language: "Ukrainian",
    greeting: "щасливого Різдва!",
  },
  {
    language: "Welsh",
    greeting: "Nadolig Llawen!",
  },
];

function populateLanguageSelector() {
  greetingsArr.forEach((greeting) => {
    const option = document.createElement("option");
    option.innerText = greeting.language;
    languageSelector.appendChild(option);
  });
}
populateLanguageSelector();

function translate(e) {
  // Task:
  // - Write a function to display the correct greeting when a language is selected.
  const selectedLanguage = e.target.value;
  const selectedGreeting = greetingsArr.find(
    (greeting) => greeting.language === selectedLanguage
  );
  greetingDisplay.innerText = selectedGreeting.greeting;
}

// Stretch goals:
// - Animate the message switch.
// - Add the option to switch the greeting, for example also have "And a Happy New Year!".
