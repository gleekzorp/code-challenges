// Create a function that accepts a int
// We could have a check for the argument to make sure its positive
// Create a variable called result and make it equal to the argument
// Create a loop that will start at the given number minus 1 and decrement by 1
// The loop will finish at 1
// During the loop multiply the result by the current itteration number
// example: result = 5 itterator = 4 duringLoop = 5 * 4
// exampleSecondPartOfLoop: 20 * 3
// return result
const num = 5;


// function factorialNumber(num) {
//   let result = num
//   for (let i = num - 1; i >= 1; i--) {
//     result *= i
//   }
//   return result
// }

// console.log(factorialNumber(num))



// Teacher Solution
// function factorialNumber(num) {
//   let sum = 1;
  
//   for(let i = 1; i <= num; i++) {
//       // sum = sum * i;
//       sum *= i;
//   }
  
//   return sum;
// }

// console.log(factorialNumber(num))



// Recursion
function factorialNumber(num) {
  if (num === 1) {
    return num
  }
  
  return num * factorialNumber(num - 1);
}

console.log(factorialNumber(num))