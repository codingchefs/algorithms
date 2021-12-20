/*const Singleton = (() => {
    let instance;

    function UserStore() {
        this._data = [];
        this.add = (item) => {
            this._data.push(item);
        }

        this.get = (id) => {
            return this._data.find(d => d.id === id);
        }
    }

    function createInstance() {
        instance = new UserStore();
        return instance;
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const us1 = Singleton.getInstance();
const us2 = Singleton.getInstance();
console.log("Same instance? " + (us1 === us2));
// Same instance? true*/


class UserStore {
    constructor() {
        this._data = [];
    }

    set data (item) {
        this._data.push(item);
    }

    getData(id) {
        return this._data.find(d => d.id === id);
    }
}

class Singleton {
    constructor() {
        throw new Error('Use Singleton.getInstance()');
    }

    static getInstance() {
        if(!Singleton.instance) {
            Singleton.instance = new UserStore();
        }
        return Singleton.instance;
    }
}

module.exports = Singleton;

