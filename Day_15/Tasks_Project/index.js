const express = require('express');
const app = express();
const path = require('path');
// Import random ID
const { v4: uuid } = require('uuid');


// Parse dat to the request body
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// configure app to accept ejs
app.set('views engine', 'ejs');
app.set(path.join(__dirname, '/views'));

// Serving Static Assets in express
app.use(express.static("public"));


// Fake tasks
const tasks = [
    {
        id: uuid(),
        task: 'Go to shop',
        details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        priority: 2
    },
    {
        id: uuid(),
        task: 'Study RESTful',
        details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        priority: 1
    },
    {
        id: uuid(),
        task: 'Got to the cinema',
        details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        priority: 3
    },
    {
        id: uuid(),
        task: 'Clean bedroom',
        details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        priority: 3
    },
]

// Routing
// ----------Tasks-----------
app.get('/tasks', (req, res) => {
    console.log(tasks);
    res.render('tasks/index.ejs', { tasks });
})

// ----------New Task-----------
app.get('/tasks/new', (req, res) => {
    res.render('tasks/new.ejs', { tasks });
})

app.post('/tasks', (req, res) => {
    const { task, priority } = req.body;
    tasks.push({ task, priority, id: uuid() });
    res.redirect('/tasks');
})

// ----------Get Task by ID-----------
app.get('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const task_details = tasks.find(t => t.id === id);
    console.log(id);
    console.log(task_details);
    res.render('tasks/show.ejs', { tasks, task_details });
})

// ----------Edit Task by ID-----------
app.patch('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const newTask = req.body.task;
    const foundTask = tasks.find(t => t.id === id);
    foundTask.task = newTask;
    res.redirect('/tasks');
})




// Create a server on the port 3000
app.listen(3000, () => console.log('Listening on port 3000'))