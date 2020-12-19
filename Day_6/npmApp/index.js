const _ = require('lodash');

const numbers = [10, 22, 56, 42, 15, 46, 82];

_.each(numbers, (number, i) => {
    console.log(number);
})