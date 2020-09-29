// Create a function that accepts 3 arguments
// array of numbers
// item to replace
// item to substitue that replaced item with
// loop through array
// if element is item to replace
// replace that item with the replace item
// else continue
const array = [1, 2, 1];
const elemToReplace = 1;
const substitutionElem = 3;

// forEach
// function arrayReplace(array, elemToReplace, substitutionElem) {
//   let replacedArray = array
//   array.forEach((element, idx) => {
//     if (element === elemToReplace) {
//       replacedArray[idx] = substitutionElem
//     }
//   });
//   return replacedArray
// }
// console.log(arrayReplace(array, elemToReplace, substitutionElem))




// map
// function arrayReplace(array, elemToReplace, substitutionElem) {
//   return array.map(element => {
//     if (element === elemToReplace) {
//       return substitutionElem
//     } else {
//       return element
//     }
//   });
// }
// console.log(arrayReplace(array, elemToReplace, substitutionElem))





// Map/ternary
function arrayReplace(array, elemToReplace, substitutionElem) {
  return array.map(element => element === elemToReplace ? substitutionElem : element);
}
console.log(arrayReplace(array, elemToReplace, substitutionElem))




// Teacher solution
// function arrayReplace(array, elemToReplace, substitutionElem) {
//   for (let i = 0; i < array.length; i++) {
//     if(array[i] === elemToReplace) {
//       array[i] = substitutionElem;
//     }
//   }
  
//   return array;
// }
// console.log(arrayReplace(array, elemToReplace, substitutionElem))