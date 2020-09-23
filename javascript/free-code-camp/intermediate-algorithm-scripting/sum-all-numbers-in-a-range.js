// create a range from the lowest to biggest
// Find out which is bigger
// loop through and add each number to the current total

/////////////
// Attempt 1
////////////
// function sumAll(arr) {
//   let result = 0
//   if (arr[0] > arr[1]) {
//     for (let i = arr[1]; i <= arr[0]; i++){
//       result += i
//     }
//   } else {
//     for (let i = arr[0]; i <= arr[1]; i++){
//       result += i
//     }
//   }
//   return result
// }

// console.log(sumAll([4, 1]));
// console.log(sumAll([1, 4]));


//////////////
// Refactor 1
/////////////
// function sumAll(arr) {
//   let max = Math.max(...arr)
//   let min = Math.min(...arr)
//   let result = 0
//   for (let i = min; i <= max; i++){
//     result += i
//   }

//   return result
// }

// console.log(sumAll([4, 1]));
// console.log(sumAll([1, 4]));



////////////////////////
// Using my npm package
///////////////////////
// https://www.npmjs.com/package/ranges-numbers-alphabets
function sumAll(arr) {
  let result = range(Math.min(...arr), Math.max(...arr))
  return result.reduce((total, num) => total + num);
}

const range = (start, stop, step = 1) => {
  let result = []
  for (let i = start; i <= stop; i += step) {
    result.push(i)
  }
  return result
}


console.log(sumAll([1, 4]));
