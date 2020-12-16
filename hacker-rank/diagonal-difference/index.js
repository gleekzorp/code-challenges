// https://www.hackerrank.com/challenges/diagonal-difference/problem

const matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  // Write your code here
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;
  let primaryCurrent = 0;
  let secondaryCurrent = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    primaryDiagonal += arr[i][primaryCurrent];
    secondaryDiagonal += arr[i][secondaryCurrent];
    primaryCurrent++;
    secondaryCurrent--;
  }
  return Math.abs(primaryDiagonal - secondaryDiagonal);
}
console.log(diagonalDifference(matrix));
