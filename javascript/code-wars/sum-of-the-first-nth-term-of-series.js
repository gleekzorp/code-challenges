// Sum of the first nth term of Series

// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
// https://www.codewars.com/kata/555eded1ad94b00403000071/solutions/javascript

// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:
// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"


function SeriesSum(series) {
  let denominator = 1
  let result = 0
  for (let i = 0; i < series; i++) {
    if (i === 0) {
      result = 1
    } else {
      denominator += 3
      result = result + (1 / denominator)
    }
  }
  return result.toFixed(2)
}


console.log(SeriesSum(0)) // => 1 = "0.00"
console.log(SeriesSum(1)) // => 1 = "1.00"
console.log(SeriesSum(2)) // => 1 + 1/4 = "1.25"
console.log(SeriesSum(3)) // => 1 + 1/4 + 1/7 = "1.39"
console.log(SeriesSum(4)) // => 1 + 1/4 + 1/7 + 1/10 = "1.49"
console.log(SeriesSum(5)) // => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"