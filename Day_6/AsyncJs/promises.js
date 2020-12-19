const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        // Initialize output var to store all the posts
        let output = '';

        // Loop loop through array
        posts.forEach((post, index) => {
            // Appedend the li to the output
            output += `<li>${post.title}</li>`;
        });

        // Display in the output in the HTML 
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Push a new post to the array posts
            posts.push(post);

            const error = true;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000)
    });
}

// Create a post
/* createPost({
    title: 'Post Three',
    body: 'This is post two'
}).then(getPosts).catch(error => console.log(error));
 */

// Promise.all 
const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values))

