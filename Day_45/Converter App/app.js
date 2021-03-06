const currencyEl_one = document.getElementById('currency-1');
const currencyEl_two = document.getElementById('currency-2');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch the exchanges rates to update the DOM
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    // fetch
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`).then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two];
            console.log(rate)
            rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;

            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
        })

    console.log(currency_one, currency_two)
}

function swapValues() {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
}

// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
swap.addEventListener('click', swapValues)
