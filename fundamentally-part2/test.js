"use strict";

domID = document.querySelector("#domID");

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let totals = [];
let tips = [];

const calcTips = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
