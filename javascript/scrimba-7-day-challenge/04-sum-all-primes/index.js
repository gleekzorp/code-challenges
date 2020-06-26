// 28 has factors of 1, 2, 4, 7, 14, 28
// 28 % 1 = 0
// 28 % 2 = 0
// 28 % 4 = 0
// 28 % 7 = 0
// 28 % 14 = 0
// 28 % 28 = 0

// 29 has factors of 1 and 29
// 29 % 1 = 0
// 29 % 2 = 1
// 29 % 3 = 2
// 29 % 4 = 1

// Lets use the modulus operator and if we ever get a remainder 0 it isn't prime
// Skip number 1 and itself


// starts with 2 outer loop
// inner loop is 2
// 2 == 2 so we increment prime (prime is now 2)
// 2 % 2 is === 0 so we break
// i is now 3
// j is now 2
// i is not equal to j so we skip this if
// 3 % 2 is not equal to 0 so we skip this if
// j is now 3
// 3 == 3 so we increment prime (prime is now 5)
// i is now 4
// j is now 2
// i is not equal to j so we skip this if
// 4 % 2 is === 0 so we break

// Throw this into the console and debug it.  You will notice how its working a lot easier.
const number = 10
let primesTotal = 0
for (let i = 2; i < number; i++) {
  // debugger
  for (let j = 2; j <= i; j++) {
    if (i === j) {
      console.log(j)
      primesTotal += j
    }

    if (i % j === 0) {
      break
    }
  }
}

console.log(primesTotal)

// 2, 3, 5, 7



for (let i = 2; i < number; i++) {
  console.log(i, number % i)
  if (number % i == 0) {
    console.log('not prime')
    break
  }
}