// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

// function spinWords(sentence){
//   let words = sentence.split(" ")
//   let result = []
//   for (let word of words) {
//     if (word.length >= 5) {
//       result.push(word.split('').reverse().join(""))
//     } else {
//       result.push(word)
//     }
//   }
//   return result.join(" ")
// }




///////
// Map
//////
// function spinWords(sentence){
//   let words = sentence.split(" ")
//   let result = words.map(word => {
//     if (word.length >= 5) {
//       return word.split('').reverse().join("")
//     } else {
//       return word
//     }
//   })
//   return result.join(" ")
// }




//////////
// Map v2
////////
// function spinWords(sentence){
//   return sentence.split(" ").map(word => {
//     return word.length >= 5 ? word.split('').reverse().join("") : word
//   }).join(" ")
// }




////////////////////////////////////
// Map One Line... waaaaay to long!
//////////////////////////////////
const spinWords = sentence => sentence.split(" ").map(word => word.length >= 5 ? word.split('').reverse().join("") : word).join(" ")

console.log(spinWords("Welcome")) //, "emocleW");
console.log(spinWords("Hey fellow warriors")) //, "Hey wollef sroirraw");
// console.log(spinWords("This is a test")) //, "This is a test");
// console.log(spinWords("This is another test")) //, "This is rehtona test");
// console.log(spinWords("You are almost to the last test")) //, "You are tsomla to the last test");
// console.log(spinWords("Just kidding there is still one more")) //, "Just gniddik ereht is llits one more");
// console.log(spinWords("Seriously this is the last one")) //, "ylsuoireS this is the last one");