// Create a function that accepts an array of strings
// Create a new variable and assign it an array
// Assign that variable the first value in the array
// Loop through that array
// if current item len is greater than an item in new variable
// remove all and push this item in
// if current item len is equal to an item in new variable
// push item in
// else continue

const strings = ["aba", "aa", "ad", "vcd", "aba", "a"];

// function allLongestStrings(array) {
//   let largest = [array[0]]
//   for (let i = 1; i < array.length; i++) {
//     if (array[i].length > largest[0].length) {
//       largest = []
//       largest.push(array[i])
//     } else if (array[i].length === largest[0].length) {
//       largest.push(array[i])
//     }
//   }
//   return largest
// }
// console.log(allLongestStrings(strings))




///////////////////
// teacher solution
///////////////////
// function allLongestStrings(array) {
//   let longestWords = []
//   let longestLength = 0

//   for (let word of array) {
//     longestLength = word.length > longestLength ? word.length : longestLength
//   }

//   for (let word of array) {
//     if (word.length === longestLength) {
//       longestWords.push(word)
//     }
//   }
//   return longestWords
// }
// console.log(allLongestStrings(strings))




///////////////////////////////////////////
// reduce/filter challenge given by teacher
///////////////////////////////////////////
function allLongestStrings(array) {
  let longestLength = array.reduce((total, word) => {
    return word.length > total ? word.length : total
  }, 0)

  return array.filter((word) => {
    return word.length === longestLength
  })
}
console.log(allLongestStrings(strings))
