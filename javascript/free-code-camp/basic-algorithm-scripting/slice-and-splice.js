// Get the first half
// Get the second half
// push/spread the arr1 to the first half
// return first + second

function frankenSplice(arr1, arr2, n) {
  let firstHalf = arr2.slice(0, n)
  let secondHalf = arr2.slice(n)
  firstHalf.push(...arr1)
  return [...firstHalf, ...secondHalf];
}

const firstArray = [1, 2, 3]
const secondArray = [4,5,6]
console.log(frankenSplice(firstArray, secondArray, 1));
console.log(secondArray)



//////////////////////////////////////
// Cleaner way of spread/splice/slice
/////////////////////////////////////
// function frankenSplice(arr1, arr2, n) {
//   // It's alive. It's alive!
//   let localArr = arr2.slice();
//   localArr.splice(n, 0, ...arr1);
//   return localArr;
// }
// const firstArray = [1, 2, 3]
// const secondArray = [4,5,6]
// console.log(frankenSplice(firstArray, secondArray, 1))





/////////////////////
// Iterable approach
////////////////////
// function frankenSplice(arr1, arr2, n) {
//   // It's alive. It's alive!
//   let localArray = arr2.slice();
//   for (let i = 0; i < arr1.length; i++) {
//     localArray.splice(n, 0, arr1[i]);
//     n++;
//   }
//   return localArray;
// }

// const firstArray = [1, 2, 3]
// const secondArray = [4,5,6]
// console.log(frankenSplice(firstArray, secondArray, 1));