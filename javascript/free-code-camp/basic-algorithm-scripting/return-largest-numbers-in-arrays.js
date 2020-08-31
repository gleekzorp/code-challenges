// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays
// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.


// Create a new empty array called result
// Loop through outer loop
// Loop through each inner loop
  // First number in that inner loop is current largest number
  // If next number is larger then current replace
  // End of loop push to result array
  // Continue this until all done
// return result

function largestOfFour(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    let currentLargestNumber = arr[i][0]
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j])
      if (arr[i][j] > currentLargestNumber) {
        currentLargestNumber = arr[i][j]
      }
    }
    result.push(currentLargestNumber)
  }

  return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));




///////////
// forEach
//////////
// function largestOfFour(arr) {
//   let result = []
//   arr.forEach((item) => {
//     console.log(item)
//     let currentLargestNumber = item[0]
//     item.forEach((num) => {
//       console.log(num)
//       if (num > currentLargestNumber) {
//         currentLargestNumber = num
//       }
//     })
//     result.push(currentLargestNumber)
//   })

//   return result;
// }

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));





///////////////
// Map, Reduce
//////////////
// function largestOfFour(arr) {
//   let result = arr.map((item) => {
//     console.log(item)
//     return item.reduce((prev, current) => {
//       if (prev > current) {
//         return prev
//       } else {
//         return current
//       }
//     })
//   })

//   return result;
// }

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));





////////////////////////
// Map, Reduce, Ternary
///////////////////////
// function largestOfFour(arr) {
//   let result = arr.map((item) => {
//     console.log(item)
//     return item.reduce((prev, current) => {
//       return prev > current ? prev : current
//     })
//   })

//   return result;
// }

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));





////////////////////
// Map, Max, Spread
///////////////////
// function largestOfFour(arr) {
//   let result = arr.map((item) => {
//     console.log(item)
//     return Math.max(...item)
//   })
//   return result;
// }

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));