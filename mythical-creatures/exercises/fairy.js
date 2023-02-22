class Fairy {
    constructor(name) {
        this.name = name;
        this.dust = 10;
        this.clothes = {dresses: ["Iris"]};
        this.disposition = "Good natured";
        this.humanWards = [];
        this.counter = 0;
    }

    receiveBelief() {
        this.dust += 1;
    }

    believe() {
        this.dust += 10;
    }

    makeDresses(array) {
        this.clothes.dresses = this.clothes.dresses.concat(array);
        return this.clothes.dresses;
    }

    becomeProvoked() {
        this.disposition = "Vengeful";
    }

    replaceInfant(infantObject) {
        this.counter += 1;
        infantObject.disposition = "Malicious";
        this.humanWards.push(infantObject);
        if (this.counter === 3) {
            this.disposition = "Good natured";
        }
        return infantObject;
    }
}

module.exports = Fairy;