/*const Fedex = function () {
    this.calculate = (package) => {
        return 2.45;
    }
}

const USPS = function () {
    this.calculate = (package) => {
        return 1.56;
    }
}

const UPS = function () {
    this.calculate = (package) => {
        return 4.56;
    }
}

function Shipping(company) {
    this.company = '';
}

Shipping.prototype = {
    setStrategy: (company) => {
        this.company = company;
    },

    calculate: (package) => {
        return this.company.calculate(package);
    }
}

// 3 strategies
const fedex = new Fedex();
const usps = new USPS();
const ups = new UPS();
const package = {from: 'Newark', to: 'Florida', weight: '1.5kg'};

const shipping = new Shipping();
shipping.setStrategy(fedex);
console.log(`Fedex: ${shipping.calculate(package)}`);

shipping.setStrategy(usps);
console.log(`USPS: ${shipping.calculate(package)}`);

shipping.setStrategy(ups);
console.log(`UPS: ${shipping.calculate(package)}`);*/

// ES6
class Fedex {
    calculate = (t) => {
        return 2.45;
    }
}

class USPS {
    calculate = (t) => {
        return 1.56;
    }
}

class UPS {
    calculate = (t) => {
        return 4.56;
    }
}

class StrategyManager {
    constructor() {
        this._strategy = null;
    }

    set strategy(strategy) {
        this._strategy = strategy;
    }

    get strategy() {
        return this._strategy;
    }

    calculate(t) {
        return this._strategy.calculate(t);
    }
}

const strategyManager = new StrategyManager();
const fedex = new Fedex();
const usps = new USPS();
const ups = new UPS();
const pkgDetails = {from: 'Newark', to: 'Florida', weight: '1.5kg'};

strategyManager.strategy = fedex;
console.log(`Fedex: ${strategyManager.calculate(pkgDetails)}`);

strategyManager.strategy = usps;
console.log(`USPS: ${strategyManager.calculate(pkgDetails)}`);

strategyManager.strategy = ups;
console.log(`UPS: ${strategyManager.calculate(pkgDetails)}`);