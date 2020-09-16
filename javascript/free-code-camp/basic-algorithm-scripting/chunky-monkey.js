// create a variable called result and assign it an empty array
// create a new variable called current and assign it an empty array
// loop through the arr until size
// shift(item[i]) to the current empty array
// push current to the result
// reset current
// return result

// function chunkArrayInGroups(arr, size) {
//   let result = []
//   let current = []
//   let length = arr.length
//   for (let j = 0; j < length / size; j++) {
//     for (let i = 0; i < size; i++) {
//       current.push(arr.shift())
//     }
//     result.push(current)
//     current = []
//   }
//   return result;
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));



// function chunkArrayInGroups(arr, size) {
//   let result = []
//   let length = arr.length
//   for (let j = 0; j < length / size; j++) {
//     result.push(arr.splice(0, size))
//   }
//   return result;
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));

let myArray = [1,2,3]
console.log(myArray.splice(0, 2))
console.log(myArray)