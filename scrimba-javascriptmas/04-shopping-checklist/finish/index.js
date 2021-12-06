const items = ["Candles", "Decorations", "Chocolate"];
const checklist = document.getElementById("checklist");

// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

function renderItems() {
  items.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("checklist-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `${item}-${index}`;

    const label = document.createElement("label");
    label.innerText = item;
    label.htmlFor = `${item}-${index}`;
    label.classList.add("strikethrough");

    itemDiv.appendChild(checkbox);
    itemDiv.appendChild(label);

    checklist.appendChild(itemDiv);
  });
}

renderItems();

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.
