class Employee {
    constructor(name, position, progress) {
        this.name = name;
        this.position = position;
        this.progress = progress;
    }

    // abstract methods
    progress() {

    }
}

class Developers extends Employee {
    constructor(name, position, progress) {
        super(name, position, progress);
    }

    getProgress() {
        return this.progress;
    }
}

class FreeLanceDev extends Employee {
    constructor(name, position, progress) {
        super(name, position, progress);
    }

    getProgress() {
        return this.progress;
    }
}

class DevTeamLead extends Employee {
    constructor(name, position, progress) {
        super(name, position, progress);
        this.teamMembers = [];
    }

    addMember(employee) {
        this.teamMembers.push(employee);
    }

    removeMember(employee) {
        const index = this.teamMembers.findIndex(mem => mem.name === employee.name);
        this.teamMembers.splice(index, 1)
    }

    showMembers() {
        this.teamMembers.forEach(mem => {
            console.log(mem.name);
        })
    }

    getProgress() {
        this.teamMembers.forEach(mem => {
            console.log(mem.getProgress());
        });
    }
}

const seniorDev = new Developers("John", "Senior Developer", "60%");
const juniorDev = new Developers("Kate", "Junior Developer", "50%");
const teamLead = new DevTeamLead("Graham", "Dev Team Lead", "90%");

console.log("John's progress:")
seniorDev.getProgress();
teamLead.addMember(seniorDev);
teamLead.addMember(juniorDev);
console.log("Team member list:")
teamLead.showMembers();
// John
// Kate
console.log("Team member progress:")
teamLead.getProgress();
// 60%
// 50%
console.log("Removing Kate from team:")
teamLead.removeMember(juniorDev);
console.log("Updated Team member list:")
teamLead.showMembers();
// John