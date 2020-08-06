// Create a function that accepts a string
// loop through the string
// During loop check if char is a number
// return if its a number
const str = "var_01__Int2";

// function firstDigit(str) {
//   for (let char of str) {
//     if (parseInt(char)) {
//       return char
//     }
//   }
// }
// console.log(firstDigit(str))


// Teacher solution using includes
function firstDigit(str) {
  const strNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const chars = str.split('');
  
  for(const char of chars) {
      if(strNums.includes(char)) {
          return char;
      }
  }
}
console.log(firstDigit(str))