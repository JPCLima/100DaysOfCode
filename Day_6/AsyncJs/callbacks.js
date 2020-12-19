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

function createPost(post, callback) {
    setTimeout(() => {
        // Push a new post to the array posts
        posts.push(post);
        callback();
    }, 2000)
}

// Create a post
createPost({
    title: 'Post Three',
    body: 'This is post two'
}, getPosts);
