// split first item into individual letters into its own array
// split the second item into individual letters into its own array
// loop through second array
// if (first array doesn't include current letter) return false
// if we made it all the way return true


/////////
// Arrays
/////////
function mutation(arr) {
  let firstArray = arr[0].split("").map(letter => letter.toLowerCase())
  let secondArray = arr[1].split("").map(letter => letter.toLowerCase())
  console.log(firstArray)
  for (let i = 0; i < secondArray.length; i++) {
    if (!firstArray.includes(secondArray[i])) {
      return false
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "hello"]));
console.log(mutation(["Mary", "Aarmy"]));




///////////
// Strings
//////////
// function mutation(arr) {
//   let first = arr[0].toLowerCase()
//   let second = arr[1].toLowerCase()
//   for (let i = 0; i < second.length; i++) {
//     if (!first.includes(second[i])) {
//       return false
//     }
//   }
//   return true;
// }

// console.log(mutation(["hello", "hey"]));
// console.log(mutation(["hello", "hello"]));
// console.log(mutation(["Mary", "Aarmy"]));