// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

// [1, 2, 3, 4] // return [3,4]
// loop through array
// 1 -> function(n) {return n >= 3;} // false
// remove 1
// 2 -> function(n) {return n >= 3;} // false
// remove 2
// 3 -> function(n) {return n >= 3;} // true
// return remaining array [3,4]

///////////////////////
// Traditional For Loop
///////////////////////
// function dropElements(arr, func) {
//   let result = [...arr];
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       return result;
//     } else {
//       result.splice(0, 1);
//     }
//   }
//   return result;
// }





///////////////
// For Of Loop
//////////////
// function dropElements(arr, func) {
//   let result = [...arr]
//   for (let number of arr) {
//     if (func(number)) {
//       return result
//     } else {
//       result.splice(0, 1)
//     }
//   }
//   return result;
// }




///////////////
// For in Loop
//////////////
// function dropElements(arr, func) {
//   let result = [...arr]
//   for (let i in arr) {
//     if (func(arr[+i])) {
//       return result
//     } else {
//       result.splice(0, 1)
//     }
//   }
//   return result;
// }





//////////
// Filter
/////////
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-drop-it/16010/12?u=gleekzorp
// function dropElements(arr, func, s = false) {
//   return arr.filter((num) => {
//     if (func(num)) {
//       s = true
//       return s
//     } else {
//       return s
//     }
//   });
// }




/////////////
// Recursion
////////////
function dropElements(arr, func) {
  if (func(arr[0]) || arr.length === 0) {
    return arr
  }
  arr.splice(0, 1);
  return dropElements(arr, func);
}

// console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})) // should return [3, 4].
// console.log(dropElements([0, 1, 0, 1], function (n) {return n === 1;})); // should return [1, 0, 1].
// console.log(dropElements([1, 2, 3], function(n) {return n > 0;})) // should return [1, 2, 3].
// console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;})) // should return [].
// console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})) // should return [7, 4].
// console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})) // should return [3, 9, 2].
