const cal = require('./calculation');

const ratePerHour = 300;
var hrWorked = 4;
var givWeek = 6;
const dIncome = cal.multiply(ratePerHour, hrWorked);
const gIncome = cal.multiply(dIncome, givWeek);
const tax = cal.multiply(gIncome, 0.10);
var sss = 1200;
var pagibig = 300;
var philhealth = 400;
var fDeduct = cal.add(cal.add(sss, pagibig), philhealth);
var tDeduct = cal.add(tax, fDeduct);
var nSal = cal.subtract(gIncome, tDeduct);

console.log('The gross income is: ' + gIncome);
console.log('Tax: ' + tax);
console.log('SSS: 1200');
console.log('Pag-Ibig fund: 300');
console.log('PhilHealth: 400');
console.log('Total deductions: ' + tDeduct);
console.log('The net salary is: ' + nSal);
