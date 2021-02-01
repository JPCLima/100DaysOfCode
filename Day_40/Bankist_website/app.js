'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// Selecting, Create and Delete Elemensts 
// Select 
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allBtn = document.getElementsByTagName('button');
console.log(allBtn);

// Create
const message = document.createElement('div');
message.classList.add('cookie-message');
/* message.textContent = 'We use cookies to improved functionality and analytics'; */
message.innerHTML = 'We use cookies to improved functionality and analytics <button class="btn btn--close-cookie">Got it!</button>';
header.append(message);

// Delete
document.querySelector('.btn--close-cookie')
    .addEventListener('click', function () {
        message.remove();
    })

/* 
// Styles
// Cannot look for the styles of the CSS usinf the .style method
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// get CSS
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// Change the root in the css
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Atributes
const logo = document.querySelector('.nav__logo');
console.log(logo.id);
console.log(logo.src);
console.log(logo.className);
logo.alt = 'Nice Pic'

// Non-standard
console.log(logo.getAttribute('designer'));

// set new attribute
logo.setAttribute('company', 'ABC')


// Data Atrribute
console.log(logo.dataset.versionNumber);

// Classes 
logo.classList.add();
logo.classList.remove();
logo.classList.toggle('ads');
logo.classList.contains('asd');
*/

// Scroll
const btnScrool = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrool.addEventListener('click', (e) => {
    // Scroolling
    section1.scrollIntoView({ behavior: 'smooth' });
})


const h1 = document.querySelector('h1');

const alertH1 = function (e) {
    alert('Read Heading');
}

h1.addEventListener('mouseenter', alertH1);

// removed after 3s
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);


/* h1.onmouseenter = () => alert('Read Heading2'); */

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function (e) {
    console.log('Link');
    this.style.backgroundColor = randomColor(0, 255);
    // Stop the propagation
    e.stopPropagation();
})
document.querySelector('.nav__links').addEventListener('click', function (e) {
    console.log('Link');
    this.style.backgroundColor = randomColor(0, 255);

})
document.querySelector('.nav__link').addEventListener('click', function (e) {
    console.log('Link');
    this.style.backgroundColor = randomColor(0, 255);
})