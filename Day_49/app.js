const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const popUp = document.getElementById('popup');
const confirm = document.getElementById('confirm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

confirm.addEventListener('click', () => {
    popUp.className = 'popup';
})

function checkInputs() {
    // get the values of the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();



    // Validation username
    if (usernameValue === "") {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    // Validation email
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    // Validation password
    if (passwordValue === "") {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }

    // Validation password confirmation
    if (password2Value === "") {
        setErrorFor(password2, 'Password cannot be blank');
    } else if (password2Value != passwordValue) {
        setErrorFor(password2, "Passwords doesn't match");
    }
    else {
        setSuccessFor(password2);
    }

    // Add succes msg
    if (isSuccess(username) && isSuccess(email) && isSuccess(password) && isSuccess(password2)) {

        // Set some delay to see all the check marks before submited
        setTimeout(() => {
            // cla
            popUp.className = 'popup popup-success';
            // Clean  all the values from input
            username.value = "";
            email.value = "";
            password.value = "";
            password2.value = "";
            // Clean all the classes
            setDefaultFor(username);
            setDefaultFor(email);
            setDefaultFor(password);
            setDefaultFor(password2);
        }, 3000);

    }

};

// Function to set error msg and styles
function setErrorFor(input, msg) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // Add the error to the small
    small.innerText = msg;

    // Add the error class
    formControl.className = 'form-control error'
};

// Function to success styles
function setSuccessFor(input) {
    const formControl = input.parentElement;

    // Add the success class
    formControl.className = 'form-control success'
};

// Set default styles
function setDefaultFor(input) {
    const formControl = input.parentElement;

    // Add the success class
    formControl.className = 'form-control'
};


// Function to check if its a valid email
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// function to check if success class is in the field
function isSuccess(input) {
    if (input.parentElement.classList.contains('success')) {
        return true;
    }
    return false;
}

