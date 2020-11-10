// https://www.codewars.com/kata/5267faf57526ea542e0007fb/train/javascript
// https://www.codewars.com/kata/5267faf57526ea542e0007fb/solutions/javascript

// console.log(+String(7.12).split('.')[1][0])
// var num = 12.1542;
// console.log((num + "").split(".")[0]);
// console.log(Number.isInteger(31.000000001))
// console.log(parseInt(2.2))

Math.round = function (number) {
  if (Number.isInteger(number)) return number;
  let split = (number + "").split(".");
  let whole = split[0];
  let decimal = split[1][0];
  if (+decimal < 5) {
    return +whole + 0;
  } else {
    return +whole + 1;
  }
};

Math.ceil = function (number) {
  if (Number.isInteger(number)) {
    return number;
  } else {
    return parseInt(number) + 1;
  }
};

Math.floor = function (number) {
  return parseInt(number);
};

///////////////
// #1 solution
//////////////
// Math.round = function(number) {
//   return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
// };

// Math.ceil = function(number) {
//   return (parseInt(number) === number) ? number : parseInt(number) + 1;
// };

// Math.floor = function(number) {
//   return parseInt(number);
// };

///////////////
// #2 solution
//////////////
// Math.floor = function floor(x){
//   return x - x % 1; 
// }
// //function calls are expensive, so...
// Math.round = function round(x){
//   return (x + 0.5) - (x + 0.5) % 1;
// }
// Math.ceil = function ceil(x){
//   return x - x % 1 + !!(x % 1);
// }

console.log('round', Math.round(0.4)) //, 0,
console.log('round', Math.round(0.5)) //, 1,
console.log('round', Math.round(7.12)) //, 7,
console.log('round', Math.round(5)) //, 5,
console.log('round', Math.round(31.000000001)) //, 31,
console.log('round', Math.round(16.5)) //, 17,
console.log('round', Math.round(2.49999)) //, 2,
console.log('round', Math.round(19.9999)) //, 19,

console.log('ceil', Math.ceil(0.4)); //, 1,
console.log('ceil', Math.ceil(0.5)); //, 1,
console.log('ceil', Math.ceil(7.12)); //, 8,
console.log('ceil', Math.ceil(5)); //, 5,
console.log('ceil', Math.ceil(31.000000001)); //, 32,
console.log('ceil', Math.ceil(16.5)); //, 17,
console.log('ceil', Math.ceil(2.49999)); //, 3,
console.log('ceil', Math.ceil(19.9999)); //, 20,

console.log('floor', Math.floor(0.4)); //, 0,
console.log('floor', Math.floor(0.5)); //, 0,
console.log('floor', Math.floor(7.12)); //, 7,
console.log('floor', Math.floor(5)); //, 5,
console.log('floor', Math.floor(31.000000001)); //, 31,
console.log('floor', Math.floor(16.5)); //, 16,
console.log('floor', Math.floor(2.49999)); //, 2,
console.log('floor', Math.floor(19.9999)); //, 19,
