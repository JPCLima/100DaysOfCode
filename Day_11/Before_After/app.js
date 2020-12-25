const toggles = document.querySelectorAll('.toggler');

toggles.forEach((toggler) => {
    toggler.addEventListener("click", () => {
        toggler.classList.toggle('active');
        toggler.nextElementSibling.classList.toggle('active');
    })
})