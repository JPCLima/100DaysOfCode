'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const hours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order(startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ startIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order recevived! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} 
        will be delivered to ${address} at ${time}`);
    },
    // ES6 enhanced Object Literals
    hours,

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious past with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza(mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    }
};


const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// Looping arrays with for loop
for (const item of menu) console.log(item);

// Get the item and the index
for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

console.log(restaurant.hours.fri.open);

// Optional Chaining - pass undefenedd if mon doesnt exist
console.log(restaurant.hours.mon?.open);
console.log(restaurant.hours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
    console.log(day);
    const open = restaurant.hours[day]?.open ?? 'closed';
    console.log(`On ${day}, we are opne at ${open}`);
}

// Methods
console.log(restaurant.orderSomething?.(0, 1) ?? 'Method doesnt exist')

// Arrays 
//const users = [{ name: 'Joao', email: 'email@joao.pt' }]
const users = [];
console.log(users[0]?.name ?? 'User array empty');

//Looping Object: object key, values and Entities
// Create an array with the properties of the object
// Property names
const properties = Object.keys(hours);
let openStr = `We are open on ${Object.keys(hours).length} days: `
for (const day of Object.keys(hours)) openStr += `${day} `;

console.log(openStr);
// Property values
const values = Object.values(hours);
console.log(values);

// Entire Objects
const entries = Object.entries(hours);
console.log(entries);

for (const [key, { open, close }] of entries) {
    console.log(`on ${key} we open and close at ${close}`);
}

// Set 
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pizza', 'Risotto']);
console.log(ordersSet);

// Size of set
console.log(ordersSet.size);

// Includes ethe elment
console.log(ordersSet.has('Bread'));

// Add elment
console.log(ordersSet.add('Bread'));
console.log(ordersSet.add('Bread'));

// Delete element
console.log(ordersSet.delete('Bread'));

// Clean set: ordersSet.clear()

// Main use of sets is to remove duplicates of one array
const straff = ['waiter', 'chef', ' manager', 'chef', ' manager', 'waiter'];
const staffUnique = [...new Set(straff)];
console.log(staffUnique);

console.log(new Set('joaopedrocostalima').size);