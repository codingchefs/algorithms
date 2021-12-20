/*function Member(name) {
    this.name = name;
    this.chatroom = null;
}

Member.prototype = {
    send: function (message, toMember) {
        this.chatroom.send(message, this, toMember);
    },

    receive: function (message, fromMember) {
        console.log(`${fromMember.name} to ${this.name}: ${message}`);
    }
}

// Mediator
function Chatroom() {
    this.members = {};
}

Chatroom.prototype = {
    addMember: function (member) {
        this.members[member.name] = member;
        member.chatroom = this;
    },

    send: function (message, fromMember, toMember) {
        toMember.receive(message, fromMember);
    }
}

const chat = new Chatroom();
const bob = new Member("bob");
const john = new Member("john");
chat.addMember(bob);
chat.addMember(john);
bob.send("Hey, John", john);
*/

class Member {
    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }

    send(message, toMember) {
        this.chatroom.send(message, this, toMember);
    }

    receive(message, fromMember) {
        console.log(`${fromMember.name} to ${this.name}: ${message}`);
    }
}

// Mediator
class Chatroom {
    constructor() {
        this.members = {};
    }

    addMember(member) {
        this.members[member.name] = member;
        member.chatroom = this;
    }

    send(message, fromMember, toMember) {
        if (toMember) {
            toMember.receive(message, fromMember);
        } else {
            for (let key in this.members) {
                if (this.members[key] !== fromMember) {
                    this.members[key].receive(message, fromMember);
                }
            }
        }
    }
}

const chat = new Chatroom();
const bob = new Member("bob");
const john = new Member("john");
const tim = new Member("tim");
chat.addMember(bob);
chat.addMember(john);
chat.addMember(tim);
bob.send("Hey, John", john);
// bob to john: Hey, John
bob.send("Hello all");
// bob to john: Hello all
// bob to tim: Hello all