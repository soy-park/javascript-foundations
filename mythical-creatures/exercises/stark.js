const Direwolf = require("./direwolf");

class Stark {
    constructor({ name, area }) {
        this.name = name;
        this.area = area || "Winterfell";
        this.safe = false;
    }

    sayHouseWords() {
        if (this.name === "Arya") {
            return `The North Remembers`;
        } else {
            return 'Winter is Coming';
        }
    }

    callDirewolf(name, location) {
        var direwolf = new Direwolf(name, this.area);
        direwolf.protect(this);
        return direwolf;
    }
}

module.exports = Stark;