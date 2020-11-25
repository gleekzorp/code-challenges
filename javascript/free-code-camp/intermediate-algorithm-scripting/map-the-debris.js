// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris
// https://en.wikipedia.org/wiki/Orbital_period

// 3.14 (6367.4447 * 2)
// 12,734.8894 * 3.14
// circumferance = 39,987.552716

// let divisionTotal = Math.pow(35873.5553, 3) / 398600.4418
// let squareRoot = Math.sqrt(divisionTotal)
// let twoPi = 2 * Math.PI
// number_squared = number.squareroot

// pemdas
// parans
// exponent
// multiplication
// division
// subtraction

// Equation Works!!
// function orbitalPeriod(arr) {
//   console.log(arr[0].avgAlt)
//   var GM = 398600.4418;
//   var earthRadius = 6367.4447;
//   let divisionTotal = Math.pow(arr[0].avgAlt + earthRadius, 3) / GM
//   let squareRoot = Math.sqrt(divisionTotal)
//   let twoPi = 2 * Math.PI
//   return Math.round(squareRoot * twoPi);
// }



////////////////////////////
// Refactor to return array
///////////////////////////
// function orbitalPeriod(arr) {
//   var GM = 398600.4418;
//   var earthRadius = 6367.4447;
//   let result = []
//   arr.forEach((item) => {
//     let object = {"name": item.name}
//     let divisionTotal = Math.pow(item.avgAlt + earthRadius, 3) / GM
//     let squareRoot = Math.sqrt(divisionTotal)
//     let twoPi = 2 * Math.PI
//     object['orbitalPeriod'] = Math.round(squareRoot * twoPi)
//     result.push(object)
//   })
//   return result
// }




/////////////////////
// Refactor with map
////////////////////
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map((item) => {
    let object = {"name": item.name}
    let divisionTotal = Math.pow(item.avgAlt + earthRadius, 3) / GM
    let squareRoot = Math.sqrt(divisionTotal)
    let twoPi = 2 * Math.PI
    object['orbitalPeriod'] = Math.round(squareRoot * twoPi)
    return object
  })
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])) // should return [{name: "sputnik", orbitalPeriod: 86400}].
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])) // should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].