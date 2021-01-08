const btn = document.getElementById('btn');
const colorCode = document.getElementById('colorCode');
var slider = document.getElementById("myRange");
const body = document.body;

255, 166, 158
let r = "255";
let g = "166";
let b = "158";
let a = "1";
let randomColor = `rgba(${r}, ${g}, ${b}, ${a})`;

// Add event listener to change colors
btn.addEventListener('click', changeColors);

// Add event listener to change apha value
slider.addEventListener('input', changeAlpha);


// Function to generate a random number from 0 to 255
function getRandomNumber(alpha = false) {
    if (alpha === false) {
        return Math.floor(Math.random() * 256);
    }
    return Math.random().toFixed(1);
}


// Function to generate a rangond RGB color
function generateRGBA() {
    r = getRandomNumber();
    g = getRandomNumber();
    b = getRandomNumber();
    a = getRandomNumber(true);

    return `rgba(${r}, ${g}, ${b}, ${a})`
}

// Function to change the bg
function changeColors() {
    randomColor = generateRGBA();
    // Get the apha value from the randomColor
    let aphaValue = randomColor.split(" ")[3].replace(')', '')
    body.style.background = randomColor;
    btn.style.background = randomColor;
    colorCode.innerText = randomColor;
    slider.style.background = randomColor;
    slider.value = aphaValue * 10
    console.log(aphaValue);
}


// Function to change the alpha value
function changeAlpha() {
    alphaValue = this.value / 10;
    let colorNewAplha = `rgba(${r}, ${g}, ${b}, ${alphaValue})`
    body.style.background = colorNewAplha;
    btn.style.background = colorNewAplha;
    colorCode.innerText = colorNewAplha;
}

