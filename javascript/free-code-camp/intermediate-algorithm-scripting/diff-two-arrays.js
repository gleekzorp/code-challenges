// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-diff-two-arrays/16008

function diffArray(arr1, arr2) {
  let mergedList = [...arr1, ...arr2]
  let notFound = mergedList.filter(item => {
    if (!arr1.includes(item) || !arr2.includes(item)) {
      return item
    }
  })
  return notFound;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));





////////////////////
// FreeCodeCamp Hint
////////////////////
// function diffArray(arr1, arr2) {
//   return [...diff(arr1, arr2), ...diff(arr2, arr1)];

//   function diff(a, b) {
//     return a.filter(item => b.indexOf(item) === -1);
//   }
// }





////////////////////
// FreeCodeCamp Hint
////////////////////
// function diffArray(arr1, arr2) {
//   var newArr = [];

//   function onlyInFirst(first, second) {
//     // Looping through an array to find elements that don't exist in another array
//     for (var i = 0; i < first.length; i++) {
//       if (second.indexOf(first[i]) === -1) {
//         // Pushing the elements unique to first to newArr
//         newArr.push(first[i]);
//       }
//     }
//   }

//   onlyInFirst(arr1, arr2);
//   onlyInFirst(arr2, arr1);

//   return newArr;
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);