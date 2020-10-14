// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities

// function convertHTML(str) {
//   let entities = {
//     '&': '&amp;',
//     '<': '&lt;',
//     '>': '&gt;',
//     '"': '&quot;',
//     "'": '&apos;'
//   }
//   let result = ""
//   for (let char of str) {
//     result += entities[char] || char
//   }
//   return result  
// }




//////////
// reduce
/////////
// function convertHTML(str) {
//   let entities = {
//     '&': '&amp;',
//     '<': '&lt;',
//     '>': '&gt;',
//     '"': '&quot;',
//     "'": '&apos;'
//   }
//   return str.split('').reduce((result, char) => {
//     return result += entities[char] || char
//   })
// }




////////
// regex
////////
function convertHTML(str) {
  let entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  }
  return str.replace(/[&<>"']/g, match => entities[match])
}


// console.log(convertHTML("Dolce & Gabbana")) // should return "Dolce &amp; Gabbana".
console.log(convertHTML("Hamburgers < Pizza < Tacos")) // should return "Hamburgers &lt; Pizza &lt; Tacos".
// console.log(convertHTML("Sixty > twelve")) // should return "Sixty &gt; twelve".
// console.log(convertHTML('Stuff in "quotation marks"')) // should return "Stuff in &quot;quotation marks&quot;".
// console.log(convertHTML("Schindler's List")) // should return "Schindler&apos;s List".
// console.log(convertHTML("<>")) // should return "&lt;&gt;".
// console.log(convertHTML("abc")) // should return "abc".