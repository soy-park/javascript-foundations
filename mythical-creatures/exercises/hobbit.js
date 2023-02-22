class Hobbit {
    constructor({ name }) {
        this.name = name;
        this.age = 0;
        this.adult = false;
        this.old = false;
        this.hasRing = true;
    }

    celebrateBirthday() {
        this.age += 1;
        if (this.age === 33) {
            this.adult = true;
        } else if (this.age === 101) {
            this.old = true;
        }
    }

    getRing() {
        if (this.name === "Frodo") {
            return `Here is the ring!`;
        } else {
            this.hasRing = false;
            return `You can\'t have it!`;
        }
    }
}

module.exports = Hobbit;