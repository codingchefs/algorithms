function Parent(gender){
    this.gender = gender;

    // attach the common function to each object instance.
    this.yellAtChild = function(){
        console.log('Somebody gonna get a hurt real bad!');
    }
}

// Let's create dad and mom and start yelling at kids.
const dad = new Parent('male');
const mom = new Parent('female');
dad.yellAtChild(); // Somebody gonna get a hurt real bad!
mom.yellAtChild(); // Somebody gonna get a hurt real bad!

// but, Russell has decide to sue you if you use his catch phrase.
// Let's try to tell our already created dad & mon to use different phrase.

// ERROR: Not possible to do this way.
Parent.yellAtChild = function() {  }

// You need to override the `yellAtChild` method for each object instance.
dad.yellAtChild = function(){
    console.log('Shut up!');
};
mom.yellAtChild = function(){
    console.log('Go to bed!');
}
dad.yellAtChild(); // Shut up!
mom.yellAtChild(); // Go to bed!


// Attach the common function to prototype.
Parent.prototype.yellAtChild = function(){
    console.log('Somebody gonna get a hurt real bad!');
};

// Let's create dad and mom and start yelling at kids.
const dad = new Parent('male');
const mom = new Parent('female');
dad.yellAtChild(); // Somebody gonna get a hurt real bad!
mom.yellAtChild(); // Somebody gonna get a hurt real bad!

// but, Russell has decide to sue you if you use his catch phrase.
// Simple: Just modify the function at Parent.prototype.

Parent.prototype.yellAtChild = function(){
    console.log('You are grounded.');
};

dad.yellAtChild(); // You are grounded
mom.yellAtChild(); // You are grounded