// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

// if given 1, 3 // should return 6
// 1 % 1 === 0 ? yes.. continue
// 1 % 2 === 0 ? no... break (remainder 1)
// 2 % 1 === 0 ? yes.. continue
// 2 % 2 === 0 ? yes.. continue
// 2 % 3 === 0 ? no... break (remainder 2)
// 3 % 1 === 0 ? yes.. continue
// 3 % 2 === 0 ? no... break (remainder 1)
// Continue until you can do the whole loop and that would be your number
// 6 % 1 === 0 ? yes.. continue
// 6 % 2 === 0 ? yes.. continue
// 6 % 3 === 0 ? yes.. continue .... hey we found our number


// 2, 10 // should return 2520.
// 2 % 2



function smallestCommons(arr) {
  let sortedArray = arr.sort((a,b) => a-b)
  let result = sortedArray[0]
  while (true) {
    let fullRotation = false
    for (let i = sortedArray[0]; i <= sortedArray[1]; i++) {

      if (result % i !== 0) {
        fullRotation = false
        break
      } else {
        fullRotation = true
      }
    }
    if (fullRotation) {
      return result
    }
    result += 1
  }
}


// function smallestCommons(arr) {
//   let sortedArray = arr.sort((a,b) => a-b)
//   return sortedArray
// }

// console.log(smallestCommons([1, 3])) // should return 6.
// console.log(smallestCommons([1, 5])) // should return a number.
// console.log(smallestCommons([1, 5])) // should return 60.
// console.log(smallestCommons([5, 1])) // should return 60.
// console.log(smallestCommons([2, 10])) // should return 2520.
// console.log(smallestCommons([1, 13])) // should return 360360.
// console.log(smallestCommons([23, 18])) // should return 6056820.


// TODO:  This will pass on the freeCodeCamp tests but it will break on this one
// console.log(smallestCommons([1, 30])) // should return 6056820.