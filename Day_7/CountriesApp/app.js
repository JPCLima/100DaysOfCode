// Select elments
const countriesEl = document.getElementById("countries");
const searchText = document.getElementById("search");
const plane = document.getElementById("plane")


// Get the data from the API
async function getData() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const countries = await res.json();

    // Call the function to display the countries
    displayCountries(countries);
}

// Create a function to create the cards with the countries
function displayCountries(countries) {
    countriesEl.innerHTML = '';

    countries.forEach(country => {
        // Create element div & add class card
        const countryEl = document.createElement('div');
        countryEl.classList.add('card');

        // Create the content of the card
        countryEl.innerHTML = `
            <div>
                <img src="${country.flag}" alt="Germany" />
            </div>
            <div class="card-body">
                <h3 class="country-name">${country.name}</h3>
                <p>
                    <strong>Population:</strong>
                    ${country.population}
                </p>
                <p class="country-region">
                    <strong>Region:</strong>
                    ${country.region}
                </p>
                <p>
                    <strong>Capital:</strong>
                    ${country.capital}
                </p>
            </div>
        `;

        // Append the context to the countriesEl
        countriesEl.appendChild(countryEl);
    })
}

// Call the function to get countries
getData();

// Add an event listener to responde to the search text
searchText.addEventListener('input', e => {
    const { value } = e.target;
    const countryName = document.querySelectorAll('.country-name');

    // Filter the data
    countryName.forEach(country => {
        console.log(country.innerHTML);

        // If the name match the iput box display block
        if (country.innerText.toLowerCase().includes(value.toLowerCase())) {
            // .card -> .card-body -> .country-name
            country.parentElement.parentElement.style.display = 'block';
        } else {
            country.parentElement.parentElement.style.display = 'none';
        }
    })
})


// Toogle theme
plane.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    plane.classList.toggle('dark')
});