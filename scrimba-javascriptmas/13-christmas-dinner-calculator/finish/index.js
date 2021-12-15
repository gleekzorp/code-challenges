const form = document.querySelector("form");
const vegetarian = document.getElementById("vegetarian-input");
const guests = document.getElementById("guests");
let food = document.getElementById("food");

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (vegetarian.checked) {
    food.textContent = "Nut roast";
  } else {
    food.textContent = Number(guests.value) <= 4 ? "Turkey" : "Goose";
  }
});

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.
