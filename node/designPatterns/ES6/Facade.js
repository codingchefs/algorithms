class Mortgage {
    constructor(name) {
        this.name = name;
    }

    // facade that access multiple subsystems
    applyFor(amount) {
        let result = 'approved';
        if (!new Bank().verify(this.name, amount) ||
            !new Credit().get(this.name) ||
            !new Background().check(this.name)
        ) {
            result = 'denied';
        }
        return this.name + " has been " + result + " for a " + amount + " mortgage";
    }
}

class Bank {
    verify(name, amount) {
        // apply complex logic
        return true;
    }
}

class Credit {
    get(name) {
        // apply complex logic
        return true
    }
}

class Background {
    check(name) {
        // apply complex logic
        return true;
    }
}

const mortgage = new Mortgage("John");
const result = mortgage.applyFor("$100,000");
console.log(result);
// John has been approved for a $100,000 mortgage