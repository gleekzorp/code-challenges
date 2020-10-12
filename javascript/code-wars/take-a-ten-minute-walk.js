// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
// https://www.codewars.com/kata/54da539698b8a2ad76000228/solutions/javascript

// function isValidWalk(walk) {
//   //insert brilliant code here
//   if (walk.length > 10 || walk.length < 10) return false
//   let resultObj = {}
//   for (let i = 0; i < walk.length; i++) {
//     if (walk[i] in resultObj) {
//       resultObj[walk[i]] = resultObj[walk[i]] + 1
//     } else {
//       resultObj[walk[i]] = 1
//     }
//   }
//   if ('n', 'e', 's', 'w' in resultObj) {
//     if (resultObj['n'] != resultObj['s'] || resultObj['w'] != resultObj['e']) {
//       return false
//     } else {
//       return true
//     }
//   }
//   if ('n' in resultObj) {
//     if (resultObj['n'] != resultObj['s']) {
//       return false
//     } else {
//       return true
//     }
//   } else if ('w' in resultObj) {
//     if (resultObj['w'] != resultObj['e']) {
//       return false
//     } else {
//       return true
//     }
//   }
// }




///////////////
// Refactor #1
//////////////
// function isValidWalk(walk) {
//   //insert brilliant code here
//   if (walk.length > 10 || walk.length < 10) return false
//   let resultObj = {}
//   for (let i = 0; i < walk.length; i++) {
//     if (walk[i] in resultObj) {
//       resultObj[walk[i]] = resultObj[walk[i]] + 1
//     } else {
//       resultObj[walk[i]] = 1
//     }
//   }
//   if ('n', 'e', 's', 'w' in resultObj) {
//     return resultObj['n'] === resultObj['s'] && resultObj['w'] === resultObj['e']
//   }
//   if ('n' in resultObj) return resultObj['n'] === resultObj['s']
//   if ('w' in resultObj) return resultObj['w'] === resultObj['e']
// }




///////////////
// Refactor #2
//////////////
function isValidWalk(walk) {
  //insert brilliant code here
  if (walk.length > 10 || walk.length < 10) return false
  let resultObj = {}
  for (let item of walk) {
    resultObj[item] = (resultObj[item]+1) || 1
  }

  if ('n', 'e', 's', 'w' in resultObj) {
    return resultObj['n'] === resultObj['s'] && resultObj['w'] === resultObj['e']
  }
  if ('n' in resultObj) return resultObj['n'] === resultObj['s']
  if ('w' in resultObj) return resultObj['w'] === resultObj['e']
}

// console.log(isValidWalk(['e','e','e','e','n','n','w','w','s','s'])) // 'should return false'
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) // 'should return true'
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e'])) // 'should return false'
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])) // 'should return false'
// console.log(isValidWalk(['w'])) // 'should return false'
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])) // 'should return false'