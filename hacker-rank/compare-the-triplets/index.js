// https://www.hackerrank.com/challenges/compare-the-triplets/problem

const listA = [5, 6, 7];
const listB = [3, 6, 10];

function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if (a[i] < b[i]) {
      bob++;
    } else {
      continue;
    }
  }
  return [alice, bob];
}

console.log(compareTriplets(listA, listB));
