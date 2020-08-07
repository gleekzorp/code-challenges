// create a function that accept a number as an argument
// if 1 => 9
// if 2 => 99
// if 3 => 999
// return 9 based on number
const num = 2;



// function largestNumber(num) {
//   let result = ''
//   for (let i = 0; i < num; i++) {
//     result += '9'
//   }
//   return parseInt(result)
// }
// console.log(largestNumber(3))


// Repeat/Arrow/OneLiner
const largestNumber = num => parseInt('9'.repeat(num))
console.log(largestNumber(3))