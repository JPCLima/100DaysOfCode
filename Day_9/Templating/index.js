const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

// configure app to accept ejs
app.set('views engine', 'ejs');
app.set(path.join(__dirname, '/views'));

// Serving Static Assets in express
app.use(express.static(path.join(__dirname, 'public')));

// Create the root
app.get('/', (req, res) => {
    res.render('home.ejs');
})

// Create the random page
app.get('/random', (req, res) => {
    const number = Math.floor(Math.random() * 10);
    res.render('random.ejs', { number });
})


// Patterns
app.get('/search/:topic', (req, res) => {
    const { topic } = req.params;
    const data = redditData[topic];
    const listNames = ['Bill', 'Bob', 'Alice', 'Tim'];
    res.render('subreddit.ejs', { topic, listNames, ...data });
})

// Listener server
app.listen(3000, () => {
    console.log('Listening on PORT: 3000');
})