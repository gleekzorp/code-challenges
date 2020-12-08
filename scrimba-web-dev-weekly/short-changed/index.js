function roll(min, max, floatFlag) {
  let r = Math.random() * (max - min) + min
  return floatFlag ? r : Math.floor(r)
}

let testPurses = Array(5).fill(0).map(a => {
  return {
    quarters: roll(0, 15),
    dimes: roll(0, 30),
    nickels: roll(0, 40),
    pennies: roll(0, 50),
    price: Number(roll(0, 10, 1).toFixed(2))
  }
})
/* 
    Write a function enoughChange
    
    Given an object representing a coin purse, and a price
        it should return true/false depending on whether 
        or not you have enough change to complete a 
        purchase at the given price
    
    The function should also update the "counters"
        such that they reflect the quantities in
        the test case
        
    You should then use this function to update the 
        purchaseConfirmation div to display whether
        or not you can afford the purchase with the
        coin quantities provided
        
    Finally, create nextCase and previousCase 
        buttons to cycle through the test cases 
    
    Refresh the mini-browser or save this file to
        load new test cases!
*/

const purchaseConfirmation = document.getElementById("purchase-confirmation")
const quarterCounter = document.getElementById("quarter-count")
const dimeCounter = document.getElementById("dime-count")
const nickelCounter = document.getElementById("nickel-count")
const pennyCounter = document.getElementById("penny-count")
const previousCaseBtn = document.getElementById('previous-case')
const nextCaseBtn = document.getElementById('next-case')

let current = 0
let max = testPurses.length
let sampleTest = testPurses[current]

// Your code here 👇

previousCaseBtn.addEventListener('click', () => {
  if (current === 0) {
    current = max - 1
    sampleTest = testPurses[current]
    displayResult()
    return
  }

  current--
  if (current < max) {
    sampleTest = testPurses[current]
    displayResult()
  } else {
    current = 0
    sampleTest = testPurses[current]
    displayResult()
  }
})

nextCaseBtn.addEventListener('click', () => {
  current++
  if (current < max) {
    sampleTest = testPurses[current]
    displayResult()
  } else {
    current = 0
    sampleTest = testPurses[current]
    displayResult()
  }
})

const displayCoinCounts = () => {
  quarterCounter.innerHTML = sampleTest.quarters
  dimeCounter.innerHTML = sampleTest.dimes
  nickelCounter.innerHTML = sampleTest.nickels
  pennyCounter.innerHTML = sampleTest.pennies
}

const enoughChange = () => {
  displayCoinCounts()
  const quarterTotal = Number((sampleTest.quarters * .25).toPrecision(2))
  const dimeTotal = Number((sampleTest.dimes * .10).toPrecision(2))
  const nickelTotal = Number((sampleTest.nickels * .05).toPrecision(2))
  const pennyTotal = Number((sampleTest.pennies * .01).toPrecision(2))
  let coinTotal = Number((quarterTotal + dimeTotal + nickelTotal + pennyTotal).toPrecision(2))
  return {result: coinTotal > sampleTest.price, coinTotal, price: sampleTest.price}
}

const displayResult = () => {
  let {result, coinTotal, price} = enoughChange()
  purchaseConfirmation.innerHTML = `
    With $${coinTotal} in coins, you ${result ? 'can' : 'cannot'} afford this $${price} purchase.
  `
  purchaseConfirmation.style.background = result ? 'green' : 'red'
}

displayResult()