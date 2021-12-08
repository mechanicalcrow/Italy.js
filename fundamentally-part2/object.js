'use strict';

 const domID = document.querySelector('#output');

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



const Mannerly = [
    "Mannerly Jones",
     "prostitution",
    56,
   16670,
   2003 - 1977,
    [ "Debra Spark",  "Michael Parker", "David Shields", "Jeremy Gavron", "Maud Casey"]
  ];



 //domID.innerHTML = `${Mannerly.age}`;

 const types = [];

for(let i = 0; i < Mannerly.length; i++){
  types[i] = typeof Mannerly[i];
}
console.log(types);


