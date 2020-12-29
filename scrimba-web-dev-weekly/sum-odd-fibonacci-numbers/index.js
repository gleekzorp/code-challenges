// https://scrimba.com/learn/adventcalendar/-javascript-challenge-sum-odd-fibonacci-numbers-introduction-cmpWaRcW

// function sumOddFibonacciNumbers(num) {
//   //  write code here.
//   let fibNums = [1, 1]
//   for (let i = 2; i <= num; i++) {
//     fibNums.push(fibNums[i-1] + fibNums[i-2])
//   }
//   return fibNums.filter(item => item % 2 !== 0 && item <= num).reduce((total, number) => total + number)
// }
// console.log(sumOddFibonacciNumbers(10)) // should return 10
// console.log(sumOddFibonacciNumbers(1000)) // should return 1785





//////////////
// While Loop
/////////////
function sumOddFibonacciNumbers(num) {
  //  write code here.
  let result = 0
  let prev = 0
  let current = 1
  while (current <= num) {
    if (current % 2 === 1) {
      result += current 
    }
    const nextValue = current + prev;
    prev = current;
    current = nextValue;
  }
  return result
}

console.log(sumOddFibonacciNumbers(10)) // should return 10
// console.log(sumOddFibonacciNumbers(1000)) // should return 1785