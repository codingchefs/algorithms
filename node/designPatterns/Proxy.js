function CryptoCurrencyAPI() {
    this.getValue = function (coin) {
        console.log("Calling external api...");
        switch (coin) {
            case 'BitCoin':
                return "8,500";
            case 'LiteCoin':
                return "450";
            case 'Ethereum':
                return "2,500";
            default:
                return "0";
        }
    }
}

function CryptoCurrencyProxy() {
    this.cache = {};
    this.api = new CryptoCurrencyAPI();
    this.getValue = function (coin) {
        if (!this.cache[coin]) {
            this.cache[coin] = this.api.getValue(coin);
        }
        return this.cache[coin];
    }
}

const cryptoCurrencyProxy = new CryptoCurrencyProxy();
console.log(cryptoCurrencyProxy.getValue("BitCoin"));
console.log(cryptoCurrencyProxy.getValue("LiteCoin"));
console.log(cryptoCurrencyProxy.getValue("Ethereum"));

console.log(cryptoCurrencyProxy.getValue("BitCoin"));
console.log(cryptoCurrencyProxy.getValue("LiteCoin"));
console.log(cryptoCurrencyProxy.getValue("Ethereum"));

const handler = {
    get: function (target, name) {
        // custom logic
        if (name in target) {
            return target[name];
        } else {
            return 'ERROR!!';
        }
    }
};

const p = new Proxy({}, handler);
p.foo = 'bar';
p.bar = 'baz';
console.log(p.foo, p.bar);
console.log(p.foobar);