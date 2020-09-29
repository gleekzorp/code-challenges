// Challenge First Duplicate
// https://scrimba.com/c/cE9agzt3

//////////
// Pseudo
/////////
// itterate nums
// add num to an object
// if num is in object return
// if you don't find dup return -1
const nums = [2, 1, 3, 5, 3, 2];

////////////
// Using In
///////////
// function firstDuplicate(nums) {
//   prevNums = {}
//   for (let num of nums) {
//     if (num in prevNums) {
//       return num
//     }
//     prevNums[num] = num
//   }
//   return -1
// }
// firstDuplicate(nums)




////////////////////////
// Using hasOwnProperty
///////////////////////
function firstDuplicate(nums) {
  prevNums = {}
  for (let num of nums) {
    if (prevNums.hasOwnProperty(num)) {
      return num
    }
    prevNums[num] = num
  }
  return -1
}
firstDuplicate(nums)

