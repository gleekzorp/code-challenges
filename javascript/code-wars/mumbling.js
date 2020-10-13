// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/solutions/javascript

// function accum(s) {
//   // your code
//   let result = ""
//   for (let i = 0; i < s.length; i++) {
//     let current = ""
//     for (let j = 0; j <= i; j++) {
//       if (j === 0) {
//         current = current + s[i].toUpperCase()
//       } else {
//         current = current + s[i].toLowerCase()
//       }
//     }
//     result = result + current
//   }
//   return result.replace(/\B([A-Z])/g, '-$1')
//   // return result.replace(/([A-Z])/g, ' $1').trim().replace(/\s/g, '-')
// }




///////////////
// Refactor #1
//////////////
function accum(s) {
  // your code
  return s.split("").map((item, idx) => {
    return item.toUpperCase() + item.toLowerCase().repeat(idx)
  }).join('-')
}

console.log(accum("abcd")) // -> "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")) // -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")) // -> "C-Ww-Aaa-Tttt"