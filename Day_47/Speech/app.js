const navigator = document.getElementsByTagName('nav');
const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

const main = document.getElementById('main');
const voicesSelect = document.getElementById('voices');
const textArea = document.getElementById('text');
const readBtn = document.getElementById('read');
/* const toggleBtn = document.getElementById('toggle'); */


// Data

const data = [
    {
        image: './img/drink.jpg',
        text: "I'm Thirsty"
    },
    {
        image: './img/food.jpg',
        text: "I'm Hungry"
    },
    {
        image: './img/tired.jpg',
        text: "I'm Tired"
    },
    {
        image: './img/hurt.jpg',
        text: "I'm Hurt"
    },
    {
        image: './img/happy.jpg',
        text: "I'm Happy"
    },
    {
        image: './img/angry.jpg',
        text: "I'm Angry"
    },
    {
        image: './img/sad.jpg',
        text: "I'm Sad"
    },
    {
        image: './img/scared.jpg',
        text: "I'm Scared"
    },
    {
        image: './img/outside.jpg',
        text: 'I Want To Go Outside'
    },
    {
        image: './img/home.jpg',
        text: 'I Want To Go Home'
    },
    {
        image: './img/school.jpg',
        text: 'I Want To Go To School'
    },
    {
        image: './img/grandma.jpg',
        text: 'I Want To Go To Grandmas'
    }
];

// Create Box
// Create speech boxes
/* function createBox(item) {
    const box = document.createElement('div');

    const { image, text } = item;

    box.classList.add('box');

    box.innerHTML = `<img src="${image}" alt="${text}"/><p class="info">${text}</p>`;

    main.appendChild(box);
}


data.forEach(createBox);

 */


// Event Listener
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
});

// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide Modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));





