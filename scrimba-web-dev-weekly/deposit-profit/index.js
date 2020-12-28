// https://scrimba.com/learn/adventcalendar/-javascript-challenge-deposit-profit-introduction-cPk7yptk
// https://scrimba.com/learn/adventcalendar/-javascript-challenge-deposit-profit-solution-cbD8Ggca

function depositProfit(deposit, rate, threshold) {
  //  write code here.
  let runningTotal = deposit;
  let numberOfYears = 0;
  while (true) {
    if (runningTotal >= threshold) {
      return numberOfYears;
    } else {
      runningTotal += (runningTotal * rate) / 100;
      numberOfYears++;
    }
  }
}

console.log(depositProfit(100, 20, 170)); // should return 3
