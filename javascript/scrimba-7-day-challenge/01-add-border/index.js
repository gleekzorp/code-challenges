/*/////////////////////////////////////////////////////////////////////////////////////
// Add a border around the entire application.
// strings = ['abc', 'ded']
// result = ["*****",
             "*abc*",
             "*ded*",
             "*****"]
// Don't worry about line breaks the result should be ["*****","*abc*","*ded*","*****"]
// The line breaks are just a visual for explaning
/*/////////////////////////////////////////////////////////////////////////////////////


/////////
// Pseudo
/////////
// string = ['abc', 'ded']
// result = ["*****","*abc*","*ded*","*****"]
// add 5 stars to front of array
// add 5 stars to end of array
// add one star to front of first element
// add one star to end of first element
// add one star to front of second element
// add one star to end of second element


// First attempt
function addBorder(array) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    splitWord = array[i].split("")
    splitWord.unshift("*")
    splitWord.push("*")
    newArray.push(splitWord.join(""))
  }
  newArray.unshift("*****")
  newArray.push("*****")
  return newArray
}
  
  
// Using map with help from community
function addBorder(array) {
  const newArray = array.map(item => {
    return `*${item}*`
  })
  newArray.unshift("*****")
  newArray.push("*****")
  return newArray
}
  
  
// Instructors solution
function addBorder(array) {
  const wall = '*'.repeat(array[0].length + 2);
  
  array.unshift(wall);
  array.push(wall);
  
  for(let i = 1; i < array.length - 1; i++) {
    array[i] = '*'.concat(array[i], '*');
  }
  
  return array;
}
  
/////////////////// COMPLETE ///////////////////