const score = document.getElementById('score');
const btnUp = document.getElementById('up');
const btnDown = document.getElementById('down');
const numberDisplay = document.getElementById('number');
const answerDisplay = document.getElementById('answer');

// Keep score
let scoreValue = 0;
let randomNumberDisplay = 0;
let randomNumberNotDisplay = 0;


// Function to create a random number 0-9
function randomNumber() {
    return Math.floor(Math.random() * 10);
}

// Function to check if number is greater or lower the input
function isHigher(a, b) {
    if (a > b) {
        return true;
    }
    return false;
}

// Function to genearate the random number display and the random number not display
function generateTwoRandomNumber() {
    randomNumberDisplay = randomNumber();
    randomNumberNotDisplay = randomNumber();

    // to avoid generate duplpicates
    if (randomNumberDisplay === randomNumberNotDisplay) {
        while (randomNumberDisplay === randomNumberNotDisplay) {
            randomNumberDisplay = randomNumber();
            randomNumberNotDisplay = randomNumber();
        }
    }

    // Display random number
    numberDisplay.textContent = randomNumberDisplay;
}

// Function Display answer
function displayAnswer(answer = true) {
    if (answer) {
        numberDisplay.classList.add('correct');
        answerDisplay.textContent = 'Correct'
        setTimeout(() => {
            numberDisplay.classList.remove('correct');
            answerDisplay.textContent = 'Guess'
        }, 1000);
    } else {
        numberDisplay.classList.add('incorrect');
        answerDisplay.textContent = `Incorrect: ${randomNumberNotDisplay}`
        setTimeout(() => {
            numberDisplay.classList.remove('incorrect');
            answerDisplay.textContent = 'Guess'
        }, 1000);
    };
}

// Function to add score
function displayScore(answer = true) {
    if (answer !== true) {
        if (scoreValue - 1 < 0) {
            score.textContent = scoreValue;
        } else {
            scoreValue -= 1;
            score.textContent = scoreValue;
        }
    } else {
        if (scoreValue + 1 < 0) {
            score.textContent = scoreValue;
        } else {
            scoreValue += 1;
            score.textContent = scoreValue;
        }
    }
}

// Function to check if higher btn is correct
btnUp.addEventListener('click', () => {
    // Create a number a new number which is higher then the random number
    let guess = randomNumberDisplay + 1;

    // Check if number is higher or lower
    if (!isHigher(guess, randomNumberNotDisplay)) {
        // Display correct
        console.log('Correct Guess');

        console.log(randomNumberNotDisplay);

        // Display answer
        displayAnswer();

        setTimeout(() => {
            // Add Score & display
            displayScore();

            // Generate new numbers for new game
            generateTwoRandomNumber();
        }, 1000);

    } else {
        // Display Incorrect
        console.log('Incorrect Guess');
        console.log(randomNumberNotDisplay);

        // Display answer
        displayAnswer(false);

        setTimeout(() => {
            // Add Score & display
            displayScore(false);

            // Generate new numbers for new game
            generateTwoRandomNumber();
        }, 1000);
    }
})

// Function to check if Lower btn is correct
btnDown.addEventListener('click', () => {
    // Create a number a new number which is higher then the random number
    let guess = randomNumberDisplay - 1;

    // Check if number is higher or lower
    if (isHigher(guess, randomNumberNotDisplay)) {
        // Display correct
        console.log('Correct Guess');
        console.log(randomNumberNotDisplay);

        // Display answer
        displayAnswer();

        setTimeout(() => {

            // Add Score & display
            displayScore();

            // Generate new numbers for new game
            generateTwoRandomNumber();
        }, 1000);

    } else {
        // Display Incorrect
        console.log('Incorrect Guess');
        console.log(randomNumberNotDisplay);

        // Display answer
        displayAnswer(false);

        setTimeout(() => {
            // Add Score & display
            displayScore(false);

            // Generate new numbers for new game
            generateTwoRandomNumber();
        }, 1000);

    }
})


// Intialize the game when browser is open
generateTwoRandomNumber();


