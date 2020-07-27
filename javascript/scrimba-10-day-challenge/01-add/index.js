// Create a function that accepts two params
// Inside that function return paramOne plus paramTwo

function add(numOne, numTwo) {
  return numOne + numTwo
}
console.log(add(1, 2))




// Create a function that accepts any numbers of params
// rest operator for the params section which in essence turns the params into an array
// create a sum variable
// loop through the rest array
// you could use forEach or even reduce might be better
// return the sum


////////////////////////////////////////////////////////////////////////////////////
// Lets first use the spread and console log that spread to make sure it is an array
////////////////////////////////////////////////////////////////////////////////////
// function addAnyAmount(...numbers) {
//   console.log(numbers)
// }
// addAnyAmount(1, 2, 3)


//////////////////////////////////////////////////////////////////////////////////////////////////
// Now that we know we're working with an array of numbers
// Create a sum and assign it to 0, loop through that array and add current number to current sum
//////////////////////////////////////////////////////////////////////////////////////////////////
// return the sum
// function addAnyAmount(...numbers) {
//   let sum = 0
//   numbers.forEach(num => {
//     sum += num
//   })
//   return sum
// }
// console.log(addAnyAmount(1, 2, 3))



///////////////////////////////////////////////////////////////////
// Lets try to use reduce
// make sum = numbers.reduce which will return running total + num
// return sum
///////////////////////////////////////////////////////////////////
function addAnyAmount(...numbers) {
  let sum = numbers.reduce((total, num) => {
    return total + num
  }, 0)
  return sum
}
console.log(addAnyAmount(1, 2, 3))
// or get rid of sum and just return the return value from reduce
function addAnyAmount(...numbers) {
  return numbers.reduce((total, num) => {
    return total + num
  }, 0)
}
console.log(addAnyAmount(1, 2, 3))
