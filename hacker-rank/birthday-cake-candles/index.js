// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
  let largest_number = Math.max(...candles)
  return candles.filter(num => num == largest_number).length
}
