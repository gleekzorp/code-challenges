/*////////////////////////////////////////////////////////////
// take a two digit number and return the sum of their numbers
// const num = 29
// result = 11
/*////////////////////////////////////////////////////////////


//////////
// Pseudo
//////////
// split the number
// add those numbers together
// return value


// First Way
function addTwoDigits(num)  {
  numSplit = num.toString().split("")
  return parseInt(numSplit[0]) + parseInt(numSplit[1])
}
addTwoDigits(29)


// Second Way With Reduce
function addTwoDigits(num)  {
  numSplit = num.toString().split("")
  return numSplit.reduce((total, num) => parseInt(total) + parseInt(num))
}
addTwoDigits(29)