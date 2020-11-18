// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional


// make function sum two numbers
// make function return a function
// look into argument list and do a check if len < 2 return the function
// function addTogether() {
//   let firstNum = arguments[0]
//   let secondNum = arguments[1]
//   if (!Number.isInteger(firstNum)) return undefined
//   if (arguments.length < 2) {
//     return function(num) {
//       if (!Number.isInteger(num)) return undefined
//       return num + firstNum
//     }
//   } else {
//     if (!Number.isInteger(secondNum)) return undefined
//     return firstNum + arguments[1]
//   }
// }

// let test = addTogether(1)
// console.log(test)
// console.log(test(2))
// let test = addTogether(2)
// console.log(test([3]))
// console.log([3] + 2)
// console.log(Number.isInteger([3]))




///////////
// Refactor
///////////
// TODO:  keep refactoring
function addTogether() {
  let firstNum = arguments[0]
  let secondNum = arguments[1]
  function sum(numOne, numTwo=secondNum) {
    if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) return undefined
    return numOne + numTwo
  }
  if (arguments.length < 2 && Number.isInteger(firstNum)) {
    return sum
  } else {
    return sum(firstNum, secondNum)
  }
}

console.log(addTogether(2, 3)) // should return 5.
// console.log(addTogether(23, 30)) // should return 53.
console.log(addTogether(5)(7)) // should return 12.
console.log(addTogether("http://bit.ly/IqT6zt")) // should return undefined.
// console.log(addTogether(2, "3")) // should return undefined.
// console.log(addTogether(2)([3])) // should return undefined.