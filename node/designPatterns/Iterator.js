const items = [1, "devsage", false, 1.24];

function Iterator(items) {
    this.items = items;
    this.index = items.length - 1;
}

Iterator.prototype = {
    hasNext: function () {
        return this.index >= 0;
    },

    next: function () {
        return this.items[this.index--];
    }
}

const it = new Iterator(items);

while (it.hasNext()) {
    console.log(it.next());
}


// The following code creates a Sequence object that returns a list of numbers in the range of ( start, end) with an interval between subsequent numbers.
class Sequence {
    constructor(start = 0, end = Infinity, interval = 1) {
        this.start = start;
        this.end = end;
        this.interval = interval;
    }

    [Symbol.iterator]() {
        let counter = 0;
        let nextIndex = this.start;

        return {
            next: () => {
                if (nextIndex <= this.end) {
                    let result = {value: nextIndex, done: false};
                    nextIndex += this.interval;
                    counter++;
                    return result;
                }
                return {value: counter, done: true}
            }
        }
    }
}

let evenNumbers = new Sequence(2, 10, 2);
for (const num of evenNumbers) {
    console.log(num);
}
