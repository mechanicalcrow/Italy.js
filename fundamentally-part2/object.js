"use strict";

const domID = document.querySelector("#domID");

// const Mannerly = {
//     fullName: "Mannerly Jones",
//     job: "prostitution",
//     hourlyRate: 56,
//     bankBalance: 16770,
//     birthYear: 2003,
//     calcAge: function (){
//      this.age = 2022 - this.birthYear;
//      return this.age;
//     }
// };

// Mannerly.calcAge();
// domID.innerHTML = `${Mannerly.fullName} is my name and ${Mannerly.job} at $${Mannerly.hourlyRate} hourly is my game. Oh, and I am ${Mannerly.age}`;
//
//domID.innerHTML = `${Mannerly.age}`;

// const arr = [1, 2, 3, 4, 5];

// let product = 1;

// for(let i = 0; i < arr.length; i++ ){
//     product = product * arr[i];

// }
// domID.innerHTML = `The product of the array ${arr} is simply ${product}. Pay up the $100, please.`;

// const Mark = {
//     fullName: "Mark Miller",
//     mass: 70,
//     height: 1.8,
//     calcBMI: function (){
//         this.bmi = (this.mass / this.height **2).toFixed(2);
//         return this.bmi;
//     }
// };
// Mark.calcBMI();
// console.log(Mark.bmi);
// const John = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function (){
//         this.bmi= (this.mass / this.height **2 ).toFixed(2);
//         return this.bmi;
//     }
// };
// John.calcBMI();

// if (John.bmi > Mark.bmi){
//     domID.innerHTML = `${John.fullName} with the BMI ${John.bmi} is fatter than ${Mark.fullName}, who has ${Mark.bmi} BMI.`;

// } else if(John.bmi > Mark.bmi){
//     domID.innerHTML = `${John.fullName} with the BMI ${John.bmi} is as fat as ${Mark.fullName}, who has ${Mark.bmi} BMI.`;
// } else {
//     domID.innerHTML = `${Mark.fullName} with the BMI ${Mark.bmi} is fatter than ${John.fullName}, who has ${John.bmi} BMI.`;
// }

// const countEngine = "This string.";

// for(let repCount = 1; repCount <= countEngine.length; repCount++){
//   let li = document.createElement('li');
//   document.querySelector('ul').append(li) = `Rep ${repCount}`;

// }

// const Mannerly = [
//     "Mannerly Jones",
//      "prostitution",
//     56,
//    16670,
//    2003 - 1977,
//     [ "Debra Spark",  "Michael Parker", "David Shields", "Jeremy Gavron", "Maud Casey"]
//   ];

//   const types =[]
// // continute and break
// for(let i = 0; i < Mannerly.length; i++){
//   if(typeof Mannerly[i] !== 'number') continue;
//   console.log(Mannerly[i], typeof Mannerly[i]);
// }

//domID.innerHTML = `${Mannerly.age}`;

//  const types = [];

// for(let i = 0; i < Mannerly.length; i++){
//   // types[i] = typeof Mannerly[i];
//   types.push(typeof Mannerly[i]);
// }
// domID.innerHTML = types;
// const years = [1966, 1969, 1976, 1990];
// const ages = [];

// for(let i = 0; i < years.length; i++){
//   ages.push(2022 - years[i]);
// }

//domID.innerHTML = ages;

// const reversal = [];
// for(let i = Mannerly.length -1; i >= 0; i--){
//   if(typeof Mannerly[i] !== 'object') continue;
//   console.log(i, typeof Mannerly[i]);
//}

// for(let exercise = 1; exercise < 4; exercise++){
//   console.log(`-----------------Starting Exercise ${exercise} of 3??????`);
//   let rep = 1;

//  let dice = Math.trunc(Math.random() * 6) + 1;
// while(dice !== 6){
//   console.log(`You rolled a ${dice}..... ????`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if(dice === 6){
//     console.log(`Loop ends here on a 6! ????`);
//   }
// }

//}

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// let totals = [];
// let tips = [];

// const calcTips = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// for (let i = 0; i < bills.length; i++) {
//   const bill = bills[i];
//   const tip = calcTips(bills[i]);
//   totals.push(bill + tip);
//   const total = totals[i];
//   tips.push(tip);

//   console.log(`Bill: $${bill} Tips: $${tip} Total: $${total}`);
// }

// function calcT(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(`$${sum / arr.length}`);
// }
// console.log(`********Year End Average of All Bills********`);
// calcT(totals);
const temp = [-2, -1, 0, "error", 1, 10, 11];
const newArr = [];

function rangeFinder(arr) {
  return `${Math.max(...arr) - Math.min(...arr)}`;
}

for (let i = 0; i < temp.length; i++) {
  if (typeof temp[i] !== "number") continue;

  newArr.push(temp[i]);
}

let answer = rangeFinder(newArr);
domID.innerHTML = ` The amplitude of desert temps this night as been ${answer}&#8451.`;
