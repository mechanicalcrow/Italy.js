'use strict';

const domID = document.querySelector('#output');

const Mannerly = {
    fullName: "Mannerly Jones",
    job: "prostitution",
    hourlyRate: 56,
    bankBalance: 16770
}

// domID.innerHTML = `My name is ${Mannerly.fullName}. I am work in ${job} and earn $${hourlyRate} per hour.`;
domID.innerHTML = `${Mannerly.fullName} is my name and ${Mannerly.job} at $${Mannerly.hourlyRate} hourly is my game.`;