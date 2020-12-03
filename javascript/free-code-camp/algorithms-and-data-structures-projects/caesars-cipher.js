// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

// console.log('A'.charCodeAt())
// console.log(String.fromCharCode(65 + 13))

// range of 65-90 or create a list of alphabet
// 65 - 77 is ok
// 78 - 90 not good


/////////////////
// First Attempt
////////////////
// function rot13(str) {
//   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   let result = ""
//   for (let char of str) {
//     if (characters.includes(char)) {
//       let charCode = char.charCodeAt()
//       if (charCode > 77) {
//         result += String.fromCharCode(charCode - 13)
//       } else {
//         result += String.fromCharCode(charCode + 13)
//       }
//     } else {
//       result += char
//     }
//   }
//   return result;
// }





//////////////////////////
// First Attempt Refactor
/////////////////////////
function rot13(str) {
  let result = ""
  for (let char of str) {
    let charCode = char.charCodeAt()
    if (charCode >= 65 && charCode <= 90) {
      if (charCode > 77) {
        result += String.fromCharCode(charCode - 13)
      } else {
        result += String.fromCharCode(charCode + 13)
      }
    } else {
      result += char
    }
  }
  return result;
}


// console.log(rot13("A")) // should decode to N
// console.log(rot13("M")) // should decode to Z
// console.log(rot13("N")) // should decode to Z
// console.log(rot13("S")) // should decode to Z
// console.log(rot13("Z")) // should decode to Z
console.log(rot13("SERR PBQR PNZC")) // should decode to FREE CODE CAMP
// console.log(rot13("SERR CVMMN!")) // should decode to FREE PIZZA!
// console.log(rot13("SERR YBIR?")) // should decode to FREE LOVE?
// console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")) // should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.