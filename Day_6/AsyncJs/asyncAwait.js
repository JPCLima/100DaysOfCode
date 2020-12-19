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

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000)
    });
}

// Handel response 
async function init() {
    // Run the function and wait until will be finish
    await createPost({ title: 'Post Three', body: 'This is post two' });

    // Justa fater the create post is done - get the post
    getPosts();
};

init();