const express = require('express');
const app = express();



// Get response according with the path
// Path: /
app.get('/', (req, res) => {
    res.send('Server Home!!!');
})

// Get path pattern for subreddits
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    console.log(subreddit);
    res.send(`<h1>Subreddit: ${subreddit}</h1>`);
})

// Get path pattern for subreddits by id
app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    console.log(subreddit, postId);
    res.send(`<h1>Subreddit: ${subreddit} ID: ${postId}</h1>`);
})

// Path: /cats
app.get('/cats', (req, res) => {
    res.send('Meow!!!');
})

// Path: /dogs
app.get('/dogs', (req, res) => {
    res.send('Woof!!!');
})

// Post request
app.post('/dogs', (req, res) => {
    res.send('Woof!!!');
})

// url: http://localhost:3000/search?q=dgs
// Query Strings
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('Nothing found');
    }
    console.log(req.query);
    res.send(`<h1>Search: ${q}</h1>`)
})


// Post request
app.get('*', (req, res) => {
    res.send("I don't know this path");
})



// Create an server on the port 3000
app.listen(3000, () => {
    console.log('Listening on PORT: 3000');
})