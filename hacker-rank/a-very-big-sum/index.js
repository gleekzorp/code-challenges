// https://www.hackerrank.com/challenges/a-very-big-sum/problem

const sample_input = [
  1000000001,
  1000000002,
  1000000003,
  1000000004,
  1000000005,
];

function aVeryBigSum(ar) {
  return ar.reduce((total, num) => total + num);
}

console.log(aVeryBigSum(sample_input)); // 5000000015
