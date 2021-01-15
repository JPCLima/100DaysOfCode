'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movs) {
    containerMovements.innerHTML = '';

    movs.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1
            } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
      `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};
displayMovements(account1.movements);

const user = 'Steven Thomas Williams'; // SDW

const calcDisplayBalance = function (movements) {
    const balance = movements.reduce((acc, cur) => acc + cur, 0);
    labelBalance.textContent = `${balance}€`;
};
calcDisplayBalance(account1.movements);

const createUserNames = function (accs) {
    accs.forEach(acc => {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    })
}
createUserNames(accounts);
console.log(accounts);



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*

// Arrays
// SLICE
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());

// SPLICE(index, deleteCount)
console.log('Splice:\n')
arr.splice(1, 0);
console.log(arr)

// REVERSE --> mutate the original array
console.log(arr.reverse());
console.log(arr);

// CONCAT
const arr2 = ['f', 'g', 'h', 'i']
const letters = arr.concat(arr2);
const spreadMeathod = [...arr, ...arr2];
console.log(letters);
console.log(spreadMeathod);

// JOIN
console.log(letters.join(' - '));

// LOOP ARRAYS: forEach((item, index, array)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach((item, index, array) => {
    if (item > 0) {
        console.log(`You deposited ${item}`);
    } else {
        console.log(`You withdrew ${Math.abs(item)}`);
    }
})

// LOOP MAP and SET: forEach((item, index, array)
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
    console.log(`${value} ${key}`);
})

// Set
const currenciesUnique = new Set(['USD', 'EUR', 'GBP']);
console.log(currenciesUnique);

currenciesUnique.forEach((value, _, map) => {
    console.log(`${value} ${map}`);
})

// Map
const euroToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * euroToUsd);

console.log(movements);
console.log(movementsUSD);

const movementDesc = movements.map((mov, index) => {
    return `Movement ${index} - ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`;
});

console.log(movementDesc);

// Filter
const deposits = movements.filter(function (mov) {
    return mov > 0
})
console.log(movements);

// Compare with For loop with filter
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);

const withdrawals = movements.filter(mov => mov < 0);

 */
// Reduce
const balance = movements.reduce((acc, cur) => acc + cur, 0);

let balanceFor = 0;
for (let mov of movements) balanceFor += mov;

// Max value 
const max = movements.reduce((acc, cur) => cur > acc ? cur : acc);