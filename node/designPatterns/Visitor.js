/*function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
}

Employee.prototype = {
    getSalary: function () {
        return this.salary;
    },

    setSalary: function (salary) {
        this.salary = salary;
    },

    accept: function (visitor) {
        visitor(this);
    }
}

const extraSalary = function (emp) {
    // double the salary
    emp.setSalary(emp.getSalary() * 2);
}

const emp = new Employee("john", 2000);
console.log(emp.getSalary());
// 2000
emp.accept(extraSalary);
console.log(emp.getSalary());*/
// 4000


// ES6
class Employee {
    constructor(name, salary) {
        this.name = name;
        this._salary = salary;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;
    }

    accept(visitor) {
        visitor(this);
    }
}

const extraSalary = function (emp) {
    // double the salary
    emp.salary = emp.salary * 2;
}

const emp = new Employee("john", 2000);
console.log(emp.salary);
// 2000
emp.accept(extraSalary);
console.log(emp.salary);