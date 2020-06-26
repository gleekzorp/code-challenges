//////////
// Pseudo
/////////
// we need to loop through each number
// In order to loop through the number break that number down into individual numbers
// during the loop check if number is not even and return false
// if it makes it through the whole loop return true


// All even
// let number = 248622

// Not all even
let number = 642386


// Original Way
function evenDigitsOnly(number) {
  let arrayOfNumbers = number.toString().split('')
  for (num of arrayOfNumbers) {
    if (parseInt(num) % 2 != 0) {
      return false
    }
  }
  return true
}
evenDigitsOnly(number)


// Using Every
function evenDigitsOnly(number) {
  let arrayOfNumbers = number.toString().split('')
  return arrayOfNumbers.every((num) => parseInt(num) % 2 === 0)
}
evenDigitsOnly(number)


// Way to much one line
const evenDigitsOnly = (number) => number.toString().split('').every((num) => parseInt(num) % 2 === 0)


// Still a little to much one line
function evenDigitsOnly(number) {
  return number.toString().split('').every((num) => parseInt(num) % 2 === 0)
}

// Using a variable
function evenDigitsOnly(number) {
  let arrayOfNumbers = number.toString().split('')
  return arrayOfNumbers.every((num) => parseInt(num) % 2 === 0)
}

// Using two variables
function evenDigitsOnly(number) {
  let arrayOfNumbers = number.toString().split('')
  let result = arrayOfNumbers.every((num) => {
    return parseInt(num) % 2 === 0
  })
  return result
}