// Get the elemenst by ID
const jokeEl = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

// Get the joke the the bittons is clicked
get_joke.addEventListener(('click'), getJoke);

// Load the function when we start the page
getJoke();

async function getJoke() {
    // call API
    const jokesRes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    // Get data to JSON
    const joke = await jokesRes.json();

    console.log(joke.joke);

    // Set a new Joke
    jokeEl.innerHTML = joke.joke;

}