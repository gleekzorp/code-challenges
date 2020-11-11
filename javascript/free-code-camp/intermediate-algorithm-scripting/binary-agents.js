// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-binary-agents/14273

///////////////////////////////////////////////////////////////////////////////////////////////
// Video on Binary
// https://www.youtube.com/watch?v=8WW9vdd421s&list=PLcLMSci1ZoPs6jV0O3LBJwChjRon3lE1F&index=12
///////////////////////////////////////////////////////////////////////////////////////////////

// 723
// 10 to the 0 = 1's
//    - Anything to the zero power is 1
//       - 1 * 3 = 3
// 10 to the 1 = 10's
//    - 1 * 10 = 10
//       - 10 * 2 = 20
// 10 to the 2 = 100's
//    - 1 * 10 * 10
//       - 100 * 7 = 700
// 700 + 20 + 3 = 723

// 2 to the whatever power

// 0
// 1 = 1 * 2 to the 0 = 1 * 1
// 2
// - 10 binary
//   first = 0 * 1 = 0
//   second = 1 * 2 = 2
//     = 1 * (2 to the 1)
//   0 + 2

// 3
// - 11 binary
//   first = 1 * 1 = 1
//   second = 1 * 2 = 2

// 4
// - 100
//   first = 0 * 1 = 0
//     - 0 * (2 to the 0)
//   second = 0 * 2 = 0
//     - 0 * (2 to the 1)
//   third = 1 * 4 = 4
//     - 0 * (2 to the 2)
//   first + second + third = 4

// 11
// 101
// 111
// 1100

// 0 = 0
// 1 = 1
// 10 = 2
// 11 = 3
// 100 = 4
// 101 = 5
// 110 = 6

// 10000 = 16
// 1 * 2 * 2 * 2 * 2


///////////////////
// First Completion
///////////////////
// console.log("a".charCodeAt())
// console.log(String.fromCharCode(97))

// let string = '01000001'
// 1
// let pow = 0
// for (let i = string.length - 1; i >= 0; i--) {
//   console.log(parseInt(string[i]) * (Math.pow(2, pow)))
//   pow++
// }

// function binaryAgent(str) {
//   let split = str.split(" ")
//   let result = split.map(item => {
//     let char = 0
//     let pow = 0
//     for (let i = item.length - 1; i >= 0; i--) {
//       char += parseInt(item[i]) * (Math.pow(2, pow))
//       pow++
//     }
//     return String.fromCharCode(char)
//   })
//   return result.join('');
// }





///////////////////////////
// First Complete Refactor
//////////////////////////
// function binaryAgent(str) {
//   return str.split(" ").map(item => {
//     let char = 0
//     let pow = 0
//     for (let i = item.length - 1; i >= 0; i--) {
//       char += parseInt(item[i]) * Math.pow(2, pow)
//       pow++
//     }
//     return String.fromCharCode(char)
//   }).join("")
// }





///////////////////////////
// Second Complete Refactor
//////////////////////////
function binaryAgent(str) {
  return str.split(" ").map(item => {
    return String.fromCharCode(parseInt(item, 2))
  }).join("")
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")) // should return "Aren't bonfires fun!?"
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")) // should return "I love FreeCodeCamp!"





//////////////////////////////////////////////////////
// Works with converting one character to 8bit binary
/////////////////////////////////////////////////////
// function binaryAgentReverse(str) {
//   let charNum = str.charCodeAt()
//   let result = []
//   let current = charNum
//   for (let i = 8; i > 0; i--) {
//     result.unshift(current % 2)
//     current = Math.floor(current / 2)
//   }
//   return result.join("")
// }

// console.log(binaryAgentReverse('A')) // 65 -> 01000001





///////////////////////////////////////////////////////////
// Works with converting an entire sentance to 8bit binary
/////////////////////////////////////////////////////////
// function binaryAgentReverse(str) {
//   let split = str.split("")
//   return split.map(char => {
//     let charNum = char.charCodeAt()
//     let result = []
//     let current = charNum
//     for (let i = 8; i > 0; i--) {
//       result.unshift(current % 2)
//       current = Math.floor(current / 2)
//     }
//     return result.join("")
//   }).join(" ")
// }

// console.log(binaryAgentReverse("Are")) //  "01000001 01110010 01100101"
// console.log(binaryAgentReverse("Aren't bonfires fun!?")) // "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
