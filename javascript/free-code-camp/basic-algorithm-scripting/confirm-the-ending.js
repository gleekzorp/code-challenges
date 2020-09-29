// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending

// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.


// play around with substr() and substring()
// I read this in the substr() docs at w3schools.
// If start is negative, substr() uses it as a character index from the end of the string.

// function confirmEnding(str, target) {
//   console.log(str.substr(-target.length))
//   if (str.substr(-target.length) === target) {
//     return true
//   } else {
//     return false
//   }
// }
function confirmEnding(str, target) {
  return str.substr(-target.length) === target
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Bastian", "oasijds"));


///////////////////////////////////////////////////////////////////////////////////////////
// Read through the hints section for a some slice ways and a regular expression way
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-confirm-the-ending/16006
/////////////////////////////////////////////////////////////////////////////////////////