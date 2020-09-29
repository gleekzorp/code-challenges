// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number

function factorialize(num) {
  if (num === 0) return 1

  let result = 1
  for (let i = num; i >= 1; i--) {
    result *= i
  }
  return result;
}
console.log(factorialize(5));




/////////////
// Recursion
////////////
function factorialize(num) {
  debugger
  if (num === 0) return 1
  return factorialize(num - 1) * num
}
console.log(factorialize(5));