/*var animal = {
    speed: 0,
    run: function (speed) {
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    },

    stop: function () {
        this.speed = 0;
        console.log(`${this.name} stopped`);
    }
};

// use prototype
var rabbit = Object.create(animal);
rabbit.hide = function () {
    console.log(`${this.name} hides!`);
}
rabbit.name = "tom";
console.log(rabbit.run());
console.log(rabbit.stop(5));
console.log(rabbit.hide());*/

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stopped`);
    }
}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }
}

const rabbit = new Rabbit("white rabbit");
console.log(rabbit.run(5));
console.log(rabbit.stop());
console.log(rabbit.hide());