const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnsOpen = document.querySelectorAll('.show-modal');


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