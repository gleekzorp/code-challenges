// https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
  let spaces = n - 1
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(spaces) + "#".repeat(i))
    spaces--
  }
}

staircase(6)
