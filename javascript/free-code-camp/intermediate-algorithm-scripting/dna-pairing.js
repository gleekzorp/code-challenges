// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing


////////////////
// Working Code!
////////////////
// function pairElement(dna) {
//   let result = []
//   for (let char of dna) {
//     switch (char) {
//       case 'A':
//         result.push(['A', 'T'])
//         break;
//       case 'T':
//         result.push(['T', 'A'])
//         break;
//       case 'C':
//         result.push(['C', 'G'])
//         break;
//       case 'G':
//         result.push(['G', 'C'])
//         break;
//     }
//   }
//   return result
// }

// console.log(pairElement("ATCGA")) // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// console.log(pairElement("TTGAG")) // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// console.log(pairElement("CTCTA")) // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].





///////////////////////////////
// Working with a lookUpObject
//////////////////////////////
// function pairElement(dna) {
//   let lookUpObject = {
//     'A': ['A', 'T'],
//     'T': ['T', 'A'],
//     'C': ['C', 'G'],
//     'G': ['G', 'C']
//   }
//   let result = []
//   for (let char of dna) {
//     result.push(lookUpObject[char])
//   }
//   return result
// }

// console.log(pairElement("ATCGA")) // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// console.log(pairElement("TTGAG")) // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// console.log(pairElement("CTCTA")) // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].




///////////////////////////////////////
// Working with a lookUpObject and Map
//////////////////////////////////////
// function pairElement(dna) {
//   let lookUpObject = {
//     'A': ['A', 'T'],
//     'T': ['T', 'A'],
//     'C': ['C', 'G'],
//     'G': ['G', 'C']
//   }
//   return dna.split("").map(item => lookUpObject[item])
// }

// console.log(pairElement("ATCGA")) // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// console.log(pairElement("TTGAG")) // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// console.log(pairElement("CTCTA")) // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].



///////////////////////////////////////////////////////////////
// Working with a lookUpObject and String Prototype of MapChar
//////////////////////////////////////////////////////////////
String.prototype.mapChar = function(func) {
  return this.split("").map(func)
}

function pairElement(dna) {
  let lookUpObject = {
    'A': ['A', 'T'],
    'T': ['T', 'A'],
    'C': ['C', 'G'],
    'G': ['G', 'C']
  }
  return dna.mapChar((item) => lookUpObject[item])
}

console.log(pairElement("ATCGA")) // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
console.log(pairElement("TTGAG")) // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
console.log(pairElement("CTCTA")) // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
