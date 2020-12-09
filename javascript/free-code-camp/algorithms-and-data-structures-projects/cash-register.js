// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register


// Closed => total of all coins in drawer === total due
   // return value {status: "closed", change: the entire array}
// Open => total due can be pulled out from drawer and there is left over cash in the drawer
  // return value {status: "open", change: array of each coin needed for total due}
// INSUFFICIENT_FUNDS => total due can't be pulled out from the drawer
  // return value {status: "INSUFFICIENT_FUNDS", Empty array}


// let change = []
// totalDue = cash - price
// 100 - 3.26 -> 96.74
// loop through cid (current is each itteration)
// if totalDue - current < 0:
  // break 
// else if totalDue - current > 0
  // change.push(current)
  // totalDue -= current
  // break

// console.log(Number((96.74 - 60).toFixed(2)))


//////////////////
// Beautiful Code
/////////////////
// function checkCashRegister(price, cash, cid) {
//   let currencyValue = {
//     "PENNY": 0.01,
//     "NICKEL": 0.05,
//     "DIME": 0.10,
//     "QUARTER": 0.25,
//     "ONE": 1.00,
//     "FIVE": 5.00,
//     "TEN": 10.00,
//     "TWENTY": 20.00,
//     "ONE HUNDRED": 100.00
//   }
//   let change = [];
//   let totalDue = cash - price;
//   let cidReversed = cid.reverse()
//   for (let i = 0; i < cid.length; i++) {
//     let currentValue = cidReversed[i][1]
//     let currentCurrencyValue = currencyValue[cidReversed[i][0]]
//     if (totalDue - currentCurrencyValue < 0) {
//       continue 
//     }
//     else {
//       let runningTotal = 0
//       for (let j = 0; j < currentValue; j+=currentCurrencyValue) {
//         if (totalDue - (runningTotal + currentCurrencyValue) < 0) {
//           break
//         } else {
//           runningTotal += currentCurrencyValue
//         }
//       }
//       change.push([cidReversed[i][0], runningTotal])
//       totalDue = Number((totalDue - runningTotal).toFixed(2))
//       continue
//     }
//   }
//   // I could move this to the top
//   let firstCheck = 0
//   for (let item of cid) {
//     firstCheck = Number((firstCheck + item[1]).toFixed(2))
//   }
//   if (firstCheck === (cash - price)) {
//     return {status: "CLOSED", change: cid.reverse()}
//   }
//   let secondCheck = 0
//   for (let item of change) {
//     secondCheck = Number((secondCheck + item[1]).toFixed(2))
//   }
//   if (secondCheck - (cash - price) === 0) {
//     return {status: "OPEN", change}
//   } else if (secondCheck - (cash - price) < 0) {
//     return {status: "INSUFFICIENT_FUNDS", change: []}
//   }
// }





////////////////
// Refactor # 1
///////////////
function checkCashRegister(price, cash, cid) {
  let firstCheck = 0
  for (let item of cid) {
    firstCheck = Number((firstCheck + item[1]).toFixed(2))
  }
  if (firstCheck === (cash - price)) {
    return {status: "CLOSED", change: cid}
  }
  
  let currencyValue = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }
  let change = [];
  let totalDue = cash - price;
  let cidReversed = cid.reverse()
  for (let i = 0; i < cid.length; i++) {
    let currentCurrencyValue = currencyValue[cidReversed[i][0]]
    let currentCurrencyTotal = cidReversed[i][1]
    if (totalDue - currentCurrencyValue < 0) {
      continue 
    }
    else {
      let runningTotal = 0
      for (let j = 0; j < currentCurrencyTotal; j+=currentCurrencyValue) {
        if (totalDue - (runningTotal + currentCurrencyValue) < 0) {
          break
        } else {
          runningTotal += currentCurrencyValue
        }
      }
      change.push([cidReversed[i][0], runningTotal])
      totalDue = Number((totalDue - runningTotal).toFixed(2))
      continue
    }
  }
  let secondCheck = 0
  for (let item of change) {
    secondCheck = Number((secondCheck + item[1]).toFixed(2))
  }
  if (secondCheck - (cash - price) === 0) {
    return {status: "OPEN", change}
  } else {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
}


// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) // should return an object.
// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) // should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) // should return {status: "INSUFFICIENT_FUNDS", change: []}.
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) // should return {status: "INSUFFICIENT_FUNDS", change: []}.
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.