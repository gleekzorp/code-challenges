// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

// function rot13(message){
//   Number.prototype.lowAlphaRange = function() {
//     return this > 96 && this < 110 || this > 64 && this < 78
//   }
  
//   Number.prototype.alpha = function() {
//     return this > 96 && this < 123 || this > 64 && this < 91
//   }

//   let result = ""
//   for (let char of message) {
//     let decNum = char.charCodeAt(0)
//     if (!decNum.alpha()) {
//       result += char
//     } else {
//       if (decNum.lowAlphaRange()) {
//         result += String.fromCharCode(decNum + 13)
//       } else {
//         result += String.fromCharCode(decNum - 13)
//       }
//     }
//   }
//   return result
// }




/////////
// match
////////
// function rot13(message){
//   Number.prototype.lowAlphaRange = function() {
//     return this > 96 && this < 110 || this > 64 && this < 78
//   }

//   let result = ""
//   for (let char of message) {
//     let decNum = char.charCodeAt(0)
//     if (!char.match(/[A-Za-z]/)) {
//       result += char
//     } else {
//       if (decNum.lowAlphaRange()) {
//         result += String.fromCharCode(decNum + 13)
//       } else {
//         result += String.fromCharCode(decNum - 13)
//       }
//     }
//   }
//   return result
// }



//////////
// reduce
// TODO: Work in progress... not working for first letter
/////////
// function rot13(message){
//   Number.prototype.lowAlphaRange = function() {
//     return this > 96 && this < 110 || this > 64 && this < 78
//   }
//   return message.split("").reduce((result, char) => {
//     let decNum = char.charCodeAt(0)
//     if (!char.match(/[A-Za-z]/)) {
//       return result += char
//     } else {
//       if (decNum.lowAlphaRange()) {
//         return result += String.fromCharCode(decNum + 13)
//       } else {
//         return result += String.fromCharCode(decNum - 13)
//       }
//     }
//   })
// }




////////////////
// Cory Solution
////////////////
function rot13(message) {
  function inRange(x, min, max) {
    return (x - min) * (x - max) <= 0;
  }
  return message.split("").map((letter) => {
    let decNum = letter.charCodeAt(0);
    if (!inRange(decNum, 65, 90) && !inRange(decNum, 97, 122)) {
      return String.fromCharCode(decNum);
    } else {
      return inRange(decNum, 65, 77) || inRange(decNum, 97, 109)
        ? String.fromCharCode(decNum + 13)
        : String.fromCharCode(decNum - 13);
    }
  }).join('');
}

console.log(rot13('test'))
console.log(rot13('!test'))