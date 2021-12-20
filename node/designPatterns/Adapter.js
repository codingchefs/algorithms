// old interface
function Shipping() {
    this.request = function (zipStart, zipEnd, weight) {
        return '$50';
    }
}

// new interface
function AdvancedShipping() {
    this.login = function (credentials) {
    };
    this.setStart = function (start) {
    };
    this.setDestination = function (destination) {
    };
    this.calculate = function (weight) {
        return '$40'
    };
}

// adapter interface
function ShippingAdapter(credentials) {
    var shipping = new AdvancedShipping();
    shipping.login(credentials);

    return {
        request: function (zipStart, zipEnd, weight) {
            shipping.setStart(zipStart);
            shipping.setDestination(zipEnd);
            return shipping.calculate(weight);
        }
    }
}

// calling original shipping interface
var shipping = new Shipping();
var cost = shipping.request("78701", "10010", "2 lbs");
console.log("Old cost " + cost);
// Old cost $50

// calling new shipping interface
var adapter = new ShippingAdapter({});
cost = adapter.request("78701", "10010", "2 lbs");
console.log("New cost: " + cost);
// New cost: $40