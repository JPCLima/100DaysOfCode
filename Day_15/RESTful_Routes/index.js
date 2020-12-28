const express = require('express');
const app = express();

// Parse dat to the request body
app.use(express.urlencoded({ extended: true }))
app.use(express.json());


// Routing
// ----------Tasks-----------
app.get('/tasks', (req, res) => {
    res.send('GET /tasks ...');
})

app.post('/tasks', (req, res) => {
    const { task, priority } = req.body;
    res.send(`Task name: ${task}, Priority: ${priority}`);
})


// Create a server on the port 3000
app.listen(3000, () => console.log('Listening on port 3000'))