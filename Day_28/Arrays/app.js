'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};

const accounts = [account1, account2];

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

const displayMovements = function (acc, sort = false) {
    containerMovements.innerHTML = '';

    const movements = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

    movements.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1
            } ${type}</div>
          <div class="movements__value">${mov.toFixed(2)}€</div>
        </div>
      `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};


const user = 'Steven Thomas Williams'; // SDW

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
    labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};



const calDisplaySummary = (acc) => {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes.toFixed(2)}€`;

    const outcomes = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);

    labelSumOut.textContent = `${Math.abs(outcomes).toFixed(2)}€`;

    const interest = movements.filter(mov => mov > 0)
        .map(mov => mov * acc.interestRate / 100)
        .filter(int => int >= 1)
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};



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

const updateUI = function (acc) {
    // Display Balnace
    displayMovements(acc);
    // Display movements
    calcDisplayBalance(acc);
    // Display Summary
    calDisplaySummary(acc);
};

// Evenet handler
let currentAccount;

const now = new Date();
const day = `${now.getDay()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = now.getHours();
const min = now.getMinutes();
labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount);

    if (currentAccount?.pin === +(inputLoginPin.value)) {
        // Display UI and welcome MSG
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
        // Display movements
        containerApp.style.opacity = 100;

        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        // Update UI
        updateUI(currentAccount);

    }
});

btnTransfer.addEventListener('click', e => {
    e.preventDefault();
    const amount = +(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
    console.log(amount, receiverAcc);

    // Clean input
    inputTransferAmount.value = inputTransferTo.value = '';

    if (amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc?.username !== currentAccount.username) {
        // Doing the transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        // Update UI
        updateUI(currentAccount);

        // Clean input

    }
})

btnClose.addEventListener('click', e => {
    e.preventDefault();
    console.log('delete');

    if (inputCloseUsername.value === currentAccount.username &&
        +(inputClosePin.value) === currentAccount.pin) {
        const index = accounts.findIndex(acc => acc.username === currentAccount.username);
        accounts.splice(index, 1);


        // Hide UI
        containerApp.style.opacity = 0;
    }

    // Clean input
    inputCloseUsername.value = inputClosePin.value = '';

});

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Math.floor(inputLoanAmount.value);

    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        // Add movement
        currentAccount.movements.push(amount);

        // Update UI
        updateUI(currentAccount);
    }

    inputLoanAmount.value = '';
});

let sorted = false;
btnSort.addEventListener('click', (e) => {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
})



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


// Reduce
const balance = movements.reduce((acc, cur) => acc + cur, 0);

let balanceFor = 0;
for (let mov of movements) balanceFor += mov;

// Max value
const max = movements.reduce((acc, cur) => cur > acc ? cur : acc);


const totalDepositsUSD = movements
    .filter(mov => mov < 0)
    //.map(mov => mov * 1.1)
    .map((mov, i, arr) => {
        console.log(arr);
        return mov * 1.1
    })
    .reduce((acc, cur) => acc += cur);
console.log(totalDepositsUSD);

const firstWithhdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithhdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis')
console.log(account);

// Using the for of Loop
for (let a of accounts) {
    if (a.owner === 'Jessica Davis') {
        console.log(a);
    }
}


console.log(movements);
// Equality
console.log(movements.includes(-130));

// Conditions
const anyDeposit = movements.some(mov => mov > 50000);
console.log(anyDeposit);

// Every
console.log(movements.every(movements => movements > 0));


// Creating arrays
const x = new Array(7);
console.log(x.fill(2, 3));

const y = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(y);


// Numbers
// Convertions
console.log(Number('24'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('24px'));
console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('2.5rem'));
console.log(Number.isFinite(20));

// Math and Rounding
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));

console.log(Math.max(5, 3, 4, 58, 10, 22));
console.log(Math.min(5, 3, 4, 58, 10, 22));

const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(1, 5));

// Rounding integers
console.log(Math.round(20.3));
console.log(Math.ceil(20.3));
console.log(Math.floor(20.3));

// Remaider
console.log(5 % 2);

const isEven = number => number % 2 === 0;
console.log(isEven(2));

// Big int
console.log(Number.MAX_SAFE_INTEGER);
console.log(1121212222222221548551541515151n);

// Operations
console.log(10000n + 10000n);

// Dates
const now = new Date();
console.log(now);
console.log(new Date('Aug 02 2020 18:02:00'));

console.log(new Date(2030, 10, 19, 23, 5));
console.log(new Date(0));

console.log(now.getUTCFullYear());
console.log(now.getDate());
console.log(now.getMonth());
*/