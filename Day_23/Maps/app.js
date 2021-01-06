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

// Maps
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'Wea are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);
console.log(rest.size);
const arr = [1, 2];
rest.set(arr, 'Test');

console.log(rest.get(arr))

const question = new Map([
    ['question', 'What is the ...? '],
    [1, 'A'],
    [2, 'B'],
    [3, 'C'],
    [4, 'D'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try Again!!'],
]);

console.log(question);
// Convert Ojects to Map
const hoursMap = new Map(Object.entries(hours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answers ${key}: ${value}`)
}
const answer = 3;

console.log(question.get(question.get('correct') === answer));

// Working with Strings
const airline = 'TAP Air Portugal';
const plane = 'A320';

// Select char by the index
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
// Length of the sting
console.log(plane.length);

// Methods
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

// Slice Method
console.log(airline.slice(4));
// Dont include the last element of the index slice
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));


const checkMiddleSeat = function (seat) {
    // B and E are the middle seats
    const s = seat.slice(-1);

    if (s === 'B' || s === 'E') {
        console.log('Middle seat');
    } else {
        console.log('Lucky seat')
    }
};

checkMiddleSeat('12B')
checkMiddleSeat('02C')
checkMiddleSeat('14E')

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'joAO';
const passengerLower = passenger.toLowerCase();
const passengerCapitalize = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCapitalize);

// Comapring emails
const email = 'hello@email.com';
const loginEmail = 'Hello@EMAIl.com \n';

const lowerEmail = email.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizeEmail = email.toLowerCase().trim();
console.log(normalizeEmail);

// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const phrase = 'All something all and all';
console.log(phrase.replace(/all/g, 'a'));

// Booleans
const plane2 = 'A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.startsWith('A320a'));

// Practice 
const checkBaggage = function (item) {
    const baggage = item.toLowerCase();
    if (baggage.includes('gun') || baggage.includes('knife')) {
        console.log('You are not allowed on board');
    } else {
        console.log('welcome aboard!!');
    }
}
checkBaggage('I have a laptop and, some Cables')
checkBaggage('I have a laptop and, and a gun')

// Split
console.log('This+is+a+string'.split('+'));
console.log('João Lima'.split(' '));

const [firstName, lastName] = 'Joao Lima'.split(' ');

// Join
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);


const capitalizeV2 = function (name) {
    const arrNames = name.split(' ');
    const namesUpper = [];
    for (name of arrNames) {
        namesUpper.push(name[0].toUpperCase() + name.slice(1));
    }
    console.log(namesUpper.join(' '));
}

const newPassenger = 'Joao pedro costa Lima';
capitalizeV2(newPassenger); 1