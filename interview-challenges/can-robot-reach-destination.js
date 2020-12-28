// Can the robot reach the given destination or not? //
// You have a 2d array representing a grid of paths
// You have a robot starting at  column 0 and row 0
// You have a destination representing a column idx as first the first item, and row idx as the second item in an array
// There are walls that the robot can NOT move through represented by 0's
// if the given cell is represented by a 1 the robot can move to it
// The robot can only move to the right OR down UNLESS moving to a previous position
// EXAMPLE INPUT = [
//   [1, 1, 1, 0],
//   [1, 0, 1, 0],
//   [1, 0, 1, 1]
// ], [2, 3]
// EXAMPLE OUTPUT
// True

//          rows rows rows rows
// columns  [  ] [  ] [  ] [  ]
// columns  [  ] [  ] [  ] [  ]
// columns  [  ] [  ] [  ] [ x]

//          cols cols cols cols
//    rows  [  ] [  ] [  ] [  ]
//    rows  [  ] [  ] [  ] [  ]
//    rows  [  ] [  ] [  ] [  ]
//                      x
// const canRobotReachDestination = (grid, destination) => {
//   if (grid[0][0] === 0) return false
//   for (let col = 0; col < grid.length; col++) {
//     console.log(grid[col])
//     for (let row = 0; row < grid[col].length; row++) {
//       if (grid[col][row] === 0) {
//         break
//         // console.log('break')
//       }
//       console.log(grid[col], grid[col][row])
//     }
//   }
//   return true
// }
// console.log(canRobotReachDestination([[0, 1, 1, 0],[1, 0, 1, 0],[1, 0, 1, 1]], [2, 3])) // false
// console.log(canRobotReachDestination([[1, 1, 1, 0],[1, 0, 1, 0],[1, 0, 1, 1]], [2, 3])) // true

const canRobotReachDestination = (grid, destination) => {
  if (grid[0][0] === 0) return false
  return true
}
console.log(canRobotReachDestination([[1, 1, 1, 0],[1, 0, 1, 0],[1, 0, 1, 1]], [2, 3])) // true