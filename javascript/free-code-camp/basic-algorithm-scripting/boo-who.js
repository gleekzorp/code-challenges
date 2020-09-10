// function booWho(bool) {
//   if (bool === true || bool === false) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(booWho(null));
// console.log(booWho(true));
// console.log(booWho(false));



// function booWho(bool) {
//   if (typeof bool === 'boolean') {
//     return true
//   } else {
//     return false
//   }
// }


function booWho(bool) {
  return typeof bool === "boolean";
}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho(false));