// Object constructor
function Parent(gender){
    this.gender = gender;

    // attach the common function to each object instance.
    this.yellAtChild = function(){
        console.log('Somebody gonna get a hurt real bad!');
    }
}

// ECMA 6
class Parent {
    constructor(model, miles) {
        this.gender = gender;
    }

    yellAtChild (){
        console.log('Somebody gonna get a hurt real bad!');
    }
}

// Usage:
// Let's create dad and mom and start yelling at kids.
const dad = new Parent('male');
const mom = new Parent('female');
dad.yellAtChild(); // Somebody gonna get a hurt real bad!
mom.yellAtChild(); // Somebody gonna get a hurt real bad!