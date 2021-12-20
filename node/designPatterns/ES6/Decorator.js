class User {
    constructor(name) {
        this.name = name;
    }

    say() {
        console.log(`User: ${this.name}`);
    }
}

class DecoratedUser extends User {
    constructor(user, address) {
        super(user.name);
        this.user = user;
        this.street = address.street;
        this.city = address.city;
    }

    say() {
        console.log(`Decorated User: ${this.name}, ${this.street}, ${this.city}`);
    }
}

const user = new User("John");
user.say();
// User: John

const decorated = new DecoratedUser(user, {street: "Broad", city: "New York"});
decorated.say();
// Decorated User:John, Broad, New York