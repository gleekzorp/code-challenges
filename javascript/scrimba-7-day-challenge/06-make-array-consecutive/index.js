//////////
// Pseudo
/////////
// sort the array
// loop through array and check current number to next number and make sure the next number is the current number + 1
// if not add to 
// what if there is two missing numbers
// 3 and 6 is missing 4 and 5
// if 3 + 1 !== 4
// 3 - 6

// /////////////////////
// My really awesome way
// /////////////////////

// function makeArrayConsecutive(nums) {
//   // const sorted_numbers = nums.sort()
//   const sorted_numbers = nums.sort((a, b) => a - b)
//   let result = 0
//   for (let i = 0; i < sorted_numbers.length - 1; i++) {
//     if (sorted_numbers[i + 1] !== (sorted_numbers[i] +1)) {
//       let missingAmount = sorted_numbers[i + 1] - (sorted_numbers[i] + 1)
//       result += missingAmount
//     }
//   }
//   return result
// }

// // const nums = [6, 2, 3, 8]
// // const nums = [1,2,4]
// // const nums = [1, 10]
// console.log(makeArrayConsecutive(nums))





// ////////////////////////////////
// Gets the amount of items missing
// ////////////////////////////////
// function makeArrayConsecutive(nums) {
//   const sorted_numbers = nums.sort((a, b) => a - b)
//   const min = Math.min(...nums)
//   const max = Math.max(...nums)
//   let result = 0
//   for (let i = min; i < max; i++) {
//     // if(sorted_numbers.indexOf(i) === -1) {
//     //   result += 1
//     // }
//     if(!sorted_numbers.includes(i)) {
//       result += 1
//     }
//   }
//   return result
// }

// const nums = [6, 2, 3, 8]
// // const nums = [1,2,4]
// // const nums = [1, 10]
// console.log(makeArrayConsecutive(nums))





// /////////////////////
// Get the missing items
// /////////////////////
function makeArrayConsecutive(nums) {
  const sorted_numbers = nums.sort((a, b) => a - b)
  const min = Math.min(...nums)
  const max = Math.max(...nums)
  let result = []
  for (let i = min; i < max; i++) {
    // if(sorted_numbers.indexOf(i) === -1) {
    //   result += 1
    // }
    if(!sorted_numbers.includes(i)) {
      result.push(i)
    }
  }
  return result
}

const nums = [6, 2, 3, 8]
// const nums = [1,2,4]
// const nums = [1, 10]
console.log(makeArrayConsecutive(nums))





// ////////////////////////////////////////
// Attemp at using Map from stack overflow
// https://stackoverflow.com/questions/7317993/arrays-find-missing-numbers-in-a-sequence
// ////////////////////////////////////////

// function makeArrayConsecutive(nums) {
//   const min = Math.min(...nums)
//   const max = Math.max(...nums)

//   const newArray = Array(max-min)
//   // let newArr = Array.from(Array(max-min)).map((i) => {
//   //   return i + min
//   // })
//   let newArr = Array.from(Array(max-min))
//   // let newArr = Array.from(Array(max-min), (v, i) => {
//   //   console.log(v)
//   //   console.log(i)
//   //   return i + min
//   // });
//   console.log(newArr)
//   // console.log(newArray)

// }

// const numbers = [6, 2, 3, 8]
// makeArrayConsecutive(numbers)