// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

function bouncer(arr) {
  return arr.filter((item) => {
    // return Boolean(item)
    return !!(item)
  })
}

console.log(bouncer([7, "ate", "", false, 9, true]));


////////////////////
// Iterable approach
////////////////////
// function bouncer(arr) {
//   let newArray = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i]) newArray.push(arr[i]);
//   }
//   return newArray;
// }
// console.log(bouncer([7, "ate", "", false, 9, true]));




///////////////////////
// weird boolean/filter
//////////////////////
// function bouncer(arr) {
//   return arr.filter(Boolean);
// }
// console.log(bouncer([7, "ate", "", false, 9, true]));

