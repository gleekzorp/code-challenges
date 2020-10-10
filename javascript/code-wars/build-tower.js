// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/solutions/javascript

// function towerBuilder(nFloors) {
//   let result = []
//   let stars = "*"
//   for (let i = 1; i < nFloors; i++) {
//     stars += "**"
//   }

//   for (let i = 0; i < nFloors; i++) {
//     if (i === 0) {
//       result.unshift(stars)
//     } else {
//       stars = stars.slice(0,-2)
//       result.unshift(" ".repeat(i) + stars + " ".repeat(i))
//     }
//   }
//   return result
// }





/////////
// repeat
/////////
// function towerBuilder(nFloors) {
//   if (nFloors === 1) return ["*"]

//   let result = []
//   let stars = "*" + "**".repeat(nFloors)
//   for (let i = 0; i <= nFloors; i++) {
//     if (i === 0) {
//       result.unshift(stars)
//     } else {
//       stars = stars.slice(0,-2)
//       result.unshift(" ".repeat(i) + stars + " ".repeat(i))
//     }
//   }
//   return result
// }




/////////
// repeat
/////////
// function towerBuilder(nFloors) {
//   let result = []

//   for (let i = 0; i < nFloors; i++) {
//     let stars = "*".repeat((i*2) + 1)
//     result.push(" ".repeat(nFloors - i - 1) + stars + " ".repeat(nFloors - i - 1))
//   }
//   return result
// }




///////
// map
//////
// function towerBuilder(nFloors) {
//   let result = [...Array(nFloors)].map((_, i) => {
//     let stars = "*".repeat((i*2) + 1)
//     return " ".repeat(nFloors - i - 1) + stars + " ".repeat(nFloors - i - 1)
//   })
//   return result
// }

console.log(towerBuilder(1))
console.log(towerBuilder(2))
console.log(towerBuilder(3))
// console.log(towerBuilder(4))
// console.log(towerBuilder(5))
// console.log(towerBuilder(6))
// console.log(towerBuilder(7))