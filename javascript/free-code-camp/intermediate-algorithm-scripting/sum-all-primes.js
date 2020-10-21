// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes


function sumPrimes(num) {
  let primes = [2];
  for (let i = 1; i <= num; i++) {
    let prime = false
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        prime = false
        break
      } else {
        prime = true
      }
    }
    if (prime) {
      primes.push(i)
    }
  }
  return primes.reduce((total, num) => total + num);
}




//////////////////
// Functional Way
/////////////////
// function sumPrimes(num) {
//   let primes = [];
//   for (let i = 0; i <= num; i++) {
//     if (isPrime(i)) {
//       primes.push(i);
//     }
//   }
//   function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) return false;
//     }
//     return true;
//   }
//   return primes.reduce((total, num) => total + num);
// }




////////////////////
// Michael Solution
///////////////////
// function sumPrimes(num) {
//   let numArr = [1, 2];
//   for (let i = 1; i <= num; i++) {
//     if (i % 1 === 0 && i % i === 0) {
//       let prime;
//       for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//           prime = false;
//         } else if (prime !== false && i % j !== 0) {
//           prime = true;
//         }
//       }
//       if (prime === true) {
//         numArr.push(i);
//       }
//     }
//   }
//   const total = numArr.reduce((accum, currentVal) => {
//     return (accum += currentVal);
//   }, 0);
//   return total - 1;
// }


console.log(sumPrimes(10)); // should return a number.
console.log(sumPrimes(10)); // should return 17.
console.log(sumPrimes(11)); // should return 28.
console.log(sumPrimes(13)); // should return 41.
console.log(sumPrimes(977)); // should return 73156.
