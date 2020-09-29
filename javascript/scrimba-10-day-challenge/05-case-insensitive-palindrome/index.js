// Create a function that accepts a string as an argument
// Convert string to lowercase
// Check if string is equal to string in reverse
// Looks like strings don't have reverse but arrays do
// Convert to array, reverse and back to string or check array against array
const correctStr = 'AaBaa';
const wrongStr = 'abac';

// function caseInsensitivePalindrome(str) {
//   // console.log(str.toLowerCase())
//   // console.log(str.toLowerCase().split('').reverse().join(''))
//   const lowerCaseStr = str.toLowerCase()
//   const reveresedStr = lowerCaseStr.split('').reverse().join('')
//   if (lowerCaseStr === reveresedStr) {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(caseInsensitivePalindrome(correctStr))
// console.log(caseInsensitivePalindrome(wrongStr))



// Teacher challenged us to do it without split, reverse and join
// function caseInsensitivePalindrome(str) {
//   const lowerCaseStr = str.toLowerCase() 
//   for (let i = 0; i < lowerCaseStr.length; i ++) {
//     if (lowerCaseStr[i] != lowerCaseStr[(lowerCaseStr.length - 1) - i]) {
//       return false
//     }
//   }
//   return true
// }
// console.log(caseInsensitivePalindrome(correctStr))
// console.log(caseInsensitivePalindrome(wrongStr))






// Teacher First Solution
// function caseInsensitivePalindrome(str) {
//   const caselessStr = str.toLowerCase();
//   const reversedCaselessStr = caselessStr.split('').reverse().join(''); 
  
//   return caselessStr === reversedCaselessStr;
// }
// console.log(caseInsensitivePalindrome(correctStr))
// console.log(caseInsensitivePalindrome(wrongStr))


// Teacher Second Solution
function caseInsensitivePalindrome(str) {
  const caselessStr = str.toLowerCase();
  let reversedCaselessStr = '';

  for (let i = caselessStr.length - 1; i >= 0; i--) {
    reversedCaselessStr += caselessStr[i]
  }
  
  return caselessStr === reversedCaselessStr;
}
console.log(caseInsensitivePalindrome(correctStr))
console.log(caseInsensitivePalindrome(wrongStr))