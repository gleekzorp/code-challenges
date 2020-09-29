// Create a function that accepts two arguments greater than 0
// One is the divisor and the other is the bound
// Create a loop that starts at the bound
// modulus the current number by the divisor if the remainder is 0 return that number
const divisor = 3;
const bound = 10;


// function maxMultiple(divisor, bound) {
//   for (let i = bound; i > 0; i--) {
//     if (i % divisor === 0) {
//       return i
//     }
//   }
// }
// console.log(maxMultiple(3, 11))


// Solution from teacher
// function maxMultiple(divisor, bound) {
//   const remainder = bound % divisor;
  
//   return bound - remainder;
// }
// console.log(maxMultiple(3, 11))


// Recursion
function maxMultiple(divisor, bound) {
  if (bound % divisor === 0) {
    return bound
  }
  return maxMultiple(divisor, (bound - 1))
}
console.log(maxMultiple(divisor, bound))


