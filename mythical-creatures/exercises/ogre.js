class Ogre {
    constructor({ name, abode }) {
        this.name = name;
        this.home = abode || "Swamp";
        this.swings = 0;
    }

    encounter(humanInstance) {
        humanInstance.encounterCounter += 1;
        if (humanInstance.encounterCounter === 3) {
            this.swings = 1;
        } else if (humanInstance.encounterCounter === 6) {
            this.swings = 2
            humanInstance.knockedOut = true;
        }

    }

    swingAt(humanInstance) {
        this.swings += 1;
    }

    apologize(humanInstance) {
        humanInstance.knockedOut = false;
    }
}

module.exports = Ogre;