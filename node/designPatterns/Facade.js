var Mortgage = function (name) {
    this.name = name;
}

Mortgage.prototype = {
    // facade that access multiple subsystems
    applyFor: function (amount) {
        var result = 'approved';
        if (!new Bank().verify(this.name, amount) ||
            !new Credit().get(this.name) ||
            !new Background().check(this.name)
        ) {
            result = 'denied';
        }
        return this.name + " has been " + result + " for a " + amount + " mortgage";
    }
}

var Bank = function () {
    this.verify = function (name, amount) {
        // apply complex logic
        return true;
    }
}

var Credit = function () {
    this.get = function (name) {
        // apply complex logic
        return true
    }
}

var Background = function () {
    this.check = function (name) {
        // apply complex logic
        return true;
    }
}

var mortgage = new Mortgage("John");
var result = mortgage.applyFor("$100,000");
console.log(result);
// John has been approved for a $100,000 mortgage