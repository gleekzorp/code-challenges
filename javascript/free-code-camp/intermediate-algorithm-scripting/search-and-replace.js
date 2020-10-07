// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace


// function myReplace(str, before, after) {
//   return str.replace(before, after)
// }

// console.log(myReplace("Let us go to the store", "store", "mall")) // should return "Let us go to the mall".



///////////////////////////
// Original Working Code!!
//////////////////////////
// function myReplace(str, before, after) {
//   // let foundWord = str.search(before)
//   // console.log(str[foundWord])
//   // if (str[foundWord])

//   if (before[0] == before[0].toUpperCase()) {
//     return str.replace(before, `${after[0].toUpperCase()}${after.slice(1)}`)
//   } else {
//     return str.replace(before, `${after[0].toLowerCase()}${after.slice(1)}`)
//   }
// }

// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
// // should return "He is Sitting on the couch".



//////////////////////////////////////////
// SUPER AWESOME PROTOTYPE METHODS!!!!!!!
// Working Code!!!
/////////////////////////////////////////
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.lowerCase = function() {
  return this.charAt(0).toLowerCase() + this.slice(1);
}

function myReplace(str, before, after) {
  if (before[0] == before[0].toUpperCase()) {
    return str.replace(before, after.capitalize())
  } else {
    return str.replace(before, after.lowerCase())
  }
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")) // should return "He is Sitting on the couch".
console.log(myReplace("I think we should look up there", "up", "Down")) // should return "I think we should look down there".





