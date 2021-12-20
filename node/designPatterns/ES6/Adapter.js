// old interface
class Shipping {
    request(zipStart, zipEnd, weight) {
        return '$50';
    }
}

// new interface
class AdvancedShipping {
    login(credentials) {
    };

    setStart(start) {
    };

    setDestination(destination) {
    };

    calculate(weight) {
        return '$40'
    };
}

// adapter interface
class ShippingAdapter {
    shipping = new AdvancedShipping();

    constructor(credentials) {
        this.credentials = credentials;
    }

    request(zipStart, zipEnd, weight) {
        this.shipping.login(this.credentials);
        this.shipping.setStart(zipStart);
        this.shipping.setDestination(zipEnd);
        return this.shipping.calculate(weight);
    }
}

// calling original shipping interface
const shipping = new Shipping();
let cost = shipping.request("78701", "10010", "2 lbs");
console.log("Old cost " + cost);
// Old cost $50

// calling new shipping interface
const adapter = new ShippingAdapter({});
cost = adapter.request("78701", "10010", "2 lbs");
console.log("New cost: " + cost);
// New cost: $40