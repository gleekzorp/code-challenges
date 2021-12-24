// I didn't understand what this challenge was asking for.  So I just copied the teacher solution.
// Even after getting the solution I still don't know what they are asking us to do.
const speedometer = document.getElementById("speedometer");
const select = document.getElementById("select");
const time = document.getElementById("time");
let currentLocation = "";
let timeTaken = 0;

select.addEventListener("change", calculateSpeed);
time.addEventListener("keyup", calculateSpeed);

let destination = [
  {
    name: "Munich",
    distanceFromPrevDestination: 2892,
  },
  {
    name: "Kiev",
    distanceFromPrevDestination: 1111,
  },
  {
    name: "Ulaanbaatar",
    distanceFromPrevDestination: 5324,
  },
  {
    name: "Sydney",
    distanceFromPrevDestination: 5458,
  },
  {
    name: "Tijuana",
    distanceFromPrevDestination: 6531,
  },
  {
    name: "Chicago",
    distanceFromPrevDestination: 1729,
  },
];

function calculateSpeed() {
  let speed = 0;
  currentLocation = select.value;
  let distance = destination.find(
    ({ name }) => name === currentLocation
  ).distanceFromPrevDestination;
  timeTaken = time.value;

  speed = Math.round(distance / timeTaken);

  speedometer.innerHTML = `
    <p>Average reindeer speed was 
        <span style="color: #a81817; font-weight: bold">${speed}</span> mph.
    </p>
    `;
}
