'use strict';

// Default functions
const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199) {

    const booking = {
        flightNum,
        numPassengers,
        price
    };

    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 250);

// Passing Args
const flight = 'LH123';
const joao = {
    name: 'Joao Lima',
    passport: 1234632323,
};

const checkIn = function name(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 1234632323) {
        alert('Checked In')
    } else {
        alert('Wrong Passport');
    }
};

// checkIn(flight, joao);
// console.log(flight, joao)

const newPassport = function name(person) {
    person.passport = Math.trunc(Math.random() * 10000000000000);
};

//newPassport(joao);
//checkIn(flight, joao);

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...other] = str.split(' ');
    return [first.toUpperCase(), ...other].join(' ');
};

const transformer = function (str, fn) {
    console.log(`Transformed str: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!!', upperFirstWord);
transformer('JavaScript is the best!!', oneWord);

// Return Function
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Bob');
greeterHey('Alice');

// Arrow functions
const greetV2 = (greeting) => (name) => console.log(`${greeting} ${name}`);
const greeterHeyV2 = greetV2('Hey');
greeterHeyV2('Bob');
greeterHeyV2('Alice');

// The call and apply methods

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({
            flight: `${this.iataCode}`,
            namme: `${flightNum}`
        })
    },
}

lufthansa.book(239, 'Joao Lima');
lufthansa.book(235, 'Bob A.');
console.log(lufthansa);

const euroWings = {
    airline: 'EuroWings',
    iataCode: 'EW',
    bookings: [],

}

const book = lufthansa.book;

// Call method -> is set the key word this to the function we want to call
book.call(euroWings, 23, 'Alice A.');
console.log(euroWings);

book.call(lufthansa, 23, 'Bill O.');

// Apply method
const flightData = [546, 'Rose W.'];
book.apply(lufthansa, flightData);
// or with spread operator book.call(lufthansa, ...flightData);

// Bind Method
const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
bookEW(26, 'Joao L.')

const bookEW26 = book.bind(euroWings, 26);
bookEW26('Ewa');

// With eventListeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

// The key word as default will be the value of the button, but with the bind functions we can force  to be lufthansa
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// With the binn d funtions is creating a new function with new tax value
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(250));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(250));