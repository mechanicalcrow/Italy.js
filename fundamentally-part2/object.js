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
// }


// //domID.innerHTML = `${Mannerly.fullName} is my name and ${Mannerly.job} at $${Mannerly.hourlyRate} hourly is my game.`;
// Mannerly.calcAge();
// domID.innerHTML = Mannerly.age;

const arr = [1, 2, 3, 4, 5];

let product = 1;

for(let i = 0; i < arr.length; i++ ){
    product = product * arr[i];
    
}
domID.innerHTML = `The product of the array ${arr} is simply ${product}. Pay up the $100, please.`;