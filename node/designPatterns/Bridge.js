function Screen() {
    this.click = function () {
        console.log("Screen select");
    }

    this.move = function () {
        console.log("Screen move");
    }

    this.zoom = function () {
        console.log("Screen zoom in");
    }
}

function Audio() {
    this.click = function () {
        console.log("Audio oink");
    }

    this.move = function () {
        console.log("Audio waves");
    }

    this.zoom = function () {
        console.log("Audio volume up");
    }
}

function Gestures(output) {
    this.output = output;
    this.tap = function () {
        this.output.click();
    }
    this.swipe = function () {
        this.output.move();
    }
    this.pinch = function () {
        this.output.zoom();
    }
}

function Mouse(output) {
    this.output = output;
    this.click = function () {
        this.output.click();
    }
    this.move = function () {
        this.output.move();
    }
    this.wheel = function () {
        this.output.zoom();
    }
}

var screen = new Screen();
var audio = new Audio();

var hand = new Gestures(screen);
var mouse = new Mouse(audio);

hand.tap();
// Screen select
hand.swipe();
// Screen move
hand.pinch();
// Screen zoom in
mouse.click();
// Audio oink
mouse.move();
// Audio waves
mouse.wheel();
// Audio volume up