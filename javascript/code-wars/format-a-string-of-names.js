// Format a string of names like 'Bart, Lisa & Maggie'.

// https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript
// https://www.codewars.com/kata/53368a47e38700bd8300030d/solutions/javascript

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

//////////
// forEach
//////////
// function list(names){
//   if (names.length === 0) return ''
//   if (names.length > 1) {
//     let result = ""
//     names.forEach((item, idx) => {
//       if (idx == (names.length - 2)) {
//         result += `${item.name} & `
//       } else if (idx == (names.length - 1)) {
//         result += `${item.name}`
//       } else {
//         result += `${item.name}, `
//       }
//     })
//     return result
//   }
//   return names[0].name
// }


//////////
// Reduce
/////////
function list(names){
  return names.reduce((prev, current, idx) => {
    if (idx === 0) {
      return current.name
    } else if (idx === (names.length - 1)) {
      return `${prev} & ${current.name}`
    } else {
      return `${prev}, ${current.name}`
    }
  }, "")
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))
// // returns 'Bart, Lisa & Maggie'

console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]))
// // returns 'Bart & Lisa'

console.log(list([ {name: 'Bart'} ]))
// // returns 'Bart'

console.log(list([]))
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.


const colors = ['yellow', 'red']

colors.splice(1, 0, 'blue')
console.log(colors)