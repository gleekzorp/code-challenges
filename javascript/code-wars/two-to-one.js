// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

/////////
// Pseudo
/////////
// Combine the strings
// Sort the string
//   - sort is an array method so you will have to change data type
// Remove any duplicates
// Return modified string


/////////////////////////////
// First attempt with filter
////////////////////////////
// function longest(s1, s2) {
//   // your code
//   const combinedString = s1 + s2
//   return combinedString.split('').sort().filter((char, idx, arr) => {
//     return char !== arr[idx + 1]
//   }).join('')
// }

// console.log(longest("aretheyhere", "yestheyarehere")) // "aehrsty"
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")) // "abcdefghilnoprstu"
// console.log(longest("inmanylanguages", "theresapairoffunctions")) // "acefghilmnoprstuy"





////////////
// One line
///////////
// const longest = (s1, s2) => (s1 + s2).split('').sort().filter((char, idx, arr) => char !== arr[idx + 1]).join('')

// console.log(longest("aretheyhere", "yestheyarehere")) // "aehrsty"
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")) // "abcdefghilnoprstu"
// console.log(longest("inmanylanguages", "theresapairoffunctions")) // "acefghilmnoprstuy"





///////////////////////////////////////////////////////////////////
// Broken out further without filter and uses traditional for loop
//////////////////////////////////////////////////////////////////
// function longest(s1, s2) {
//   const combinedString = s1 + s2
//   const sortedString = combinedString.split("").sort()
//   let result = ''
//   for (let i = 0; i < sortedString.length; i++) {
//     if (sortedString[i] !== sortedString[i + 1]) {
//       result += sortedString[i]
//     }
//   }
//   return result
// }

// console.log(longest("aretheyhere", "yestheyarehere")) // "aehrsty"
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")) // "abcdefghilnoprstu"
// console.log(longest("inmanylanguages", "theresapairoffunctions")) // "acefghilmnoprstuy"





////////////////////////////////////////////////////////////////////////////////////////
// Using Set
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
////////////////////////////////////////////////////////////////////////////////////////
function longest(s1, s2) {
  // const stringSet = new Set(s1 + s2)
  return [...new Set(s1 + s2)].sort().join('')
}

console.log(longest("aretheyhere", "yestheyarehere")) // "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")) // "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions")) // "acefghilmnoprstuy"