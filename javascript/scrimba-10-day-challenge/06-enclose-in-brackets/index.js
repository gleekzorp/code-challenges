const str = "Yo";

////////////
// Option 1
///////////
// function encloseInBrackets(str) {
//   return '(' + str + ')'
// }
// console.log(encloseInBrackets(str))


////////////
// Option 2
///////////
// function encloseInBrackets(str) {
//   return `(${str})`
// }
// console.log(encloseInBrackets(str))


////////////
// Option 3
///////////
// function encloseInBrackets(str) {
//   let newString = str.split('')
//   newString.unshift('(')
//   newString.push(')')
//   return newString.join('')
// }
// console.log(encloseInBrackets(str))


////////////
// Option 4
///////////
function encloseInBrackets(str) {
  return '('.concat(str, ')')
}
console.log(encloseInBrackets(str))