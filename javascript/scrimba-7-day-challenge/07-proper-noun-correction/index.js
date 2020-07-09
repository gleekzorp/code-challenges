const paris = "pARiS" // should return "Paris"
const john = "John" // should return "John"


//////////
// pseudo
////////
// loop through string
// during loop check if uppercase
// if uppercase make it lowercase
// make sure to always uppercase the first letter
// doesn't look like we need to worry about data type coming in
// we can't modify a string
// create a new string to add onto or an array and join it at the end





////////////////////////
// Traditional For Loop
///////////////////////
function properNounCorrection(str) {
  let properNoun = str[0].toUpperCase()

  for (let i = 1; i < str.length; i++) {
    properNoun += str[i].toLowerCase()
  }

  return properNoun
}
console.log(properNounCorrection(john))
console.log(properNounCorrection(paris))





////////////////////
// teacher solution
//////////////////
// function properNounCorrection(str) {
//   // cap 1st letter
//   const firstChar = str[0].toUpperCase();

//   // lower rest of word
//   const remainder = str.slice(1, str.length).toLowerCase();

//   // return them together
//   return firstChar.concat(remainder);
// }
// console.log(properNounCorrection(john))
// console.log(properNounCorrection(paris))





/////////////////////////////////////////////////
// My crazy thoughts while working to a solution
///////////////////////////////////////////////

/////////////////////////////////////
// Traditional For Loop with ternary
///////////////////////////////////
// function properNounCorrection(str) {
//   let properNoun = str[0] === str[0].toUpperCase() ? str[0] : str[0].toUpperCase()
//   for (let i = 1; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       properNoun += str[i].toLowerCase()
//     } else {
//       properNoun += str[i]
//     }
//   }
//   return properNoun
// }
// properNounCorrection(john)





////////////////////////////////////////////////////////////////////
// Traditional For Loop with ternary cleaned the for loop condition
//////////////////////////////////////////////////////////////////
// function properNounCorrection(str) {
//   let properNoun = str[0] === str[0].toUpperCase() ? str[0] : str[0].toUpperCase()

//   for (let i = 1; i < str.length; i++) {
//     properNoun += str[i].toLowerCase()
//   }

//   return properNoun
// }
// console.log(properNounCorrection(john))
// console.log(properNounCorrection(paris))





////////////////////////////////////////////////////////////////////
// Traditional For Loop with if/else cleaned the for loop condition
//////////////////////////////////////////////////////////////////
// function properNounCorrection(str) {
//   let properNoun = ""

//   if (str[0] === str[0].toUpperCase()) {
//     properNoun += str[0]
//   } else {
//     properNoun += str[0].toUpperCase()
//   }

//   for (let i = 1; i < str.length; i++) {
//     properNoun += str[i].toLowerCase()
//   }

//   return properNoun
// }
// console.log(properNounCorrection(john))
// console.log(properNounCorrection(paris))