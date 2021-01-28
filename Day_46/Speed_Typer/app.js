const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');


// List of words
const words = [
    'red',
    'tense',
    'which',
    'egg',
    'ball',
    'juice',
    'car',
    'young',
    'home',
    'swimming',
    'water',
    'still',
    'hear',
    'river',
    'year',
    'eight',
    'under',
    'light',
    'drag',
    'often'
];

// Initialize
let randomWord;
let score = 0;
let time = 10;

// Focous the input
text.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Functions
// Generate random word
function getRandomWord() {
    return words[Math.trunc(Math.random() * words.length)]
}

// Add word to the DOM 
function addWord() {
    randomWord = getRandomWord();
    word.textContent = randomWord;
}

// Update the Score
function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

// Game Over function
function gameOver() {
    endgameEl.innerHTML = `
    <h1>Time out</h1>
    <p>Final score: ${score}</p>
    <button onclick="location.reload()">Resart</button>
    `;

    endgameEl.style.display = 'flex';
}

// Update time
function updateTime() {
    time--;
    timeEl.innerHTML = time + 's';

    if (time === 0) {
        clearInterval(timeInterval);

        // End the game
        gameOver();
    }
}

addWord();

// Event Listener
text.addEventListener('input', (e) => {
    const insertedText = e.target.value;

    if (insertedText === randomWord) {
        // Add new word
        addWord();
        // Update Score
        updateScore();
        // clear input
        text.value = '';
    }
})
