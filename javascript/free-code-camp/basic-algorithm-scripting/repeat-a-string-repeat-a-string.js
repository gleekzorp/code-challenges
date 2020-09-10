// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string

// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.

// Create an empty string
// Return that string
// Create a loop based on num input
// Inside loop append the str to the empty string


// function repeatStringNumTimes(str, num) {
//   let repeatedString = ""
//   for (let i = 0; i < num; i++) {
//     console.log(i)
//     repeatedString += str
//   }
//   return repeatedString;
// }

// console.log(repeatStringNumTimes("abc", 3));




//////////////
// while loop
/////////////
// function repeatStringNumTimes(str, num) {
//   let i = 0
//   let repeatedString = ""
//   while (i < num) {
//     repeatedString += str
//     i++
//   }
//   return repeatedString
// }

// console.log(repeatStringNumTimes("abc", 3));




/////////////
// Recursion
////////////
// function repeatStringNumTimes(str, num) {
//   if (num < 1) {
//     return ""
//   } else {
//     return str + repeatStringNumTimes(str, num - 1)
//   }
// }

// console.log(repeatStringNumTimes("abc", 3));
// console.log(repeatStringNumTimes("abc", 1));
// console.log(repeatStringNumTimes("abc", -2));




/////////////////////
// Recursion Ternary
////////////////////
function repeatStringNumTimes(str, num) {
  debugger
  return num < 1 ? "" : str + repeatStringNumTimes(str, num - 1)
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 1));
console.log(repeatStringNumTimes("abc", -2));