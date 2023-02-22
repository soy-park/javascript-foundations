class Centaur {
    constructor({ name, type }) {
        this.name = name;
        this.breed = type;
        this.cranky = false;
        this.standing = true;
        this.layingDown = false;
        this.counter = 0;
    }

    shootBow() {
        this.counter += 1;
        if (this.counter === 1 && this.layingDown === false) {
            this.cranky = true;
        } else if (this.counter === 2 && this.layingDown === false) {
            this.cranky = true;
        } else if (this.cranky === true || this.layingDown === true || this.standing === false) {
            return `NO!`;
        }
        return `Twang!!!`; 
        }   

    run() {
        this.counter += 1;
        if (this.counter === 1 && this.layingDown === false) {
            this.cranky = true;
        } else if (this.counter === 2 && this.layingDown === false) {
            this.cranky = true;
        } else if (this.cranky === true || this.layingDown === true || this.standing === false) {
            return "NO!";
        }
        return `Clop clop clop clop!!!`;
    }   

    sleep() {
        if (this.standing = false || this.layingDown === true) {
            this.cranky = false;
            return "ZZZZ";
        } else if (this.standing === true || this.layingDown === false) {
            return "NO!";
        }
    }

    layDown() {
        this.standing = false;
        this.layingDown = true;
    }

    standUp() {
        this.standing = true;
        this.layingDown = false;
    }

    drinkPotion() {
        this.cranky = false;
        if (this.standing === false || this.layingDown === true) {
            return `Not while I\'m laying down!`;
        }
    }
}

module.exports = Centaur;