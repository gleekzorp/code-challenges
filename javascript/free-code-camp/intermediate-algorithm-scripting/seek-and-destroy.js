// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

// function destroyer(arr) {
//   let argumentsArray = Object.values(arguments).splice(1)
//   let notFound = []
//   for (let i = 0; i < arr.length; i ++) {
//     if (!argumentsArray.includes(arr[i])) {
//       notFound.push(arr[i])
//     }
//   }
//   return notFound;
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))


function destroyer(arr) {
  let argumentsArray = Object.values(arguments).splice(1)
  return arr.filter((item) => {
    if (!argumentsArray.includes(item)) {
      return item
    }
  })
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))