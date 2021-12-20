class Screen {
    click() {
        console.log("Screen select");
    }

    move() {
        console.log("Screen move");
    }

    zoom() {
        console.log("Screen zoom in");
    }
}

class Audio {
    click() {
        console.log("Audio oink");
    }

    move() {
        console.log("Audio waves");
    }

    zoom() {
        console.log("Audio volume up");
    }

    // can have additional methods

}

class Gestures {
    constructor(output) {
        this.output = output;
    }

    tap() {
        this.output.click();
    }

    swipe() {
        this.output.move();
    }

    pinch() {
        this.output.zoom();
    }
}

class Mouse {
    constructor(output) {
        this.output = output;
    }

    click() {
        this.output.click();
    }

    move() {
        this.output.move();
    }

    wheel() {
        this.output.zoom();
    }
}

const screen = new Screen();
const audio = new Audio();

const hand = new Gestures(screen);
const mouse = new Mouse(audio);

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