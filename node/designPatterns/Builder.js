class Employee {
    constructor(builder) {
        this.name = builder.name;
        this.isEmployee = builder.isEmployee;
        this.money = builder.money || 0;
        this.isManager = builder.isManager;
        this.hours = builder.hours || 0;
        this.shoppingList = builder.shoppingList || [];
    }

    toString() {
        return JSON.stringify(this);
    }
}

class EmployeeBuilder {
    constructor(name) {
        this.name = name;
    }

    makeMoney(money) {
        this.money = money;
        return this;
    }

    withList(list) {
        this.shoppingList = list;
        return this;
    }

    // additional methods that are optionally used
    makeManager(hours = 40) {
        this.isManager = true;
        this.hours = hours;
        return this;
    }

    // additional methods that are optionally used
    makeEmployee() {
        this.isEmployee = true;
        return this;
    }

    build() {
        return new Employee(this);
    }
}


const john = new EmployeeBuilder('john')
    .makeMoney(500)
    .withList(['tv', 'sofa'])
    .build();

console.log(john.toString());