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
const canRobotReachDestination = (grid, destination) => {
  if (grid[0][0] === 0) return false
  let current = {'row': 0, 'col': 0}
  for (let col = current['col']; col < grid.length; col++) {

    if (current['col'] === destination[0] && current['row'] === destination[1]) {
      return true
    }
    for (let row = current['row']; row < grid[col].length; row++) {
      if (grid[col][row + 1] === 0) {
        if (col+1 === grid.length || grid[col+1][row] === 0) {
          return false
        } else {
          current['row'] = row
          current['col'] = col+1
          break
        }
      } else {
        if (current['col'] === destination[0] && current['row'] + 1 === destination[1]) {
          return true
        }
      }
    }
  }
  // return true
}
console.log(canRobotReachDestination([[0, 1, 1, 0],[1, 0, 1, 0],[1, 0, 1, 1]], [2, 3])) // false
console.log(canRobotReachDestination([[1, 1, 1, 0],[1, 0, 1, 0],[1, 0, 1, 0]], [2, 3])) // false
console.log(canRobotReachDestination([[1, 1, 1, 0],[1, 0, 1, 0],[1, 0, 1, 1]], [2, 3])) // true
console.log(canRobotReachDestination([[1, 1, 1, 0],[1, 0, 1, 0],[1, 0, 1, 1]], [1, 2])) // true





////////////////////
// Michael Solution
///////////////////
// const canRobotReachDestination = (grid, destination, curPath = [0, 0], prevPath = [0, 0]) => {
//   let currentColumn = curPath[0];
//   let nextColumn =curPath[0] + 1;
//   let currentRow = curPath[1];
//   let nextRow = curPath[1] + 1;
//   let prevPathColumn = prevPath[0];
//   prevPath = curPath
//   console.log(curPath)
//   if (curPath[0] === destination[0] && curPath[1] === destination[1]) {
//     return true
//   } else if (prevPathColumn === nextColumn && nextRow === grid[currentColumn].length) {
//     return false
//   } else if (prevPathColumn === nextColumn && grid[currentColumn][nextRow] === 0) {
//     return false
//   } else if (grid[nextColumn] && grid[nextColumn][currentRow] === 1 && nextColumn !== prevPathColumn) {
//     // Can move down a column
//     curPath = [nextColumn, currentRow]
//     return canRobotReachDestination(grid, destination, curPath, prevPath)
//   } else if (grid[currentColumn][curPath[1] + 1] === 1) {
//     // Can move down a row
//     curPath = [currentColumn, nextRow]
//     return canRobotReachDestination(grid, destination, curPath, prevPath)
//   } else {
//     // move back to previous position
//     if (currentColumn !== 0) {
//       curPath = [currentColumn - 1, currentRow]
//       return canRobotReachDestination(grid, destination, curPath, prevPath)
//     }
//   }
// }
// console.log(canRobotReachDestination([[0, 1, 1, 0],[1, 0, 1, 0],[1, 0, 1, 1]], [2, 3])) // false
// console.log(canRobotReachDestination([[1, 1, 1, 0],[1, 0, 1, 0],[1, 0, 1, 1]], [2, 3])) // true





//////////////////
// James Solution
/////////////////
// const canRobotReachDestination = (grid, destination) => {
//   var robotArray = [...Array(grid.length)].map((e) => Array(grid[0].length).fill(false));
//   console.log(robotArray)
//   if (grid[0][0] == 1) {
//     robotArray[0][0] = true;
//   }
//   for (var row = 0; row <= grid.length - 1; row++) {
//     for (var col = 0; col <= grid[row].length - 1; col++) {
//       if (row + 1 < grid.length) {
//         if (grid[row + 1][col] == 1 && robotArray[row][col] === true) robotArray[row + 1][col] = true; // Check down
//       }
//       if (col + 1 < grid[row].length) {
//         if (grid[row][col + 1] == 1 && robotArray[row][col] === true) robotArray[row][col + 1] = true; // Check Right
//       }
//     }
//   }
//   return robotArray[destination[0]][destination[1]];
// };
// console.log(canRobotReachDestination([[0, 1, 1, 0],[1, 0, 1, 0],[1, 0, 1, 1]], [2, 3])) // false
// console.log(canRobotReachDestination([[1, 1, 1, 0],[1, 0, 1, 0],[1, 0, 1, 1]], [2, 3])) // true
