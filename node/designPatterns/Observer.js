/*const Subject = function () {
    this.observers = [];
}

Subject.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn);
    },

    unSubscribe: function (fnToRemove) {
        this.observers = this.observers.filter((fn) => {
            if (fn !== fnToRemove) return fn;
        });
    },

    fire: function () {
        this.observers.forEach(fn => {
            fn.call()
        });
    }
}

const subject = new Subject();
const observer1 = function () {
    console.log("observer 1 called");
}
const observer2 = function () {
    console.log("observer 2 called");
}
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.unSubscribe(observer1);
subject.fire();*/
// observer 2 called


// ES6
class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unSubscribe(fnToRemove) {
        this.observers = this.observers.filter((fn) => {
            if (fn !== fnToRemove) return fn;
        });
    }

    fire() {
        this.observers.forEach(fn => {
            fn.call()
        });
    }
}

const observer1 = function () {
    console.log("observer 1 called");
}
const observer2 = function () {
    console.log("observer 2 called");
}
const subject = new Subject();
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.unSubscribe(observer1);
subject.fire();