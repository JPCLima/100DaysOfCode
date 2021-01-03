'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    },

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    orderDelivery: function ({ startIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order recevived! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} 
        will be delivered to ${address} at ${time}`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious past with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza: function (mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    }
};

/*
/////////////////////////////////////////
// The Nullish Coalescing Operator (??)
restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

// Nullish: null and undefined (NOT or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


/////////////////////////////////////////
// Short Circuiting (&& and ||)
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Joao');
console.log('' || 'Joao');
console.log(true || 0);
console.log(undefined || 0);
console.log(undefined || 0 || '' || 'Hello' || 24 || null);

const guest = restaurant.numGuests || 10;
console.log(guest);

console.log('------- AND --------');
console.log(0 && 'Joao');
console.log(7 && 'Joao');
console.log('Hello' && 21 && null && 'Joao');

// Method 1)
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
}

// Method 2) works the same as method 1)
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');



/////////////////////////////////////////
// 1) Destructing
// Rest patterns and parameters - used when the variables are seperated by commas
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others)

// The rest element must to be the last element. Just one Rest in one assignment
const [pizza, , risotto, otherFood] = [...restaurant.mainMenu, restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekday } = restaurant.openingHours;
console.log(sat, weekday);

// 2) Functions
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
}

add(2, 3);
add(2, 3, 3, 3, 4, 5);

const x = [12, 3, 10];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');


/////////////////////////////////////////
// Spread Opeerator - used when the values are seperated by a comma
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArray = [1, 2, ...arr];
console.log(newArray);

// Add new menu to the main menu  from the restaurant
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy arr & join arrays
const mainMenuCopy = [...restaurant.mainMenu];
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps , sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

// Spread the array to the function
const ingredients = [prompt('Lets\'s make pasta! Ingredient 1'),
prompt('Lets\'s make pasta! Ingredient 2'),
prompt('Lets\'s make pasta! Ingredient 3')];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// Copy of the reataurant
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);


/////////////////////////////////////////
// Destructing Objects
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    startIndex: 2,
});

restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    startIndex: 2,
});


// Destructing Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Set new name to the vars
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, openingHours, tags);

// Define default vars in the object
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters)

// Mutating vars
let a = 11;
let b = 99;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects
const { fri: { open: o = 0, close: c } } = openingHours;
console.log(o, c);



////////////////////////////////////////////////
// Destructing Arrays
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switch variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Recived 2 return values from function
const [started, mainCourse] = restaurant.order(2, 0);
console.log(started, mainCourse);

// Nested
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values if there are no values one the object
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r); */