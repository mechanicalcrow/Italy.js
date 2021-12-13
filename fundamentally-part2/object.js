"use strict";

const domID = document.querySelector("#output");

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
//   console.log(`-----------------Starting Exercise ${exercise} of 3️⃣`);
//   let rep = 1;

//  let dice = Math.trunc(Math.random() * 6) + 1;
// while(dice !== 6){
//   console.log(`You rolled a ${dice}..... 🎲`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if(dice === 6){
//     console.log(`Loop ends here on a 6! 🎛`);
//   }
// }

//}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let totals = [];
let tips = [];
let runTotal = [];
let average = [];

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
  //console.log(`---Running Bill---`);
  //totals += bills[i];

  //console.log(`---Average of Totals---`);

  console.log(`----Bill + Tip = Total----`);
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
  console.log(bills[i], tip, totals[i]);
  //   console.log(`-----Account Running Grand Total----`);

  //   console.log(total[i] + tip[i]);

  //   console.log(`=====Average of Total up to heclre===`);
  //   average = runTotal / bills.length;
  //   console.log(average);
  //}

  // let sum = 0;
  // let sum2 = 0;

  //   for(let j = 0; j < bills.length; j++){
  // // sum = sum + bills[j];
  // sum2 = sum2 + tips[j];

  //   }

  //   domID.innerHTML = `${sum2}`;
  // console.log(`${totals[3]}`);

  // const cashPrinciple = [100, 23, 500, 230, 800, 25];
  // let interest = 0;

  // let total = 0;

  // let average = 0;

  // for (let i = 0; i < cashPrinciple.length; i++) {
  //   total += cashPrinciple[i];
  //   console.log(`----Cash----`);
  //   console.log(total);

  //   interest += cashPrinciple[i] * 0.07;
  //   console.log(`----Interest----`);
  //   console.log(interest);

  //   console.log(`----GrandTotal---`);
  //   console.log(total + interest);

  //   console.log(`-----average of totals---`);
  //   console.log((total + interest) / cashPrinciple.length);
}
