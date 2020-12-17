// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
  let positive = 0
  let negative = 0
  let zero = 0
  arr.forEach(num => {
      if (num > 0) positive++
      if (num < 0) negative++
      if (num == 0) zero++
  })
  // console.log(positive / arr.length)
  // console.log(negative / arr.length)
  // console.log(zero / arr.length)
  // console.log(+(positive / arr.length).toFixed(6))
  // console.log(+(negative / arr.length).toFixed(6))
  // console.log(+(zero / arr.length).toFixed(6))
  // console.log(+(positive / arr.length).toPrecision(7))
  // console.log(+(negative / arr.length).toPrecision(7))
  // console.log(+(zero / arr.length).toPrecision(7))
  console.log(parseFloat(positive / arr.length).toFixed(6))
  console.log(parseFloat(negative / arr.length).toFixed(6))
  console.log(parseFloat(zero / arr.length).toFixed(6))
}


plusMinus([-4, 3, -9, 0, 4, 1]) // 0.500000, 0.333333, 0.166667