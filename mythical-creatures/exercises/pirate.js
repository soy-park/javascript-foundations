class Pirate {
    constructor(name, job) {
        this.name = name;
        this.job = job || "scallywag";
        this.cursed = false;
        this.booty = 0;
    }

    robShip() {
        this.booty += 100;
        if (this.booty < 600) {
            return `YAARRR!`;
        } else if (this.booty > 500) {
            this.booty = 500;
            this.cursed = true;
            return `ARG! I\'ve been cursed!`;
        }
    }

    liftCurse() {
        if (this.booty === 500) {
            this.booty = 200;
            this.cursed = false;
            return `Your curse has been lifted!`;
        } else if (this.booty < 500) {
            return `You don\'t need to lift a curse!`;
        }
    }
}

module.exports = Pirate;