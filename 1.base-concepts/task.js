"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const d = b ** 2 - (4 * a * c);

  if (d < 0) {
    return arr;
  } else if (d === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (amount === contribution) {
    return 0;
  }
  
    const monthlyPercent = percent / 100 / 12;
    const body = amount - contribution;
    const month = body * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent)**countMonths) - 1)));
    const res = contribution + (month * countMonths);
    return Number(res.toFixed(2));
}
