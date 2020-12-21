
const input = document.getElementById('input');
const xmasValue = document.getElementById('xmas');
const btn = document.getElementById('btn-submit');
const score = document.getElementById('score');


let phraseDisplay = 'Merry Christmas';
let language = 'English';
let scoreValue = 0;
let counterPhrases = [];
let randomVal = 0;


async function getData() {
    const res = await fetch('data.json');
    const countries = await res.json();

    // Get random Country
    randomVal = getRandomCountry(countries);

    // To make sure the pharses are not the same
    while (counterPhrases.includes(randomVal)) {
        randomVal = getRandomCountry(countries);
    }
    // Add the value to the CounterPhrases to keep track the pharses already played
    counterPhrases.push(randomVal);

    // Set the laguage value
    language = countries[randomVal].language;

    displayPhrases(randomVal, countries);
}

// Display a random pharse in the screen
function displayPhrases(countriesIndex, data) {
    console.log(data[countriesIndex].phrase)
    // Get the pharse fromJSON
    phraseDisplay = data[countriesIndex].phrase
    // Display the phrase
    xmasValue.textContent = phraseDisplay;
}

// Get a random number form the json length
function getRandomCountry(countries) {
    return Math.floor(Math.random() * countries.length)
}

// Resart Game
function resart() {
    // Resart variables    
    scoreValue = 0;
    score.textContent = scoreValue;
    randomVal = 0;
    counterPhrases = [];
}

// Submit the answer
btn.addEventListener('click', (event) => {
    event.preventDefault();
    // Check if the values from user input and language are the same 
    if (language.toLowerCase().includes(input.value.toLowerCase())) {
        console.log('correct');
        // Increase score 
        scoreValue = scoreValue + 1;

        // Check if reach 5 correct
        if (scoreValue === 2) {
            // Display Merry Chrismas you won and reset the score           
            xmasValue.textContent = 'Merry Chrismas You Won';
            console.log('resart');
            // Resart game
            resart();

        } else {
            // Display Correct
            xmasValue.textContent = 'Correct';
            // Display Score           
            score.textContent = scoreValue;
        }


    } else {
        console.log('incorrect');
        // Display Incorrect 
        // Display Correct               
        xmasValue.textContent = `Incorrect: ${language}`;

        // Check if reach 0 incorrect
        if (scoreValue === 0) {
            // if yes: score === score and display score
            score.textContent = scoreValue;
        } else {
            // Subtract 1 point to score display score
            scoreValue--;
            score.textContent = scoreValue;
        }
    }
    // Clean input
    input.value = '';


    setTimeout(() => {
        // Display Correct               
        getData();
    }, 2000);

});

getData();