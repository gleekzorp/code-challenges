// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

// console log each fib result/term
// 0, 1, 1, 2, 3, 5, 8, 13,
// function sumFibs(num) {
//   let result = [0,1]
//   for (let i = 2; i <= num; i++) {
//     first = result[i - 2]
//     second = result[i - 1]
//     result.push(first + second)
//   }
//   return result.filter(num => num % 2 != 0);
// }

/////////////////////
// reduce and filter
////////////////////
// function sumFibs(num) {
//   if (num <= 1) return num
//   let result = [0, 1];
//   for (let i = 2; i <= num; i++) {
//     let first = result[i - 2];
//     let second = result[i - 1];
//     result.push(first + second);
//   }
//   let total = result
//     .filter((resultNum) => resultNum % 2 != 0 && resultNum <= num)
//     .reduce((total, num) => num + total);
//   return total
// }

//////////////////////////////
// reduce and filter refactor
/////////////////////////////
// function sumFibs(num) {
//   if (num <= 1) return num;

//   let fibonacciNumbers = [0, 1];
//   for (let i = 2; i <= num; i++) {
//     if (fibonacciNumbers[i - 1] >= num) break;
//     fibonacciNumbers.push(fibonacciNumbers[i - 2] + fibonacciNumbers[i - 1]);
//   }
//   return fibonacciNumbers
//     .filter((resultNum) => resultNum % 2 != 0 && resultNum <= num)
//     .reduce((total, num) => num + total);
// }

////////////
// Michaels
///////////
function sumFibs(num) {
  const numsArr = [1, 1];
  do {
    const nextFibSequence =
      numsArr[numsArr.length - 1] + numsArr[numsArr.length - 2];
    numsArr.push(nextFibSequence);
  } while (
    numsArr[numsArr.length - 1] <= num &&
    numsArr[numsArr.length - 1] + numsArr[numsArr.length - 2] > num === false
  );
  return numsArr
    .filter((num) => num % 2 === 1)
    .reduce((accum, currentVal) => {
      return (accum += currentVal);
    });
}

console.log(sumFibs(1)); // should return a number.
console.log(sumFibs(4)); // should return 5.
console.log(sumFibs(1000)); // should return 1785.
console.log(sumFibs(4000000)); // should return 4613732.
console.log(sumFibs(75024)); // should return 60696.
console.log(sumFibs(75025)); // should return 135721.
