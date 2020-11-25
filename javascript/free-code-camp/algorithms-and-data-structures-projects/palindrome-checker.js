// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

// function palindrome(str) {
//   let noSpaces = str.replace(/[^A-Z0-9]/ig, '')
//   let reversed = noSpaces.split('').reverse()
//   console.log(noSpaces.toLowerCase())
//   console.log(reversed.join(''))
//   if (noSpaces.toLowerCase() === reversed.join('').toLowerCase()) {
//     return true
//   } else {
//     return false
//   }
// }


///////////
// Refactor
///////////
function palindrome(str) {
  let trimmed = str.replace(/[^A-Z0-9]/ig, '').toLowerCase()
  return trimmed === trimmed.split('').reverse().join('')
}

// console.log(palindrome("eye")) // should return a boolean.
// console.log(palindrome("eye")) // should return true.
console.log(palindrome("_eye")) // should return true.
// console.log(palindrome("race car")) // should return true.
// console.log(palindrome("not a palindrome")) // should return false.
console.log(palindrome("A man, a plan, a canal. Panama")) // should return true.
// console.log(palindrome("never odd or even")) // should return true.
// console.log(palindrome("nope")) // should return false.
// console.log(palindrome("almostomla")) // should return false.
// console.log(palindrome("My age is 0, 0 si ega ym.")) // should return true.
// console.log(palindrome("1 eye for of 1 eye.")) // should return false.
// console.log(palindrome("0_0 (: /-\ :) 0-0")) // should return true.
// console.log(palindrome("five|_/|four")) // should return false.