const inputTask = document.getElementById('input-task');
const btnSubmit = document.getElementById('btn');
const list = document.getElementById('list');
const liTaks = document.querySelectorAll('li');

// Array to store the tasks
let tasks = [];


// Delete the tasks
liTaks.forEach((l) => {
    l.addEventListener('click', () => {
        console.log(l);
    })
});

// Add evenet listener when the the button is clicked 
btnSubmit.addEventListener('click', e => {
    // Prevent default behaviour 
    e.preventDefault();

    // Get the input
    let input = inputTask.value;

    // Add the input to the list 
    addToArray(input);

    // Selecting the last element added to thee list
    let lastElement = tasks[tasks.length - 1]
    // Add the last elemnt to the html list
    addTask(lastElement);

    // Clean the input
    inputTask.value = '';
});


function addTask(task) {

    // Create node - li
    let node = document.createElement('li');

    // Create Text for the node
    let taskName = document.createTextNode(task);

    // Append the text to the li
    node.appendChild(taskName);

    // Append the li tag to the ul list - called list
    list.appendChild(node);
}

function removeTask(tasks) {
    let li = document.querySelector('li');
    list.removeChild(li);
}


function addToArray(task) {
    tasks.push(task);
}

