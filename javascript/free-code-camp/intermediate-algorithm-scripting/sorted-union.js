// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union

////////////
// original
///////////
// function uniteUnique(...arr) {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       console.log(arr[i][j])
//       if (!result.includes(arr[i][j])) {
//         result.push(arr[i][j])
//       }
//     }
//   }
//   return result
// }




//////////
// for of
/////////
// function uniteUnique(...arr) {
//   let result = []
//   for (let item of arr) {
//     for (let j = 0; j < item.length; j++) {
//       if (!result.includes(item[j])) {
//         result.push(item[j])
//       }
//     }
//   }
//   return result
// }


/////////////////////////
// for of for both loops
////////////////////////
// function uniteUnique(...arr) {
//   let result = []
//   for (let numbers of arr) {
//     for (let num of numbers) {
//       if (!result.includes(num)) {
//         result.push(num)
//       }
//     }
//   }
//   return result
// }




///////
// Set
//////
function uniteUnique(...arr) {
  let result = new Set()
  for (let numbers of arr) {
    for (let num of numbers) {
      result.add(num)
    }
  }
  return result
}




////////////
// Michaels
///////////
// function uniteUnique(arr) {
//   let result = [...arguments[0]]
//   for (let i = 1; i < arguments.length; i++) {
//     for (let j = 0; j < arguments[i].length; j++) {
//       if (!result.includes(arguments[i][j])) {
//         result.push(arguments[i][j])
//       }
//     }
//   }
//   return result;
// }
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


console.log(uniteUnique([1, 2, 3], [5, 2, 1])) // should return [1, 2, 3, 5].
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])) // should return [1, 3, 2, 5, 4].
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])) // should return [1, 2, 3, 5, 4, 6, 7, 8].