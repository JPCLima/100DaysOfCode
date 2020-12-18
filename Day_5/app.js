const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const spans = document.querySelectorAll('.text span');

// Create a list of 2 random numbers
let randomNumbersList = randomNumbers();

// Create event listener for each span
spans.forEach((span, idx) => {
    span.addEventListener('click', (e) => {
        if (idx === randomNumbersList[0] || idx === randomNumbersList[1]) {
            e.target.classList.add('fall');
        } else {
            e.target.classList.add('balance');
        }
        span.addEventListener('animationend', (e) => {
            e.target.classList.remove('fall');
            e.target.classList.remove('balance');
        });


    })
})

// Function to create a list with 2 random number 0 to 5
function randomNumbers() {
    let randomNumber1 = Math.floor(Math.random() * 6);
    let randomNumber2 = Math.floor(Math.random() * 6);
    if (randomNumber2 === randomNumber1) {
        return [randomNumber1, randomNumber2];
    }
    return [randomNumber1, randomNumber2];
}



// Search tool Event listener
btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
});