// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-steamroller/16079

// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
//////////////
// While Loop
////////////
// function steamrollArray(arr) {
//   let stack = [...arr]
//   let result = []
//   while (stack.length) {
//     let next = stack.pop()
//     if (Array.isArray(next)) {
//       stack.push(...next)
//     } else {
//       result.unshift(next)
//     }
//   }
//   return result
// }






/////////////
// Recursion
////////////
function steamrollArray(arr) {
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}





////////////////////////////////
// Michael and Dan AwesomeLand
////// no ////////////////////
/////////////////////////////
// function steamrollArray(arr) {
//   // console.log(arr)
//   const result = []
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       for (let j = 0; j < arr[i].length; j++) {
//         if (Array.isArray(arr[i][j])) {
//           for (let f = 0; f < arr[i][j].length; f++) {
//             if (Array.isArray(arr[i][j][f])) {
//               for (let d = 0; d < arr[i][j][f].length; d++) {
//                 result.push(arr[i][j][f][d])
//               }
//             } else {
//               result.push(arr[i][j][f])
//             }
//           }
//         } else {
//           result.push(arr[i][j])
//         }
//       }
//     } else {
//       result.push(arr[i])
//     }
//   }
//   return result;
// }
// steamrollArray([1, [2], [3, [[4]]]]);

// console.log(steamrollArray([1, [2], [3, [[4]]]]));
// console.log(steamrollArray([[["a"]], [["b"]]])) // should return ["a", "b"].
// console.log(steamrollArray([1, [2], [3, [[4]]]])) // should return [1, 2, 3, 4].
// console.log(steamrollArray([1, [], [3, [[4]]]])) // should return [1, 3, 4].
// console.log(steamrollArray([1, {}, [3, [[4]]]])) // should return [1, {}, 3, 4].
