// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

let listOfConsonant = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// if first letter is in listOfConsanants
// move first letter to end
// add 'ay' to the end

// get everything but the first letter + the first letter + ay

// function translatePigLatin(word) {
//   if (listOfConsonant.includes(word[0])) {
//     console.log(word.slice(1))
//     console.log(word.charAt(0))
//     return `${word.slice(1)}${word.charAt(0)}ay`
//   }
// }
// console.log(translatePigLatin("california")) // should return "aliforniacay".
// console.log(translatePigLatin("paragraphs")) // should return "aragraphspay".

// function translatePigLatin(word) {
//   if (!listOfConsonant.includes(word[0])) {
//     return `${word}way`
//   }
// }
// console.log(translatePigLatin("algorithm")) // should return "algorithmway".
// console.log(translatePigLatin("eight")) // should return "eightway".

///////////////////
// Working Code!!!
//////////////////
// function translatePigLatin(word) {
//   if (!listOfConsonant.includes(word[0])) {
//     return `${word}way`;
//   } else {
//     let charsFound = "";
//     for (let char of word) {
//       if (listOfConsonant.includes(char)) {
//         charsFound += char;
//         continue;
//       } else {
//         break;
//       }
//     }
//     console.log(charsFound);
//     if (charsFound === word) {
//       return `${word}ay`;
//     } else {
//       return `${word.slice(charsFound.length)}${charsFound}ay`;
//     }
//   }
// }

// console.log(translatePigLatin("glove")); // should return "oveglay".
// console.log(translatePigLatin("rhythm")); // should return "rhythmay.
