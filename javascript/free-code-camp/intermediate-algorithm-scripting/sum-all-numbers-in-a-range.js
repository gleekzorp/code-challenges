// create a range from the lowest to biggest
// Find out which is bigger
// loop through and add each number to the current total


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




function sumAll(arr) {
  let max = Math.max(...arr)
  let min = Math.min(...arr)
  let result = 0
  for (let i = min; i <= max; i++){
    result += i
  }

  return result
}

console.log(sumAll([4, 1]));
console.log(sumAll([1, 4]));



////////////
// Go Crazy
///////////
// const sumAll = (arr) => [...Array(Math.max(...arr)).keys()].map(i => i + 1).reduce((total,item) => total + item)

// console.log(sumAll([4, 1]));
// console.log(sumAll([1, 4]));
// console.log(sumAll([5, 10]));

// newArray = new Array(Math.max([4,1])).fill(Math.max([4,1], Math.min([4,1])))
// newArray = new Array(Math.max([4,1]))
// currentArray = [4,1]
// newArray = Math.max(...currentArray)

// let max = Math.max(...currentArray)
// let min = Math.min(...currentArray)
// let newArray = [...Array(max).keys()].map(i => i + 1).reduce((total,item) => total + item)
// let newArray = Array.from(Array(max).keys()).map(i => i + 1)
// console.log(newArray)

// console.log([4,1].sort().reduce((total,item) => total + item))