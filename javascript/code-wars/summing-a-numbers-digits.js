// https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript

function sumDigits(number) {
  number = Math.abs(number)
  let split = number.toString().split("")
  return split.reduce((total, current) => +total + +current, 0)
}

console.log(sumDigits(0)); // Returns 0
console.log(sumDigits(10)); // Returns 1
console.log(sumDigits(99)); // Returns 18
console.log(sumDigits(-32)); // Returns 5
console.log(Math.abs(1))
