// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
// https://www.codewars.com/kata/5208f99aee097e6552000148/solutions/javascript


// complete the function
// function solution(string) {
//   return string.replace(/([a-z])([A-Z])/g, '$1 $2')
// }

// OR
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}
console.log(solution("camelCasingOk")) // "camel Casing"