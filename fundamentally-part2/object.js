'use strict';

const domID = document.querySelector('#output');

const Mannerly = {
    fullName: "Mannerly Jones",
    job: "prostitution",
    hourlyRate: 56,
    bankBalance: 16770,
    birthYear: 2003,
    calcAge: function (){
     this.age = 2022 - this.birthYear;
     return this.age;
    }
}


//domID.innerHTML = `${Mannerly.fullName} is my name and ${Mannerly.job} at $${Mannerly.hourlyRate} hourly is my game.`;
Mannerly.calcAge();
domID.innerHTML = Mannerly.age;