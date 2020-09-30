// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-wherefore-art-thou/16092/2

// collection of objects
// key:value pair to look for
//   - that key value pair can be a single key:value pair or multiple
// loop through the collection of objects
//   - check to see if the key:value pair we're looking for is in the current object
//      - if it is add the entire object to the result array

// Object.keys()
// Object.values()
// hasOwnProperty

////////////////////////////////////
// array of objects to look through
////////////////////////////////////
// [
//     { first: "Romeo", last: "Montague" },
//     { first: "Mercutio", last: null },
//     { first: "Tybalt", last: "Capulet" }
// ]

/////////////////////////
// key:value search term
/////////////////////////
// { last: "Capulet" }

/////////
// result
/////////
// [
//     { first: "Tybalt", last: "Capulet" }
// ]

////////////////////////////////
// My way after kind of cheating
////////////////////////////////
// function whatIsInAName(collection, source) {
//     // Only change code below this line
//     return collection.filter((item) => {
//         for (const [key, value] of Object.entries(source)) {
//             if (value !== item[key] || !item.hasOwnProperty(key)) {
//                 return false
//             }
//         }
//         return true
//     })
// }

///////////////
// Solution one
///////////////
// function whatIsInAName(collection, source) {
//     var srcKeys = Object.keys(source);

//     // filter the collection
//     return collection.filter(function(obj) {
//       for (var i = 0; i < srcKeys.length; i++) {
//         if (
//           !obj.hasOwnProperty(srcKeys[i]) ||
//           obj[srcKeys[i]] !== source[srcKeys[i]]
//         ) {
//           return false;
//         }
//       }
//       return true;
//     });
// }

///////////////
// Solution two
///////////////
// function whatIsInAName(collection, source) {
//     var srcKeys = Object.keys(source);

//     return collection.filter(function(obj) {
//       return srcKeys.every(function(key) {
//         return obj.hasOwnProperty(key) && obj[key] === source[key];
//       });
//     });
// }

///////////////
// Solution Three
///////////////
// function whatIsInAName(collection, source) {
//     var srcKeys = Object.keys(source);

//     // filter the collection
//     return collection.filter(function(obj) {
//       return srcKeys
//         .map(function(key) {
//           return obj.hasOwnProperty(key) && obj[key] === source[key];
//         })
//         .reduce(function(a, b) {
//           return a && b;
//         });
//     });
// }

///////////////////
// Michael Solution
///////////////////
function whatIsInAName(collection, source) {
  return collection.filter((object) => {
    const object_keys = Object.keys(object);
    const object_values = Object.values(object);
    const arrOfChecksPassed = [];
    for (let i = 0; i < Object.keys(source).length; i++) {
      if (
        object_keys.includes(Object.keys(source)[i]) &&
        object_values.includes(Object.values(source)[i])
      ) {
        arrOfChecksPassed.push(true);
      }
    }
    if (arrOfChecksPassed.length === Object.keys(source).length) {
      return true;
    }
  });
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
