// Create an Object

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.score = 0;
    }

    login() {
        console.log(`The user ${this.name} logged in ...`);
        return this;
    }
    logout() {
        console.log(`The user ${this.name} logged out ...`);
        return this;
    }
    updateScore() {
        this.score++;
        console.log('Score: ', this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email;
        });
    }
}


let userOne = new User('Bill', 'bill@email.com');
let userTwo = new User('Bob', 'bob@email.com');
let admin = new Admin('Admin', 'admin@email.com');

let users = [userOne, userTwo, admin];

admin.deleteUser(userOne);