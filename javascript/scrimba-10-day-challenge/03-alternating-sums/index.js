// Create a function that accepts an array of positive integers
// Create var for even and assign 0
// Create var for odd and assign 0
// Loop through and if it is odd add to odd and same for even
// return array with odd and even totals
const nums = [50, 60, 60, 45, 70];


// function alternatingSums(array) {
//   let evenTotal = 0
//   let oddTotal = 0

//   array.forEach((num, idx) => {
//     if (idx % 2 === 0) {
//       console.log('even', idx)
//       evenTotal += num
//     } else {
//       console.log('odd', idx)
//       oddTotal += num
//     }
//   })

//   return [evenTotal, oddTotal]
// }

// console.log(alternatingSums(nums))




////////////////
// Reduce/filter
////////////////
function alternatingSums(array) {
  let evenTotal = array.filter((num, idx) => {
    if (idx % 2 === 0) return num
  }).reduce((total, num) => {
    return total + num
  }, 0)

  let oddTotal = array.filter((num, idx) => {
    if (idx % 2 === 1) return num
  }).reduce((total, num) => {
    return total + num
  }, 0)

  return [evenTotal, oddTotal]
}

console.log(alternatingSums(nums))




/////////////////
// Teach Solution
/////////////////
// function alternatingSums(array) {
//   let evenSum = 0;
//   let oddSum = 0;
  
//   for(let i = 0; i < array.length; i++) {
//       if(i % 2 === 0) {
//           evenSum += array[i];
//       } else {
//           oddSum += array[i];
//       }
//   }
  
//   return [evenSum, oddSum];
// }