let sayMixin = {
    say(phrase) {
        console.log(phrase);
    }
};

let sayHiMixin = {
    __proto__: sayMixin, // sets prototype
    sayHi() {
        super.say(`Hello ${this.name}`);
    },
};

class User {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(User.prototype, sayHiMixin);

new User("John").sayHi();
// Hello John