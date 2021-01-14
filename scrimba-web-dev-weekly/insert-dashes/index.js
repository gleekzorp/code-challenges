// https://scrimba.com/learn/adventcalendar/-javascript-challenge-insert-dashes-introduction-co2914310ba38bcaab285ccfa?utm_source=newsletter&utm_medium=email&utm_campaign=weeklywebdevchallenge&utm_content=wwdc_advent_cal_day16#
// It seems this one is now locked


/////////
// Pseudo
/////////
// result array
// split the string on spaces
// loop through the array
// for each item if the length is >= 2
//    join it together with a dash
//    add that to the result array


/////////////////
// First Attempt
////////////////
// const insertDashes = (sentence) => {
//   let result = []
//   sentence_split = sentence.split(' ')
//   for (let word of sentence_split) {
//     if (word.length >= 2) {
//       result.push(word.split("").join('-'))
//     } else {
//       result.push(word)
//     }
//   }
//   return result.join(' ')
// }

// console.log(insertDashes('a caba')) // a c-a-b-a
// console.log(insertDashes('aba caba')) // a-b-a c-a-b-a



////////////////
// Refactor # 1
///////////////
// const insertDashes = (sentence) => {
//   return sentence.split(' ').map(word => {
//     if (word.length >= 2) {
//       return word.split("").join('-')
//     } else {
//       return word
//     }
//   }).join(' ')
// }

// console.log(insertDashes('a caba')) // a c-a-b-a
// console.log(insertDashes('aba caba')) // a-b-a c-a-b-a





////////////////////////
// Refactor # 2 ternary
///////////////////////
const insertDashes = (sentence) => {
  return sentence.split(' ').map(word => {
    return word.length >= 2 ? word.split("").join('-') : word
  }).join(' ')
}

console.log(insertDashes('a caba')) // a c-a-b-a
console.log(insertDashes('aba caba')) // a-b-a c-a-b-a