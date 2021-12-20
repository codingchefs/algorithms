var User = function (name) {
    this.name = name;
    this.say = function () {
        console.log("User: " + this.name);
    }
}

var DecoratedUser = function (user, address) {
    this.user = user;
    this.name = user.name; // ensures interface stays same
    this.street = address.street;
    this.city = address.city;
    this.say = function () {
        console.log("Decorated User:" + this.name + ", " + this.street + ", " + this.city);
    }
}

var user = new User("John");
user.say();
// User: John

var decorated = new DecoratedUser(user, {street: "Broad", city: "New York"});
decorated.say();
// Decorated User:John, Broad, New York