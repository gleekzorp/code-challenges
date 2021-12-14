const input = document.getElementById("input");
const btn = document.getElementById("btn");
const form = document.querySelector("form");
let guestList = document.getElementById("guest-list");
let guests = [
  "Partner",
  "Nice Relative 1",
  "Nice Relative 2",
  "Evil Relative",
  "Lonely Neighbour",
];

// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.

function createGuestItem(name) {
  const li = document.createElement("li");
  li.textContent = name;
  guestList.appendChild(li);
}

function renderGuests() {
  guests.forEach((guest) => {
    createGuestItem(guest);
  });
}
renderGuests();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value === "") {
    alert("Please enter a name");
  } else {
    createGuestItem(input.value);
    input.value = "";
  }
});

// Stretch goals:
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?
