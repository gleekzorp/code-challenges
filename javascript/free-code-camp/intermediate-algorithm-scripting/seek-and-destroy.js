// loop through and pop off elements it found

// function destroyer(arr) {
//   console.log(Object.values(arguments))
//   let arrayLength = arr.length
//   let notFound = []
//   let found = []
//   for (let i = 0; i < arrayLength; i ++) {
//     if (arr[i] === arguments[1] || arr[i] === arguments[2]) {
//       notFound.push(arr[i])
//     } else {
//       found.push(arr[i])
//     }
//   }
//   return found;
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))


function destroyer(arr) {
  let argumentsArray = Object.values(arguments).splice(1)
  let found = []
  for (let i = 0; i < arr.length; i ++) {
    if (!argumentsArray.includes(arr[i])) {
      found.push(arr[i])
    }
  }
  return found;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))

// function destroyer(arr) {
//   console.log(Object.values(arguments))
//   let arrayLength = arr.length
//   let notFound = []
//   let found = []
//   for (let i = 0; i < arrayLength; i ++) {
//     for (let j = 1; j < arguments.length; j++) {
//       if (arr[i] === arguments[j]) {
//         notFound.push(arr[i])
//       } else {
//         found.push(arr[i])
//       }
//     }
//   }
//   return found;
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))