// split the string
// loop through string array
// grab first letter
// uppercase
// return newarray joined

// function titleCase(str) {
//   let splitString = str.split(" ")
//   let newArray = []
//   splitString.forEach(element => {
//     console.log(element[0].toUpperCase())
//     newArray.push(element[0].toUpperCase() + element.substr(1).toLowerCase())
//   });
//   return newArray.join(' ');
// }

// console.log(titleCase("I'm a little tea pot"));



// map
// function titleCase(str) {
//   let cap = str.split(" ").map(element => {
//     return element.charAt(0).toUpperCase() + element.substr(1).toLowerCase()
//   });
//   return cap.join(' ');
// }

// console.log(titleCase("I'm a little tea pot"));



// replace
// function titleCase(str) {
//   let splitString = str.split(" ")
//   let newArray = []
//   splitString.forEach(element => {
//     newArray.push(element.replace(element[0], element[0].toUpperCase()))
//   });
//   return newArray.join(' ');
// }

// console.log(titleCase("I'm a little tea pot"));



// map One Line!
const titleCase = str => str.split(" ").map(element => element[0].toUpperCase() + element.substr(1).toLowerCase()).join(' ')
console.log(titleCase("I'm a little tea pot"));


// Read further in the hints for some crazy regex/replace stuff