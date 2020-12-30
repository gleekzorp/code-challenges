// https://www.hackerrank.com/challenges/time-conversion/problem


// 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 AM
// 12 = 0

// 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 PM
// 12 = 12
// every other number you need to add 12
// example: 1 + 12 = 13


function timeConversion(s) {
  let split = s.split(':')
  let hour = split[0]
  let min = split[1]
  let sec = split[2].slice(0, 2)
  let period = split[2].slice(2)
  if (period === 'AM') {
    return `${hour === '12' ? '00' : hour}:${min}:${sec}`
  } else {
    return `${hour === '12' ? '12' : +hour + 12}:${min}:${sec}`
  }
}

console.log(timeConversion('07:05:45PM')) // should return 19:05:45
console.log(timeConversion('12:01:00AM')) // should return 00:01:00
console.log(timeConversion('01:01:00AM')) // should return 01:01:00