const container = document.getElementById('container');
const btn = document.getElementById('btn');
const CIRCLES_NUM = 1000;

// Array of colors
const colors = ['#96CEB4', '#FFEEAD', '#FF6F69', '#FFCC5C', '#F3AD57'];

for (let i = 0; i < CIRCLES_NUM; i++) {
    // Create a circles
    const circle = document.createElement('div');
    circle.classList.add('circle');

    circle.addEventListener('mouseover', () => {
        setColorToEl(circle);
    });

    circle.addEventListener('mouseout', () => {
        removeColorToEl(circle);

    });

    container.append(circle);
}


// Function to set a color
function setColorToEl(el) {
    const color = getRandomColor();
    el.style.background = color;
    el.style.boxShadow = `0 0 2px ${color},0 0 10px ${color} `;

}

// Function to set the color back to the the default color
function removeColorToEl(el) {
    el.style.background = 'gray';
    el.style.boxShadow = '0 0 2px gray'
}

// Choose a random color from array
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

