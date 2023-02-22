class Vampire {
    constructor(name, pet) {
        this.name = name;
        this.pet = pet || "bat";
        this.thirsty = true;
        this.ouncesDrank = 0;
        this.counter = 0;
    }

    drink() {
        this.thirsty = false;
        this.ouncesDrank += 10;
        this.counter += 1;
        if (this.counter > 5) {
            this.ouncesDrank = 50;
            return `I\'m too full to drink anymore!`;
        }
    }
}

module.exports = Vampire; 