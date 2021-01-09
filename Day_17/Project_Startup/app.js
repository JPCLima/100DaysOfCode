const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnsOpen = document.querySelector('.show-modal');

const faders = document.querySelectorAll('.fade-in');


// Function to close the modal
function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Function to open modal
function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// To open the modal
btnsOpen.forEach((btnOpen) => {
    btnOpen.addEventListener('click', openModal)
});

// To close the modal when btn is clicked
btnClose.addEventListener('click', closeModal)

// To close the modal when overlay is clicked
overlay.addEventListener('click', closeModal)

// To close the modal using esc
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
})

// Faders
const appearOptions = {
    threshold: 1
};

const appearOnScroll = new IntersectionObserver(
    function (
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    },
    appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})