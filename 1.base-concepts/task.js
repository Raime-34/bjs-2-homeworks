"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let discriminant = b**2-4*a*c;
  switch (true) {
    case discriminant == 0:
        arr.push(-b/(2*a));
        break;
    case discriminant > 0:
        arr.push((-b+Math.sqrt(discriminant))/(2*a));
        arr.push((-b-Math.sqrt(discriminant))/(2*a));
        break;
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentNormalized = percent/1200;
  let body = amount - contribution;
  let fee = body * (percentNormalized + (percentNormalized / (((1 + percentNormalized) ** countMonths) - 1)));
  return Number((fee * countMonths).toFixed(2));
}