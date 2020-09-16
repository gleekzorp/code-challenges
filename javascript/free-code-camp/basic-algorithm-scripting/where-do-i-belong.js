// sort the arr
// loop through the array
// if current >= num
// return current index
// if we never returned from the loop return array length

function getIndexToIns(arr, num) {
  let sortedArray = arr.sort((a, b) => a - b)
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] >= num) {
      return i
    }
  }
  return sortedArray.length
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([1], 5));


// Go review the extra 7 ways
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-where-do-i-belong/16094