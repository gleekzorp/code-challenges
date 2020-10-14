// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-missing-letters/16023


// function fearNotLetter(str) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//   for (let i = 0; i < str.length; i++) {
//     if (alphabet[i] != str[i]) {
//       return alphabet[i]
//     }
//   }
//   return undefined;
// }




/////////////////////////////////////////////
// Solves starting from beginning and middle
/////////////////////////////////////////////
// function fearNotLetter(str) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//   let start = alphabet.indexOf(str[0])
//   for (let i = 0; i < str.length; i++, start++) {
//     if (alphabet[start] != str[i]) {
//       return alphabet[start]
//     }
//   }
//   return undefined;
// }




//////////
// for of
/////////
function fearNotLetter(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let start = alphabet.indexOf(str[0])
  for (let char of str) {
    if (alphabet[start] != char) {
      return alphabet[start]
    }
    start++
  }
  return undefined;
}

console.log(fearNotLetter("abce")) // should return "d".
// console.log(fearNotLetter("abcdefghjklmno")) // should return "i".
// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")) // should return undefined.
// console.log(fearNotLetter("stvwx")) // should return "u".
// console.log(fearNotLetter("bcdf")) // should return "e".