/*
function Others() {
    this.type = 'others';
}

function Administrator() {
    this.type = 'administrator';
}

function EmployeeFactory() {
    this.create = (name) => {
        switch(name) {
            case 'Shaun':
                return new Administrator();
                break;
            default:
                return new Others();
                break;
        }
    }
}

function say() {
    console.log(`Hi, my role is ${this.type}`);
}

const employeeFactory = new EmployeeFactory();
const emp1 = employeeFactory.create('Shaun');
console.log(say.call(emp1));

const emp2 = employeeFactory.create('Lea');
console.log(say.call(emp2));




class User {
    constructor(typeOfUser) {
        this._canEditEverything = false;

        if(typeOfUser === "administrator") {
            this._canEditEverything = true;
        }
    }

    get canEditEverything() {
        return this._canEditEverything;
    }
}

// Instantiation
let u1 = new User("normalGuy");
console.log(u1.canEditEverything);

let u2 = new User("administrator");
console.log(u2.canEditEverything);*/


class User {
    constructor() {
        this._canEditEverything = false;
    }

    get canEditEverything() {
        return this._canEditEverything;
    }
}

class Administrator extends User {
    constructor() {
        super();
        this._canEditEverything = true;
    }
}

const u2 = new Administrator();
console.log(u2.canEditEverything);
// true


class WinButton {
    paint() {
        console.log("rendered a windows button");
    }
}

class MacButton {
    paint() {
        console.log("rendered a mac button");
    }
}

class WinButtonFactory {
    createButton() {
        return new WinButton();
    }
}

class MacButtonFactory {
    createButton() {
        return new MacButton();
    }
}

class Application {
    factory;
    button;

    constructor(factory) {
        this.factory = factory;
    }

    createUI () {
        this.button = this.factory.createButton();

    }

    paint() {
        this.button.paint();
    }
}

const os = "Mac";
let factory;
if(os === "Mac") {
    factory = new MacButtonFactory();
} else {
    factory = new WinButtonFactory();
}

const app = new Application(factory);
app.createUI();
app.paint();

