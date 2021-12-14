"use strict";

const domID = document.querySelector("#domID");

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let totals = [];
let tips = [];

const calcTips = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++) {
  const bill = bills[i];
  const tip = calcTips(bills[i]);
  totals.push(bill + tip);
  const total = totals[i];
  tips.push(tip);

  console.log(`Bill: $${bill} Tips: $${tip} Total: $${total}`);
}

function calcT(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(`$${sum}`);
}
console.log(`********Year End Total for All Bills********`);
calcT(totals);
